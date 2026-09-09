/* ==========================================================================
   Sport- und Golf-Resort Gut Wissmannshof - Mitgliedschaft Landing Page JS
   Interactive Logic, Pricing Toggle, FAQ Accordion & Form Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initPreselectHandlers();
    initFaqAccordion();
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
   2. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (!toggleBtn || !mainNav) return;

    toggleBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });

    // Close nav when clicking any link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
        });
    });
}

/* ==========================================================================
   3. Preselect Category in Contact Form from Pricing Cards
   ========================================================================== */
function initPreselectHandlers() {
    const selectBox = document.getElementById('mgl-type');
    if (!selectBox) return;

    document.querySelectorAll('[data-preselect]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = btn.getAttribute('data-preselect');
            if (category && selectBox) {
                selectBox.value = category;
            }
        });
    });
}

/* ==========================================================================
   5. FAQ Accordion Logic
   ========================================================================== */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!questionBtn || !answer) return;

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close other items for single-open experience
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
            }
        });
    });
}

/* ==========================================================================
   6. Contact / Inquiry Form Submission Handler
   ========================================================================== */
function initInquiryForm() {
    const form = document.getElementById('membership-inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const typeSelect = document.getElementById('mgl-type');
        const typeText = typeSelect ? typeSelect.options[typeSelect.selectedIndex].text : 'Mitgliedschaft';
        const name = document.getElementById('mgl-name').value.trim();
        const phone = document.getElementById('mgl-phone').value.trim();
        const email = document.getElementById('mgl-email').value.trim();
        const expSelect = document.getElementById('mgl-experience');
        const expText = expSelect ? expSelect.options[expSelect.selectedIndex].text : '';
        const msg = document.getElementById('mgl-msg').value.trim();

        // Build subject line
        const subject = encodeURIComponent(`Mitgliedschaftsanfrage: ${typeText} - ${name}`);

        // Build email body
        const body = 
            `Guten Tag Herr Wiegand, guten Tag Team Gut Wissmannshof,\n\n` +
            `ich interessiere mich für eine Mitgliedschaft auf Gut Wissmannshof und bitte um Kontaktaufnahme bzw. die Vereinbarung eines persönlichen Kennenlerntermins.\n\n` +
            `--------------------------------------------------\n` +
            `ANGABEN ZUR ANFRAGE:\n` +
            `Gewählte Kategorie: ${typeText}\n` +
            `Name des Interessenten: ${name}\n` +
            `E-Mail-Adresse: ${email}\n` +
            `Telefonnummer: ${phone ? phone : 'Nicht angegeben'}\n` +
            `Aktueller Golf-Status: ${expText}\n` +
            `--------------------------------------------------\n\n` +
            `Nachricht / Terminwunsch:\n` +
            `${msg ? msg : 'Ich freue mich über Ihre Rückmeldung zur Mitgliedschaft.'}\n\n` +
            `Mit freundlichen Grüßen\n` +
            `${name}\n` +
            `(${email})`;

        const mailtoLink = `mailto:info@wissmannshof.de?subject=${subject}&body=${encodeURIComponent(body)}`;

        // Open user's email client
        window.location.href = mailtoLink;

        alert('Vielen Dank für Ihr Interesse! Ihr E-Mail-Programm wurde mit dem vorgefertigten Anfrage-Entwurf geöffnet.');
        form.reset();
    });
}
