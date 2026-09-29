/**
 * Gut Wissmannshof - Karriere & Stellenangebote Daten
 * Sport- & Golf-Resort Gut Wissmannshof
 */

const CAREER_DATA = {
    contact: {
        person: "Hubert Landefeld",
        title_de: "Geschäftsführung & Bewerbermanagement",
        title_en: "Managing Director & Talent Acquisition",
        phone: "+49 (0) 171 / 75 404 71",
        phone_clean: "+491717540471",
        email: "hubert@landefeld.de",
        resort_email: "info@wissmannshof.de",
        address: "Sport- und Golf-Resort Gut Wissmannshof, Wissmannshof 1, 34355 Staufenberg"
    },

    benefits: [
        {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
            title_de: "Freies Golfspiel",
            title_en: "Free Golf Privileges",
            desc_de: "Kostenloses Spielrecht auf unserer 27-Loch Meisterschaftsanlage sowie freie Nutzung von Driving Range und Adventure Golf.",
            desc_en: "Complimentary green fees on our 27-hole championship course, unlimited driving range & Adventure Golf access."
        },
        {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
            title_de: "Mitarbeiter-Apartments",
            title_en: "Staff Apartments",
            desc_de: "Moderne, voll ausgestattete Personalunterkünfte direkt auf dem Gutsgelände – ideal für einen sorgenfreien Start ohne Pendeln.",
            desc_en: "Modern, fully furnished on-site apartments available directly on the resort estate."
        },
        {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
            title_de: "Resort-Verpflegung & Rabatte",
            title_en: "Dining & Resort Perks",
            desc_de: "Tägliche Mitarbeiterverpflegung aus unserer gehobenen Resort-Küche sowie exklusive Mitarbeiterrabatte in Restaurant, Hotel & Pro Shop.",
            desc_en: "Daily high-quality staff meals from our resort restaurant and generous employee discounts across hotel, gastronomy & pro shop."
        },
        {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
            title_de: "Faire & übertarifliche Vergütung",
            title_en: "Attractive & Fair Pay",
            desc_de: "Attraktives Gehalt mit Sonn- und Feiertagszuschlägen, pünktliche Auszahlung, Trinkgeldbeteiligung und digitaler Zeiterfassung.",
            desc_en: "Above-standard compensation, holiday & Sunday bonuses, tip sharing, and digital, accurate time tracking."
        },
        {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
            title_de: "Weiterbildung & Zertifikate",
            title_en: "Training & Certifications",
            desc_de: "Gezielte Förderung Ihrer Karriere: Übernahme von Fortbildungskosten (GVD, PGA, Deula, IHK, Sommelier) und interne Schulungen.",
            desc_en: "Active support for your career growth, covering costs for recognized certifications (PGA, Greenkeeping, Sommelier, IHK)."
        },
        {
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
            title_de: "Einzigartiges Teamklima",
            title_en: "Warm & Family Team Spirit",
            desc_de: "Flache Hierarchien, offene Türen, kollegiale Wertschätzung und ein herzliches Miteinander in einer traumhaften Naturkulisse.",
            desc_en: "Flat hierarchies, open communication, supportive colleagues, and inspiring surroundings in North Hesse's top resort."
        }
    ],

    departments: [
        { id: "all", label_de: "Alle Stellen", label_en: "All Positions" },
        { id: "greenkeeping", label_de: "Greenkeeping & Platz", label_en: "Greenkeeping & Grounds" },
        { id: "akademie", label_de: "Golfschule & Akademie", label_en: "Golf School & Academy" },
        { id: "rezeption", label_de: "Golf-Empfang & Rezeption", label_en: "Front Office & Golf Desk" },
        { id: "service", label_de: "Service & Gastronomie", label_en: "Restaurant & Service" },
        { id: "kueche", label_de: "Küche & Kulinarik", label_en: "Kitchen & Culinary" },
        { id: "housekeeping", label_de: "Housekeeping & Hotel", label_en: "Housekeeping & Hotel" }
    ],

    jobs: [
        {
            id: "greenkeeper-landschaftsbau",
            dept: "greenkeeping",
            dept_name_de: "Greenkeeping & Platzpflege",
            dept_name_en: "Greenkeeping & Course Maintenance",
            title_de: "Mitarbeiter Landschaftsbau & Gartenpflege / Greenkeeper (m/w/d)",
            title_en: "Landscape & Garden Maintenance / Greenkeeper (m/f/d)",
            employment_type_de: "Vollzeit / Teilzeit",
            employment_type_en: "Full-time / Part-time",
            entry_date_de: "Ab sofort",
            entry_date_en: "Immediate start",
            image: "assets/gallery_fairway_waves_oak.jpg",
            highlight: true,
            summary_de: "Es gibt wenige Berufe, in denen man am Ende des Tages sieht, was die eigenen Hände geschaffen haben. Greenkeeping am Gut Wissmannshof ist Ihr täglicher Einsatz sichtbar.",
            summary_en: "Few jobs offer such visible daily satisfaction. Maintain and shape our championship 27-hole golf grounds in stunning natural surroundings.",
            tasks_de: [
                "Pflege und Gestaltung unserer 27-Loch Meisterschaftsanlage (Fairways, Grüns, Abschläge, Semirough & Bunker).",
                "Bedienung und sorgfältige Wartung modernster Spezial- und Rasenpflegemaschinen.",
                "Durchführung saisonaler Platz- und Gehölzpflege sowie Bepflanzung der Außenanlagen.",
                "Turniervorbereitung und Sicherstellung erstklassiger Spielbedingungen für Mitglieder & Gäste.",
                "Mitwirkung bei Projekten zur ökologischen Landschaftsentwicklung auf dem Resort-Gelände."
            ],
            tasks_en: [
                "Care and maintenance of our 27-hole championship golf course (greens, fairways, tees, bunkers).",
                "Operation and upkeep of modern turf management machinery.",
                "Seasonal landscape maintenance, planting, and natural habitat enhancement.",
                "Tournament preparations and ensuring optimal playing conditions.",
                "Participation in ecological golf course projects."
            ],
            requirements_de: [
                "Abgeschlossene Ausbildung im Garten- und Landschaftsbau, Landwirtschaft, Forstwirtschaft oder Greenkeeping (GVD).",
                "Alternativ: Handwerkliches Geschick, Begeisterung für Natur und Maschinen sowie Bereitschaft zum motivierten Quereinstieg.",
                "Führerschein der Klasse B (Klasse BE / T oder CE von Vorteil).",
                "Freude an körperlicher Arbeit im Freien bei jeder Jahreszeit.",
                "Zuverlässigkeit, Teamgeist und eine gewissenhafte Arbeitsweise."
            ],
            requirements_en: [
                "Vocational training in horticulture, landscape gardening, agriculture, or greenkeeping.",
                "Alternatively: Solid craftsmanship skills, passion for outdoor work, and strong willingness to learn.",
                "Driver's license (Class B, BE or T is a plus).",
                "Enjoyment of outdoor physical work in all weather conditions.",
                "Reliability, team spirit, and conscientious mindset."
            ],
            benefits_de: [
                "Arbeiten in einer der renommiertesten und schönsten Naturlandschaften Nordhessens.",
                "Krisensicherer Arbeitsplatz mit unbefristetem Vertrag und übertariflicher Bezahlung.",
                "Möblierte Mitarbeiterunterkunft / Apartment auf dem Gut Wissmannshof bei Bedarf.",
                "Freies Golfspielen und Nutzung der gesamten Sport- und Übungsanlagen.",
                "Finanzierte Weiterbildungen zum Fach-Greenkeeper (DEULA / Greenkeeper Verband Deutschland)."
            ],
            benefits_en: [
                "Working on one of Germany's most scenic championship courses.",
                "Secure permanent position with attractive compensation.",
                "Furnished staff apartment on the resort grounds if required.",
                "Free golf privileges across all 27 holes and training areas.",
                "Funded professional certifications (DEULA / Greenkeeper Association)."
            ]
        },
        {
            id: "pga-auszubildender-trainer",
            dept: "akademie",
            dept_name_de: "Golfschule & Akademie",
            dept_name_en: "Golf School & Academy",
            title_de: "PGA Auszubildender / PGA Assistant / C-Trainer Golf (m/w/d)",
            title_en: "PGA Apprentice / Assistant Golf Pro / C-Trainer (m/f/d)",
            employment_type_de: "Vollzeit / Teilzeit",
            employment_type_en: "Full-time / Part-time",
            entry_date_de: "Ab sofort / Nach Vereinbarung",
            entry_date_en: "Immediate start / By agreement",
            image: "assets/resort_academy.jpg",
            highlight: true,
            summary_de: "Erinnern Sie sich an den Moment, als Golf für Sie mehr wurde als ein Spiel? Geben Sie diese Begeisterung weiter – auf unserer top ausgestatteten Anlage.",
            summary_en: "Turn your passion for golf into a fulfilling career. Coach players of all levels on our premier training facilities with Scope/TrackMan technology.",
            tasks_de: [
                "Durchführung von Schnupperkursen, Platzreifekursen (DGV) und Einzeltrainingsstunden für Anfänger und Fortgeschrittene.",
                "Förderung und Organisation unseres Kinder- und Jugendtrainings sowie von Schul- und Ferien-Camps.",
                "Unterstützung bei der Organisation und Durchführung von Resort-Turnieren, Clubevents und Firmentagen.",
                "Beratung von Gästen und Mitgliedern zu Equipment, Schläger-Fitting und Pro-Shop-Angeboten.",
                "Mitgestaltung innovativer Kurskonzepte an der Gut Wissmannshof Golf Academy."
            ],
            tasks_en: [
                "Delivering beginner courses, license tests (DGV), and individual coaching.",
                "Developing and leading youth golf programs, junior training, and holiday camps.",
                "Assisting in club tournaments, corporate golf days, and member events.",
                "Equipment consultations, custom fitting support, and pro shop assistance.",
                "Co-designing modern training curricula for our Golf Academy."
            ],
            requirements_de: [
                "Laufende oder geplante PGA-Ausbildung bzw. C-Trainer-Lizenz des DGV (oder vergleichbare Qualifikation).",
                "Ausgezeichnetes eigenes Spielniveau (Single-Handicap bevorzugt).",
                "Ausgeprägte pädagogische Fähigkeiten, Begeisterungskraft und sympathisches, gewinnendes Auftreten.",
                "Hohe Dienstleistungsorientierung, Zuverlässigkeit und Freude an der Arbeit mit Menschen jeden Alters.",
                "Gute Deutsch- und Grundkenntnisse in Englisch."
            ],
            requirements_en: [
                "Ongoing or planned PGA training or DGV C-Trainer license (or international equivalent).",
                "Excellent golf skills (single handicap preferred).",
                "Strong instructional skills, enthusiasm, and engaging personality.",
                "High service orientation, reliability, and love for coaching all age groups.",
                "Fluent German and good conversational English."
            ],
            benefits_de: [
                "Erstklassige Übungsanlagen: Flutlicht-Driving-Range, Scope-/TrackMan-Hütten, Pitching-Areal und Putting-Grüns.",
                "Kostenfreie Trainingsmöglichkeiten und großzügige Freiräume für das eigene Spiel.",
                "Übernahme bzw. Zuschuss zu PGA-Ausbildungs- und Prüfungsgebühren.",
                "Garantierte Grundvergütung plus attraktive Beteiligung am Trainerstunden-Umsatz.",
                "Wohnmöglichkeit auf dem Resortgelände vorhanden."
            ],
            benefits_en: [
                "World-class practice facilities: floodlit driving range, TrackMan studio, short game area.",
                "Free personal training access and flexible schedule for your own tournament play.",
                "Tuition support for PGA training and examination fees.",
                "Guaranteed base salary plus attractive lesson commission model.",
                "On-site accommodation options available."
            ]
        },
        {
            id: "golf-rezeption-empfang",
            dept: "rezeption",
            dept_name_de: "Golf-Empfang & Rezeption",
            dept_name_en: "Front Office & Golf Desk",
            title_de: "Mitarbeiter Golf-Rezeption & Club-Service (m/w/d)",
            title_en: "Golf Receptionist & Front Office Agent (m/f/d)",
            employment_type_de: "Vollzeit / Teilzeit / Minijob",
            employment_type_en: "Full-time / Part-time / Mini-job",
            entry_date_de: "Ab sofort / Initiativ",
            entry_date_en: "Immediate / Open application",
            image: "assets/resort_hotel.jpg",
            highlight: false,
            summary_de: "Morgens das Tor zu einem der schönsten Golfresorts öffnen, Gäste mit Herzlichkeit empfangen und den täglichen Spielbetrieb organisieren.",
            summary_en: "Be the welcoming face of Gut Wissmannshof. Coordinate tee times, welcome international guests, and deliver first-class hospitality.",
            tasks_de: [
                "Herzlicher Empfang und persönliche Betreuung von Mitgliedern, Hotelgästen und Tagesbesuchern.",
                "Koordination von Startzeiten, Turnierabwicklungen und Buchungen über PC CADDIE.",
                "Kassenführung, Rechnungsstellung und Verkauf von Greenfees, Gutscheinen und Pro-Shop-Artikeln.",
                "Telefonische und schriftliche Beantwortung von Gäste- und Mitgliederanfragen.",
                "Zusammenarbeit mit Hotelrezeption, Gastronomie und Golflehrern für ein perfektes Gästeerlebnis."
            ],
            tasks_en: [
                "Warm welcome and check-in for members, resort guests, and daily visitors.",
                "Tee-time coordination and tournament check-in using PC CADDIE management software.",
                "Cash register management, invoicing, green fee & pro shop sales.",
                "Handling telephone inquiries, bookings, and email correspondences.",
                "Close coordination with hotel, restaurant, and PGA pro team."
            ],
            requirements_de: [
                "Freude an gelebter Gastfreundschaft und ein offenes, sympathisches und gepflegtes Auftreten.",
                "Gute PC-Kenntnisse und sichere Ausdrucksweise in Deutsch (Englischkenntnisse von Vorteil).",
                "Erfahrung im Empfangs-, Hotel-, Touristik- oder Kundenservicebereich ist gern gesehen.",
                "Golfkenntnisse sind herzlich willkommen, aber keine zwingende Voraussetzung – wir schulen Sie ein!",
                "Bereitschaft zur Wochenendarbeit im Wechsel mit geregeltem Freizeitausgleich."
            ],
            requirements_en: [
                "Passion for genuine hospitality and a polished, communicative demeanor.",
                "Solid computer proficiency and confident German skills (English is an asset).",
                "Previous experience in hotel reception, customer service, or tourism is preferred.",
                "Golf knowledge is a plus, but not required – full training is provided.",
                "Willingness to work weekend shifts with regular compensatory days off."
            ],
            benefits_de: [
                "Modern ausgestatteter Empfangsbereich mit traumhaftem Panoramablick auf die Spielbahnen.",
                "Familienfreundliche Schichtmodelle mit digitaler, minutengenauer Arbeitszeiterfassung.",
                "Kostenloses Golfspielen & Platzreifekurs für Sie inklusive.",
                "Verpflegungszuschuss und Personalrabatte im gesamten Resort.",
                "Herzliches, humorvolles und eingespieltes Kollegenteam."
            ],
            benefits_en: [
                "Modern front desk workspace with panoramic views of the 18th hole.",
                "Flexible shift models with accurate electronic time tracking.",
                "Complimentary golf play and complimentary golf proficiency course.",
                "Staff meal benefits and resort-wide employee discounts.",
                "Supportive and friendly team environment."
            ]
        },
        {
            id: "service-restaurantfachkraft",
            dept: "service",
            dept_name_de: "Service & Gastronomie",
            dept_name_en: "Restaurant & Service",
            title_de: "Restaurantfachkraft / Servicekraft (m/w/d)",
            title_en: "Restaurant Service Staff / Bartender (m/f/d)",
            employment_type_de: "Vollzeit / Teilzeit / Minijob",
            employment_type_en: "Full-time / Part-time / Mini-job",
            entry_date_de: "Ab sofort",
            entry_date_en: "Immediate start",
            image: "assets/restaurant_indoor.webp",
            highlight: false,
            summary_de: "Verwöhnen Sie unsere Gäste auf der herrlichen Sonnengrund-Terrasse und im stilvollen Restaurant mit herzlichem Service und feiner Kulinarik.",
            summary_en: "Deliver upscale yet warm hospitality in our panoramic restaurant and outdoor sun terrace overlooking the golf course.",
            tasks_de: [
                "Aufmerksame und herzliche Gästebetreuung im Restaurant, auf der Panoramaterrasse und an der Bar.",
                "Fachgerechtes Servieren von Speisen und Getränken sowie kompetente Menü- und Weinempfehlungen.",
                "Betreuung von Turnierevents, Firmenveranstaltungen, Hochzeiten und exklusiven Abendbanketten.",
                "Vorbereitung des Mise en Place, Eindecken der Tische und Einhaltung von Sauberkeits- und Servicestandards.",
                "Führen von Kassen- und Abrechnungssystemen."
            ],
            tasks_en: [
                "Attentive guest care in the restaurant, panoramic terrace, and lounge bar.",
                "Professional food & beverage service, wine recommendations, and orders.",
                "Catering for golf tournament events, corporate celebrations, and private weddings.",
                "Mise en place preparations and maintaining dining room standards.",
                "POS system operations and bill settlements."
            ],
            requirements_de: [
                "Erfahrung im Servicebereich der Gastronomie oder Hotellerie (Ausbildung als Restaurant- oder Hotelfachkraft von Vorteil, aber auch engagierte Quereinsteiger willkommen).",
                "Gepflegtes Erscheinungsbild, herzliche Ausstrahlung und Freude am Kontakt mit Gästen.",
                "Teamfähigkeit, Belastbarkeit in Stoßzeiten und zuverlässige Arbeitsweise.",
                "Gute Deutschkenntnisse."
            ],
            requirements_en: [
                "Experience in gastronomy or hotel dining service (vocational degree welcome, motivated career changers encouraged).",
                "Polished appearance, warm attitude, and enjoyment in customer interaction.",
                "Team player mindset and resilience during peak service hours.",
                "Good German communication skills."
            ],
            benefits_de: [
                "Geregelte Arbeitszeiten mit digitaler Zeiterfassung (keine unbezahlten Überstunden).",
                "Sehr gutes Trinkgeld und faire, übertarifliche Bezahlung mit Sonn- und Feiertagszuschlägen.",
                "Mitarbeiterwohnung direkt am Resort möglich.",
                "Kostenfreie Mitarbeiterverpflegung und Resort-Vergünstigungen.",
                "Kostenloses Golfspielen auf allen Plätzen."
            ],
            benefits_en: [
                "Predictable working hours with electronic time tracking.",
                "Excellent gratuity share and above-standard wage with Sunday/holiday bonuses.",
                "On-site staff housing options.",
                "Complimentary staff dining and resort discounts.",
                "Free golf privileges across 27 holes."
            ]
        },
        {
            id: "koch-chef-de-partie",
            dept: "kueche",
            dept_name_de: "Küche & Kulinarik",
            dept_name_en: "Kitchen & Culinary",
            title_de: "Koch / Chef de Partie / Jungkoch (m/w/d)",
            title_en: "Chef de Partie / Line Cook / Commis de Cuisine (m/f/d)",
            employment_type_de: "Vollzeit / Teilzeit",
            employment_type_en: "Full-time / Part-time",
            entry_date_de: "Ab sofort",
            entry_date_en: "Immediate start",
            image: "assets/pommes_fries.jpg",
            highlight: false,
            summary_de: "Kochen mit frischen, regionalen Spitzenprodukten für unser anspruchsvolles à-la-carte-Restaurant sowie exklusive Turniere und Feiern.",
            summary_en: "Craft fresh, seasonal culinary creations for our refined à-la-carte guests, hotel residents, and high-profile tournament banquets.",
            tasks_de: [
                "Eigenverantwortliche Führung und Zubereitung von Speisen auf dem zugewiesenen Küchenposten.",
                "Kochen auf hohem handwerklichem Niveau mit Fokus auf frische, saisonale und regionale Zutaten.",
                "Mitgestaltung wechselnder Wochenkarten, Menüs und Event-Buffets.",
                "Sorgfältige Einhaltung aller HACCP-Hygiene- und Arbeitssicherheitsrichtlinien.",
                "Warenannahme, Qualitätskontrolle und fachgerechte Lagerung der Lebensmittel."
            ],
            tasks_en: [
                "Autonomous station management and food preparation for à-la-carte and banquet services.",
                "High-standard culinary execution focusing on regional and fresh ingredients.",
                "Contributing ideas to seasonal menus, daily specials, and event buffets.",
                "Strict adherence to HACCP food safety and hygiene protocols.",
                "Receiving goods, quality checks, and proper storage."
            ],
            requirements_de: [
                "Erfolgreich abgeschlossene Ausbildung als Koch / Köchin oder mehrjährige fundierte Küchenerfahrung.",
                "Leidenschaft für ehrliches Handwerk und hohe Produktqualität.",
                "Kreativität, Zuverlässigkeit und Freude an der Arbeit in einem dynamischen Küchenteam.",
                "Strukturierte und saubere Arbeitsweise auch bei hohem Bestellaufkommen."
            ],
            requirements_en: [
                "Completed culinary apprenticeship or proven culinary work experience.",
                "Passion for craftsmanship, fresh flavors, and high presentation standards.",
                "Creativity, reliability, and positive team spirit under pressure.",
                "Structured and organized working style."
            ],
            benefits_de: [
                "Moderne Küchenausstattung mit erstklassigen Arbeitsgeräten.",
                "Attraktives Gehaltspaket, geregelte Schichten und faire Dienstplangestaltung ohne ständigen Teildienst.",
                "Wohnmöglichkeit im Resort vorhanden.",
                "Mitarbeiteressen und Getränke frei.",
                "Freie Nutzung der Golf- und Freizeitanlagen."
            ],
            benefits_en: [
                "Modern kitchen facilities equipped with top-tier culinary technology.",
                "Competitive salary package, predictable shift schedules, and fair planning.",
                "Resort staff apartments available.",
                "Complimentary meals and refreshments on duty.",
                "Free access to golf courses and sports facilities."
            ]
        },
        {
            id: "housekeeping-zimmerpflege",
            dept: "housekeeping",
            dept_name_de: "Housekeeping & Hotel",
            dept_name_en: "Housekeeping & Hotel",
            title_de: "Housekeeping Mitarbeiter / Zimmerpflege (m/w/d)",
            title_en: "Housekeeping Room Attendant (m/f/d)",
            employment_type_de: "Teilzeit / Minijob / Vollzeit",
            employment_type_en: "Part-time / Mini-job / Full-time",
            entry_date_de: "Ab sofort",
            entry_date_en: "Immediate start",
            image: "assets/hotel_room.webp",
            highlight: false,
            summary_de: "Sorgen Sie für den ersten Wohlfühl-Eindruck unserer Hotelgäste durch Sauberkeit, Frische und Liebe zum Detail.",
            summary_en: "Ensure our hotel suites and resort areas radiate cleanliness, luxury comfort, and meticulous attention to detail.",
            tasks_de: [
                "Gründliche und liebevolle Reinigung unserer Hotelzimmer, Suiten und Ferienwohnungen.",
                "Pflege und Sauberhaltung der öffentlichen Resort-Bereiche, Lobbys und Tagungsräume.",
                "Bestücken der Zimmer mit frischer Bettwäsche, Handtüchern und Guest-Supplies.",
                "Meldung von Instandhaltungsbedarfen an die Haustechnik.",
                "Einhaltung der Qualitäts- und Sauberkeitsstandards unseres 4-Sterne-Resorts."
            ],
            tasks_en: [
                "Thorough daily cleaning and preparation of guest rooms and suites.",
                "Maintenance and upkeep of public resort areas and lobby lounges.",
                "Replenishing guest amenities, fresh linens, and towels.",
                "Prompt reporting of maintenance needs.",
                "Upholding 4-star resort hygiene standards."
            ],
            requirements_de: [
                "Blick fürs Detail, Sinn für Ordnung und Sauberkeit.",
                "Erfahrung im Housekeeping oder in der Gebäudereinigung ist von Vorteil (gerne auch Quereinstieg).",
                "Zuverlässigkeit, Pünktlichkeit und körperliche Belastbarkeit.",
                "Gute Deutsch- oder Grundkenntnisse."
            ],
            requirements_en: [
                "Keen eye for detail, tidiness, and hygienic perfection.",
                "Previous cleaning or hotel housekeeping experience is welcome (training available).",
                "Punctuality, reliability, and physical fitness.",
                "Basic German language ability."
            ],
            benefits_de: [
                "Arbeitszeiten überwiegend in den Vormittags- und frühen Nachmittagsstunden.",
                "Angenehmes, ruhiges Arbeitsumfeld in gehobenem Hotelambiente.",
                "Faire Entlohnung und sicherer Arbeitsplatz.",
                "Kostenfreie Arbeitskleidung und Mitarbeiterverpflegung.",
                "Kostenloses Golfspielen auf der gesamten Anlage."
            ],
            benefits_en: [
                "Daytime working hours (predominantly morning to early afternoon).",
                "Calm and refined resort work environment.",
                "Fair hourly compensation and permanent job security.",
                "Uniform provided and staff meals included.",
                "Free golf privileges across 27 holes."
            ]
        }
    ],

    i18n: {
        de: {
            brandName: "Sport- & Golf-Resort Gut Wissmannshof",
            heroBadge: "Karriere & Stellenangebote",
            heroTitle: "Arbeiten, wo andere<br><span class=\"hero-title-highlight\">Urlaub machen.</span>",
            heroLead: "Werden Sie Teil eines engagierten Teams auf einer der schönsten 27-Loch Golfanlagen Deutschlands. Entdecken Sie erstklassige Perspektiven in Greenkeeping, Golfschule, Gastronomie, Hotellerie und Club-Service.",
            openPositionsBtn: "Offene Stellen ansehen",
            directApplyBtn: "Direkt bewerben",
            whyTitle: "Warum Gut Wissmannshof?",
            whySubtitle: "Ihre Vorteile als Mitarbeiter in unserem 4-Sterne Golf- & Hotelresort",
            filterAll: "Alle Stellen",
            filterGreenkeeping: "Greenkeeping & Platz",
            filterAkademie: "Golfschule & Akademie",
            filterRezeption: "Empfang & Rezeption",
            filterService: "Service & Gastronomie",
            filterKueche: "Küche & Kulinarik",
            filterHousekeeping: "Housekeeping & Hotel",
            searchPlaceholder: "Stelle oder Stichwort suchen...",
            showingJobsCount: "Stellen gefunden",
            viewDetailsBtn: "Details & Aufgaben",
            applyNowBtn: "Jetzt bewerben",
            tasksHeading: "Ihre Aufgaben & Verantwortungen:",
            reqHeading: "Das bringen Sie mit:",
            benefitsHeading: "Das bieten wir Ihnen:",
            modalClose: "Schließen",
            quickApplyTitle: "Jetzt direkt bewerben",
            quickApplySub: "Unkompliziert, direkt und schnell. Herr Hubert Landefeld freut sich auf Ihre Nachricht.",
            callDirectly: "Direkt anrufen",
            emailDirectly: "E-Mail senden",
            formName: "Vollständiger Name *",
            formEmail: "E-Mail-Adresse *",
            formPhone: "Telefonnummer *",
            formJobSelect: "Gewünschte Stelle / Bereich *",
            formJobPlaceholder: "-- Bitte Position auswählen --",
            formMessage: "Ihr kurzes Anschreiben / Ihre Nachricht",
            formMessagePlaceholder: "Erzählen Sie uns kurz über Ihre bisherigen Erfahrungen und ab wann Sie starten könnten...",
            formFile: "Lebenslauf / Dokumente (optional, PDF oder Bild bis 10 MB)",
            formPrivacy: "Ich stimme der Speicherung und Verarbeitung meiner Daten zur Bearbeitung der Bewerbung zu.",
            formSubmit: "Bewerbung absenden",
            formSuccessTitle: "Vielen Dank für Ihre Bewerbung!",
            formSuccessMsg: "Wir haben Ihre Nachricht erhalten. Herr Hubert Landefeld wird sich in Kürze persönlich mit Ihnen in Verbindung setzen.",
            initiativBannerTitle: "Nicht die passende Stelle gefunden?",
            initiativBannerText: "Wir sind stets auf der Suche nach motivierten Talenten für unser Resort. Senden Sie uns gerne eine aussagekräftige Initiativbewerbung!",
            initiativBannerBtn: "Initiativ bewerben",
            backToTop: "Nach oben",
            footerTagline: "Besser als gut. Ihr Premium-Golf-Erlebnis.",
            footerCopyright: "© 2026 Sport- und Golf-Resort Gut Wissmannshof. Alle Rechte vorbehalten."
        },
        en: {
            brandName: "Sport & Golf Resort Gut Wissmannshof",
            heroBadge: "Careers & Open Positions",
            heroTitle: "Work where others<br><span class=\"hero-title-highlight\">spend their holiday.</span>",
            heroLead: "Become part of a dedicated team on one of Germany's most beautiful 27-hole golf resorts. Explore rewarding opportunities in greenkeeping, golf coaching, gastronomy, hotel reception, and club operations.",
            openPositionsBtn: "Explore Openings",
            directApplyBtn: "Apply Now",
            whyTitle: "Why Gut Wissmannshof?",
            whySubtitle: "Your employee benefits at our 4-star golf & hotel resort",
            filterAll: "All Positions",
            filterGreenkeeping: "Greenkeeping & Grounds",
            filterAkademie: "Golf School & Academy",
            filterRezeption: "Front Office & Desk",
            filterService: "Restaurant & Service",
            filterKueche: "Kitchen & Culinary",
            filterHousekeeping: "Housekeeping & Hotel",
            searchPlaceholder: "Search position or keyword...",
            showingJobsCount: "positions available",
            viewDetailsBtn: "View Details & Tasks",
            applyNowBtn: "Apply Now",
            tasksHeading: "Your Key Responsibilities:",
            reqHeading: "What You Bring:",
            benefitsHeading: "What We Offer You:",
            modalClose: "Close",
            quickApplyTitle: "Apply Directly Today",
            quickApplySub: "Quick, uncomplicated, and direct. Mr. Hubert Landefeld looks forward to hearing from you.",
            callDirectly: "Call Directly",
            emailDirectly: "Send E-Mail",
            formName: "Full Name *",
            formEmail: "Email Address *",
            formPhone: "Phone Number *",
            formJobSelect: "Desired Position / Department *",
            formJobPlaceholder: "-- Please choose a position --",
            formMessage: "Cover Note / Message",
            formMessagePlaceholder: "Tell us briefly about your background and earliest starting date...",
            formFile: "Resume / CV (optional, PDF or Image up to 10 MB)",
            formPrivacy: "I agree to the processing and storage of my data for application purposes.",
            formSubmit: "Submit Application",
            formSuccessTitle: "Thank you for your application!",
            formSuccessMsg: "We have received your message. Mr. Hubert Landefeld will get in touch with you personally shortly.",
            initiativBannerTitle: "Can't find your ideal position?",
            initiativBannerText: "We are always keen to meet passionate talents for our resort team. Feel free to send us an open application!",
            initiativBannerBtn: "Send Open Application",
            backToTop: "Back to top",
            footerTagline: "Better than good. Your premium golf experience.",
            footerCopyright: "© 2026 Sport- und Golf-Resort Gut Wissmannshof. All rights reserved."
        }
    }
};

window.CAREER_DATA = CAREER_DATA;
