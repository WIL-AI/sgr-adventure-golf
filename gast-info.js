/* ==========================================================================
   Sport- und Golf-Resort Gut Wissmannshof - Gäste-Info Landing Page JS
   Interactive Logic, Bilingual Translation Engine (DE / EN) & Form Handler
   ========================================================================== */

// Bilingual Translation Dictionary
const translations = {
    de: {
        navGreenfee: "Greenfee & Tarife",
        navAbos: "5+1 Abos",
        navEquipment: "Carts & Verleih",
        navAdventure: "Kurse & Adventure",
        navKnigge: "Gast-Knigge",
        navHotel: "Hotel & Genuss",
        navBtnBooking: "Startzeit buchen",

        heroBadge: "Gäste & Besucher herzlich willkommen",
        heroTitle: "Informationen für <span class=\"hero-gold-text\">unsere Gäste.</span>",
        heroLead: "Erleben Sie eine der faszinierendsten 18-Loch-Golfanlagen Deutschlands – mit einem ganz besonderen Vorzug: Unser 4-Sterne-Resorthotel liegt direkt auf der Anlage. Sie treten morgens aus Ihrem Zimmer und stehen praktisch sofort auf dem Fairway. Moderne E-Carts, großzügige Übungsbereiche und herzliche Gastfreundschaft machen Ihren Golftag perfekt.",
        btnHeroBook: "Startzeit anfragen & reservieren",
        btnHeroPrices: "Greenfee & Preise im Überblick ↓",

        trust1Title: "18-Loch Meisterschaftskurs",
        trust1Sub: "Kurs Blau-Gelb · 365 Tage bespielbar",
        trust2Title: "Moderne E-Cart Flotte",
        trust2Sub: "9-Loch, 18-Loch & exklusive VIP-Carts",
        trust3Title: "Sundowner-Tarif ab 88 €",
        trust3Sub: "Früh morgens & am späten Nachmittag",
        trust4Title: "Vom Zimmer aufs Fairway",
        trust4Sub: "Hotel & Gastronomie direkt am Platz",

        tagGreenfee: "Transparente Spielgebühren",
        greenfeeHeading: "Greenfee im Überblick",
        greenfeeSub: "Wählen Sie Ihre ideale Runde auf Gut Wissmannshof. Alle Greenfee-Preise verstehen sich inklusive Nutzung sämtlicher Übungsanlagen und gesetzlicher Mehrwertsteuer.",

        badge18L: "Top-Erlebnis",
        card18Title: "18-Loch Meisterschaftsrunde",
        card18Course: "Kurs Blau-Gelb",
        card18Desc: "Die volle Distanz: Atemberaubende Aussichten, anspruchsvolle Grüns und gepflegte Fairways.",
        rowWeekday: "Montag – Freitag <small>(werktags)</small>",
        rowWeekend: "Samstag, Sonntag & Feiertage",
        rowSundowner: "Sundowner-Special",
        rowSundownerSub: "Bis 09:00 Uhr & ab 17:00 Uhr",
        btnBook18: "18-Loch Startzeit buchen",

        card9Title: "9-Loch Golfrunde",
        card9Course: "Kurs nach Verfügbarkeit",
        card9Desc: "Perfekt für die entspannte Runde nach Feierabend oder den schnellen Golfausflug.",
        row9Info: "Inklusive Nutzung von Driving Range & Kurzspielbereich vor der Runde.",
        btnBook9: "9-Loch Startzeit buchen",

        cardCanyonTitle: "Canyon-Kurs & Academy",
        cardCanyonCourse: "6-Loch Academy Bahnen <small style=\"display:block; font-size:0.8rem; color:var(--color-gold); font-weight:700; margin-top:3px;\">(In Kürze 9 Loch verfügbar!)</small>",
        cardCanyonDesc: "Ideal zum schnellen Einspielen, für Einsteiger ohne festes Handicap oder konzentriertes Kurzspieltraining. In Kürze stehen Ihnen hier 9 anspruchsvolle Loch zur Verfügung!",
        rowCanyonDaily: "Tages-Spielrecht Canyon-Kurs",
        rowCanyonInfo: "Kein Handicap erforderlich. Perfekt kombinierbar mit einer Trainerstunde bei unseren Golf-Professionals.",
        btnBookCanyon: "Canyon-Kurs anfragen",

        tagAbos: "Vielspieler-Vorteil",
        abosHeading: "18-Loch & 9-Loch Abos (5 plus 1)",
        abosSub: "6 Runden spielen, nur 5 zahlen! Unsere beliebten 5+1 Abokarten sind ideal für regelmäßige Gäste, Urlauber und Partner.",
        badge5plus1: "5 + 1 Gratis",
        abo18Title: "18-Loch Abo (6 Runden)",
        abo18Desc: "Volle 18-Loch Runden auf dem Meisterschaftskurs mit echtem Preisvorteil.",
        aboWeekday: "Wochentags (Mo.–Fr.)",
        aboAllDays: "Alle Tage inkl. Wochenende",
        abo18SaveWk: "(Sie sparen 100 €!)",
        abo18SaveAll: "(Sie sparen 110 €!)",
        btnAbo18: "18-Loch Abo anfragen",

        abo9Title: "9-Loch Abo (6 Runden)",
        abo9Desc: "6 flexible 9-Loch Runden für schnelle Runden unter der Woche oder am Wochenende.",
        abo9SaveWk: "(Sie sparen 60 €!)",
        abo9SaveAll: "(Sie sparen 70 €!)",
        btnAbo9: "9-Loch Abo anfragen",

        tagEquipment: "Komfort auf der Runde",
        equipHeading: "E-Carts, Trolleys & Leihschläger",
        equipSub: "Genießen Sie Ihre Runde mit maximalem Fahrkomfort oder leihen Sie sich spontan hochwertiges Equipment vor Ort.",
        equipCartTitle: "E-Carts (Golfcars)",
        equipCartDesc: "Moderne Flotte für entspanntes Fahren durch die hügelige Landschaft.",
        cart9: "9-Loch E-Cart",
        cart18Reg: "18-Loch E-Cart <small>(Hotelgäste & reg. Greenfee)</small>",
        cart18Spec: "18-Loch E-Cart <small>(bei Sonderkonditionen)</small>",
        cartVIP: "18-Loch VIP-Cart",
        cartHint: "Tipp: E-Carts bitte rechtzeitig vorab reservieren!",

        equipETrolleyTitle: "Elektro-Trolleys",
        equipETrolleyDesc: "Müheloses Gehen: Kraftvolle E-Trolleys für die gesamte 18-Loch-Runde.",
        per18Round: "pro 18-Loch Runde",
        eTrolleyExtra: "Inkl. voll geladenem Akku und einfacher Geschwindigkeitsregelung.",

        equipPullTitle: "Zieh-Trolleys",
        equipPullDesc: "Stabile, leichtgängige Zieh-Trolleys für Ihr eigenes Golfbag.",
        perDayRound: "pro Tag / Runde",
        pullExtra: "Jederzeit spontan im Clubsekretariat oder am Start erhältlich.",

        equipClubsTitle: "Leihschläger-Set",
        equipClubsDesc: "Vollständiges Markenset für Damen oder Herren inklusive Ziehtrolley.",
        completeSetSub: "Komplettset inkl. Trolley",
        clubsExtra: "Rechts- und Linkshand-Sets für Gäste und Einsteiger verfügbar.",

        tagAdv: "Freizeitspaß für jedermann",
        advTitle: "Adventure Golf Wissmannshof",
        advDesc: "18 spektakuläre Kunstrasenbahnen im Piraten- und Abenteuer-Design! Mit Bunkern, Findlingen, Wasserhindernissen und Brücken – der perfekte Familienspaß direkt am Resort.",
        advAdult: "Erwachsene",
        advKid: "Kinder (bis 12 Jahre)",
        advNote: "Automatische Schläger- und Ballausgabe vor Ort am Ticketautomaten (täglich 07:00 – 21:00 Uhr bespielbar). 10er-, 20er- und Familienkarten verfügbar.",
        btnAdvPage: "Zur Adventure Golf Infoseite ↗",

        tagKnigge: "Gut zu wissen",
        kniggeHeading: "Wichtige Infos für Ihren Spieltag",
        kniggeSub: "Wir möchten, dass Ihr Aufenthalt bei uns rundum gelungen und entspannt ist. Hier finden Sie die wichtigsten Hinweise im Überblick.",
        knigge1Title: "Voraussetzungen",
        knigge1Desc: "Für den 18-Loch Meisterschaftskurs ist ein DGV- bzw. internationaler Vorgabennachweis (Hcp 54 bzw. Platzreife) erforderlich. Der Canyon-Kurs kann auch ohne Handicap gespielt werden.",
        knigge2Title: "Dresscode & Spikes",
        knigge2Desc: "Wir bitten um angemessene Golfbekleidung (Softspikes oder Noppenschuhe). Jeans, trägerlose Tops oder Trainingskleidung sind auf dem Platz nicht gestattet.",
        knigge3Title: "Hunde auf der Runde",
        knigge3Desc: "Gut erzogene Hunde sind an der kurzen Leine auf unseren Runden herzlich willkommen. Bitte führen Sie Kotbeutel mit und nehmen Sie Rücksicht auf Mitspieler.",
        knigge4Title: "Startzeiten & Check-in",
        knigge4Desc: "Bitte checken Sie mindestens 15 Minuten vor Ihrer gebuchten Abschlagszeit im Clubsekretariat ein. So bleibt genügend Zeit zum Aufwärmen auf der Range.",

        tagStay: "Stay & Play",
        hotelHeading: "Hotel & Golf-Restaurant Wissmannshof",
        hotelDesc: "Verbinden Sie Ihre Golfrunde mit einem erstklassigen Kurzurlaub. Unser 4-Sterne-Resort bietet 53 stilvolle Zimmer und Suiten in einzigartigen Rundhäusern – nur wenige Schritte vom ersten Abschlag entfernt.",
        hotelP1Title: "Sonnenterrasse:",
        hotelP1Desc: "Frische regionale & mediterrane Küche mit Blick über den See",
        hotelP2Title: "Golf-Arrangements:",
        hotelP2Desc: "Attraktive Übernachtungspakete inklusive Greenfee & Cart",
        hotelP3Title: "Events & Gruppen:",
        hotelP3Desc: "Perfekter Rahmen für Firmenausflüge, Clubreisen und Turniere",
        btnHotelView: "Hotel & Zimmer ansehen ↗",
        btnHotelCall: "Restaurant reservieren: 05543 / 999 22 39",

        tagDirect: "Ihr direkter Draht",
        contactHeading: "Startzeit anfragen & Kontakt",
        contactLead: "Reservieren Sie Ihre Wunsch-Startzeit ganz bequem über unser Formular oder rufen Sie uns direkt im Sekretariat an. Wir freuen uns auf Ihren Besuch!",
        teamName: "Team Wissmannshof",
        teamRole: "Clubsekretariat & Gästeservice",
        teamQuote: "„Wir reservieren Ihre Startzeit und bereiten Ihr E-Cart gerne für Sie vor.“",
        lblGolfSec: "Golfsekretariat",
        lblHotelRest: "Hotel & Restaurant",
        lblEmail: "E-Mail",
        lblAddress: "Adresse",

        pccBadge: "⚡ PC CADDIE://online",
        pccCardTitle: "Echtzeit-Startzeitenbuchung",
        pccCardDesc: "Buchen Sie Ihre Abschlagszeit direkt und verbindlich im Live-System von PC CADDIE:",
        btnPccDirect: "Jetzt über PC CADDIE buchen ↗",

        pccPill: "Live-Startzeiten",
        pccBannerTitle: "Lieber direkt online buchen?",
        pccBannerSub: "Über PC CADDIE können Sie freie Tee-Times in Echtzeit buchen:",
        btnPccBanner: "Startzeit auf PC CADDIE buchen ↗",
        formDivider: "oder hier unverbindlich anfragen",

        formHeaderTitle: "Startzeit / Gast-Anfrage senden",
        formHeaderSub: "Teilen Sie uns Ihren Terminwunsch und die Spieleranzahl mit:",
        lblRoundType: "Gewünschte Runde / Angebot *",
        opt18: "18-Loch Meisterschaftsrunde",
        opt9: "9-Loch Runde",
        optSundowner: "Sundowner-Tarif (88 €)",
        opt18Abo: "18-Loch Abo (5+1)",
        opt9Abo: "9-Loch Abo (5+1)",
        optCanyon: "Canyon-Kurs (6-Loch)",
        optGroup: "Gruppen- / Firmenturnier",
        optHotelPkg: "Golf & Hotel Übernachtungspaket",
        lblDate: "Wunschdatum *",
        lblTime: "Wunsch-Uhrzeit",
        phTime: "z. B. ca. 10:30 Uhr",
        lblPlayers: "Anzahl Spieler *",
        lblCarts: "E-Carts gewünscht?",
        optNoCart: "Kein E-Cart benötigt",
        opt1Cart: "1 E-Cart",
        opt2Carts: "2 E-Carts",
        optVipCart: "1 VIP-Cart",
        optMoreCarts: "Mehrere Carts (Gruppe)",
        lblName: "Ihr Name *",
        phName: "Vor- und Nachname",
        lblPhone: "Telefonnummer *",
        phPhone: "Für Bestätigung",
        lblEmail: "Ihre E-Mail-Adresse *",
        phEmail: "name@beispiel.de",
        lblMsg: "Besondere Wünsche / Nachricht",
        phMsg: "Leihschläger-Bedarf, Gast-Handicaps oder Restaurant-Reservierung...",
        btnSubmit: "Startzeit unverbindlich anfragen",
        formDisclaimer: "🔒 Ihre Anfrage wird direkt an unser Sekretariat zur Bearbeitung übermittelt.",

        fColResort: "Angebote & Resort",
        fLinkHome: "Hauptwebseite Wissmannshof",
        fLinkMember: "Mitglied werden",
        fLinkAdv: "Adventure Golf",
        fLinkAcad: "Golf-Akademie",
        fColContact: "Direktkontakt",
        fPhoneSec: "Golfsekretariat: <a href=\"tel:+495543999335\">+49 (0) 55 43 / 999 335</a>",
        fPhoneHotel: "Hotel & Restaurant: <a href=\"tel:+4955439992239\">+49 (0) 55 43 / 999 22 39</a>",
        fEmailSec: "E-Mail: <a href=\"mailto:info@wissmannshof.de\">info@wissmannshof.de</a>",
        fColLegal: "Rechtliches",
        fImprint: "Impressum",
        fPrivacy: "Datenschutz",
        fTerms: "AGB & Platzordnung",
        fCopyright: "&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. Alle Rechte vorbehalten.",
        fTagline: "Besser als gut. Ihr Premium-Golf-Erlebnis."
    },
    en: {
        navGreenfee: "Green Fee & Rates",
        navAbos: "5+1 Passes",
        navEquipment: "Carts & Rentals",
        navAdventure: "Courses & Adventure",
        navKnigge: "Etiquette",
        navHotel: "Hotel & Dining",
        navBtnBooking: "Book Tee Time",

        heroBadge: "Guests & Visitors Warmly Welcome",
        heroTitle: "Information for <span class=\"hero-gold-text\">Our Guests.</span>",
        heroLead: "Experience one of Germany's most captivating 18-hole golf resorts – with an incomparable highlight: Our 4-star resort hotel is located directly on the course. Step right out of your room onto the fairway. Modern golf carts, extensive practice areas, and genuine hospitality ensure an unforgettable golf day.",
        btnHeroBook: "Inquire & Reserve Tee Time",
        btnHeroPrices: "Green Fee & Prices at a Glance ↓",

        trust1Title: "18-Hole Championship Course",
        trust1Sub: "Course Blue-Yellow · Playable 365 days",
        trust2Title: "Modern E-Cart Fleet",
        trust2Sub: "9-hole, 18-hole & VIP luxury carts",
        trust3Title: "Sundowner Rate from €88",
        trust3Sub: "Early mornings & late afternoons",
        trust4Title: "From Room to Fairway",
        trust4Sub: "Hotel & dining right on the golf course",

        tagGreenfee: "Transparent Playing Rates",
        greenfeeHeading: "Green Fee Overview",
        greenfeeSub: "Choose your ideal round at Gut Wissmannshof. All green fee rates include full use of all practice facilities and statutory VAT.",

        badge18L: "Top Experience",
        card18Title: "18-Hole Championship Round",
        card18Course: "Course Blue-Yellow",
        card18Desc: "The full distance: Breathtaking panoramas, pristine greens, and immaculately manicured fairways.",
        rowWeekday: "Monday – Friday <small>(weekdays)</small>",
        rowWeekend: "Saturday, Sunday & Public Holidays",
        rowSundowner: "Sundowner Special",
        rowSundownerSub: "Until 09:00 AM & from 05:00 PM",
        btnBook18: "Book 18-Hole Tee Time",

        card9Title: "9-Hole Golf Round",
        card9Course: "Course upon availability",
        card9Desc: "Ideal for a relaxing round after work or a brisk golf getaway.",
        row9Info: "Includes complimentary use of driving range & short game area before your round.",
        btnBook9: "Book 9-Hole Tee Time",

        cardCanyonTitle: "Canyon Course & Academy",
        cardCanyonCourse: "6-Hole Academy Holes <small style=\"display:block; font-size:0.8rem; color:var(--color-gold); font-weight:700; margin-top:3px;\">(9 holes available soon!)</small>",
        cardCanyonDesc: "Perfect for a quick warm-up, beginners without an official handicap, or targeted short game practice. 9 exciting holes available shortly!",
        rowCanyonDaily: "Day Playing Pass Canyon Course",
        rowCanyonInfo: "No handicap required. Ideal to combine with a private lesson with our golf professionals.",
        btnBookCanyon: "Inquire Canyon Course",

        tagAbos: "Frequent Player Advantage",
        abosHeading: "18-Hole & 9-Hole Season Passes (5 plus 1)",
        abosSub: "Play 6 rounds, pay for only 5! Our popular 5+1 pass cards are ideal for regular guests, holidaymakers, and golf partners.",
        badge5plus1: "5 + 1 Free",
        abo18Title: "18-Hole Pass (6 Rounds)",
        abo18Desc: "Full 18-hole championship rounds with genuine cost savings.",
        aboWeekday: "Weekdays (Mon.–Fri.)",
        aboAllDays: "All Days including Weekends",
        abo18SaveWk: "(You save €100!)",
        abo18SaveAll: "(You save €110!)",
        btnAbo18: "Inquire 18-Hole Pass",

        abo9Title: "9-Hole Pass (6 Rounds)",
        abo9Desc: "6 flexible 9-hole rounds for spontaneous golf during the week or weekends.",
        abo9SaveWk: "(You save €60!)",
        abo9SaveAll: "(You save €70!)",
        btnAbo9: "Inquire 9-Hole Pass",

        tagEquipment: "On-Course Comfort",
        equipHeading: "E-Carts, Trolleys & Rental Clubs",
        equipSub: "Enjoy your round with supreme driving comfort or rent high-end golf gear spontaneously on site.",
        equipCartTitle: "E-Carts (Golf Cars)",
        equipCartDesc: "Modern fleet for effortless driving across scenic rolling hills.",
        cart9: "9-Hole E-Cart",
        cart18Reg: "18-Hole E-Cart <small>(Hotel guests & reg. green fee)</small>",
        cart18Spec: "18-Hole E-Cart <small>(special conditions)</small>",
        cartVIP: "18-Hole VIP Cart",
        cartHint: "Tip: Please reserve golf carts in advance!",

        equipETrolleyTitle: "Electric Trolleys",
        equipETrolleyDesc: "Effortless walking: Powerful electric trolleys for your complete 18-hole round.",
        per18Round: "per 18-hole round",
        eTrolleyExtra: "Includes fully charged battery and smooth speed regulation.",

        equipPullTitle: "Pull Trolleys",
        equipPullDesc: "Sturdy, smooth-rolling pull trolleys for your golf bag.",
        perDayRound: "per day / round",
        pullExtra: "Available spontaneously at the club office or starting tee.",

        equipClubsTitle: "Rental Club Set",
        equipClubsDesc: "Full brand-name set for men or women including pull trolley.",
        completeSetSub: "Complete set incl. trolley",
        clubsExtra: "Right- and left-handed sets available for guests and beginners.",

        tagAdv: "Leisure Fun for Everyone",
        advTitle: "Adventure Golf Wissmannshof",
        advDesc: "18 spectacular artificial turf lanes in an authentic pirate adventure setting! With bunkers, boulders, water hazards, and bridges – supreme family fun right at the resort.",
        advAdult: "Adults",
        advKid: "Children (up to 12 years)",
        advNote: "Automated club and ball rental kiosk on site (playable daily 07:00 AM – 09:00 PM). 10-round passes and family tickets available.",
        btnAdvPage: "To Adventure Golf Page ↗",

        tagKnigge: "Good to Know",
        kniggeHeading: "Important Information for Your Game Day",
        kniggeSub: "We want your visit to be relaxing and completely seamless. Here is an overview of essential club guidelines.",
        knigge1Title: "Requirements",
        knigge1Desc: "An official handicap certificate (Hcp -54 or course license) is required for the 18-hole championship course. The Canyon Course can be played without a handicap.",
        knigge2Title: "Dress Code & Spikes",
        knigge2Desc: "We request appropriate golf attire (soft spikes or spikeless golf shoes). Blue jeans, sleeveless tops (men), or gym wear are not permitted on the course.",
        knigge3Title: "Dogs on the Course",
        knigge3Desc: "Well-behaved dogs on a short leash are warmly welcome on our course. Please carry waste bags and show consideration for fellow players.",
        knigge4Title: "Tee Times & Check-in",
        knigge4Desc: "Please check in at the club office at least 15 minutes prior to your scheduled tee time to allow ample time for warm-up on the range.",

        tagStay: "Stay & Play",
        hotelHeading: "Hotel & Golf Restaurant Wissmannshof",
        hotelDesc: "Combine your golf round with a first-class getaway. Our 4-star resort features 53 stylish rooms and suites in circular guest houses – just steps away from the first tee.",
        hotelP1Title: "Sun Terrace:",
        hotelP1Desc: "Fresh regional & Mediterranean cuisine overlooking the scenic lake",
        hotelP2Title: "Golf Packages:",
        hotelP2Desc: "Attractive overnight packages including green fee & golf cart",
        hotelP3Title: "Events & Groups:",
        hotelP3Desc: "The perfect venue for company outings, club trips, and tournaments",
        btnHotelView: "Explore Hotel & Rooms ↗",
        btnHotelCall: "Reserve Table: +49 (0) 5543 / 999 22 39",

        tagDirect: "Direct Contact",
        contactHeading: "Inquire Tee Time & Contact",
        contactLead: "Reserve your preferred tee time easily via our inquiry form or give our club office a call. We look forward to welcoming you!",
        teamName: "Team Wissmannshof",
        teamRole: "Club Office & Guest Service",
        teamQuote: "“We are pleased to reserve your tee time and prepare your golf cart.”",
        lblGolfSec: "Golf Office",
        lblHotelRest: "Hotel & Restaurant",
        lblEmail: "Email",
        lblAddress: "Address",

        pccBadge: "⚡ PC CADDIE://online",
        pccCardTitle: "Real-Time Tee Time Booking",
        pccCardDesc: "Book your preferred tee time directly and reliably in the live PC CADDIE system:",
        btnPccDirect: "Book via PC CADDIE Now ↗",

        pccPill: "Live Tee Times",
        pccBannerTitle: "Prefer to book directly online?",
        pccBannerSub: "Use PC CADDIE to book available tee times in real time:",
        btnPccBanner: "Book Tee Time on PC CADDIE ↗",
        formDivider: "or send a non-binding request here",

        formHeaderTitle: "Send Guest / Tee Time Inquiry",
        formHeaderSub: "Let us know your preferred date, time, and number of players:",
        lblRoundType: "Desired Round / Offer *",
        opt18: "18-Hole Championship Round",
        opt9: "9-Hole Round",
        optSundowner: "Sundowner Rate (€88)",
        opt18Abo: "18-Hole Pass (5+1)",
        opt9Abo: "9-Hole Pass (5+1)",
        optCanyon: "Canyon Course (6-Hole)",
        optGroup: "Group / Corporate Tournament",
        optHotelPkg: "Golf & Hotel Overnight Package",
        lblDate: "Preferred Date *",
        lblTime: "Preferred Time",
        phTime: "e.g. approx. 10:30 AM",
        lblPlayers: "Number of Players *",
        lblCarts: "Golf Carts Required?",
        optNoCart: "No cart needed",
        opt1Cart: "1 Golf Cart",
        opt2Carts: "2 Golf Carts",
        optVipCart: "1 VIP Cart",
        optMoreCarts: "Multiple Carts (Group)",
        lblName: "Your Name *",
        phName: "First and last name",
        lblPhone: "Phone Number *",
        phPhone: "For reservation confirmation",
        lblEmail: "Your Email Address *",
        phEmail: "name@example.com",
        lblMsg: "Special Requests / Message",
        phMsg: "Rental club requirements, player handicaps, or restaurant reservation...",
        btnSubmit: "Submit Tee Time Request",
        formDisclaimer: "🔒 Your inquiry will be forwarded directly to our club office for processing.",

        fColResort: "Resort & Golf",
        fLinkHome: "Main Website Wissmannshof",
        fLinkMember: "Become a Member",
        fLinkAdv: "Adventure Golf",
        fLinkAcad: "Golf Academy",
        fColContact: "Direct Contact",
        fPhoneSec: "Golf Office: <a href=\"tel:+495543999335\">+49 (0) 55 43 / 999 335</a>",
        fPhoneHotel: "Hotel & Restaurant: <a href=\"tel:+4955439992239\">+49 (0) 55 43 / 999 22 39</a>",
        fEmailSec: "Email: <a href=\"mailto:info@wissmannshof.de\">info@wissmannshof.de</a>",
        fColLegal: "Legal",
        fImprint: "Imprint",
        fPrivacy: "Privacy Policy",
        fTerms: "Terms & Course Rules",
        fCopyright: "&copy; 2026 Sport- und Golf-Resort Gut Wissmannshof. All rights reserved.",
        fTagline: "Better than good. Your premium golf resort experience."
    }
};

