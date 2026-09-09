/* ==========================================================================
   Sport- und Golf-Resort Gut Wissmannshof - Gäste-Info Landing Page JS
   Interactive Logic, Mobile Drawer & Startzeit Booking Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initPreselectHandlers();
    initDateDefaults();
    initInquiryForm();
});

/* ==========================================================================
   1. Header Background on Scroll
   ========================================================================== */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '';
        }
    });
}

/* ==========================================================================
   2. Mobile Navigation Toggle with Backdrop
   ========================================================================== */
function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (!toggleBtn || !mainNav) return;

    // Create backdrop element if it doesn't exist
    let backdrop = document.querySelector('.nav-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'nav-backdrop';
        document.body.appendChild(backdrop);
    }

    function toggleMenu(open) {
        const isOpen = open !== undefined ? open : !mainNav.classList.contains('open');
        mainNav.classList.toggle('open', isOpen);
        toggleBtn.classList.toggle('open', isOpen);
        backdrop.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    toggleBtn.addEventListener('click', () => toggleMenu());
    backdrop.addEventListener('click', () => toggleMenu(false));

    // Close nav when clicking any link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('open')) {
            toggleMenu(false);
        }
    });
}

/* ==========================================================================
   3. Preselect Service in Booking Form from Pricing Cards
   ========================================================================== */
function initPreselectHandlers() {
    const selectBox = document.getElementById('gf-type');
    if (!selectBox) return;

    document.querySelectorAll('[data-preselect]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetVal = btn.getAttribute('data-preselect');
            if (targetVal && selectBox) {
                // Find matching option
                for (let i = 0; i < selectBox.options.length; i++) {
                    if (selectBox.options[i].value.toLowerCase().includes(targetVal.toLowerCase()) || 
                        selectBox.options[i].text.toLowerCase().includes(targetVal.toLowerCase())) {
                        selectBox.selectedIndex = i;
                        break;
                    }
                }
            }
        });
    });
}

/* ==========================================================================
   4. Set Min Date on Date Picker
   ========================================================================== */
function initDateDefaults() {
    const dateInput = document.getElementById('gf-date');
    if (!dateInput) return;

    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
}

/* ==========================================================================
   5. Guest Booking & Inquiry Form Submission Handler
   ========================================================================== */
function initInquiryForm() {
    const form = document.getElementById('guest-inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const typeSelect = document.getElementById('gf-type');
        const typeText = typeSelect ? typeSelect.options[typeSelect.selectedIndex].text : 'Startzeit / Greenfee';
        const dateVal = document.getElementById('gf-date').value;
        const timeVal = document.getElementById('gf-time').value.trim() || 'Flexibel';
        const playersVal = document.getElementById('gf-players').value;
        const cartsSelect = document.getElementById('gf-carts');
        const cartsText = cartsSelect ? cartsSelect.options[cartsSelect.selectedIndex].text : 'Kein Cart';
        const name = document.getElementById('gf-name').value.trim();
        const phone = document.getElementById('gf-phone').value.trim();
        const email = document.getElementById('gf-email').value.trim();
        const msg = document.getElementById('gf-msg').value.trim();

        // Build subject line
        const subject = encodeURIComponent(`Gast-Startzeit-Anfrage: ${typeText} (${dateVal}) - ${name}`);

        // Build email body
        const body = 
            `Guten Tag Team Wissmannshof,\n\n` +
            `ich möchte gerne eine Startzeit bzw. ein Greenfee-Angebot auf Gut Wissmannshof anfragen:\n\n` +
            `--------------------------------------------------\n` +
            `ANFRAGE-DETAILS:\n` +
            `Gewähltes Angebot: ${typeText}\n` +
            `Wunschdatum: ${dateVal}\n` +
            `Wunsch-Uhrzeit: ${timeVal}\n` +
            `Anzahl der Spieler: ${playersVal}\n` +
            `E-Cart-Bedarf: ${cartsText}\n` +
            `--------------------------------------------------\n` +
            `KONTAKTDATEN:\n` +
            `Name des Gastes: ${name}\n` +
            `Telefonnummer: ${phone}\n` +
            `E-Mail-Adresse: ${email}\n` +
            `--------------------------------------------------\n\n` +
            `Besondere Wünsche / Nachricht:\n` +
            `${msg ? msg : 'Keine weiteren Anmerkungen.'}\n\n` +
            `Mit freundlichen Grüßen\n` +
            `${name}\n` +
            `(${email} | ${phone})`;

        const mailtoLink = `mailto:info@wissmannshof.de?subject=${subject}&body=${encodeURIComponent(body)}`;

        // Open user's email client
        window.location.href = mailtoLink;

        alert('Vielen Dank für Ihre Anfrage! Ihr E-Mail-Programm wurde mit den vorbereiteten Angaben geöffnet.');
        form.reset();
        initDateDefaults();
    });
}
