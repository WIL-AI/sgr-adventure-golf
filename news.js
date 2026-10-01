/**
 * Gut Wissmannshof - News Frontend Controller
 * Handles article rendering, category filtering, search, reader modal, and language toggle.
 */

(function () {
    'use strict';

    // State
    const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
let currentLang = (urlLang === 'en' || urlLang === 'de') ? urlLang : (localStorage.getItem('sgr_lang') || 'de');
if (currentLang !== 'en' && currentLang !== 'de') currentLang = 'de';
    let currentCategory = 'all';
    let currentSearchTerm = '';
    let allNews = [];

    // UI Translations
    const I18N = {
        de: {
            heroBadge: 'Resort Neuigkeiten & Einblicke',
            heroTitle: 'Aktuelles aus dem<br><span class="hero-title-highlight">Gut Wissmannshof</span>',
            heroLead: 'Entdecken Sie die neuesten Nachrichten, Turnier-Highlights, Platz-Updates und exklusive Angebote unseres Golf Resorts.',
            allCategories: 'Alle',
            catTurniere: 'Turniere & Events',
            catPlatz: 'Platz & Natur',
            catResort: 'Neues aus dem Golfresort',
            catGolfschule: 'Golfschule',
            catHotelGastro: 'Hotel & Gastronomie',
            catAngebote: 'Angebote & Training',
            searchPlaceholder: 'Nachrichten durchsuchen…',
            readMore: 'Weiterlesen',
            featuredBadge: 'Top-Meldung',
            minRead: 'Min. Lesezeit',
            noNewsTitle: 'Keine Neuigkeiten gefunden',
            noNewsText: 'Zu Ihren Suchkriterien wurden leider keine passenden Beiträge gefunden.',
            resetFilter: 'Filter zurücksetzen',
            closeModal: 'Schließen',
            shareArticle: 'Artikel teilen',
            copiedNotification: 'Link in die Zwischenablage kopiert!',
            backToOverview: '← Zurück zur Übersicht'
        },
        en: {
            heroBadge: 'Resort News & Insights',
            heroTitle: 'Latest News from<br><span class="hero-title-highlight">Gut Wissmannshof</span>',
            heroLead: 'Discover the latest updates, tournament highlights, course updates, and exclusive offers from our golf resort.',
            allCategories: 'All',
            catTurniere: 'Tournaments & Events',
            catPlatz: 'Course & Nature',
            catResort: 'Golfresort News',
            catGolfschule: 'Golf Academy',
            catHotelGastro: 'Hotel & Gastronomy',
            catAngebote: 'Offers & Training',
            searchPlaceholder: 'Search news…',
            readMore: 'Read Article',
            featuredBadge: 'Featured Story',
            minRead: 'min read',
            noNewsTitle: 'No news found',
            noNewsText: 'We could not find any articles matching your search criteria.',
            resetFilter: 'Reset filters',
            closeModal: 'Close',
            shareArticle: 'Share Article',
            copiedNotification: 'Link copied to clipboard!',
            backToOverview: '← Back to Overview'
        }
    };

    /**
     * Format Date string (YYYY-MM-DD to "18. Okt 2026" or "Oct 18, 2026")
     */
    function formatDate(dateStr, lang) {
        if (!dateStr) return '';
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return dateStr;
            return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'de-DE', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch (e) {
            return dateStr;
        }
    }

    /**
     * Helper to get localized string from string or object {de, en}
     */
    function getLoc(obj, lang) {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[lang] || obj['de'] || obj['en'] || '';
    }

    /**
     * Formats raw text or HTML with proper paragraph tags and markdown heading support
     */
    function formatArticleContent(htmlOrText) {
        if (!htmlOrText) return '';
        let text = htmlOrText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

        // Split on 2 or more newlines into logical paragraph blocks
        const blocks = text.split(/\n\s*\n+/);

        const formattedBlocks = blocks.map(block => {
            block = block.trim();
            if (!block) return '';

            // If it already starts with an HTML block-level tag, keep as is
            if (/^<(p|h[1-6]|figure|blockquote|ul|ol|hr|div|table|section|header|footer)[\s>]/i.test(block)) {
                return block;
            }

            // Markdown headings
            if (/^###\s+(.+)$/m.test(block)) {
                block = block.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
            }
            if (/^##\s+(.+)$/m.test(block)) {
                block = block.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
            }

            // If not wrapped in a block element, wrap in <p>
            if (!/^<(p|h[1-6]|figure|blockquote|ul|ol|hr|div)/i.test(block)) {
                const inner = block.replace(/\n/g, '<br>');
                return `<p>${inner}</p>`;
            }

            return block;
        });

        return formattedBlocks.filter(Boolean).join('\n\n');
    }

    /**
     * Automatically calculates estimated read time based on word count (~190 words/min)
     */
    function calculateReadTime(textOrHtml, lang) {
        const t = I18N[lang] || I18N.de;
        if (!textOrHtml) return `2 ${t.minRead}`;
        const cleanText = String(textOrHtml)
            .replace(/<[^>]*>/g, ' ')
            .replace(/\[(FOTO|BILD)[^\]]*\]/gi, ' ')
            .replace(/[#*_~`]/g, ' ')
            .trim();
        const words = cleanText.split(/\s+/).filter(w => w.length > 0).length;
        const minutes = Math.max(1, Math.ceil(words / 190));
        return `${minutes} ${t.minRead}`;
    }

    /**
     * Initialize News application
     */
    async function init() {
        if (typeof NewsRepository === 'undefined') {
            console.error('NewsRepository not found. Please make sure news-data.js is loaded before news.js.');
            return;
        }

        allNews = NewsRepository.getAll();

        setupDOMReferences();
        setupEventListeners();
        applyLanguage(currentLang);
        renderNewsGrid();

        // Check if URL has #news-ID hash to open directly
        handleUrlHash();

        // Seamless server-side sync in background
        try {
            const syncedNews = await NewsRepository.syncFromServer();
            if (syncedNews && Array.isArray(syncedNews) && syncedNews.length > 0) {
                allNews = syncedNews;
                renderNewsGrid();
                handleUrlHash();
            }
        } catch (e) {
            console.log('Using local news cache.');
        }
    }

    // DOM Elements
    let elements = {};

    function setupDOMReferences() {
        elements = {
            grid: document.getElementById('news-grid'),
            searchInput: document.getElementById('news-search-input'),
            filterPills: document.querySelectorAll('.filter-pill'),
            modal: document.getElementById('article-modal'),
            modalBackdrop: document.getElementById('article-modal-backdrop'),
            modalClose: document.getElementById('article-modal-close'),
            modalImage: document.getElementById('modal-image'),
            modalImageCaption: document.getElementById('modal-image-caption'),
            modalCategory: document.getElementById('modal-category'),
            modalDate: document.getElementById('modal-date'),
            modalReadTime: document.getElementById('modal-read-time'),
            modalTitle: document.getElementById('modal-title'),
            modalAuthor: document.getElementById('modal-author'),
            modalContent: document.getElementById('modal-content'),
            modalShareBtn: document.getElementById('modal-share-btn'),
            langBtns: document.querySelectorAll('.lang-btn')
        };
    }

    function setupEventListeners() {
        // Search Input
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', function (e) {
                currentSearchTerm = e.target.value.toLowerCase().trim();
                renderNewsGrid();
            });
        }

        // Filter Pills
        if (elements.filterPills) {
            elements.filterPills.forEach(pill => {
                pill.addEventListener('click', function () {
                    elements.filterPills.forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                    currentCategory = this.getAttribute('data-category') || 'all';
                    renderNewsGrid();
                });
            });
        }

        // Language Switcher Buttons
        if (elements.langBtns) {
            elements.langBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    const lang = this.getAttribute('data-lang');
                    if (lang && lang !== currentLang) {
                        setLanguage(lang);
                    }
                });
            });
        }

        // Modal Close
        if (elements.modalClose) {
            elements.modalClose.addEventListener('click', closeModal);
        }
        if (elements.modalBackdrop) {
            elements.modalBackdrop.addEventListener('click', closeModal);
        }

        // Modal Share
        if (elements.modalShareBtn) {
            elements.modalShareBtn.addEventListener('click', function () {
                const articleId = this.getAttribute('data-article-id');
                const shareUrl = `${window.location.origin}${window.location.pathname}#${articleId}`;
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(shareUrl).then(() => {
                        const originalText = elements.modalShareBtn.innerHTML;
                        const t = I18N[currentLang];
                        elements.modalShareBtn.innerHTML = `✓ ${t.copiedNotification}`;
                        setTimeout(() => {
                            elements.modalShareBtn.innerHTML = originalText;
                        }, 2500);
                    });
                }
            });
        }

        // Keyboard navigation (Escape closes modal)
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && elements.modal && elements.modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Listen for browser back/forward with hash
        window.addEventListener('hashchange', handleUrlHash);
    }

    /**
     * Handle direct URL linking via hash (e.g. #news-001)
     */
    function handleUrlHash() {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const article = NewsRepository.getById(hash);
            if (article) {
                openArticleModal(article);
            }
        }
    }

    /**
     * Switch language & persist
     */
    function setLanguage(lang) {
	currentLang = lang;
	try {
		localStorage.setItem('sgr_lang', lang);
		const url = new URL(window.location.href);
		if (url.searchParams.has('lang')) {
			url.searchParams.set('lang', lang);
			window.history.replaceState({}, '', url.toString());
		}
	} catch (e) {}
	applyLanguage(lang);
	renderNewsGrid();
}

    // Expose global methods
    window.NewsController = {
        init: init,
        setLanguage: setLanguage,
        openArticle: function (id) {
            const article = NewsRepository.getById(id);
            if (article) openArticleModal(article);
        },
        closeModal: closeModal,
        resetFilter: resetFilter
    };

    // Auto-init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
