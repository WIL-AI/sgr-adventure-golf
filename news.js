/**
 * Gut Wissmannshof - News Frontend Controller
 * Handles article rendering, category filtering, search, reader modal, and language toggle.
 */

(function () {
    'use strict';

    // State
    let currentLang = localStorage.getItem('sgr_lang') || 'de';
    let currentCategory = 'all';
    let currentSearchTerm = '';
    let allNews = [];

    // UI Translations
    const I18N = {
        de: {
            heroBadge: 'Resort Neuigkeiten & Einblicke',
            heroTitle: 'Aktuelles aus dem<br><span class="hero-title-highlight">Gut Wissmannshof</span>',
            heroLead: 'Entdecken Sie die neuesten Nachrichten, Turnier-Highlights, Platz-Updates und exklusive Angebote unseres 27-Loch Golf Resorts.',
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
            heroLead: 'Discover the latest updates, tournament highlights, course renovations, and exclusive offers from our 27-hole golf resort.',
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
        localStorage.setItem('sgr_lang', lang);
        applyLanguage(lang);
        renderNewsGrid();

        // If modal is open, re-render modal
        if (elements.modal && elements.modal.classList.contains('active') && elements.modalShareBtn) {
            const currentArticleId = elements.modalShareBtn.getAttribute('data-article-id');
            const article = NewsRepository.getById(currentArticleId);
            if (article) {
                fillModalContent(article);
            }
        }
    }

    /**
     * Update all static UI elements with active translation
     */
    function applyLanguage(lang) {
        const t = I18N[lang] || I18N.de;

        // Update active class on lang switcher buttons
        if (elements.langBtns) {
            elements.langBtns.forEach(btn => {
                if (btn.getAttribute('data-lang') === lang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        // Translate generic elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        // Search placeholder
        if (elements.searchInput) {
            elements.searchInput.placeholder = t.searchPlaceholder;
        }
    }

    /**
     * Filter & Render News Grid
     */
    function renderNewsGrid() {
        if (!elements.grid) return;

        const t = I18N[currentLang] || I18N.de;

        // Reload data in case it changed in admin
        allNews = NewsRepository.getAll();

        const now = new Date();

        // Helper: Check if article is currently active and publicly visible
        function isArticleActive(item) {
            if (item.status === 'draft') return false;

            // Check Scheduled Release Date / Time
            if (item.publishFrom) {
                const fromDate = new Date(item.publishFrom);
                if (!isNaN(fromDate.getTime()) && now < fromDate) {
                    return false; // Future release
                }
            }

            // Check Expiry Date / Time
            if (item.publishUntil) {
                const untilDate = new Date(item.publishUntil);
                if (!isNaN(untilDate.getTime()) && now > untilDate) {
                    return false; // Expired
                }
            }

            return true;
        }

        // Filter by visibility, category and search
        const filtered = allNews.filter(item => {
            if (!isArticleActive(item)) return false;

            const matchCategory = (currentCategory === 'all' || item.category === currentCategory);
            
            if (!matchCategory) return false;

            if (!currentSearchTerm) return true;

            const title = getLoc(item.title, currentLang).toLowerCase();
            const teaser = getLoc(item.teaser, currentLang).toLowerCase();
            const author = (item.author || '').toLowerCase();

            return title.includes(currentSearchTerm) || 
                   teaser.includes(currentSearchTerm) || 
                   author.includes(currentSearchTerm);
        });

        // Sort articles chronologically (newest date first)
        filtered.sort((a, b) => {
            const timeA = a.date ? new Date(a.date).getTime() : 0;
            const timeB = b.date ? new Date(b.date).getTime() : 0;
            return timeB - timeA;
        });

        if (filtered.length === 0) {
            elements.grid.innerHTML = `
                <div class="news-empty-state">
                    <div class="empty-icon">🔍</div>
                    <h3>${t.noNewsTitle}</h3>
                    <p>${t.noNewsText}</p>
                    <button class="btn-reset-filter" onclick="window.NewsController.resetFilter()">${t.resetFilter}</button>
                </div>
            `;
            return;
        }

        let html = '';

        filtered.forEach((item, index) => {
            const title = getLoc(item.title, currentLang);
            const teaser = getLoc(item.teaser, currentLang);
            const categoryBadge = getLoc(item.categoryLabel, currentLang) || item.category;
            const dateStr = formatDate(item.date, currentLang);
            const isFeatured = item.featured && index === 0 && currentCategory === 'all' && !currentSearchTerm;
            
            const contentText = getLoc(item.content, currentLang);
            const autoReadTime = calculateReadTime((contentText ? contentText + ' ' : '') + teaser, currentLang);
            const readTimeStr = item.readTime ? item.readTime : autoReadTime;

            html += `
                <article class="news-card ${isFeatured ? 'featured' : ''}" data-id="${item.id}" onclick="window.NewsController.openArticle('${item.id}')">
                    <div class="news-card-image-wrap">
                        <img src="${item.image || 'assets/hero_bg.jpg'}" alt="${title}" class="news-card-image" loading="lazy" style="object-position: ${item.cropPosX !== undefined ? item.cropPosX : 50}% ${item.cropPosY !== undefined ? item.cropPosY : 50}%; transform: scale(${item.cropZoom !== undefined ? item.cropZoom : 1}); transform-origin: center center;">
                        <span class="category-badge cat-${item.category}">${categoryBadge}</span>
                        ${isFeatured ? `<span class="featured-badge">${t.featuredBadge}</span>` : ''}
                    </div>
                    <div class="news-card-body">
                        <div class="news-card-meta">
                            <span class="news-date">${dateStr}</span>
                            <span class="news-read-time">${readTimeStr}</span>
                        </div>
                        <h3 class="news-card-title">${title}</h3>
                        <p class="news-card-teaser">${teaser}</p>
                        <div class="news-card-footer">
                            <span class="read-more-link">
                                ${t.readMore} <span class="arrow">→</span>
                            </span>
                            ${item.author ? `<span class="news-author-mini">${item.author}</span>` : ''}
                        </div>
                    </div>
                </article>
            `;
        });

        elements.grid.innerHTML = html;
    }

    /**
     * Open Full Article Reader Modal
     */
    function openArticleModal(article) {
        if (!elements.modal) return;

        fillModalContent(article);

        elements.modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Update URL hash without reload
        history.replaceState(null, null, `#${article.id}`);
    }

    /**
     * Fill modal details from article object
     */
    function fillModalContent(article) {
        const title = getLoc(article.title, currentLang);
        const categoryBadge = getLoc(article.categoryLabel, currentLang) || article.category;
        const dateStr = formatDate(article.date, currentLang);
        const contentHtml = getLoc(article.content, currentLang);
        const t = I18N[currentLang];

        if (elements.modalImage) {
            elements.modalImage.src = article.image || 'assets/hero_bg.jpg';
            const posX = article.cropPosX !== undefined ? article.cropPosX : 50;
            const posY = article.cropPosY !== undefined ? article.cropPosY : 50;
            const zoom = article.cropZoom !== undefined ? article.cropZoom : 1.0;
            elements.modalImage.style.objectPosition = `${posX}% ${posY}%`;
            elements.modalImage.style.transform = `scale(${zoom})`;
            elements.modalImage.style.transformOrigin = 'center center';
        }
        
        const imageCaption = getLoc(article.imageCaption, currentLang);
        if (elements.modalImageCaption) {
            if (imageCaption) {
                elements.modalImageCaption.innerHTML = `<span class="caption-label">Foto:</span> ${imageCaption}`;
                elements.modalImageCaption.style.display = 'flex';
            } else {
                elements.modalImageCaption.style.display = 'none';
            }
        }

        if (elements.modalCategory) {
            elements.modalCategory.textContent = categoryBadge;
            elements.modalCategory.className = `modal-category-badge cat-${article.category}`;
        }
        if (elements.modalDate) elements.modalDate.textContent = dateStr;
        const autoModalReadTime = calculateReadTime((contentHtml ? contentHtml + ' ' : '') + getLoc(article.teaser, currentLang), currentLang);
        if (elements.modalReadTime) elements.modalReadTime.textContent = article.readTime || autoModalReadTime;
        if (elements.modalTitle) elements.modalTitle.textContent = title;
        if (elements.modalAuthor) elements.modalAuthor.textContent = article.author ? `Verfasser: ${article.author}` : '';
        if (elements.modalContent) elements.modalContent.innerHTML = formatArticleContent(contentHtml);
        if (elements.modalShareBtn) elements.modalShareBtn.setAttribute('data-article-id', article.id);
    }

    /**
     * Close modal
     */
    function closeModal() {
        if (!elements.modal) return;
        elements.modal.classList.remove('active');
        document.body.classList.remove('modal-open');

        // Clear hash from URL cleanly
        if (window.location.hash) {
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }
    }

    /**
     * Reset search & category filters
     */
    function resetFilter() {
        currentCategory = 'all';
        currentSearchTerm = '';
        if (elements.searchInput) elements.searchInput.value = '';
        if (elements.filterPills) {
            elements.filterPills.forEach(p => {
                if (p.getAttribute('data-category') === 'all') {
                    p.classList.add('active');
                } else {
                    p.classList.remove('active');
                }
            });
        }
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
