/* ==========================================================================
 Sport- und Golf-Resort Gut Wissmannshof - Mitgliedschaft Landing Page JS
 Interactive Logic, Bilingual Translation Engine (DE / EN) & Form Handler
 ========================================================================== */

// Bilingual Translation Dictionary
const translations = {
 de: {
 navPhilosophy: "Philosophie",
 navMemberships: "Mitgliedschaften",
 navTrial: "Schnuppern",
 navContracts: "Transparenz",
 navResort: "Resort",
 navFaq: "FAQ",
 navBtnContact: "Gespräch vereinbaren",

 heroBadge: "Sport- und Golf-Resort Gut Wissmannshof",
 heroTitle: "Ein Preis.<br><span class=\"hero-gold-text\">Ein Versprechen.</span>",
 heroLead: "Mitgliedschaft auf Gut Wissmannshof: Feste Beiträge, 0 € Aufnahmegebühr, keine Umlagen und keine Nachforderungen.",
 btnHeroTrial: "Schnuppermitgliedschaft anfragen",
 btnHeroRates: "Beiträge im Überblick ↓",

 trust1Title: "Ganzjährig bespielbar",
 trust1Sub: "Volles Spielrecht auf Resort Course",
 trust2Title: "0 € Aufnahmegebühr",
 trust2Sub: "Keine Einlage, keine Anteile",
 trust3Title: "Keine Umlagen",
 trust3Sub: "Investitionen trägt der Betreiber",
 trust4Title: "100 % Planbarkeit",
 trust4Sub: "Monatlich ohne Aufpreis zahlbar",

 tagTransparency: "Maximale Transparenz",
 pillarsHeading: "Drei Dinge, die Sie bei uns nicht finden",
 pillarsSub: "Wir glauben, dass modernes Golfen auf Vertrauen, Klarheit und Verlässlichkeit beruht. Deshalb verzichten wir konsequent auf alles, was Sie anderswo ärgert.",
 pillar1Title: "Keine Aufnahmegebühr",
 pillar1Desc: "Der Eintritt in unsere Gemeinschaft kostet nichts extra. Sie zahlen Ihren Mitgliedsbeitrag, sonst nichts. Kein Einstandsbetrag, keine Aufnahmegebühr, keine Einlage, kein Anteilsschein.",
 pillar2Title: "Keine Umlagen",
 pillar2Desc: "Neue Bewässerung, neuer Fuhrpark, neues Clubhaus: Was auf der Anlage investiert wird, tragen wir als Betreiber. Unsere Mitglieder werden nicht nachträglich zur Kasse gebeten. Nie.",
 pillar3Title: "Keine Nachforderungen",
 pillar3Desc: "Natürlich gibt es Spielrechtsvertrag und AGB. Wir schreiben sie so, dass man sie versteht, und geben sie Ihnen vor der Unterschrift. Darin steht, was Ihre Mitgliedschaft kostet. Was dort nicht steht, kommt später auch nicht dazu.",
 calloutTitle: "Vollkommene Offenheit vor Vertragsabschluss:",
 calloutSub: "Sie können unseren Mitgliedsantrag, die Spielbedingungen und AGB jederzeit transparent einsehen.",
 btnCallout: "Mitgliedsantrag & AGB (Stand 05/2026) ansehen",

 tagFair: "Kalkulierbar & Fair",
 ratesHeading: "Ein Betrag. Klar, fest, kalkulierbar.",
 ratesSub: "Sie wissen am ersten Tag, was das Jahr kostet. Der Beitrag steht fest, wird nicht unterjährig angepasst und enthält alles, was zur Mitgliedschaft gehört. Auf Wunsch zahlen Sie monatlich – ohne Aufschlag, ohne Finanzierung, einfach als zwölf gleiche Beträge.",

 badgeTrial: "Empfehlung für den Start",
 cardTrialTitle: "Schnuppermitgliedschaft",
 cardTrialSub: "Volles Spielrecht zum Kennenlernen ohne Risiko",
 priceTrialPeriod: "pro Monat <span class=\"price-yearly-sub\">(1.020 € pro Jahr)</span>",
 trialF1: "Volles Spielrecht auf dem 18-Loch Resort Course & Canyon Kurs",
 trialF2: "Volle Nutzung aller Trainingsbereiche (Driving Range, Pitching & Putting)",
 trialF3: "Offizieller DGV-Ausweis & Handicapführung",
 trialF4: "Alle regulären Club-Vorteile & Gäste-Privilegien",
 trialF5: "Freie Nutzung aller Übungsanlagen (Driving Range & Grüns)",
 trialF6: "Erst 12 Monate testen, dann frei entscheiden",
 btnSelectTrial: "Schnuppermitgliedschaft anfragen",

 badgeFull: "Das Premium-Erlebnis",
 cardFullTitle: "Vollmitgliedschaft",
 cardFullSub: "Das uneingeschränkte Rundum-sorglos-Golferlebnis",
 priceFullPeriod: "pro Monat <span class=\"price-yearly-sub\">(1.836 € pro Jahr)</span>",
 fullF1: "Uneingeschränktes Spielrecht auf dem 18-Loch Resort Course & Canyon Kurs",
 fullF2: "Inkl. aller Übungsanlagen, Driving Range & Kurzspielbereiche",
 fullF3: "DGV-Ausweis & weltweite Turnierteilnahme",
 fullF4: "Exklusiver Mehrwert: Jährlich 5 kostenlose Greenfee-Runden im Golfresort Hardenberg inklusive!",
 fullF5: "Vorzugskonditionen für Begleitpersonen & Gäste",
        fullF6: "Locker- & Garderoben-Service inklusive",
        fullF7: "Clubturniere, Mannschaftsspiel & exklusive Events",
 btnSelectFull: "Vollmitgliedschaft anfragen",

 moreRatesTitle: "Weitere maßgeschneiderte Mitgliedschaftsformen",
 periodMonth: "/ Monat",
 btnInquire: "Anfragen",

 catWeekTitle: "Wochenmitgliedschaft",
 catWeekTag: "Mo. – Fr.",
 catWeekDesc: "Für Ruheständler, Selbstständige & Spieler, die die Ruhe unter der Woche schätzen.",
 catWeekYearly: "(1.536 € pro Jahr)",

 cat9Title: "9-Loch Mitgliedschaft",
 cat9Tag: "Zeitsparend",
 cat9Desc: "Ideal für Berufstätige mit wenig Zeit. Volles DGV-Spielrecht für 9 Löcher (Resort Course oder Canyon Kurs).",
 cat9Yearly: "(1.224 € pro Jahr)",

 catSecondTitle: "Zweitmitgliedschaft",
 catSecondTag: "Heimatclub extern",
 catSecondDesc: "Für Golfer mit bestehender Vollmitgliedschaft in einem anderen anerkannten Golfclub – unbegrenztes Spielrecht auf Gut Wissmannshof.",
 catSecondYearly: "(1.140 € pro Jahr)",

 catRemoteTitle: "Fernmitgliedschaft",
 catRemoteTag: "Wohnsitz > 150 km",
 catRemoteDesc: "Für Golfer mit Hauptwohnsitz außerhalb des 150-km-Einzugsgebiets. Inklusive offiziellem DGV-Ausweis und 3 Tages-Greenfees pro Jahr.",
 catRemoteYearly: "(456 € pro Jahr)",

 catStudentTitle: "Ausbildung / Studenten",
 catStudentTag: "Bis 27 Jahre",
 catStudentDesc: "Volles 18-Loch Spielrecht zu extrem fairen Konditionen während des Studiums.",
 catStudentYearly: "(720 € pro Jahr)",

 catYouthTitle: "Kinder & Jugendliche",
 catYouthTag: "Bis 18 Jahre",
 catYouthDesc: "Nachwuchsförderung pur: Golfen, Jugendtraining, Turniere und Clubgemeinschaft.",
 catYouthYearly: "(240 € pro Jahr)",

 tagStepByStep: "Einfach Ausprobieren",
 pathHeading: "Der entspannte Weg auf den Platz",
 pathSub: "Sie möchten Golf ohne Druck und ohne langfristige Bindung kennenlernen? Bei uns gibt es keine Hürden – starten Sie einfach in Ihrem eigenen Rhythmus.",
 step1Title: "Schnupperkurs oder Driving Range",
 step1Desc: "Erste Bälle schlagen, das Gefühl für den Schwung spüren. Völlig unkompliziert auf unserer modernen Driving Range.",
 step2Title: "Platzreife auf Gut Wissmannshof",
 step2Desc: "Lernen Sie die Grundlagen in lockerer Atmosphäre bei unseren Golf-Professionals. Praxisnah, verständlich und mit Spaß.",
 step3Title: "1 Jahr Schnuppermitgliedschaft",
 step3Desc: "Für nur 85 € monatlich volle 365 Tage unbegrenzt spielen, Trainieren, Turniere spielen und Clubfreunde finden.",
 step4Title: "Frei entscheiden",
 step4Desc: "Nach dem Schnupperjahr geht Ihr Spielrecht nahtlos in die reguläre Mitgliedschaft über – mit transparenter Kündigungsmöglichkeit.",

 tagContracts: "Transparenz",
 contractsHeading: "Alles schwarz auf weiß.<br>Schon vor Ihrer Entscheidung.",
 contractsLead: "Versteckte Klauseln, Kleingedrucktes mit bösen Überraschungen oder intransparente Vereinsstatuten? Nicht bei uns. Wir stellen alle Vertragsgrundlagen offen zur Verfügung.",
 cL1: "Spielrechtsvertrag in einfacher, juristisch klarer Sprache",
 cL2: "Klar geregelte Laufzeiten und transparente Kündigungsfristen",
 cL3: "Platz- und Spielordnung im Sinne eines respektvollen Miteinanders",
 cL4: "Datenschutz nach strengen europäischen Richtlinien",
 btnDownloadContract: "Mitgliedsantrag (Stand 05/2026) ansehen & drucken",
 btnRequestCall: "Beratungsgespräch anfragen",
 certTitle: "Gut Wissmannshof Transparenz-Garantie",
 certDesc: "„Was nicht im Spielrechtsvertrag steht, kann und wird Ihnen niemals nachträglich berechnet werden.“",
 certSig: "Team Wissmannshof",

 tagResort: "Ihr neues Golf-Zuhause",
 resortHeading: "Mehr als 18 Löcher. Ein echtes Resort.",
 resortSub: "Gut Wissmannshof ist kein anonymer Platz, sondern ein Ort zum Wohlfühlen, Verweilen und Genießen.",
 resort1Title: "18-Loch Resort Course",
 resort1Desc: "Herausforderndes Design, sanfte Hügel, reizvolle Wasserhindernisse und ganzjährig exzellent gepflegte Bahnen.",
 resort2Title: "Hotel & Sonnenterrasse",
 resort2Desc: "Wohnen in Rundhäusern direkt am Platz und nach der Runde auf der Seeterrasse regionale und mediterrane Köstlichkeiten genießen.",
 resort3Title: "Golfakademie & Übungsareal",
 resort3Desc: "25 überdachte Abschlagplätze, Chipping Green, Putting Green und moderne Fitting- und Trainingsmethoden.",
 resort4Title: "Gemeinschaft & Clubleben",
 resort4Desc: "Herzliche Willkommenskultur, Turniere für jede Spielstärke und regelmäßige Club-Events unter Freunden.",

 tagFaq: "Häufige Fragen",
 faqHeading: "Fragen zur Mitgliedschaft? Hier sind die Antworten.",
 faq1Q: "Gibt es wirklich keine Aufnahmegebühr oder versteckten Kosten?",
 faq1A: "Ja, absolut. Bei uns zahlen Sie ausschließlich den im Vertrag vereinbarten Jahres- bzw. Monatsbeitrag. Es gibt weder Aufnahmegebühren, noch Bausteine, Investitionsumlagen oder sonstige Nachforderungen.",
 faq2Q: "Kostet die monatliche Zahlweise einen Aufpreis?",
 faq2A: "Nein. Sie können Ihren Jahresbeitrag bequem in 12 gleichen Monatsraten per SEPA-Lastschrift zahlen – ohne jeden Ratenzuschlag.",
 faq3Q: "Was passiert nach dem Schnupperjahr?",
 faq3A: "Die Schnuppermitgliedschaft bietet Ihnen 12 Monate vollen Einstieg. Anschließend geht das Spielrecht nahtlos in die reguläre Mitgliedschaft über – mit transparenter Kündigungsmöglichkeit.",
 faq4Q: "Ist der Platz wirklich das ganze Jahr über bespielbar?",
 faq4A: "Ja! Durch unsere hervorragende Platzpflege und erstklassige Drainage spielen Sie bei uns ganzjährig auf regulären Sommergrüns – ohne monatelange witterungsbedingte Winterpausen (witterungsabhängig).",
 faq5Q: "Welche Vorteile bietet die Partnerschaft mit dem Golfresort Hardenberg?",
 faq5A: "Als Vollmitglied auf Gut Wissmannshof erhalten Sie jedes Jahr 5 kostenlose Greenfee-Runden im Golfresort Hardenberg inklusive. Das bedeutet maximalen Spielgenuss auf mehreren Spitzenplätzen!",

 tagContact: "Persönlicher Draht",
 contactHeading: "Lernen wir uns kennen.",
 contactLead: "Golfen beginnt mit dem ersten Gespräch. Kommen Sie auf einen Kaffee vorbei, spielen Sie eine Runde zur Probe oder lassen Sie sich unverbindlich beraten.",
 contactName: "Team Wissmannshof",
 contactRole: "Mitgliederbetreuung & Clubmanagement",
 contactQuote: "„Wir nehmen uns Zeit für Sie. Transparent, ehrlich und auf Augenhöhe.“",
 labelAddress: "Adresse",
 labelPhone: "Telefon",
 labelEmail: "E-Mail",

 formTitle: "Unverbindliche Anfrage senden",
 formSub: "Wir melden uns schnellstmöglich persönlich bei Ihnen zurück.",
 lblInterest: "Interesse an Mitgliedschaft",
 optTrial: "Schnuppermitgliedschaft (85 € / Monat)",
 optFull: "Vollmitgliedschaft (153 € / Monat)",
 optWeek: "Wochenmitgliedschaft Mo.–Fr. (128 € / Monat)",
 opt9: "9-Loch Mitgliedschaft (102 € / Monat)",
 optSecond: "Zweitmitgliedschaft (95 € / Monat)",
 optRemote: "Fernmitgliedschaft (38 € / Monat)",
 optStudent: "Ausbildung / Studenten (60 € / Monat)",
 optYouth: "Kinder / Jugendliche (20 € / Monat)",
 optGeneral: "Allgemeine Beratung & Probespielen",
 lblName: "Ihr vollständiger Name *",
 phName: "Vor- und Nachname",
 lblPhone: "Telefonnummer *",
 phPhone: "Für Rückfragen",
 lblEmail: "Ihre E-Mail-Adresse *",
 phEmail: "name@beispiel.de",
 lblHcp: "Aktueller Golf-Status / Handicap",
 optBeginner: "Golf-Einsteiger (noch keine Platzreife)",
 optPR: "Platzreife vorhanden",
 optHcp: "Aktives Handicap (Mitglied in anderem Club)",
 optReturner: "Wiedereinsteiger",
 lblMessage: "Ihre Nachricht oder Wunschtermin (optional)",
 phMessage: "Wann können wir Sie am besten erreichen? Haben Sie spezielle Fragen?",
 btnSubmitForm: "Jetzt unverbindlich anfragen",
 privacyNote: "Ihre Angaben werden vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.",

 footerCol1: "Resort & Golf",
 fLinkHome: "Hauptwebseite Wissmannshof",
 fLinkGuest: "Gäste & Greenfee",
 fLinkAdv: "Adventure Golf",
 fLinkAcad: "Golfakademie & Pros",
 footerCol2: "Direktkontakt",
 fPhone: "Telefon: <a href=\"tel:+495543999335\">+49 (0) 55 43 / 999 335</a>",
 fEmail: "E-Mail: <a href=\"mailto:info@wissmannshof.de\">info@wissmannshof.de</a>",
 fHours: "Sekretariat: Mo.–So. 08:00 – 18:00 Uhr",
 footerCol3: "Rechtliches",
 fImprint: "Impressum",
 fPrivacy: "Datenschutz",
 fTerms: "AGB & Platzordnung",
 fCopyright: "&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. Alle Rechte vorbehalten.",
 fTagline: "Ein Preis. Ein Versprechen. Golfen auf Gut Wissmannshof."
 },
 en: {
 navPhilosophy: "Philosophy",
 navMemberships: "Memberships",
 navTrial: "Trial Path",
 navContracts: "Contract Clarity",
 navResort: "Resort",
 navFaq: "FAQ",
 navBtnContact: "Schedule a Call",

 heroBadge: "Sport- & Golf-Resort Gut Wissmannshof",
 heroTitle: "One Price.<br><span class=\"hero-gold-text\">One Promise.</span>",
 heroLead: "Membership at Gut Wissmannshof: Fixed dues, €0 initiation fee, zero special levies and transparent terms.",
 btnHeroTrial: "Request Trial Membership",
 btnHeroRates: "View All Rates ↓",

 trust1Title: "365 Days a Year",
 trust1Sub: "Full playing rights on 18-hole resort course",
 trust2Title: "€0 Admission Fee",
 trust2Sub: "No deposit, no share purchase",
 trust3Title: "No Special Levies",
 trust3Sub: "All investments covered by operator",
 trust4Title: "100% Predictable",
 trust4Sub: "Payable monthly with zero surcharge",

 tagTransparency: "Maximum Transparency",
 pillarsHeading: "Three Things You Will Never Find Here",
 pillarsSub: "We believe modern golf is built on trust, clarity, and reliability. That is why we consistently avoid everything that causes frustration elsewhere.",
 pillar1Title: "No Admission Fee",
 pillar1Desc: "Joining our golf community costs nothing extra. You only pay your membership fee, nothing else. No joining fee, no initiation charge, no share certificate.",
 pillar2Title: "No Special Levies",
 pillar2Desc: "New irrigation system, upgraded machinery fleet, new clubhouse: All resort investments are funded entirely by us. Our members are never asked to pay extra. Ever.",
 pillar3Title: "No Hidden Surcharges",
 pillar3Desc: "We provide clear contracts and terms that are easy to understand before you sign. They specify exact costs. What isn't listed will never be charged later.",
 calloutTitle: "Total openness before signing:",
 calloutSub: "You can review our membership application, playing terms, and club policies at any time.",
 btnCallout: "View Application & Terms (As of 05/2026)",

 tagFair: "Fair & Predictable",
 ratesHeading: "One Amount. Clear, Fixed, Predictable.",
 ratesSub: "You know on day one exactly what the year will cost. The fee is fixed, never adjusted during the season, and includes everything that belongs to your membership. Pay monthly with zero surcharge if you prefer.",

 badgeTrial: "Recommended for Beginners",
 cardTrialTitle: "Trial Membership",
 cardTrialSub: "Full playing rights to get to know the resort with zero risk",
 priceTrialPeriod: "per month <span class=\"price-yearly-sub\">(€1,020 per year)</span>",
 trialF1: "Unlimited playing rights 365 days a year",
 trialF2: "Full access to all practice facilities (driving range, pitching & putting)",
 trialF3: "Official DGV handicap card & handicap management",
 trialF4: "All regular club privileges & guest discounts",
 trialF5: "Locker room & wardrobe service included",
 trialF6: "Enjoy 12 months with full freedom to decide afterwards",
 btnSelectTrial: "Request Trial Membership",

 badgeFull: "The Premium Experience",
 cardFullTitle: "Full Membership",
 cardFullSub: "The unrestricted, all-inclusive golf experience",
 priceFullPeriod: "per month <span class=\"price-yearly-sub\">(€1,836 per year)</span>",
 fullF1: "365 days unlimited play on the entire 18-hole resort course",
 fullF2: "Includes all practice facilities, driving range & short game area",
 fullF3: "DGV membership card & worldwide tournament eligibility",
 fullF4: "Exclusive Perk: 5 complimentary green fee rounds per year at Golf Resort Hardenberg included!",
 fullF5: "Special guest rates for your playing partners",
        fullF6: "Locker room & wardrobe service included",
        fullF7: "Club tournaments, league games & exclusive member events",
 btnSelectFull: "Request Full Membership",

 moreRatesTitle: "Further Tailored Membership Categories",
 periodMonth: "/ month",
 btnInquire: "Inquire",

 catWeekTitle: "Weekday Membership",
 catWeekTag: "Mon. – Fri.",
 catWeekDesc: "For retirees, freelancers & golfers who cherish quiet rounds during the week.",
 catWeekYearly: "(€1,536 per year)",

 cat9Title: "9-Hole Membership",
 cat9Tag: "Time-Saving",
 cat9Desc: "Ideal for busy professionals. Full DGV playing rights for 9 holes, 365 days a year.",
 cat9Yearly: "(€1,224 per year)",

 catSecondTitle: "Secondary Membership",
 catSecondTag: "Second Home",
 catSecondDesc: "For golfers with primary residence > 150 km away or primary membership at a partner club.",
 catSecondYearly: "(€1,140 per year)",

 catRemoteTitle: "Remote Membership",
 catRemoteTag: "Wohnsitz > 150 km",
 catRemoteDesc: "Official DGV handicap for frequent travelers including 3 day green fees per year.",
 catRemoteYearly: "(€456 per year)",

 catStudentTitle: "Trainees / Students",
 catStudentTag: "Up to 27 yrs",
 catStudentDesc: "Full 18-hole playing rights at highly discounted student rates.",
 catStudentYearly: "(€720 per year)",

 catYouthTitle: "Children & Juniors",
 catYouthTag: "Up to 18 yrs",
 catYouthDesc: "Dedicated youth development: Golfing, coaching, tournaments and friendship.",
 catYouthYearly: "(€240 per year)",

 tagStepByStep: "Easy Start",
 pathHeading: "Your Relaxed Path onto the Course",
 pathSub: "Want to explore golf without pressure or long-term obligations? We keep things simple – get started at your own pace.",
 step1Title: "Taster Lesson or Driving Range",
 step1Desc: "Hit your first balls and feel the rhythm of the swing. Super relaxed on our modern driving range.",
 step2Title: "Course License at Gut Wissmannshof",
 step2Desc: "Learn the fundamentals in an enjoyable setting with our golf professionals. Practical, engaging, and fun.",
 step3Title: "1-Year Trial Membership",
 step3Desc: "For just €85 per month, enjoy 365 days of unlimited golf, practice, club tournaments, and new friendships.",
 step4Title: "Freedom of Choice",
 step4Desc: "After your trial year, your playing rights transition seamlessly into regular membership – with transparent cancellation options.",

 tagContracts: "Contract Clarity",
 contractsHeading: "Everything in Black and White.<br>Before You Decide.",
 contractsLead: "Hidden clauses, complicated small print, or intransparent club politics? Not with us. We share all terms and conditions with complete openness.",
 cL1: "Playing rights contract in plain, legally clear language",
 cL2: "Clearly defined terms and transparent cancellation periods",
 cL3: "Course and club etiquette fostering mutual respect",
 cL4: "Data protection adhering to strict European GDPR standards",
 btnDownloadContract: "Membership Application (05/2026) & Print",
 btnRequestCall: "Schedule Personal Consultation",
 certTitle: "Gut Wissmannshof Transparency Guarantee",
 certDesc: "“Whatever is not explicitly stated in your contract will never and can never be billed to you subsequently.”",
 certSig: "Team Wissmannshof",

 tagResort: "Your New Golf Home",
 resortHeading: "More than 18 Holes. A Genuine Resort.",
 resortSub: "Gut Wissmannshof is not an anonymous course, but a destination to relax, stay, and enjoy life.",
 resort1Title: "18-Hole Resort Course",
 resort1Desc: "Challenging course design, rolling hills, scenic water hazards, and playable 365 days on regular summer greens.",
 resort2Title: "Hotel & Sun Terrace",
 resort2Desc: "Stay in unique circular guest houses right on the course and enjoy regional and Mediterranean cuisine on the lake terrace.",
 resort3Title: "Golf Academy & Practice Center",
 resort3Desc: "25 covered driving bays, chipping green, putting green, and modern fitting and coaching technology.",
 resort4Title: "Community & Club Life",
 resort4Desc: "Warm welcoming culture, tournaments for every handicap level, and regular club gatherings among friends.",

 tagFaq: "Frequently Asked Questions",
 faqHeading: "Questions About Membership? Here Are the Answers.",
 faq1Q: "Are there truly zero admission fees or hidden costs?",
 faq1A: "Yes, absolutely. You only pay the agreed annual or monthly fee specified in your contract. There are no entry fees, club shares, investment levies, or surprise surcharges.",
 faq2Q: "Does monthly payment incur an additional fee?",
 faq2A: "No. You can easily pay your annual fee in 12 equal monthly installments via SEPA direct debit – with zero extra charges.",
 faq3Q: "What happens after the trial year?",
 faq3A: "The trial membership provides 12 full months of exploration. Afterwards, your playing rights seamlessly transition into regular membership, with transparent cancellation terms.",
 faq4Q: "Is the course truly open and playable year-round?",
 faq4A: "Yes! Thanks to outstanding course maintenance and excellent drainage, our course is playable year-round on regular summer greens (subject to weather conditions).",
 faq5Q: "What benefits does the Hardenberg partnership offer?",
 faq5A: "As a Full Member at Gut Wissmannshof, you receive 5 complimentary green fee rounds every year for the renowned Golf Resort Hardenberg included – ensuring varied championship golf at top courses!",

 tagContact: "Direct Contact",
 contactHeading: "Let's Connect Personally.",
 contactLead: "Golf starts with a friendly conversation. Stop by for coffee, play a test round, or get advice tailored to your game.",
 contactName: "Team Wissmannshof",
 contactRole: "Member Relations & Club Management",
 contactQuote: "“We take the time to answer your questions. Transparently, honestly, and on equal footing.”",
 labelAddress: "Address",
 labelPhone: "Phone",
 labelEmail: "Email",

 formTitle: "Send Non-Binding Inquiry",
 formSub: "We will get back to you as quickly as possible.",
 lblInterest: "Membership of Interest",
 optTrial: "Trial Membership (€85 / month)",
 optFull: "Full Membership (€153 / month)",
 optWeek: "Weekday Membership Mon.–Fri. (€128 / month)",
 opt9: "9-Hole Membership (€102 / month)",
 optSecond: "Secondary Membership (€95 / month)",
 optRemote: "Remote Membership (€38 / month)",
 optStudent: "Trainees / Students (€60 / month)",
 optYouth: "Children / Juniors (€20 / month)",
 optGeneral: "General Consultation & Test Round",
 lblName: "Your Full Name *",
 phName: "First and last name",
 lblPhone: "Phone Number *",
 phPhone: "For direct follow-up",
 lblEmail: "Your Email Address *",
 phEmail: "name@example.com",
 lblHcp: "Current Golf Status / Handicap",
 optBeginner: "Golf Beginner (no license yet)",
 optPR: "Course License acquired",
 optHcp: "Active Handicap (Member at another club)",
 optReturner: "Returning Golfer",
 lblMessage: "Your Message or Preferred Date (Optional)",
 phMessage: "When is the best time to reach you? Do you have specific questions?",
 btnSubmitForm: "Submit Inquiry Now",
 privacyNote: "Your information will be handled confidentially and used solely to process your inquiry.",

 footerCol1: "Resort & Golf",
 fLinkHome: "Main Website Wissmannshof",
 fLinkGuest: "Guests & Green Fee",
 fLinkAdv: "Adventure Golf",
 fLinkAcad: "Golf Academy & Pros",
 footerCol2: "Direct Contact",
 fPhone: "Phone: <a href=\"tel:+495543999335\">+49 (0) 55 43 / 999 335</a>",
 fEmail: "Email: <a href=\"mailto:info@wissmannshof.de\">info@wissmannshof.de</a>",
 fHours: "Club Office: Mon.–Sun. 08:00 AM – 06:00 PM",
 footerCol3: "Legal",
 fImprint: "Imprint",
 fPrivacy: "Privacy Policy",
 fTerms: "Terms & Course Rules",
 fCopyright: "&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. All rights reserved.",
 fTagline: "One Price. One Promise. Golfing at Gut Wissmannshof."
 }
};

