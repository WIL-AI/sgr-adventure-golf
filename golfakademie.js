/**
 * Sport- und Golf-Resort Gut Wissmannshof - Golfakademie Controller & Bilingual Engine (DE / EN)
 */

(function () {
    'use strict';

    const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
let currentLang = (urlLang === 'en' || urlLang === 'de') ? urlLang : (localStorage.getItem('sgr_lang') || 'de');
if (currentLang !== 'en' && currentLang !== 'de') currentLang = 'de';

    const TRANSLATIONS = {
        de: {
            // Navigation
            navCourse: 'Golf Course',
            navAdvGolf: 'Adventure Golf',
            navMember: 'Mitglied werden',
            navGuest: 'Gast-Info',
            navAcademy: 'Golf Akademie',
            navNews: 'WiHo-News',
            navCareer: 'Karriere',
            navWebcam: 'WEBCAM',
            navBookTeeTime: 'Startzeit buchen',

            // Hero
            heroBadge: 'Sport- und Golf-Resort Gut Wissmannshof',
            heroTitle: 'Golf Akademie &amp; Coaching',
            heroLead: 'Ob erste Schwünge im Schnupperkurs, die fundierte DGV-Platzreife, individuelles Einzeltraining oder spezialisierte Clinics zu Golf-Mentalität und Regeln: Unsere PGA-Professionals begleiten Sie mit moderner Methodik zu Ihrem besten Spiel.',
            btnHeroCourses: 'Kursangebote entdecken ↓',
            btnHeroDates: 'Termine Herbst 2026',
            btnHeroBook: 'Trainerstunde buchen',

            // Facilities
            fac1Title: '25 Überdachte Abschläge',
            fac1Desc: 'Wettergeschütztes Training mit modernen Ballautomaten &amp; Zielgrüns.',
            fac2Title: 'Putting &amp; Chipping Areal',
            fac2Desc: 'Großzügige Übungsgrüns mit realistischen Breaks und Bunkern.',
            fac3Title: 'Canyon Academy Kurs',
            fac3Desc: 'Ideal für praxisnahes Kurzspieltraining und entspannte Einsteigerrunden.',
            fac4Title: 'Moderne Analyse',
            fac4Desc: 'Präzise Schwung- und Ballflugoptimierung bei unseren PGA-Pros.',

            // Courses Section
            courseTag: 'Trainingsangebot',
            courseHeading: 'Maßgeschneidertes Kursprogramm',
            courseSub: 'Für Einsteiger, ambitionierte Handicap-Jäger und erfahrene Clubspieler: Finden Sie das perfekte Trainingsformat für Ihren Schwung.',

            // Card 1
            c1Badge: 'Individuell &amp; Fokussiert',
            c1Title: 'Einzeltraining &amp; Personal Coaching',
            c1Desc: 'Das effektivste Training für schnelle Fortschritte: Maßgeschneiderte Einheiten mit Video- und Ballfluganalyse ganz nach Ihren individuellen Bedürfnissen.',
            c1F1: 'Detaillierte Schwunganalyse &amp; Korrektur',
            c1F2: 'Schlägerfitting &amp; Materialberatung',
            c1F3: 'Taktik &amp; Platzbegleitung über 9 oder 18 Loch',
            c1F4: 'Flexible Terminvereinbarung nach Wunsch',
            c1Btn: 'Stunde buchen',

            // Card 2
            c2Badge: 'Team &amp; Dynamik',
            c2Title: 'Gruppentraining &amp; Club-Clinics',
            c2Desc: 'Gemeinsam trainieren, voneinander lernen und Spaß haben: Regelmäßige Thementrainings für Mitglieder und Mannschaften zu fairen Konditionen.',
            c2F1: 'Themen: Driver &amp; Weite, Wedge-Präzision, Bunkerspiel',
            c2F2: 'Kleine, homogene Gruppen für maximale Betreuung',
            c2F3: 'Regelmäßige wöchentliche Termine',
            c2F4: 'Optimale Vorbereitung auf Turniere',
            c2Btn: 'Gruppe anfragen',

            // Card 3
            c3Badge: 'Einstieg ohne Vorkenntnisse',
            c3Title: 'Schnupperkurse Golf',
            c3Desc: 'Entdecken Sie die Faszination des Golfsports in lockerer Atmosphäre. Einfach vorbeikommen, Leihschläger in die Hand nehmen und loslegen!',
            c3F1: '2 Stunden Kurs unter Anleitung der PGA-Pros',
            c3F2: 'Leihschläger und Übungsbälle inklusive',
            c3F3: 'Grundlagen des Abschlags, Chippens &amp; Puttens',
            c3F4: 'Keine Vorkenntnisse oder Mitgliedschaft nötig',
            c3Btn: 'Termine ansehen',

            // Card 4
            c4Badge: 'Der offizielle Führerschein',
            c4Title: 'DGV-Platzreifekurs',
            c4Desc: 'Ihr strukturierter und entspannter Weg zum eigenständigen Golfen auf erstklassigen Golfplätzen weltweit – mit offiziellem DGV-Zertifikat.',
            c4F1: 'Theorie: Golfregeln &amp; Etikette praxisnah vermittelt',
            c4F2: 'Praxis: Langes &amp; kurzes Spiel, Bunker &amp; Putting',
            c4F3: 'Platzrunden auf dem 18-Loch Resort Course &amp; Canyon Kurs',
            c4F4: 'Offizielle DGV-Prüfung in stressfreier Atmosphäre',
            c4Btn: 'Platzreife wählen',

            // Card 5
            c5Badge: 'Spezial-Workshops',
            c5Title: 'Mental, Regeln &amp; Spezial-Clinics',
            c5Desc: 'Mehr als nur Schwungtechnik: Vertiefen Sie Ihr Wissen in spezialisierten Workshops, um Ihr Scorepotenzial auf der Runde voll auszuschöpfen.',
            c5F1: '<strong>Mental-Training:</strong> Pre-Shot Routine, Fokus &amp; Gelassenheit',
            c5F2: '<strong>Regel-Praxis:</strong> Erleichterungen, Strafbereiche &amp; neue Regeln',
            c5F3: '<strong>Vorträge &amp; Fitness:</strong> Biomechanik, Schonung &amp; Ernährung',
            c5F4: 'Spannende Abend- und Wochenendformate',
            c5Btn: 'Workshop anfragen',

            // Card 6
            c6Badge: 'Business &amp; Events',
            c6Title: 'Firmenevents &amp; Golf-Incentives',
            c6Desc: 'Begeistern Sie Mitarbeiter, Partner oder Kunden mit einem unvergesslichen Golftag auf Gut Wissmannshof inklusive erstklassiger Resorthotel-Gastronomie.',
            c6F1: 'Exklusiver Schnupper- &amp; Spaßwettbewerb',
            c6F2: 'Kombinierbar mit 18-Loch Adventure Golf',
            c6F3: 'Sonnenterrasse &amp; Barbecue nach dem Kurs',
            c6F4: 'Individuell nach Ihren Wünschen zusammengestellt',
            c6Btn: 'Event anfragen',

            // Dates Section
            datesTag: 'Kurstermine',
            datesHeading: 'Aktuelle Termine Herbst 2026',
            datesSub: 'Sichern Sie sich Ihren Platz in den verbleibenden Kursen dieser Saison bei unserem PGA-Trainerteam.',
            d1Month: 'Oktober',
            d1Title: 'Schnupperkurs Golf',
            d1Desc: 'Einstieg in den Golfsport: 2 Stunden intensives Kennenlernen auf der Driving Range &amp; Putting Green.',
            d1Meta: 'Termine: Samstags 14:00 – 16:00 Uhr · 29 € p. P. inkl. Schläger &amp; Bälle',

            d2Month: 'Oktober',
            d2Title: 'DGV-Platzreife Intensivkurs',
            d2Desc: 'Kompaktkurs zur offiziellen DGV-Platzreife mit Praxis- und Theorieunterricht sowie Platzprüfung.',
            d2Meta: 'Wochenend-Intensivkurs · Kursgebühr inkl. Prüfungsabnahme',

            d3Month: 'Herbst',
            d3Title: 'Spezial-Clinic: Kurzes Spiel &amp; Platzstrategie',
            d3Desc: 'Gezieltes Training für Pitching, Chipping und Bunkerspiel zur optimalen Saisonabrundung.',
            d3Meta: 'Kleingruppe · Anmeldung ab sofort möglich',

            d4Month: 'Laufend',
            d4Title: 'Individuelle Trainerstunden',
            d4Desc: 'Einzelunterricht nach freier Terminabsprache direkt über PC CADDIE oder das Clubsekretariat.',
            d4Meta: 'Täglich nach Vereinbarung buchbar',

            previewNote: '<strong>📅 Hinweis zur Saison 2027:</strong> Das neue, erweiterte Kursprogramm für das Frühjahr/Sommer 2027 befindet sich derzeit in der finalen Abstimmung und wird hier in Kürze im Detail veröffentlicht.',

            // Booking & Contact
            bookingTag: 'Direkter Kontakt',
            bookingHeading: 'Trainerstunde oder Kurs anfragen',
            bookingSub: 'Haben Sie Fragen zu unseren Kursen oder möchten Sie eine individuelle Trainerstunde vereinbaren? Kontaktieren Sie uns gerne per Formular, E-Mail oder buchen Sie direkt online über PC CADDIE.',
            pccaddieBoxTitle: '⚡ Direktbuchung über PC CADDIE',
            pccaddieBoxDesc: 'Buchen Sie Ihre Trainerstunden ganz bequem in Echtzeit über das offizielle PC CADDIE Timetable-System.',
            btnPCCaddieCoach: 'Zum PC CADDIE Trainerbuchungs-Portal ↗',
            formCardTitle: 'Kurs- / Trainingsanfrage',
            formCardSub: 'Wir melden uns schnellstmöglich persönlich bei Ihnen zurück.',
            labelFormat: 'Gewünschtes Kursformat *',
            optFormat1: 'Schnupperkurs Golf',
            optFormat2: 'DGV-Platzreifekurs',
            optFormat3: 'Individuelle Trainerstunde / Einzeltraining',
            optFormat4: 'Gruppentraining / Club-Clinic',
            optFormat5: 'Spezial-Workshop (Regeln / Mental / Vortrag)',
            optFormat6: 'Firmenevent / Gruppe',
            optFormat7: 'Allgemeine Trainingsberatung',
            labelName: 'Ihr Name *',
            labelPhone: 'Telefonnummer *',
            labelEmail: 'E-Mail-Adresse *',
            labelMsg: 'Ihre Nachricht oder Terminwünsche (optional)',
            btnSubmit: 'Anfrage absenden',
            formPrivacyNote: 'Ihre Anfrage wird als E-Mail an info@wissmannshof.de übermittelt.',

            // Footer
            footerDesc: '18-Loch Resort Course, Canyon Academy Kurs, Driving Range &amp; Golfakademie.',
            footerDirectHeading: 'Direktkontakt &amp; Anreise',
            footerLegalHeading: 'Rechtliches &amp; Information',
            footerImprint: 'Impressum',
            footerPrivacy: 'Datenschutz',
            footerCareer: 'Karriere im Resort',
            footerCookies: 'Cookie-Einstellungen',
            footerCopyright: '&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. Alle Rechte vorbehalten.',
            footerTagline: 'Besser als gut. Ihr Premium-Golf-Erlebnis.'
        },
        en: {
            // Navigation
            navCourse: 'Golf Course',
            navAdvGolf: 'Adventure Golf',
            navMember: 'Become a Member',
            navGuest: 'Guest Info',
            navAcademy: 'Golf Academy',
            navNews: 'WiHo News',
            navCareer: 'Careers',
            navWebcam: 'WEBCAM',
            navBookTeeTime: 'Book Tee Time',

            // Hero
            heroBadge: 'Sport- and Golf-Resort Gut Wissmannshof',
            heroTitle: 'Golf Academy &amp; Coaching',
            heroLead: 'From your first swings in our taster course to certified DGV license courses, customized private lessons, or specialized clinics on golf mindset and rules: Our PGA professionals guide you to your best game.',
            btnHeroCourses: 'Explore Courses ↓',
            btnHeroDates: 'Autumn 2026 Dates',
            btnHeroBook: 'Book Pro Lesson',

            // Facilities
            fac1Title: '25 Covered Range Bays',
            fac1Desc: 'All-weather training with modern ball dispensers &amp; target greens.',
            fac2Title: 'Putting &amp; Chipping Area',
            fac2Desc: 'Generous practice greens with true breaks and realistic bunkers.',
            fac3Title: 'Canyon Academy Course',
            fac3Desc: 'Ideal for hands-on short game practice and relaxed beginner rounds.',
            fac4Title: 'Modern Swing Analysis',
            fac4Desc: 'Precise swing and ball-flight optimization with our PGA pros.',

            // Courses Section
            courseTag: 'Training Program',
            courseHeading: 'Tailored Course Portfolio',
            courseSub: 'For beginners, ambitious handicap hunters, and experienced club players: Find the perfect coaching format for your swing.',

            // Card 1
            c1Badge: 'Individual &amp; Focused',
            c1Title: 'Private Coaching &amp; 1-on-1 Lessons',
            c1Desc: 'The most effective path to fast progress: Bespoke coaching sessions with video and launch monitor analysis tailored to your specific goals.',
            c1F1: 'Detailed swing analysis &amp; personalized correction',
            c1F2: 'Club fitting &amp; equipment advisory',
            c1F3: 'Course management &amp; playing lessons over 9 or 18 holes',
            c1F4: 'Flexible booking to suit your schedule',
            c1Btn: 'Book Private Lesson',

            // Card 2
            c2Badge: 'Team &amp; Dynamic',
            c2Title: 'Group Training &amp; Club Clinics',
            c2Desc: 'Train together, learn from peers, and have fun: Regular themed coaching clinics for members and teams at attractive rates.',
            c2F1: 'Topics: Driver &amp; distance, wedge precision, bunker mastery',
            c2F2: 'Small, homogeneous groups for focused attention',
            c2F3: 'Regular weekly scheduled sessions',
            c2F4: 'Targeted preparation for club tournaments',
            c2Btn: 'Inquire Group Clinic',

            // Card 3
            c3Badge: 'Beginner Friendly',
            c3Title: 'Golf Taster Courses',
            c3Desc: 'Discover the fascination of golf in a relaxed, welcoming environment. Just show up, pick up a rental club, and hit your first shots!',
            c3F1: '2-hour introductory course guided by PGA pros',
            c3F2: 'Rental clubs and practice balls included',
            c3F3: 'Foundations of driving, chipping &amp; putting',
            c3F4: 'No prior experience or club membership required',
            c3Btn: 'View Dates',

            // Card 4
            c4Badge: 'The Official License',
            c4Title: 'DGV Golf License Course',
            c4Desc: 'Your structured, stress-free pathway to playing independently on championship golf courses worldwide – with official DGV certification.',
            c4F1: 'Theory: Rules of golf &amp; etiquette made practical',
            c4F2: 'Practice: Long game, short game, bunkers &amp; putting',
            c4F3: 'On-course play on the 18-hole Resort Course &amp; Canyon Course',
            c4F4: 'Official DGV certification in a relaxed atmosphere',
            c4Btn: 'Choose License Course',

            // Card 5
            c5Badge: 'Specialized Workshops',
            c5Title: 'Mental, Rules &amp; Specialty Clinics',
            c5Desc: 'Beyond pure technique: Deepen your strategic and psychological edge to unlock your full scoring potential on the golf course.',
            c5F1: '<strong>Mental Training:</strong> Pre-shot routines, focus &amp; composure',
            c5F2: '<strong>Rules Workshop:</strong> Relief procedures, penalty areas &amp; updates',
            c5F3: '<strong>Lectures &amp; Fitness:</strong> Biomechanics, injury prevention &amp; nutrition',
            c5F4: 'Engaging evening and weekend clinic formats',
            c5Btn: 'Inquire Workshop',

            // Card 6
            c6Badge: 'Business &amp; Events',
            c6Title: 'Corporate Events &amp; Golf Incentives',
            c6Desc: 'Inspire your team, partners, or clients with an unforgettable golf day at Gut Wissmannshof combined with top-tier resort hospitality.',
            c6F1: 'Exclusive taster clinics &amp; fun putting competitions',
            c6F2: 'Seamlessly combinable with 18-hole Adventure Golf',
            c6F3: 'Sun terrace dining &amp; barbecue after coaching',
            c6F4: 'Customized precisely to your company preferences',
            c6Btn: 'Inquire Corporate Event',

            // Dates Section
            datesTag: 'Course Schedule',
            datesHeading: 'Current Schedule Autumn 2026',
            datesSub: 'Secure your place in the remaining course dates of this season with our PGA coaching team.',
            d1Month: 'October',
            d1Title: 'Golf Taster Course',
            d1Desc: 'Entry to the sport of golf: 2 intensive hours of discovery on the driving range &amp; putting green.',
            d1Meta: 'Dates: Saturdays 14:00 – 16:00 · €29 p. p. incl. clubs &amp; balls',

            d2Month: 'October',
            d2Title: 'DGV License Intensive Course',
            d2Desc: 'Compact intensive course leading to the official DGV license with practical, theoretical training, and course test.',
            d2Meta: 'Weekend intensive course · Course fee includes official test',

            d3Month: 'Autumn',
            d3Title: 'Special Clinic: Short Game &amp; Strategy',
            d3Desc: 'Focused training on pitching, chipping, and bunker play for the perfect end-of-season refinement.',
            d3Meta: 'Small group · Registration open now',

            d4Month: 'Ongoing',
            d4Title: 'Individual Private Lessons',
            d4Desc: '1-on-1 coaching with flexible timing booked directly via PC CADDIE or the club reception desk.',
            d4Meta: 'Available daily by appointment',

            previewNote: '<strong>📅 Note on the 2027 Season:</strong> The expanded course program for Spring/Summer 2027 is currently in final preparation and will be published here in full detail shortly.',

            // Booking & Contact
            bookingTag: 'Direct Contact',
            bookingHeading: 'Inquire Coaching or Courses',
            bookingSub: 'Do you have questions about our coaching portfolio or would you like to schedule an individual lesson? Get in touch via the form, email, or book directly online via PC CADDIE.',
            pccaddieBoxTitle: '⚡ Direct Booking via PC CADDIE',
            pccaddieBoxDesc: 'Book your pro coaching sessions conveniently in real time through the official PC CADDIE timetable portal.',
            btnPCCaddieCoach: 'Go to PC CADDIE Coach Portal ↗',
            formCardTitle: 'Course / Training Inquiry',
            formCardSub: 'We will get back to you personally as soon as possible.',
            labelFormat: 'Desired Course Format *',
            optFormat1: 'Golf Taster Course',
            optFormat2: 'DGV License Course',
            optFormat3: 'Private 1-on-1 Coaching / Lesson',
            optFormat4: 'Group Clinic / Member Training',
            optFormat5: 'Special Workshop (Rules / Mental / Clinic)',
            optFormat6: 'Corporate Event / Group',
            optFormat7: 'General Coaching Advisory',
            labelName: 'Your Name *',
            labelPhone: 'Phone Number *',
            labelEmail: 'Email Address *',
            labelMsg: 'Your Message or Desired Dates (optional)',
            btnSubmit: 'Send Inquiry',
            formPrivacyNote: 'Your inquiry will be transmitted via email to info@wissmannshof.de.',

            // Footer
            footerDesc: '18-Hole Resort Course, Canyon Academy Course, Driving Range &amp; Golf Academy.',
            footerDirectHeading: 'Direct Contact &amp; Directions',
            footerLegalHeading: 'Legal &amp; Information',
            footerImprint: 'Imprint',
            footerPrivacy: 'Privacy Policy',
            footerCareer: 'Careers at Resort',
            footerCookies: 'Cookie Settings',
            footerCopyright: '&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. All rights reserved.',
            footerTagline: 'Better than good. Your premium golf experience.'
        }
    };

    function setLanguage(lang) {
        currentLang = lang;
        try {
            localStorage.setItem('sgr_lang', lang);
        } catch (e) {}
        document.documentElement.lang = lang;

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Translate text elements
        const dict = TRANSLATIONS[lang] || TRANSLATIONS.de;
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });
    }

    // Expose globally
    window.setLanguage = setLanguage;

    document.addEventListener('DOMContentLoaded', () => {
        // Wire up language switch buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = btn.dataset.lang;
                if (targetLang) setLanguage(targetLang);
            });
        });

        // Mobile menu toggle
        const toggle = document.getElementById('mobile-toggle');
        const mainNav = document.getElementById('main-nav');
        if (toggle && mainNav) {
            toggle.addEventListener('click', () => {
                mainNav.classList.toggle('open');
            });
        }

        // Apply saved language
        setLanguage(currentLang);
    });

})();
