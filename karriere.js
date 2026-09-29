/**
 * Gut Wissmannshof - Karriere & Jobs Application Controller
 */

(function () {
    'use strict';

    const state = {
        lang: localStorage.getItem('sgr_career_lang') || 'de',
        activeDept: 'all',
        searchQuery: '',
        activeJobModal: null
    };

    // DOM Elements
    const elements = {
        benefitsGrid: document.getElementById('benefits-grid'),
        filterPills: document.getElementById('filter-pills'),
        jobsGrid: document.getElementById('jobs-grid'),
        jobsSearchInput: document.getElementById('jobs-search-input'),
        jobsCountNum: document.getElementById('jobs-count-num'),
        jobsCountText: document.getElementById('jobs-count-text'),
        applicantJobSelect: document.getElementById('applicant-job'),
        careerForm: document.getElementById('career-apply-form'),
        formSuccessAlert: document.getElementById('form-success-alert'),
        fileInput: document.getElementById('applicant-file'),
        fileChosenName: document.getElementById('file-chosen-name'),
        fileDropzone: document.getElementById('file-dropzone-box'),
        langButtons: document.querySelectorAll('.lang-btn'),

        // Modal Elements
        jobModal: document.getElementById('job-modal'),
        jobModalBackdrop: document.getElementById('job-modal-backdrop'),
        jobModalClose: document.getElementById('job-modal-close'),
        modalImg: document.getElementById('modal-img'),
        modalDept: document.getElementById('modal-dept'),
        modalType: document.getElementById('modal-type'),
        modalDate: document.getElementById('modal-date'),
        modalTitle: document.getElementById('modal-title'),
        modalLead: document.getElementById('modal-lead'),
        modalTasksList: document.getElementById('modal-tasks-list'),
        modalReqList: document.getElementById('modal-req-list'),
        modalBenefitsList: document.getElementById('modal-benefits-list'),
        modalApplyBtn: document.getElementById('modal-apply-btn')
    };

    // Initialize application
    function init() {
        renderBenefits();
        renderDepartmentFilters();
        populateJobSelectOptions();
        renderJobs();
        setupEventListeners();
        applyLanguage(state.lang);
    }

    // Render Benefits Cards
    function renderBenefits() {
        if (!elements.benefitsGrid || !CAREER_DATA.benefits) return;
        const isDe = state.lang === 'de';

        elements.benefitsGrid.innerHTML = CAREER_DATA.benefits.map(b => `
            <div class="benefit-card">
                <div class="benefit-icon-wrapper">
                    ${b.icon}
                </div>
                <h3>${isDe ? b.title_de : b.title_en}</h3>
                <p>${isDe ? b.desc_de : b.desc_en}</p>
            </div>
        `).join('');
    }

    // Render Department Filter Pills
    function renderDepartmentFilters() {
        if (!elements.filterPills || !CAREER_DATA.departments) return;
        const isDe = state.lang === 'de';

        elements.filterPills.innerHTML = CAREER_DATA.departments.map(dept => `
            <button class="filter-pill ${dept.id === state.activeDept ? 'active' : ''}" 
                    data-dept="${dept.id}">
                ${isDe ? dept.label_de : dept.label_en}
            </button>
        `).join('');
    }

    // Populate Job Options in Application Form
    function populateJobSelectOptions() {
        if (!elements.applicantJobSelect || !CAREER_DATA.jobs) return;
        const isDe = state.lang === 'de';

        let html = `<option value="">${isDe ? '-- Bitte Position auswählen --' : '-- Please choose a position --'}</option>`;
        
        CAREER_DATA.jobs.forEach(job => {
            html += `<option value="${job.id}">${isDe ? job.title_de : job.title_en}</option>`;
        });

        html += `<option value="initiativ">${isDe ? '✨ Initiativbewerbung (Alle Bereiche)' : '✨ Open Application (All Departments)'}</option>`;
        elements.applicantJobSelect.innerHTML = html;
    }

    // Filter and Search Jobs
    function getFilteredJobs() {
        if (!CAREER_DATA.jobs) return [];
        const query = state.searchQuery.trim().toLowerCase();
        const isDe = state.lang === 'de';

        return CAREER_DATA.jobs.filter(job => {
            const matchesDept = state.activeDept === 'all' || job.dept === state.activeDept;
            if (!matchesDept) return false;

            if (!query) return true;

            const title = (isDe ? job.title_de : job.title_en).toLowerCase();
            const summary = (isDe ? job.summary_de : job.summary_en).toLowerCase();
            const dept = (isDe ? job.dept_name_de : job.dept_name_en).toLowerCase();
            const tasks = (isDe ? job.tasks_de : job.tasks_en).join(' ').toLowerCase();
            const reqs = (isDe ? job.requirements_de : job.requirements_en).join(' ').toLowerCase();

            return title.includes(query) || summary.includes(query) || dept.includes(query) || tasks.includes(query) || reqs.includes(query);
        });
    }

    // Render Job Cards
    function renderJobs() {
        if (!elements.jobsGrid) return;
        const filtered = getFilteredJobs();
        const isDe = state.lang === 'de';
        const dict = CAREER_DATA.i18n[state.lang];

        if (elements.jobsCountNum) elements.jobsCountNum.textContent = filtered.length;
        if (elements.jobsCountText) elements.jobsCountText.textContent = isDe ? 'Stellen gefunden' : 'positions available';

        if (filtered.length === 0) {
            elements.jobsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: var(--radius-lg); border: 1px solid var(--color-card-border);">
                    <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
                    <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--color-primary); margin-bottom: 8px;">
                        ${isDe ? 'Keine passenden Stellen gefunden' : 'No matching positions found'}
                    </h3>
                    <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 20px;">
                        ${isDe ? 'Versuchen Sie einen anderen Suchbegriff oder bewerben Sie sich einfach initiativ!' : 'Try another keyword or send us an open application!'}
                    </p>
                    <button onclick="window.CareerApp.resetFilters()" style="padding: 10px 24px; border-radius: var(--radius-pill); background: var(--color-primary); color: #fff; border: none; cursor: pointer; font-weight: 700;">
                        ${isDe ? 'Filter zurücksetzen' : 'Reset Filters'}
                    </button>
                </div>
            `;
            return;
        }

        elements.jobsGrid.innerHTML = filtered.map(job => {
            const title = isDe ? job.title_de : job.title_en;
            const deptName = isDe ? job.dept_name_de : job.dept_name_en;
            const empType = isDe ? job.employment_type_de : job.employment_type_en;
            const entryDate = isDe ? job.entry_date_de : job.entry_date_en;
            const summary = isDe ? job.summary_de : job.summary_en;

            return `
                <article class="job-card" data-job-id="${job.id}">
                    <div class="job-card-image-wrap">
                        <img src="${job.image}" alt="${title}" class="job-card-image" loading="lazy">
                        <span class="job-card-badge-dept">${deptName}</span>
                        <span class="job-card-badge-type">${empType}</span>
                    </div>

                    <div class="job-card-body">
                        <h3 class="job-card-title">${title}</h3>
                        <p class="job-card-summary">${summary}</p>

                        <div class="job-card-highlights">
                            <span class="job-tag">📅 ${entryDate}</span>
                            <span class="job-tag">⛳ 27-Loch Resort</span>
                            <span class="job-tag">🏡 Unterkunft mgl.</span>
                        </div>

                        <div class="job-card-footer">
                            <button class="btn-card-details" onclick="window.CareerApp.openModal('${job.id}')">
                                ${dict.viewDetailsBtn}
                            </button>
                            <button class="btn-card-apply" onclick="window.CareerApp.applyForJob('${job.id}')">
                                ${dict.applyNowBtn}
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    // Open Job Details Modal
    function openModal(jobId) {
        const job = CAREER_DATA.jobs.find(j => j.id === jobId);
        if (!job) return;

        state.activeJobModal = job;
        const isDe = state.lang === 'de';

        elements.modalImg.src = job.image;
        elements.modalImg.alt = isDe ? job.title_de : job.title_en;
        elements.modalDept.textContent = isDe ? job.dept_name_de : job.dept_name_en;
        elements.modalType.textContent = isDe ? job.employment_type_de : job.employment_type_en;
        elements.modalDate.textContent = isDe ? `Eintritt: ${job.entry_date_de}` : `Start: ${job.entry_date_en}`;
        elements.modalTitle.textContent = isDe ? job.title_de : job.title_en;
        elements.modalLead.textContent = isDe ? job.summary_de : job.summary_en;

        const tasks = isDe ? job.tasks_de : job.tasks_en;
        elements.modalTasksList.innerHTML = tasks.map(t => `<li>${t}</li>`).join('');

        const reqs = isDe ? job.requirements_de : job.requirements_en;
        elements.modalReqList.innerHTML = reqs.map(r => `<li>${r}</li>`).join('');

        const benefits = isDe ? job.benefits_de : job.benefits_en;
        elements.modalBenefitsList.innerHTML = benefits.map(b => `<li>${b}</li>`).join('');

        elements.modalApplyBtn.setAttribute('data-job-id', job.id);

        elements.jobModalBackdrop.classList.add('open');
        elements.jobModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // Close Job Details Modal
    function closeModal() {
        elements.jobModalBackdrop.classList.remove('open');
        elements.jobModal.classList.remove('open');
        document.body.style.overflow = '';
        state.activeJobModal = null;
    }

    // Quick Apply for a specific Job
    function applyForJob(jobId) {
        closeModal();
        if (elements.applicantJobSelect) {
            elements.applicantJobSelect.value = jobId;
        }
        const applySection = document.getElementById('bewerben');
        if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const nameInput = document.getElementById('applicant-name');
                if (nameInput) nameInput.focus();
            }, 600);
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

        // Translate placeholder elements
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });

        // Re-render components with new language strings
        renderBenefits();
        renderDepartmentFilters();
        populateJobSelectOptions();
        renderJobs();

        if (state.activeJobModal) {
            openModal(state.activeJobModal.id);
        }
    }

    // Event Listeners
    function setupEventListeners() {
        // Department filter clicks
        if (elements.filterPills) {
            elements.filterPills.addEventListener('click', e => {
                const btn = e.target.closest('.filter-pill');
                if (!btn) return;
                state.activeDept = btn.dataset.dept;
                renderDepartmentFilters();
                renderJobs();
            });
        }

        // Search input
        if (elements.jobsSearchInput) {
            elements.jobsSearchInput.addEventListener('input', e => {
                state.searchQuery = e.target.value;
                renderJobs();
            });
        }

        // Language toggle
        elements.langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                applyLanguage(btn.dataset.lang);
            });
        });

        // Modal Close handlers
        if (elements.jobModalClose) elements.jobModalClose.addEventListener('click', closeModal);
        if (elements.jobModalBackdrop) elements.jobModalBackdrop.addEventListener('click', closeModal);
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape' && elements.jobModal.classList.contains('open')) {
                closeModal();
            }
        });

        // Modal Apply Button
        if (elements.modalApplyBtn) {
            elements.modalApplyBtn.addEventListener('click', () => {
                const jobId = elements.modalApplyBtn.getAttribute('data-job-id');
                applyForJob(jobId);
            });
        }

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
                elements.fileChosenName.textContent = '';

                setTimeout(() => {
                    elements.formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            });
        }
    }

    // Public API on window
    window.CareerApp = {
        openModal,
        closeModal,
        applyForJob,
        resetFilters: function () {
            state.activeDept = 'all';
            state.searchQuery = '';
            if (elements.jobsSearchInput) elements.jobsSearchInput.value = '';
            renderDepartmentFilters();
            renderJobs();
        }
    };

    // Auto init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