// Global Language State (Shared with Adventure Golf & Guest Info)
let currentLang = localStorage.getItem('sgr_lang') || 'de';

document.addEventListener('DOMContentLoaded', () => {
 initLanguage();
 initHeaderScroll();
 initMobileNav();
 initPreselectHandlers();
 initFaqAccordion();
 initInquiryForm();
});

/* ==========================================================================
 Language Switcher Logic
 ========================================================================== */
function initLanguage() {
 document.querySelectorAll('.lang-btn-de').forEach(btn => {
 btn.addEventListener('click', (e) => {
 e.preventDefault();
 setLanguage('de');
 });
 });
 document.querySelectorAll('.lang-btn-en').forEach(btn => {
 btn.addEventListener('click', (e) => {
 e.preventDefault();
 setLanguage('en');
 });
 });

 updateLanguageUI();
}

window.setLanguage = function(lang) {
 currentLang = lang;
 try {
 localStorage.setItem('sgr_lang', lang);
 } catch (e) {}
 updateLanguageUI();
};

function updateLanguageUI() {
 document.documentElement.lang = currentLang;

 // Toggle active class on all lang buttons
 document.querySelectorAll('.lang-btn-de').forEach(btn => {
 btn.classList.toggle('active', currentLang === 'de');
 });
 document.querySelectorAll('.lang-btn-en').forEach(btn => {
 btn.classList.toggle('active', currentLang === 'en');
 });

 // Translate text nodes
 document.querySelectorAll('[data-t]').forEach(el => {
 const key = el.getAttribute('data-t');
 if (translations[currentLang] && translations[currentLang][key] !== undefined) {
 el.innerHTML = translations[currentLang][key];
 }
 });

 // Translate placeholders
 document.querySelectorAll('[data-t-placeholder]').forEach(el => {
 const key = el.getAttribute('data-t-placeholder');
 if (translations[currentLang] && translations[currentLang][key] !== undefined) {
 el.setAttribute('placeholder', translations[currentLang][key]);
 }
 });
}

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

 mainNav.querySelectorAll('a').forEach(link => {
 link.addEventListener('click', () => toggleMenu(false));
 });

 document.addEventListener('keydown', (e) => {
 if (e.key === 'Escape' && mainNav.classList.contains('open')) {
 toggleMenu(false);
 }
 });
}

