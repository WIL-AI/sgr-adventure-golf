/**
 * Sport- und Golf-Resort Gut Wissmannshof - Homepage Scripts & Bilingual Controller (DE / EN)
 */

(function () {
    'use strict';

    // State
    let currentLang = localStorage.getItem('sgr_lang') || 'de';

    // Translations Dictionary for Homepage
    const I18N_HOME = {
        de: {
            // Top Bar
            topBarCourseStatus: '<span class="badge-live-dot"></span><strong>Platz geöffnet</strong> · Sommergrüns',
            topBarGolfSec: 'Golfsekretariat: <a href="tel:+495543999335">+49 (0) 55 43 / 999 335</a>',
            topBarHotel: 'Hotel &amp; Restaurant: <a href="tel:+4955439992239">+49 (0) 55 43 / 999 22 39</a>',
            topBarPcCad: 'PC CADDIE Startzeiten ↗',
            topBarGuest: 'Gast-Info',
            topBarMember: 'Mitglied werden',

            // Navigation
            navHome: 'HOME',
            navCourse: 'Golf Course',
            navAdvGolf: 'Adventure Golf',
            navMember: 'Mitglied werden',
            navGuest: 'Gast-Info',
            navAcademy: 'Golf Akademie',
            navNews: 'WiHo-News',
            navCareer: 'Karriere',
            navWebcam: 'WEBCAM',
            navBookTeeTime: 'Startzeit buchen',

            // Hero Section
            heroBadge: 'Willkommen im Golfresort',
            heroTitle: '<span class="hero-main-sub">Sport &amp; Golf Resort</span><span class="hero-title-highlight">Gut Wissmannshof</span>',
            heroMemberTitle: 'Mitgliedschaft, wie sie sein sollte.',
            heroMemberText: 'Keine Aufnahmegebühr · Keine Umlagen · Schnuppern statt verpflichten',
            heroMemberLink: 'Jetzt Mitglied werden →',
            heroBtnTee: 'Startzeit reservieren',
            heroBtnGolf: 'Golfplatz &amp; Bahnen',
            heroBtnHotel: 'Hotel &amp; Zimmer buchen ↗',
            heroBtnNews: 'Aktuelles &amp; News',

            // News Ticker
            newsTickerBadge: 'Aktuell',
            newsTickerLabel: 'News aus dem Resort:',
            newsTickerHeadline: '<a href="news.html">Stefan Quirmbach startet als „Signature Pro“ im Gut Wissmannshof</a>',
            newsTickerLink: 'Alle Neuigkeiten &amp; Turniere ansehen →',

            // Welcome Section
            welcomeTag: 'Sport- und Golf-Resort Gut Wissmannshof',
            welcomeTitle: 'Herzlich Willkommen',
            welcomeLead: 'Golf. Hotel. Genuss. An einem Ort.',
            welcomeText: `Manche Orte bieten einen Platz. Wir bieten mehr.<br><br>Das <strong>Sport- und Golf-Resort Gut Wissmannshof</strong> verbindet erstklassigen Golfsport mit echtem Hotelkomfort und einer Gastronomie, die den Abend nach der Runde zu einem eigenen Erlebnis macht. Eingebettet in eine Landschaft, die schon beim Anblick entspannt.<br><br>Wer hier ankommt, merkt schnell: Das ist kein gewöhnlicher Golfclub. Das ist ein Ort, an dem alles zusammenpasst.<br><br>Ob Sie Mitglied sind, als Gast vorbeikommen oder Golf gerade erst für sich entdecken – Sie sind willkommen. Immer. Ohne Vorbedingungen.`,
            welcomeCta: 'Informationen für Gäste →',

            // Status Bar
            shopTitle: 'Öffnungszeiten Shop',
            shopVal: 'täglich 08–18 Uhr',
            trolleyTitle: 'Trolleys',
            trolleyVal: '<span class="status-dot-green"></span> erlaubt',
            cartTitle: 'Carts',
            cartVal: '<span class="status-dot-green"></span> erlaubt',
            courseStatusTitle: 'Platzstatus',
            courseStatusVal: '<span class="status-dot-green"></span> geöffnet',
            calendarTitle: 'Wettspielkalender',
            calendarLink: 'Kalender 2026 ↗',
            restaurantTitle: 'Restaurant',
            restaurantVal: 'Tisch reservieren',
            menuLink: 'Wochenkarte ↗',

            // Quick Services
            quickTag: 'Direkter Service',
            quickTitle: 'Schnellzugriffe',
            quickSubtitle: 'Direkt zum gewünschten Resort-Service',
            quickTeeTitle: 'Startzeit reservieren',
            quickTeeText: 'Reservieren Sie Ihre Abschlagszeit ganz bequem online über PC CADDIE.',
            quickTeeBtn: 'Jetzt reservieren ↗',
            quickIntroTitle: 'Schnupperkurs buchen',
            quickIntroText: 'Entdecken Sie Golf mit unseren PGA-Profis auf erstklassigen Übungsanlagen.',
            quickIntroBtn: 'Mehr erfahren',
            quickLessonTitle: 'Trainerstunde buchen',
            quickLessonText: 'Verbessern Sie Ihr Spiel individuell mit moderner Trainings- und Analysetechnik.',
            quickLessonBtn: 'Mehr erfahren',
            quickMemberTitle: 'Mitglied werden',
            quickMemberText: 'Werden Sie Teil der Wissmannshof-Golffamilie ohne Aufnahmegebühr und Umlagen.',
            quickMemberBtn: 'Mehr erfahren',

            // Course Section & Slider
            courseTag: '18-Loch Resort Course & Canyon Academy Kurs',
            courseTitle: 'Unser Golfplatz',
            courseLead: 'Ein erstklassiger Resort Course, der Golferherzen höher schlagen lässt. Perfekt gepflegt, strategisch anspruchsvoll und landschaftlich beeindruckend.',
            slide1Title: 'Spektakuläre Resort-Bahnen',
            slide1Text: 'Strategisch platzierte Bunker und modellierte Fairways inmitten herrlicher Naturkulisse.',
            slide2Title: 'Wasserhindernisse &amp; Panorama',
            slide2Text: 'Anspruchsvolle Bahnen und kristallklare Seen fügen sich harmonisch in die Landschaft ein.',
            slide3Title: 'Golfen im Einklang mit der Natur',
            slide3Text: 'Ausgezeichnet mit Golf &amp; Natur – ein Paradies für Golfer und Tierwelt.',
            slide4Title: 'Goldene Abendstunden',
            slide4Text: 'Unvergessliche Momente bei Sonnenuntergang direkt auf der Golfanlage.',

            courseHl1Title: '18-Loch Resort Course',
            courseHl1Text: 'Ein anspruchsvolles Layout mit spektakulären Bahnen, die jedem Handicap Freude bereiten.',
            courseHl1Link: 'Zum Platzüberblick →',
            courseHl2Title: 'Putting &amp; Chipping Green',
            courseHl2Text: 'Perfekte Trainingsmöglichkeiten für Ihr kurzes Spiel auf originalgetreuen Grüns.',
            courseHl2Link: 'Übungsanlagen ansehen →',
            courseHl3Title: 'Turniere &amp; Events',
            courseHl3Text: 'Regelmäßige Club-Turniere, hochkarätige Meisterschaften und gesellige After-Work-Runden.',
            courseHl3Link: 'Turniere &amp; News →',

            // Practice Section
            practiceTag: 'Training &amp; Akademie',
            practiceTitle: 'Driving Range &amp; Practice',
            practiceText: 'Unsere moderne Driving Range bietet optimale Bedingungen für Ihr Training. 25 überdachte Abschlagplätze, Zielgrüns auf verschiedenen Distanzen und hochwertige Übungsbälle garantieren effektives Training bei jedem Wetter.',
            practiceItem1: 'Überdachte Abschlagplätze mit Ballautomaten',
            practiceItem2: 'Putting Green mit verschiedenen Breaks',
            practiceItem3: 'Chipping-Bereich mit Bunkern',
            practiceScorecardBtn: 'Scorecard (PDF) ↗',
            practiceHoleByHoleBtn: 'Bahn für Bahn',

            // Hotel & Resort Section
            hotelTag: 'Wohnen &amp; Genießen',
            hotelTitle: 'Resort &amp; Hotel',
            hotelLead: 'Genießen Sie erstklassigen Komfort und Gastfreundschaft in unserem Resort. Perfekt für Golf-Urlaube, Events und erholsame Auszeiten.',
            cardRoomTitle: 'Komfortable Zimmer &amp; Suiten',
            cardRoomText: '57 individuell gestaltete Zimmer &amp; Suiten mit Blick auf den Golfplatz. Jedes Zimmer mit eigenem Charakter – kostenfreies WLAN und Parkplätze inklusive.',
            cardRoomBtnBook: 'Zimmer buchen ↗',
            cardRoomBtnDetails: 'Details',
            cardGastroTitle: 'Gastronomie &amp; Kulinarik',
            cardGastroText: 'Regionale Spezialitäten, saisonale Menüs und erlesene Weine. Herrliche Sonnenterrasse mit 120 Sitzplätzen mit Panoramablick auf das 18. Grün.',
            cardGastroBtnBook: 'Tisch reservieren ↗',
            cardGastroBtnMenu: 'Speisekarte',
            cardAdvTitle: 'Adventure Golf &amp; Familie',
            cardAdvText: '18 spektakuläre Adventure-Golf-Bahnen mit Piratenschiff, Safaripfad und Wasserhindernissen – der Riesenspaß für die ganze Familie und Firmenevents.',
            cardAdvBtn: 'Adventure Golf entdecken',

            // Contact Section
            contactTag: 'Wir sind für Sie da',
            contactTitle: 'Kontakt &amp; Anreise',
            contactLead: 'Haben Sie Fragen oder Wünsche? Kontaktieren Sie uns gerne jederzeit.',
            contactSecTitle: 'Sport- &amp; Golf-Resort Sekretariat',
            contactHotelTitle: 'Hotel &amp; Restaurant',
            contactAcadTitle: 'Golfakademie',
            contactAddressTitle: 'Adresse',
            contactFormHeading: 'Lassen Sie eine Nachricht da!',
            contactFormSub: 'Wir antworten Ihnen schnellstmöglich.',
            formLabelName: 'Ihr Name *',
            formPlaceholderName: 'Vor- und Nachname',
            formLabelEmail: 'Ihre E-Mail-Adresse *',
            formPlaceholderEmail: 'name@beispiel.de',
            formLabelMsg: 'Ihre Nachricht *',
            formPlaceholderMsg: 'Wie können wir Ihnen weiterhelfen?',
            formSubmitBtn: 'Nachricht absenden',
            formSuccessMsg: 'Vielen Dank! Ihre Nachricht wurde an info@wissmannshof.de übermittelt. Wir melden uns schnellstmöglich bei Ihnen.',

            // Footer
            footerSubtext: '18-Loch Resort Course, Canyon Academy Kurs, Adventure Golf &amp; 4-Sterne Golfresort.',
            footerContactHeading: 'Direktkontakt &amp; Anreise',
            footerLegalHeading: 'Rechtliches &amp; Information',
            footerImprint: 'Impressum',
            footerPrivacy: 'Datenschutz',
            footerCareer: 'Karriere im Resort',
            footerCopyright: '&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. Alle Rechte vorbehalten.',
            footerTagline: 'Besser als gut. Ihr Premium-Golf-Erlebnis.'
        },
        en: {
            // Top Bar
            topBarCourseStatus: '<span class="badge-live-dot"></span><strong>Course Open</strong> · Summer Greens',
            topBarGolfSec: 'Golf Office: <a href="tel:+495543999335">+49 (0) 55 43 / 999 335</a>',
            topBarHotel: 'Hotel &amp; Restaurant: <a href="tel:+4955439992239">+49 (0) 55 43 / 999 22 39</a>',
            topBarPcCad: 'PC CADDIE Tee Times ↗',
            topBarGuest: 'Guest Info',
            topBarMember: 'Membership',

            // Navigation
            navHome: 'HOME',
            navCourse: 'Golf Course',
            navAdvGolf: 'Adventure Golf',
            navMember: 'Membership',
            navGuest: 'Guest Info',
            navAcademy: 'Golf Academy',
            navNews: 'WiHo-News',
            navCareer: 'Careers',
            navWebcam: 'WEBCAM',
            navBookTeeTime: 'Book Tee Time',

            // Hero Section
            heroBadge: 'Welcome to the Golf Resort',
            heroTitle: '<span class="hero-main-sub">Sport &amp; Golf Resort</span><span class="hero-title-highlight">Gut Wissmannshof</span>',
            heroMemberTitle: 'Membership as it should be.',
            heroMemberText: 'No entry fee · No assessments · Try before you commit',
            heroMemberLink: 'Become a Member →',
            heroBtnTee: 'Reserve Tee Time',
            heroBtnGolf: 'Golf Course &amp; Holes',
            heroBtnHotel: 'Book Hotel &amp; Rooms ↗',
            heroBtnNews: 'Resort News',

            // News Ticker
            newsTickerBadge: 'Latest',
            newsTickerLabel: 'Resort News:',
            newsTickerHeadline: '<a href="news.html">Stefan Quirmbach joins Gut Wissmannshof as „Signature Pro“</a>',
            newsTickerLink: 'View all news &amp; tournaments →',

            // Welcome Section
            welcomeTag: 'Sport- and Golf Resort Gut Wissmannshof',
            welcomeTitle: 'A Hearty Welcome',
            welcomeLead: 'Golf. Hotel. Fine Dining. All in One Place.',
            welcomeText: `Some places offer a course. We offer more.<br><br>The <strong>Sport- and Golf Resort Gut Wissmannshof</strong> combines world-class golf with authentic hotel hospitality and gastronomy that turns post-round evenings into unforgettable experiences. Set amidst breathtaking nature that relaxes you from the very first view.<br><br>Arriving here, you quickly realize: this is no ordinary golf club. It is a destination where everything harmonizes perfectly.<br><br>Whether you are a member, a visiting guest, or discovering golf for the first time – you are always warmly welcome. Without preconditions.`,
            welcomeCta: 'Information for Guests →',

            // Status Bar
            shopTitle: 'Pro Shop Hours',
            shopVal: 'Daily 08:00–18:00',
            trolleyTitle: 'Trolleys',
            trolleyVal: '<span class="status-dot-green"></span> permitted',
            cartTitle: 'Carts',
            cartVal: '<span class="status-dot-green"></span> permitted',
            courseStatusTitle: 'Course Status',
            courseStatusVal: '<span class="status-dot-green"></span> open',
            calendarTitle: 'Tournament Calendar',
            calendarLink: 'Calendar 2026 ↗',
            restaurantTitle: 'Restaurant',
            restaurantVal: 'Book a Table',
            menuLink: 'Weekly Menu ↗',

            // Quick Services
            quickTag: 'Direct Services',
            quickTitle: 'Quick Access',
            quickSubtitle: 'Direct links to your preferred resort services',
            quickTeeTitle: 'Book Tee Time',
            quickTeeText: 'Reserve your tee time comfortably online via PC CADDIE.',
            quickTeeBtn: 'Book Now ↗',
            quickIntroTitle: 'Introductory Golf Course',
            quickIntroText: 'Discover golf with our PGA professionals on top-tier practice facilities.',
            quickIntroBtn: 'Learn More',
            quickLessonTitle: 'Private Lesson',
            quickLessonText: 'Improve your game with individualized coaching and modern swing analytics.',
            quickLessonBtn: 'Learn More',
            quickMemberTitle: 'Become a Member',
            quickMemberText: 'Join the Wissmannshof golf family without admission fees and assessments.',
            quickMemberBtn: 'Learn More',

            // Course Section & Slider
            courseTag: '18-Hole Resort Course & Canyon Academy Course',
            courseTitle: 'Our Golf Course',
            courseLead: 'A premier resort course designed to inspire players of every handicap. Pristine conditioning, strategic variety, and breathtaking countryside vistas.',
            slide1Title: 'Spectacular Resort Course',
            slide1Text: 'Strategically placed bunkers and undulating fairways framed by majestic nature.',
            slide2Title: 'Water Hazards &amp; Panoramic Views',
            slide2Text: 'Challenging holes and crystal-clear lakes blend seamlessly into the picturesque landscape.',
            slide3Title: 'Golf in Harmony with Nature',
            slide3Text: 'Certified by Golf &amp; Nature – a sanctuary for wildlife and golfers alike.',
            slide4Title: 'Golden Hour Splendor',
            slide4Text: 'Unforgettable moments watching the sunset right across the golf estate.',

            courseHl1Title: '18-Hole Resort Course',
            courseHl1Text: 'A captivating layout featuring signature holes that delight all skill levels.',
            courseHl1Link: 'Explore Course Layout →',
            courseHl2Title: 'Putting &amp; Chipping Greens',
            courseHl2Text: 'First-class training amenities with realistic greens to sharpen your short game.',
            courseHl2Link: 'View Practice Facilities →',
            courseHl3Title: 'Tournaments &amp; Events',
            courseHl3Text: 'Regular club championships, premier charity invitationals, and social sundowner rounds.',
            courseHl3Link: 'Tournaments &amp; News →',

            // Practice Section
            practiceTag: 'Training &amp; Golf Academy',
            practiceTitle: 'Driving Range &amp; Practice',
            practiceText: 'Our state-of-the-art practice facility offers ideal training conditions year-round. 25 covered bays, target greens at varied distances, and premium practice balls ensure maximum progress in any weather.',
            practiceItem1: 'Covered hitting bays with automated ball dispensers',
            practiceItem2: 'Expansive putting green with varied contours',
            practiceItem3: 'Dedicated chipping area with practice bunkers',
            practiceScorecardBtn: 'Scorecard (PDF) ↗',
            practiceHoleByHoleBtn: 'Hole-by-Hole Guide',

            // Hotel & Resort Section
            hotelTag: 'Stay &amp; Indulge',
            hotelTitle: 'Resort &amp; Hotel',
            hotelLead: 'Experience genuine warmth and 4-star comfort. The perfect destination for golf getaways, weddings, and relaxing retreats.',
            cardRoomTitle: 'Comfortable Rooms &amp; Suites',
            cardRoomText: '57 boutique rooms and suites overlooking the fairways. Free high-speed Wi-Fi and ample parking included.',
            cardRoomBtnBook: 'Book a Room ↗',
            cardRoomBtnDetails: 'Details',
            cardGastroTitle: 'Cuisine &amp; Dining',
            cardGastroText: 'Regional culinary highlights, seasonal menus, and select cellar wines. Enjoy our 120-seat sun terrace facing the 18th green.',
            cardGastroBtnBook: 'Reserve Table ↗',
            cardGastroBtnMenu: 'Menu',
            cardAdvTitle: 'Adventure Golf &amp; Family',
            cardAdvText: '18 themed miniature adventure holes featuring pirate ships, safari trails, and water hazards – tremendous fun for all ages.',
            cardAdvBtn: 'Discover Adventure Golf',

            // Contact Section
            contactTag: 'We Are Here for You',
            contactTitle: 'Contact &amp; Location',
            contactLead: 'Have questions or special requests? Feel free to get in touch with us anytime.',
            contactSecTitle: 'Resort &amp; Golf Secretariat',
            contactHotelTitle: 'Hotel &amp; Restaurant',
            contactAcadTitle: 'Golf Academy',
            contactAddressTitle: 'Address',
            contactFormHeading: 'Send us a Message',
            contactFormSub: 'We will respond to your inquiry as quickly as possible.',
            formLabelName: 'Your Name *',
            formPlaceholderName: 'First and Last Name',
            formLabelEmail: 'Your E-Mail Address *',
            formPlaceholderEmail: 'name@example.com',
            formLabelMsg: 'Your Message *',
            formPlaceholderMsg: 'How can we help you?',
            formSubmitBtn: 'Send Message',
            formSuccessMsg: 'Thank you! Your message has been sent to info@wissmannshof.de. We will get back to you as soon as possible.',

            // Footer
            footerSubtext: '18-Hole Resort Course, Canyon Academy Course, Adventure Golf &amp; 4-Star Resort.',
            footerContactHeading: 'Contact &amp; Arrival',
            footerLegalHeading: 'Legal &amp; Information',
            footerImprint: 'Imprint',
            footerPrivacy: 'Privacy Policy',
            footerCareer: 'Careers at Resort',
            footerCopyright: '&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. All rights reserved.',
            footerTagline: 'Better than good. Your premier golf experience.'
        }
    };

    /**
     * Apply active language to all UI elements
     */
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('sgr_lang', lang);
        document.documentElement.lang = lang;

        const t = I18N_HOME[lang] || I18N_HOME.de;

        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Translate text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });

        // Translate input placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.placeholder = t[key];
            }
        });

        // Apply live dynamic status on top of i18n
        if (typeof window.StatusRepository !== 'undefined' && window.StatusRepository.applyToDOM) {
            window.StatusRepository.applyToDOM();
        }
    }

    // Set Language handler
    window.setLanguage = function(lang) {
        applyLanguage(lang);
    };

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
        if (slides.length === 0) return;
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        if (slides.length === 0) return;
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
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const msg = document.getElementById('contact-msg').value.trim();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const origBtnText = submitBtn ? submitBtn.textContent : '';

            if (!name || !email || !msg) {
                alert(currentLang === 'en' ? 'Please fill in all required fields (*).' : 'Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus.');
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Wird gesendet...';
            }

            const subject = `[via Webseite] Kontaktanfrage von ${name}`;
            const bodyText = 
