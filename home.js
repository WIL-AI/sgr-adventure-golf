/**
 * Sport- und Golf-Resort Gut Wissmannshof - Homepage Scripts
 */

(function () {
    'use strict';

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close when clicking nav link
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // Image Slider
    const slides = document.querySelectorAll('.golf-slide-item');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    let currentSlide = 0;
    let slideInterval = null;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    if (slides.length > 0) {
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoplay();
            });
        }

        function startAutoplay() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoplay() {
            clearInterval(slideInterval);
            startAutoplay();
        }

        startAutoplay();
    }

    // Contact Form Handling
    const contactForm = document.getElementById('home-contact-form');
    const contactSuccess = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const msg = document.getElementById('contact-msg').value.trim();

            if (!name || !email || !msg) {
                alert('Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus.');
                return;
            }

            if (contactSuccess) {
                contactSuccess.style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    }
})();