/* ==========================================================================
 3. Preselect Category in Contact Form from Pricing Cards
 ========================================================================== */
function initPreselectHandlers() {
 const selectBox = document.getElementById('mgl-type');
 if (!selectBox) return;

 document.querySelectorAll('[data-preselect]').forEach(btn => {
 btn.addEventListener('click', () => {
 const category = btn.getAttribute('data-preselect');
 if (category && selectBox) {
 selectBox.value = category;
 }
 });
 });
}

/* ==========================================================================
 4. FAQ Accordion Logic
 ========================================================================== */
function initFaqAccordion() {
 const faqItems = document.querySelectorAll('.faq-item');

 faqItems.forEach(item => {
 const questionBtn = item.querySelector('.faq-question');
 if (!questionBtn) return;

 questionBtn.addEventListener('click', () => {
 const isActive = item.classList.contains('active');
 
 // Close all other items
 faqItems.forEach(other => {
 other.classList.remove('active');
 const otherIcon = other.querySelector('.faq-icon');
 if (otherIcon) otherIcon.textContent = '+';
 });

 // Toggle current
 if (!isActive) {
 item.classList.add('active');
 const icon = item.querySelector('.faq-icon');
 if (icon) icon.textContent = '−';
 }
 });
 });
}

/* ==========================================================================
 5. Membership Inquiry Form Handler (mailto generator)
 ========================================================================== */
