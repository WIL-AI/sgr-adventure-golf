/**
 * Gut Wissmannshof - Karriere & Stellenangebote Daten
 * Exakte Übereinstimmung mit der offiziellen Karriere-Seite
 */

const CAREER_DATA = {
    contact: {
        person: "Herr Hubert Landefeld",
        title_de: "Geschäftsführung & Bewerbung",
        title_en: "Management & Applications",
        email: "hubert@landefeld.de",
        address: "Sport- und Golf-Resort Gut Wissmannshof, Wissmannshof 1, 34355 Staufenberg",
        note_de: "Ihre aussagekräftige Bewerbung nimmt Herr Landefeld gern unter hubert@landefeld.de entgegen.",
        note_en: "Mr. Landefeld is pleased to receive your application at hubert@landefeld.de."
    },

    intro: {
        badge_de: "Karriere",
        badge_en: "Careers",
        title_de: "Wir stellen ein<br><span class=\"hero-title-highlight\">im Sport- und Golf-Resort Gut Wissmannshof</span>",
        title_en: "We are hiring<br><span class=\"hero-title-highlight\">at Sport- and Golf-Resort Gut Wissmannshof</span>",
        lead_de: "Stellen Sie sich vor, Sie starten jeden Tag in eine Umgebung, die ihresgleichen sucht – weitläufige Fairways, unberührte Natur, ein Team, das füreinander einsteht. Das Sport- und Golf-Resort Gut Wissmannshof zählt zu den schönsten Golfanlagen Deutschlands und ist weit mehr als ein Arbeitsplatz: Es ist ein Ort, auf den man stolz ist. Gemeinsam sorgen wir dafür, dass jeder Gast unvergessliche Momente erlebt – vom perfekten Abschlag bis zum letzten Lächeln im Restaurant. Was uns verbindet, sind Professionalität, echte Wertschätzung und die Freude daran, Außergewöhnliches zu leisten.<br><br><strong>Bringen Sie Ihre Stärken ein – und werden Sie Teil von etwas, das bleibt.</strong>",
        lead_en: "Imagine starting every day in an environment that is second to none – expansive fairways, untouched nature, and a team that stands by each other. Sport- und Golf-Resort Gut Wissmannshof is among Germany's finest golf destinations and far more than just a workplace: it's a place to be proud of. Together we ensure that every guest enjoys unforgettable moments.<br><br><strong>Bring in your strengths – and become part of something that lasts.</strong>"
    },

    jobs: [
        {
            id: "landschaftsbau-gartenpflege",
            title_de: "Mitarbeiter Landschaftsbau und Gartenpflege (m/w/d)",
            title_en: "Landscape and Garden Maintenance Staff (m/f/d)",
            subtitle_de: "– ab sofort –",
            subtitle_en: "– immediate start –",
            employment_type_de: "Vollzeit",
            employment_type_en: "Full-time",
            image: "assets/gallery_fairway_waves_oak.jpg",
            text_p1_de: "Es gibt wenige Berufe, in denen man am Ende des Tages sieht, was die eigenen Hände geschaffen haben. Greenkeeping ist einer davon – und am Gut Wissmannshof ist Ihr Einsatz täglich sichtbar.",
            text_p1_en: "There are few professions where at the end of the day you see what your own hands have created. Greenkeeping is one of them – and at Gut Wissmannshof, your dedication is visible every day.",
            text_p2_de: "Sie pflegen und gestalten unsere weitläufige Anlage: Spielbahnen, Grüns, Bunker und Außenbereiche. Sie bedienen und warten unsere Maschinen, führen saisonale Arbeiten durch und sorgen dafür, dass unsere Gäste jeden Tag aufs Neue staunen – bei jedem Wetter, mit echtem Handwerk.",
            text_p2_en: "You maintain and shape our extensive facilities: fairways, greens, bunkers, and outdoor areas. You operate and maintain our machines, carry out seasonal tasks, and ensure that our guests are amazed anew every single day – in all weather conditions, with genuine craft.",
            mitbringen_de: "Ausbildung im Garten- und Landschaftsbau oder Greenkeeping · alternativ handwerkliches Geschick und Bereitschaft zum Quereinstieg · Führerschein Klasse B · Freude an körperlicher Arbeit im Freien · Zuverlässigkeit und Teamgeist",
            mitbringen_en: "Vocational training in horticulture and landscape gardening or greenkeeping · alternatively craftsmanship and willingness for career entry · Class B driver's license · enjoyment of physical outdoor work · reliability and team spirit",
            erwartet_de: "Arbeiten in einer der schönsten Naturkulissen Nordhessens · Ein eingespieltes, bodenständiges Team · Sicherer Arbeitsplatz mit fairer Vergütung · Flexible Arbeitszeitmodelle · Vergünstigtes Golfspielen",
            erwartet_en: "Working in one of North Hesse's most beautiful natural settings · A well-coordinated, down-to-earth team · Secure job with fair compensation · Flexible working time models · Discounted golf play",
            conclusion_de: "Handwerk trifft Natur trifft Leidenschaft. Wenn das nach Ihnen klingt – wir freuen uns auf Ihre Bewerbung.",
            conclusion_en: "Craft meets nature meets passion. If this sounds like you – we look forward to your application."
        },
        {
            id: "pga-auszubildender-trainer",
            title_de: "PGA Auszubildenden / C-Trainer Golf / PGA Assistant (m/w/d)",
            title_en: "PGA Apprentice / C-Trainer Golf / PGA Assistant (m/f/d)",
            subtitle_de: "– ab sofort –",
            subtitle_en: "– immediate start –",
            employment_type_de: "Teil- oder Vollzeit",
            employment_type_en: "Part- or Full-time",
            image: "assets/resort_academy.jpg",
            text_p1_de: "Erinnern Sie sich an den Moment, als Golf für Sie mehr wurde als ein Spiel? Genau diesen Moment möchten Sie weitergeben – und wir geben Ihnen die Bühne dafür.",
            text_p1_en: "Remember the moment golf became more than just a game for you? That is exactly the moment you want to pass on – and we give you the stage to do so.",
            text_p2_de: "Am Sport- und Golf-Resort Gut Wissmannshof begleiten Sie Mitglieder und Gäste jeden Alters und Niveaus: vom ersten Schwung des Anfängers bis zur Feinjustierung beim fortgeschrittenen Spieler. Sie führen Einzel- und Gruppenstunden durch, betreuen Jugendliche, unterstützen den Turnierbetrieb und wirken bei Clubevents und Schnupperkursen mit. Darüber hinaus sind Sie ein aktiver Teil unseres Pro-Shop-Teams und des täglichen Resortlebens.",
            text_p2_en: "At Sport- und Golf-Resort Gut Wissmannshof you accompany members and guests of all ages and levels: from a beginner's first swing to fine-tuning for advanced golfers. You conduct individual and group lessons, mentor juniors, support tournament operations, and assist with club events and introductory courses. Furthermore, you are an active part of our Pro Shop team and daily resort life.",
            mitbringen_de: "Laufende oder abgeschlossene PGA-Ausbildung bzw. C-Trainer-Lizenz · Freude daran, Menschen zu begeistern und zu entwickeln · Pädagogisches Gespür und Kommunikationsstärke · Hohes eigenes Spielniveau · Eigeninitiative und Teamgeist",
            mitbringen_en: "Ongoing or completed PGA training or C-Trainer license · joy in inspiring and developing people · pedagogical sensitivity and strong communication · high personal playing standard · initiative and team spirit",
            erwartet_de: "Eine hochwertige Anlage als tägliche Arbeitsumgebung · Gezielte Förderung und Entwicklungsbegleitung · Freie Trainingszeiten zur eigenen Weiterentwicklung · Ein motiviertes, kollegiales Team · Vergütung entsprechend Ihrer Qualifikation",
            erwartet_en: "High-class facilities as your daily work environment · Targeted encouragement and development mentoring · Free practice hours for your own development · A motivated, collaborative team · Remuneration commensurate with your qualifications",
            conclusion_de: "Golf ist Ihr Beruf – nicht nur Ihr Hobby. Wenn Sie das spüren, freuen wir uns auf Ihre Bewerbung.",
            conclusion_en: "Golf is your profession – not just your hobby. If you feel that, we look forward to your application."
        },
        {
            id: "mitarbeiter-golf-rezeption",
            title_de: "Mitarbeiter Golf Rezeption (m/w/d)",
            title_en: "Golf Reception Staff (m/f/d)",
            subtitle_de: "Initiativ Bewerben",
            subtitle_en: "Open Application",
            employment_type_de: "Teil- oder Vollzeit",
            employment_type_en: "Part- or Full-time",
            image: "assets/resort_hotel.jpg",
            text_p1_de: "Morgens das Tor zu einer der schönsten Golfanlagen Deutschlands öffnen, Gäste mit echtem Herzblut empfangen und einen Betrieb mitgestalten, auf den man am Ende des Tages stolz ist – das ist Ihre neue Stelle.",
            text_p1_en: "Opening the gates in the morning to one of Germany's most beautiful golf resorts, welcoming guests with heartfelt dedication, and helping shape an operation to be proud of at the end of the day – that is your new role.",
            text_p2_de: "An der Golfrezeption des Gut Wissmannshof sind Sie das erste Gesicht für Mitglieder und Besucher. Sie koordinieren Startzeiten, bearbeiten Buchungen, führen die Kasse und beantworten Anfragen per Telefon und E-Mail. Kein Tag ist wie der andere – aber jeder beginnt mit einer großartigen Kulisse und einem Team, das zusammenhält.",
            text_p2_en: "At the Gut Wissmannshof golf reception, you are the first welcoming face for members and visitors. You coordinate tee times, handle bookings, manage the cash desk, and answer inquiries via telephone and email. No two days are the same – but each begins with a magnificent backdrop and a team that stands united.",
            mitbringen_de: "Freude am Umgang mit Menschen · Organisationstalent und eine sorgfältige Arbeitsweise · Erfahrung im Empfangs- oder Servicebereich von Vorteil · Golfkenntnisse willkommen, aber kein Muss",
            mitbringen_en: "Joy in interacting with people · organizational talent and diligent work approach · experience in reception or customer service is advantageous · golf knowledge welcome, but not mandatory",
            erwartet_de: "Einen Arbeitsplatz in einzigartiger Naturumgebung · Echte Wertschätzung und flache Hierarchien · Flexible Arbeitszeitmodelle in Teil- oder Vollzeit · Vergünstigtes Golfspielen für Sie persönlich",
            erwartet_en: "A workplace in an exceptional natural environment · Genuine appreciation and flat hierarchies · Flexible working time models in part- or full-time · Discounted golf play for you personally",
            conclusion_de: "Wenn Gastfreundschaft für Sie mehr ist als ein Job – dann freuen wir uns auf Ihre Bewerbung.",
            conclusion_en: "If hospitality is more than just a job to you – then we look forward to your application."
        }
    ],

    i18n: {
        de: {
            brandName: "Sport- & Golf-Resort Gut Wissmannshof",
            heroBadge: "Karriere",
            openPositionsBtn: "Offene Stellen",
            directApplyBtn: "Jetzt Bewerben",
            mitbringenHeading: "Was Sie mitbringen:",
            erwartetHeading: "Was Sie erwartet:",
            applyTitle: "Jetzt bewerben!",
            applySubtitle: "Ihre aussagekräftige Bewerbung nimmt Herr Landefeld gern unter hubert@landefeld.de entgegen.",
            emailTitle: "E-Mail Bewerbung",
            onlineFormHeading: "Bewerbung online senden",
            onlineFormSub: "Oder senden Sie uns Ihre Daten direkt über dieses Formular:",
            formName: "Ihr Name *",
            formEmail: "Ihre E-Mail-Adresse *",
            formPhone: "Ihre Telefonnummer *",
            formJobSelect: "Position *",
            formJobPlaceholder: "-- Bitte Stelle auswählen --",
            formMessage: "Ihre Nachricht / Anschreiben",
            formMessagePlaceholder: "Ihre Nachricht an Herrn Landefeld...",
            formFile: "Lebenslauf / Anhang (optional, PDF oder Bild)",
            formPrivacy: "Ich stimme der Kontaktaufnahme und Datenverarbeitung für meine Bewerbung zu.",
            formSubmit: "Bewerbung jetzt absenden",
            formSuccessTitle: "Vielen Dank für Ihre Bewerbung!",
            formSuccessMsg: "Herr Landefeld hat Ihre Nachricht erhalten und wird sich in Kürze persönlich mit Ihnen in Verbindung setzen.",
            footerCopyright: "© 2026 Sport- und Golf-Resort Gut Wissmannshof. Alle Rechte vorbehalten.",
            footerTagline: "Besser als gut. Ihr Premium-Golf-Erlebnis."
        },
        en: {
            brandName: "Sport & Golf Resort Gut Wissmannshof",
            heroBadge: "Careers",
            openPositionsBtn: "Open Positions",
            directApplyBtn: "Apply Now",
            mitbringenHeading: "What you bring:",
            erwartetHeading: "What awaits you:",
            applyTitle: "Apply Now!",
            applySubtitle: "Mr. Landefeld will gladly receive your application at hubert@landefeld.de.",
            emailTitle: "E-Mail Application",
            onlineFormHeading: "Send Application Online",
            onlineFormSub: "Or submit your details directly via this form:",
            formName: "Your Name *",
            formEmail: "Your Email Address *",
            formPhone: "Your Phone Number *",
            formJobSelect: "Position *",
            formJobPlaceholder: "-- Please select position --",
            formMessage: "Your Message / Cover Note",
            formMessagePlaceholder: "Your message to Mr. Landefeld...",
            formFile: "Resume / Attachment (optional, PDF or image)",
            formPrivacy: "I agree to being contacted and having my data processed for this application.",
            formSubmit: "Submit Application Now",
            formSuccessTitle: "Thank you for your application!",
            formSuccessMsg: "Mr. Landefeld has received your message and will get in touch with you shortly.",
            footerCopyright: "© 2026 Sport- und Golf-Resort Gut Wissmannshof. All rights reserved.",
            footerTagline: "Better than good. Your premium golf experience."
        }
    }
};

window.CAREER_DATA = CAREER_DATA;