// Global Language State (Shared across all pages)
let currentLang = localStorage.getItem('sgr_lang') || 'de';

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initHeaderScroll();
    initMobileNav();
    initPreselectHandlers();
    initDatePickerMin();
    initBookingForm();
});

/* ==========================================================================
   Language Switcher Logic
   ========================================================================== */
function initLanguage() {
    const deBtn = document.getElementById('lang-de');
    const enBtn = document.getElementById('lang-en');
    
    if (deBtn && enBtn) {
        deBtn.addEventListener('click', () => setLanguage('de'));
        enBtn.addEventListener('click', () => setLanguage('en'));
    }

    updateLanguageUI();
}

function setLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;
    localStorage.setItem('sgr_lang', lang);
    updateLanguageUI();
}

function updateLanguageUI() {
    // Update active button classes
    const deBtn = document.getElementById('lang-de');
    const enBtn = document.getElementById('lang-en');
    if (deBtn) deBtn.classList.toggle('active', currentLang === 'de');
    if (enBtn) enBtn.classList.toggle('active', currentLang === 'en');

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

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
   1. Header Scroll Effect
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
   3. Preselect Service in Booking Form from Greenfee Cards
   ========================================================================== */
function initPreselectHandlers() {
    const selectBox = document.getElementById('gf-type');
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
   4. Set Minimum Date to Today for Date Picker
   ========================================================================== */
function initDatePickerMin() {
    const dateInput = document.getElementById('gf-date');
    if (!dateInput) return;

    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (!dateInput.value) {
        dateInput.value = today;
    }
}

/* ==========================================================================
   5. Booking / Startzeit Form Handler (mailto generator)
   ========================================================================== */
function initBookingForm() {
    const form = document.getElementById('guest-inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const type = document.getElementById('gf-type').value;
        const date = document.getElementById('gf-date').value;
        const time = document.getElementById('gf-time').value.trim();
        const players = document.getElementById('gf-players').value;
        const carts = document.getElementById('gf-carts').value;
        const name = document.getElementById('gf-name').value.trim();
        const phone = document.getElementById('gf-phone').value.trim();
        const email = document.getElementById('gf-email').value.trim();
        const msg = document.getElementById('gf-msg').value.trim();

        if (!name || !phone || !email || !date) {
            alert(currentLang === 'de' ? 'Bitte füllen Sie alle Pflichtfelder aus.' : 'Please fill in all required fields.');
            return;
        }

        const subject = encodeURIComponent(`Startzeit / Gast-Anfrage: ${type} am ${date} - ${name}`);
        
        const bodyText = 
`Hallo Team Wissmannshof,

ich möchte eine Startzeit / Gast-Buchung anfragen:

- Angebot / Runde: ${type}
- Wunschdatum: ${date}
- Wunsch-Uhrzeit: ${time || 'Flexibel / nach Verfügbarkeit'}
- Anzahl Spieler: ${players}
- E-Carts: ${carts}

Kontaktdaten:
- Name: ${name}
- Telefon: ${phone}
- E-Mail: ${email}

${msg ? `Besondere Wünsche / Anmerkungen:
${msg}

` : ''}
Ich bitte um Bestätigung der Startzeit per E-Mail oder telefonisch.

Mit freundlichen Grüßen
${name}`;

        const body = encodeURIComponent(bodyText);
        window.location.href = `mailto:info@wissmannshof.de?subject=${subject}&body=${body}`;
    });
}