`Hallo Team Wissmannshof,

eine neue Nachricht wurde über das Kontaktformular auf der Startseite von wissmannshof.golf (via Webseite) gesendet:

- Absender: ${name}
- E-Mail: ${email}

Nachricht:
${msg}

====================================================
Hinweis: Gesendet via Webseite (wissmannshof.golf)`;

            let sentViaApi = false;
            try {
                const res = await fetch('api/contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        subject: subject,
                        message: msg,
                        source: 'Startseite Kontaktformular (via Webseite)'
                    })
                });

                if (res.ok) {
                    const json = await res.json();
                    if (json && json.success) {
                        sentViaApi = true;
                    }
                }
            } catch (err) {
                console.log('API contact endpoint not reachable, using direct mailto:', err);
            }

            if (!sentViaApi) {
                // Client-side mailto fallback
                const mailtoUrl = `mailto:info@wissmannshof.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
                window.location.href = mailtoUrl;
            }

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = origBtnText;
            }

            if (contactSuccess) {
                contactSuccess.style.display = 'block';
                contactSuccess.innerHTML = currentLang === 'en' 
                    ? 'Thank you! Your message (via Website) has been successfully transmitted to info@wissmannshof.de. We will get back to you as quickly as possible.' 
                    : 'Vielen Dank! Ihre Nachricht (via Webseite) wurde erfolgreich an info@wissmannshof.de übermittelt. Wir melden uns schnellstmöglich bei Ihnen.';
                contactForm.reset();
                setTimeout(() => {
                    contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    }

    // Event listeners for language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                applyLanguage(lang);
            }
        });
    });

    // Initialize Language on Page Load
    document.addEventListener('DOMContentLoaded', () => {
        applyLanguage(currentLang);
    });

    // Run immediately as well
    applyLanguage(currentLang);
})();