function initInquiryForm() {
	const form = document.getElementById('membership-form');
	if (!form) return;

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const type = document.getElementById('mgl-type').value;
		const name = document.getElementById('mgl-name').value.trim();
		const phone = document.getElementById('mgl-phone').value.trim();
		const email = document.getElementById('mgl-email').value.trim();
		const hcp = document.getElementById('mgl-hcp').value;
		const message = document.getElementById('mgl-message').value.trim();

		if (!name || !phone || !email) {
			alert(currentLang === 'de' ? 'Bitte füllen Sie alle Pflichtfelder aus.' : 'Please fill in all required fields.');
			return;
		}

		const typeLabels = {
			schnupper: 'Schnuppermitgliedschaft (85 € / Monat)',
			voll: 'Vollmitgliedschaft (153 € / Monat)',
			woche: 'Wochenmitgliedschaft Mo.–Fr. (128 € / Monat)',
			'9loch': '9-Loch Mitgliedschaft (102 € / Monat)',
			zweit: 'Zweitmitgliedschaft (95 € / Monat)',
			fern: 'Fernmitgliedschaft (38 € / Monat)',
			student: 'Ausbildung / Studenten (60 € / Monat)',
			jugend: 'Kinder / Jugendliche (20 € / Monat)',
			beratung: 'Allgemeine Beratung & Probespielen'
		};

		const hcpLabels = {
			einsteiger: 'Golf-Einsteiger (noch keine Platzreife)',
			platzreife: 'Platzreife vorhanden',
			hcp: 'Aktives Handicap (Mitglied in anderem Club)',
			wiedereinsteiger: 'Wiedereinsteiger'
		};

		const chosenType = typeLabels[type] || type;
		const chosenHcp = hcpLabels[hcp] || hcp;

		const subject = encodeURIComponent(`[via Webseite] Mitgliedschafts-Anfrage: ${chosenType} - ${name}`);
		
		const bodyText = 
`Hallo Team Wissmannshof,

ich interessiere mich für eine Mitgliedschaft auf Gut Wissmannshof (via Webseite):

- Gewünschtes Modell: ${chosenType}
- Name: ${name}
- Telefon: ${phone}
- E-Mail: ${email}
- Aktueller Golf-Status: ${chosenHcp}

${message ? `Nachricht / Anmerkungen:\n${message}\n\n` : ''}====================================================
Hinweis: Diese Anfrage wurde über das Online-Formular auf wissmannshof.golf (via Webseite) gesendet.
Mit freundlichen Grüßen,
${name}`;

		const body = encodeURIComponent(bodyText);
		window.location.href = `mailto:info@wissmannshof.de?subject=${subject}&body=${body}`;
		form.reset();
	});
}
