/**
 * Gut Wissmannshof - Karriere & Jobs Application Controller
 */

(function () {
    'use strict';

    const state = {
        lang: localStorage.getItem('sgr_career_lang') || 'de'
    };

    // DOM Elements
    const elements = {
        jobsContainer: document.getElementById('jobs-container'),
        applicantJobSelect: document.getElementById('applicant-job'),
        careerForm: document.getElementById('career-apply-form'),
        formSuccessAlert: document.getElementById('form-success-alert'),
        fileInput: document.getElementById('applicant-file'),
        fileChosenName: document.getElementById('file-chosen-name'),
        fileDropzone: document.getElementById('file-dropzone-box'),
        langButtons: document.querySelectorAll('.lang-btn'),
        heroLeadText: document.getElementById('hero-lead-text'),
        applyNoteText: document.getElementById('apply-note-text'),
        heroHeading: document.getElementById('hero-heading')
    };

    // Initialize
    function init() {
        renderJobs();
        setupEventListeners();
        applyLanguage(state.lang);
    }

    // Render the 3 exact job postings
    function renderJobs() {
        if (!elements.jobsContainer || !CAREER_DATA.jobs) return;
        const isDe = state.lang === 'de';
        const dict = CAREER_DATA.i18n[state.lang];

        elements.jobsContainer.innerHTML = CAREER_DATA.jobs.map(job => {
            const title = isDe ? job.title_de : job.title_en;
            const subtitle = isDe ? job.subtitle_de : job.subtitle_en;
            const empType = isDe ? job.employment_type_de : job.employment_type_en;
            const p1 = isDe ? job.text_p1_de : job.text_p1_en;
            const p2 = isDe ? job.text_p2_de : job.text_p2_en;
            const mitbringen = isDe ? job.mitbringen_de : job.mitbringen_en;
            const erwartet = isDe ? job.erwartet_de : job.erwartet_en;
            const conclusion = isDe ? job.conclusion_de : job.conclusion_en;

            return `
                <article class="job-detail-card" id="${job.id}">
                    <div class="job-detail-grid">
                        <div class="job-image-column">
                            <img src="${job.image}" alt="${title}" class="job-featured-image" loading="lazy">
                        </div>

                        <div class="job-content-column">
                            <div class="job-header-meta">
                                <h2 class="job-heading-title">${title}</h2>
                                <div class="job-badges-line">
                                    <span class="job-badge-sub">${subtitle}</span>
                                    ${empType ? `<span class="job-badge-type">${empType}</span>` : ''}
                                </div>
                            </div>

                            <div class="job-text-body">
                                <p class="job-prose">${p1}</p>
                                <p class="job-prose">${p2}</p>

                                <div class="job-criteria-block">
                                    <h4 class="criteria-title">${dict.mitbringenHeading}</h4>
                                    <p class="criteria-text">${mitbringen}</p>
                                </div>

                                <div class="job-criteria-block">
                                    <h4 class="criteria-title">${dict.erwartetHeading}</h4>
                                    <p class="criteria-text">${erwartet}</p>
                                </div>

                                <p class="job-conclusion">${conclusion}</p>
                            </div>

                            <div class="job-action-wrap">
                                <button class="btn-job-apply" onclick="window.CareerApp.applyForJob('${job.id}')">
                                    ${dict.directApplyBtn} →
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    // Scroll to Apply section and prefill job
    function applyForJob(jobId) {
        if (elements.applicantJobSelect) {
            elements.applicantJobSelect.value = jobId;
        }
        const applySection = document.getElementById('bewerben');
        if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const nameInput = document.getElementById('applicant-name');
                if (nameInput) nameInput.focus();
            }, 500);
        }
    }

    // Switch Language
    function applyLanguage(lang) {
        state.lang = lang;
        localStorage.setItem('sgr_career_lang', lang);

        const dict = CAREER_DATA.i18n[lang];
        if (!dict) return;

        document.documentElement.lang = lang;

        // Update active class on language buttons
        elements.langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Translate text elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });

        // Update intro & contact notes
        if (elements.heroHeading && CAREER_DATA.intro) {
            elements.heroHeading.innerHTML = lang === 'de' ? CAREER_DATA.intro.title_de : CAREER_DATA.intro.title_en;
        }
        if (elements.heroLeadText && CAREER_DATA.intro) {
            elements.heroLeadText.innerHTML = lang === 'de' ? CAREER_DATA.intro.lead_de : CAREER_DATA.intro.lead_en;
        }
        if (elements.applyNoteText && CAREER_DATA.contact) {
            elements.applyNoteText.textContent = lang === 'de' ? CAREER_DATA.contact.note_de : CAREER_DATA.contact.note_en;
        }

        // Re-render the jobs list
        renderJobs();
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Language toggle
        elements.langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                applyLanguage(btn.dataset.lang);
            });
        });

        // File dropzone
        if (elements.fileInput) {
            elements.fileInput.addEventListener('change', e => {
                if (e.target.files && e.target.files.length > 0) {
                    elements.fileChosenName.textContent = `Ausgewählt: ${e.target.files[0].name} (${(e.target.files[0].size / 1024 / 1024).toFixed(2)} MB)`;
                } else {
                    elements.fileChosenName.textContent = '';
                }
            });
        }

        // Form Submit
        if (elements.careerForm) {
            elements.careerForm.addEventListener('submit', e => {
                e.preventDefault();

                const name = document.getElementById('applicant-name').value.trim();
                const email = document.getElementById('applicant-email').value.trim();
                const phone = document.getElementById('applicant-phone').value.trim();
                const job = document.getElementById('applicant-job').value;
                const privacy = document.getElementById('applicant-privacy').checked;

                if (!name || !email || !phone || !job || !privacy) {
                    alert(state.lang === 'de' ? 'Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus und bestätigen Sie die Datenschutzerklärung.' : 'Please fill in all mandatory fields (*) and accept the privacy terms.');
                    return;
                }

                // Simulate successful submission
                elements.formSuccessAlert.style.display = 'block';
                elements.careerForm.reset();
                if (elements.fileChosenName) elements.fileChosenName.textContent = '';

                setTimeout(() => {
                    elements.formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            });
        }
    }

    // Public API
    window.CareerApp = {
        applyForJob
    };

    // Auto init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
