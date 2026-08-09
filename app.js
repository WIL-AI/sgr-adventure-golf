/* ==========================================================================
   Sport- und Golf-Resort Gut Wissmannshof - Adventure Golf Landing Page
   Interactive Logic & Multi-Language Handler (Expanded with Scorecard Data)
   ========================================================================== */

// 18 Holes Data Dictionary containing Loop, Par, Distance (m) and slogans in DE and EN
const holesData = [
    {
        num: 1,
        par: 3,
        dist: 12,
        image: "assets/hole_1.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Ahoi Landratten – auf Gut Wissmannshof findet ihr eure Koje, eure Festtafel, euer Fairway und euer Abenteuer.",
        sloganEn: "Ahoi Landlubbers – at Gut Wissmannshof you will find your berth, your banquet, your fairway, and your adventure.",
        descDe: "Zum Warmspielen! Startet euren Törn und umspielt die Fässer im Hafen.",
        descEn: "Warm-up hole! Start your voyage and play around the barrels in the harbor."
    },
    {
        num: 2,
        par: 2,
        dist: 9,
        image: "assets/hole_2.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Willkommen im Heimathafen Gut Wissmannshof: Hier schlaft ihr wie Kapitäne, schlemmt wie Piraten, golft wie Entdecker und feiert wie die Crew.",
        sloganEn: "Welcome to homeport Gut Wissmannshof: Sleep like captains, feast like pirates, golf like explorers, and celebrate like the crew.",
        descDe: "Ein kurzes, knackiges Par 2. Achtet auf die Neigung der Planken!",
        descEn: "A short, snappy Par 2. Watch out for the tilt of the planks!"
    },
    {
        num: 3,
        par: 3,
        dist: 14,
        image: "assets/hole_3.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Setzt Kurs auf Gut Wissmannshof – Betten wie Kajüten, Teller wie Schatztruhen, Fairways wie Inseln und Spaß wie auf hoher See.",
        sloganEn: "Set course for Gut Wissmannshof – beds like cabins, plates like treasure chests, fairways like islands, and fun like on the high seas.",
        descDe: "Weite Bahn mit einer kniffligen Kurve um die Sandbank.",
        descEn: "Wide lane with a tricky turn around the sandbank."
    },
    {
        num: 4,
        par: 4,
        dist: 18,
        image: "assets/hole_4.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Land in Sicht! Wer auf Gut Wissmannshof anlegt, erobert Hotelkojen, Piratenmahl und Golfabenteuer in einem einzigen Hafen.",
        sloganEn: "Land ahoy! Anchor at Gut Wissmannshof and conquer hotel berths, pirate feasts, and golf adventures in a single harbor.",
        descDe: "Das erste schwere Loch. Die Steigung erfordert einen starken Schlag.",
        descEn: "The first tough hole. The incline requires a powerful stroke."
    },
    {
        num: 5,
        par: 3,
        dist: 11,
        image: "assets/hole_5.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Ahoi! Auf Gut Wissmannshof könnt ihr anlegen, ausschlafen, schmausen, golfen und jeden Tag neue Piratenstories schreiben.",
        sloganEn: "Ahoi! At Gut Wissmannshof you can dock, sleep in, feast, golf, and write new pirate stories every single day.",
        descDe: "Vorbei am ersten Wassergraben. Zielt genau zwischen den Klippen hindurch.",
        descEn: "Pass the first water hazard. Aim precisely between the cliffs."
    },
    {
        num: 6,
        par: 2,
        dist: 8,
        image: "assets/hole_6.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Anker werfen, Landratten – hier warten eure Nachtlager, eure Kombüse, eure Golf-Schatzsuche und euer Bord-Spaß.",
        sloganEn: "Drop anchor, landlubbers – your quarters, your galley, your golf treasure hunt, and shipboard fun await.",
        descDe: "Ein tückischer Tunnel. Nur ein gerader Schlag sichert das Par.",
        descEn: "A treacherous tunnel. Only a straight shot secures Par."
    },
    {
        num: 7,
        par: 3,
        dist: 13,
        image: "assets/hole_7.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Gut Wissmannshof: Euer Piratenstützpunkt zum Übernachten, Schlemmen, Golfen und Geschichten erzählen bis weit nach Sonnenuntergang.",
        sloganEn: "Gut Wissmannshof: Your pirate outpost to sleep, feast, golf, and tell tales long after sunset.",
        descDe: "Schöne Hanglage. Spielt über den Hügel auf das tiefer liegende Grün.",
        descEn: "Beautiful hillside layout. Play over the ridge down to the green."
    },
    {
        num: 8,
        par: 4,
        dist: 16,
        image: "assets/hole_8.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Wer hier einläuft, bekommt mehr als nur Landgang: Eine Koje zum Träumen, eine Kombüse zum Genießen, Bahnen zum Golfen und Abenteuer für die ganze Crew.",
        sloganEn: "Sailing in here gets you more than shore leave: A cabin to dream in, a galley to enjoy, fairways to golf, and adventures for the whole crew.",
        descDe: "Die Brücke muss überquert werden! Zu viel Kraft und ihr landet im Fluss.",
        descEn: "Cross the bridge! Too much power and you land in the river."
    },
    {
        num: 9,
        par: 3,
        dist: 10,
        image: "assets/hole_9.jpg",
        loopDe: "Schleife 1: Dschungel-Camp",
        loopEn: "Loop 1: Jungle Camp",
        sloganDe: "Euer Kurs: Gut Wissmannshof – hier wird aus einem Bett eine Kapitänskoje, aus jedem Teller Beute, aus jedem Loch ein Golf-Schatz und aus jedem Abend ein Abenteuer.",
        sloganEn: "Your heading: Gut Wissmannshof – where beds turn into captain's cabins, plates into booty, holes into golf treasures, and evenings into adventures.",
        descDe: "Halbzeit! Spielt knapp an den Weinfässern vorbei ins Loch. Danach geht es auf Kurs 2!",
        descEn: "Halfway mark! Putt closely past the wine barrels into the hole. Then set sail for Course 2!"
    },
    {
        num: 10,
        par: 2,
        dist: 7,
        image: "assets/hole_10.jpg",
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Aye, Käpt’n – wir servieren euch ruhige Nächte, volle Teller, lange Drives und kurze Putts, abgeschmeckt mit Piraten-Spaß.",
        sloganEn: "Aye, Captain – we serve you quiet nights, full plates, long drives, and short putts, seasoned with pirate fun.",
        descDe: "Start der Schatzsuche! Bahn inspiriert von berühmten Golflöchern. Nur ein kleines Sandhindernis blockiert den Weg.",
        descEn: "Start of the Treasure Hunt! Hole inspired by famous golf holes. Only a small sand bunker blocks the path."
    },
    {
        num: 11,
        par: 3,
        dist: 15,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Heimathafen für müde Seebären: Schlafen wie im Logbuch, essen wie im Piratenroman, golfen wie Schatzsucher und lachen wie echte Freibeuter.",
        sloganEn: "Homeport for weary sea dogs: Sleep like in a logbook, eat like in a pirate novel, golf like treasure hunters, and laugh like true buccaneers.",
        descDe: "Ein geschwungenes Grün erfordert Gefühl im Handgelenk.",
        descEn: "A curved green layout requiring a gentle putting touch."
    },
    {
        num: 12,
        par: 4,
        dist: 20,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Gut Wissmannshof – wo euer Zimmer zur Kajüte wird, das Restaurant zur Galley, der Platz zum Golfrevier und jeder Tag zur Abenteuerfahrt.",
        sloganEn: "Gut Wissmannshof – where your room becomes a cabin, the restaurant a galley, the course a golf territory, and each day a voyage of adventure.",
        descDe: "Die längste Bahn auf Kurs 2. Vorsicht vor der tiefen Senke in der Mitte.",
        descEn: "The longest hole on Course 2. Beware of the deep depression in the middle."
    },
    {
        num: 13,
        par: 3,
        dist: 12,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Arr! Wer hier übernachtet, frühstückt wie ein Pirat, spielt Golf wie ein Entdecker und findet Spaß wie auf einer Schatzinsel.",
        sloganEn: "Arr! Stay overnight, breakfast like a pirate, play golf like an explorer, and find fun like on a treasure island.",
        descDe: "Erhöhtes Grün. Dosiert euren Schlag genau, um nicht hinten runterzufallen.",
        descEn: "Elevated green. Gauge your speed perfectly to avoid running off the back."
    },
    {
        num: 14,
        par: 2,
        dist: 8,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Von der Kajüte zum Abschlag: Auf Gut Wissmannshof liegen Hotel, Restaurant, Golfplatz und Piratenabenteuer nur eine Planke voneinander entfernt.",
        sloganEn: "From cabin to tee-off: At Gut Wissmannshof, hotel, restaurant, golf course, and pirate adventure are just a plank apart.",
        descDe: "Hindernislauf vorbei an den Ankeketten.",
        descEn: "Obstacle run past the heavy anchor chains."
    },
    {
        num: 15,
        par: 3,
        dist: 13,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Ahoi Genießer! Hier gibt’s weiche Kissen, starke Küche, weite Fairways und jede Menge Seemannsgarn für den Abend an der Bar.",
        sloganEn: "Ahoi gourmets! Here are soft pillows, hearty cooking, wide fairways, and plenty of sailor's yarn for evenings at the bar.",
        descDe: "Spielt um das Gestrüpp herum. Der direkte Weg ist versperrt.",
        descEn: "Play around the heavy vegetation. The direct path is blocked."
    },
    {
        num: 16,
        par: 3,
        dist: 11,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Gut Wissmannshof: Hafen für alle, die erst gut schlafen, dann gut essen, dann gut golfen und am Ende laut ‚Yo-ho-ho!‘ rufen wollen.",
        sloganEn: "Gut Wissmannshof: Haven for all who want to sleep well, eat well, golf well, and shout 'Yo-ho-ho!' in the end.",
        descDe: "Wasser zur Rechten! Haltet euch links, um den Ball trocken zu halten.",
        descEn: "Water to the right! Stay left to keep your ball dry."
    },
    {
        num: 17,
        par: 4,
        dist: 17,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Wer hier anlegt, erlebt die volle Fahrt: Gemütlich nächtigen, lustvoll schlemmen, mutig golfen und mit der Crew bis zur letzten Welle feiern.",
        sloganEn: "Anchor here for the full voyage: Cozy lodging, hearty feasting, brave golfing, and celebrating with the crew to the last wave.",
        descDe: "Engpass! Zielt durch die Steine hindurch auf das geneigte Grün.",
        descEn: "Bottleneck! Aim through the rock portal onto the sloping green."
    },
    {
        num: 18,
        par: 3,
        dist: 14,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Euer Piratenkurs: Hotelbett, Restaurantteller, Golfball und Bauchmuskel-Lachen – alles an einem Ort, alles auf Gut Wissmannshof.",
        sloganEn: "Your pirate course: Hotel bed, restaurant plate, golf ball, and belly laughs – all in one place, all at Gut Wissmannshof.",
        descDe: "Das Finale vor dem Clubhaus! Einlocher erbeuten den Schatz und holen das Par.",
        descEn: "The grand finale in front of the clubhouse! Sink it, claim the treasure, and fetch Par."
    }
];

// Bilingual text mappings
const translations = {
    de: {
        navWelcome: "An Bord",
        navHoles: "Bahnen",
        navPromo: "Adventure & Golf",
        navPrices: "Preise & Zeiten",
        navRules: "Spielregeln",
        navContact: "Kontakt & Anfahrt",
        heroTagline: "Adventure Golf Gut Wissmannshof",
        heroHeadline: "Ahoi Landratten – euer Heimathafen für Betten, Beute und Abenteuer!",
        heroSub: "Übernachten · Schlemmen · Golf spielen · Spaß haben",
        btnBook: "Abenteuer buchen",
        btnExplore: "Die Bahnen erkunden",
        scrollTitle: "An Bord der Gut Wissmannshof",
        scrollMessage: "Willkommen im ultimativen Heimathafen für die ganze Crew! Bei uns tauscht ihr harte Planken gegen gemütliche Hotelbetten (53 stilvolle Zimmer & Suiten in unseren architektonisch einzigartigen Rundhäusern) und hungrige Mägen gegen feinste Küche in unserem Golf-Restaurant „Wissmannshof“ (mediterrane & regionale Spezialitäten, Sonntags-Brunch & spezielle Piratenteller und Schatzsuche-Limos für die kleinen Matrosen). Egal ob ihr die Bälle auf unserer 18-Loch-Adventure-Golfanlage einlocht oder den Abschlag auf dem großen Meisterschaftsplatz wagt – hier ist der Spaß für Groß und Klein garantiert!",
        featSleep: "Übernachten",
        featSleepDesc: "Rundhäuser & Kojen",
        featEat: "Schlemmen",
        featEatDesc: "vom Frühstück bis zum Dreigangmenü",
        featGolf: "Golfen",
        featGolfDesc: "alles, was das Herz begehrt",
        scorecardTitle: "Interaktive Scorekarte & Bahnen-Plan",
        scorecardSubtitle: "Zwei Schleifen à 9 Bahnen: Dschungel-Camp (1-9) und Schatzsuche (10-18). Klickt auf eine Bahn, um Details und Slogans anzuzeigen!",
        holeLabel: "Bahn",
        parLabel: "Par",
        distLabel: "Länge",
        btnPrevHole: "Vorherige",
        btnNextHole: "Nächste",
        promoBadge: "Neues Gruppen-Angebot",
        promoTitle: "Adventure & Golf",
        promoDesc: "Ihr habt auf unserem Adventure-Golfplatz Blut geleckt und wollt wissen, wie sich echtes Golf anfühlt? Trommelt mindestens 6 Piraten zusammen und bucht unser exklusives Schnupperpaket!",
        promoCardTitle: "Adventure & Golf Paket",
        promoCardSub: "Das Rundum-Abenteuer für die Crew",
        promoFeat1: "90 Minuten Golf-Workspiel mit einem Profi-Trainer auf der Driving Range & Übungsplatz",
        promoFeat2: "Anschließend eine komplette 18-Loch-Runde auf unserem Adventure-Golf-Kurs",
        promoFeat3: "Großer Piraten-Pommes-Teller zum Picken für die ganze Crew nach der Runde",
        promoFeat4: "Ein erfrischender Softdrink pro Person inklusive",
        promoPricePerPerson: "Pro Person",
        btnEnlist: "Jetzt Crew anheuern",
        galleryTitle: "Impressionen vom Kurs",
        slide1Title: "Startpunkt Abschlag 1-9",
        slide1Desc: "Der offizielle Eingangsbereich und Startpunkt für euer Adventure-Golf-Abenteuer.",
        slide2Title: "Die Kräuterspirale",
        slide2Desc: "Unsere kunstvoll gemauerte Kräuterspirale inmitten der blühenden Bahnen.",
        slide3Title: "Zebra-Jeep & Blütenmeer",
        slide3Desc: "Blick über die Bahnen mit unserem echten Zebra-Geländewagen als Hindernis.",
        slide4Title: "Die Piraten-Oase",
        slide4Desc: "Entspannt unter Palmen in der Hängematte neben dem rauschenden Wasserfall.",
        slide5Title: "Kombüsen-Schmaus",
        slide5Desc: "Nach dem Törn gibt es leckere Pommes zum Picken für die ganze Crew.",
        pricesTitle: "Eintrittspreise & Zeiten",
        priceHeaderAge: "Spieler",
        priceHeaderPrice: "Preis (Runde)",
        priceAdult: "Erwachsene",
        priceKid: "Kinder (bis 12 Jahre)",
        priceFamily: "Familienkarte (2 Erw. + 2 Kinder)",
        priceTen: "10er-Karte (Erwachsene)",
        priceNote: "Preishighlight: Neue Automaten für Schläger & Bälle vor Ort!",
        hoursTitle: "Öffnungszeiten & Büro",
        hoursDaily: "Automat & Bürozeiten",
        hoursTimes: "Automat: 07:00 – 21:00 Uhr",
        hoursDesc: "Unser Büro ist während der Saison täglich von 08:00 bis 18:00 Uhr für euch besetzt. Außerhalb dieser Zeiten könnt ihr dank des Schlägerautomaten flexibel von 07:00 bis 21:00 Uhr spielen!",
        kioskSectionTitle: "Schläger- & Ballausgabe",
        kioskSectionSubtitle: "So funktioniert unser moderner Ticket- und Mietautomat vor Ort",
        kioskStep1Title: "1. Bezahlung",
        kioskStep1Desc: "Bezahlt bequem bargeldlos mit EC-Karte oder Kreditkarte am Automaten-Terminal.",
        kioskStep2Title: "2. Schläger wählen",
        kioskStep2Desc: "Wählt die Anzahl der Spieler. Die Fächer sind mit Kombinationen aus 2, 3 oder 4 Schlägern und Bällen befüllt (zum Preis von 8,50 € pro Spieler). Wichtig: Kinderschläger sind am Automaten derzeit noch nicht verfügbar (in Planung). Diese erhaltet ihr während der Bürozeiten (08:00 – 18:00 Uhr) direkt im Sekretariat.",
        kioskStep3Title: "3. E-Mail & PIN",
        kioskStep3Desc: "Gebt eure E-Mail-Adresse und einen selbst erdachten 6-stelligen PIN ein. Der PIN wird euch per E-Mail gesendet. Gut merken!",
        kioskStep4Title: "4. Fach öffnen & spielen",
        kioskStep4Desc: "Das Fach öffnet sich automatisch. Schläger entnehmen und loslegen. (Es wird 15 € Kaution pro Fach berücksichtigt).",
        kioskStep5Title: "5. Rückgabe",
        kioskStep5Desc: "PIN eingeben, Fach öffnet sich. Schläger und Bälle vollzählig wieder einstellen. Die Kaution wird sofort erstattet!",
        kioskAlertTitle: "Wichtiger Hinweis zur Schlägerrückgabe",
        kioskAlertDesc: "Sollte einmal ein Ball verloren gehen, ist das kein Problem – unsere Crew sucht ihn wieder. Wichtig ist aber, dass die geliehenen Schläger vollzählig wieder im Fach stehen, damit das Spiel ordnungsgemäß beendet wird.",
        
        // Rules Section
        rulesTitle: "Spiel- & Verhaltensregeln",
        rulesSubtitle: "Für eine sichere, faire und lustige Runde auf unserem Parcours",
        rulesHeader: "Spielregeln (Auszug)",
        rulesF1: "Maximal 4 Spieler bilden eine Spielergruppe (Flight). Größere Gruppen teilen sich auf.",
        rulesF2: "Ziel ist es, den Ball mit möglichst wenigen Schlägen ins Loch zu bringen. Jeder Schlag zählt als Punkt.",
        rulesF3: "Nach maximal 7 Schlägen ohne Erfolg wird eine 8 notiert und die Bahn ist beendet.",
        rulesF4: "Der Ball wird zum Start innerhalb einer Putterlänge von der hinteren Begrenzung eingesetzt.",
        rulesF5: "Die Lochfahnen verbleiben während des Spiels immer im Loch.",
        rulesF6: "Landet ein Ball im Wasser oder Aus, wird er an der Austrittsstelle eingesetzt (+ 1 Strafschlag).",
        rulesEndNote: "Am Ende werden alle Schläge addiert – Sieger ist, wer am wenigsten Schläge benötigt.",
        conductHeader: "Verhaltensregeln",
        conductF1: "Spielbahnen nur mit flachen, möglichst rutschfesten (Sport-)Schuhen betreten.",
        conductF2: "Die Reihenfolge der Bahnen 1-9 (Dschungel-Camp) sowie 1-9 (Schatzsuche) ist einzuhalten.",
        conductF3: "Bitte andere Gruppen nicht durch hohen Lärmpegel oder vorzeitiges Betreten stören.",
        conductF4: "Nur mit Leihgeräten spielen. Bei Verlust: Ball 1,00 € | Schläger 12,00 € Gebühr.",
        conductF5: "Niemals direkt hinter einem Spieler stehen, der gerade ausholt oder schlägt.",
        conductF6: "Bälle aus dem Wasser ausschließlich mit den bereitstehenden Keschern fischen.",
        conductF7: "Eltern haben Aufsichtspflicht und müssen Kinder über Gefahren (Wasser, Hänge) aufklären.",
        conductF8: "Piratenhunde dürfen gerne angeleint mit auf die Anlage. Für das kleine Malheur findet ihr Beutel an den Abfalleimern in der Nähe des Kurses.",
        
        // Putter to Golf Section
        putterTitle: "Lust auf mehr? Vom Putter zum Golf...",
        putterSubtitle: "Ihr habt geputtet und gelacht. Golf ist näher als man denkt! Lernt das Spiel mit unseren Pros.",
        compactTitle: "DGV Platzreife - Kompaktkurs",
        compactDesc: "Der offizielle DGV-Einstieg in der Gruppe. In einer kompakten Kurswoche (4 Tage) lernt ihr gemeinsam alle Grundschläge, Verhaltensregeln auf dem Platz und die wichtigste Theorie, gefolgt von der Prüfungsrunde. Schläger und Übungsbälle sind enthalten.",
        compactDetails: "Kompaktkurs | max. 8 Personen | 349 € pro Person",
        indivTitle: "DGV Platzreife - Individualkurs",
        indivDesc: "Maßgeschneiderte Betreuung durch den Pro. Genießt flexible Termine, individuelles Feedback und ein intensives Training zu zweit oder zu dritt, bis hin zur erfolgreichen Platzreifeprüfung. Schläger und Übungsbälle inklusive.",
        indivDetails: "Individualkurs | 2 bis 3 Personen | 499 € pro Person",
        btnLearnMore: "Kurs anfragen",

        contactTitle: "Heimathafen Koordinaten",
        contactHdrAddress: "Adresse",
        contactHdrPhone: "Telefon",
        contactHdrEmail: "E-Mail",
        contactHdrWeb: "Webseite",
        modalTitle: "Crew anheuern für Adventure & Golf",
        modalSub: "Schreibt uns euren Terminwunsch. Wir melden uns umgehend bei euch zurück!",
        formName: "Euer Name / Kapitän",
        formEmail: "Eure E-Mail-Adresse",
        formDate: "Wunschtermin",
        formPlayers: "Anzahl Piraten (Min. 6)",
        formMessage: "Flaschenpost-Nachricht",
        formPlaceholderMessage: "Ahoi! Wir wollen am...",
        btnSend: "Anfrage per E-Mail absenden",
        modalEmailNote: "Hinweis: Eure Anfrage wird als E-Mail-Entwurf an info@wissmannshof.de vorbereitet.",
        btnDownloadScorecard: "Scorekarte (PDF) herunterladen",
        kidsMapTitle: "Für kleine Nachwuchs-Piraten 🏴‍☠️",
        kidsMapDesc: "Damit die kleinen Matrosen perfekt vorbereitet sind, findet ihr hier die bunte Kinder-Golfkarte mit allen spannenden Spieldetails und Zeichnungen zum Download!",
        btnDownloadKidsMap: "Kinder-Golfkarte (PDF) herunterladen",
        copyright: "Sport- und Golf-Resort Gut Wissmannshof. Alle Rechte vorbehalten.",
        imprint: "Impressum",
        privacy: "Datenschutz"
    },
    en: {
        navWelcome: "On Board",
        navHoles: "Holes",
        navPromo: "Adventure & Golf",
        navPrices: "Prices & Hours",
        navRules: "Rules",
        navContact: "Contact & Directions",
        heroTagline: "Adventure Golf Gut Wissmannshof",
        heroHeadline: "Ahoi Landlubbers – your safe haven for berths, booty, and adventure!",
        heroSub: "Lodging · Dining · Playing Golf · Having Fun",
        btnBook: "Book Adventure",
        btnExplore: "Explore the Holes",
        scrollTitle: "On Board Gut Wissmannshof",
        scrollMessage: "Welcome to the ultimate homeport for the entire crew! With us, you trade hard deck planks for cozy hotel beds (53 stylish rooms & suites in our architecturally unique circular guest houses) and hungry bellies for the finest fare in our Golf Restaurant 'Wissmannshof' (mediterranean & regional specialties, Sunday brunch & special pirate plates and treasure hunt sodas for small sailors). Whether you are sinking putts on our 18-hole adventure golf course or daring to tee off on our large championship course – fun is guaranteed for all ages!",
        featSleep: "Lodging",
        featSleepDesc: "Round Houses & Berths",
        featEat: "Dining",
        featEatDesc: "from breakfast to a three-course dinner",
        featGolf: "Golfing",
        featGolfDesc: "everything your heart desires",
        scorecardTitle: "Interactive Scorecard & Holes Map",
        scorecardSubtitle: "Two loops of 9 holes: Jungle Camp (1-9) and Treasure Hunt (10-18). Click on any hole to show details and slogans!",
        holeLabel: "Hole",
        parLabel: "Par",
        distLabel: "Length",
        btnPrevHole: "Previous",
        btnNextHole: "Next",
        promoBadge: "New Group Package",
        promoTitle: "Adventure & Golf",
        promoDesc: "Acquired a taste for putting on our adventure course and want to experience real golf? Round up at least 6 pirates and book our exclusive entry package!",
        promoCardTitle: "Adventure & Golf Package",
        promoCardSub: "The All-Inclusive Crew Adventure",
        promoFeat1: "90 minutes of active golf clinic with a professional trainer on the driving range & practice greens",
        promoFeat2: "Followed by a full 18-hole round on our Adventure Golf course",
        promoFeat3: "A huge platter of pirate fries to share among the crew after the round",
        promoFeat4: "One refreshing soft drink per person included",
        promoPricePerPerson: "Per Person",
        btnEnlist: "Enlist Your Crew Now",
        galleryTitle: "Course Impressions",
        slide1Title: "Starting Point Hole 1-9",
        slide1Desc: "The official entrance area and starting point for your adventure golf journey.",
        slide2Title: "The Herb Spiral",
        slide2Desc: "Our artfully built stone herb spiral surrounded by blooming fairways.",
        slide3Title: "Zebra Jeep & Sea of Flowers",
        slide3Desc: "A colorful overview of the lanes with our real zebra jeep obstacle.",
        slide4Title: "Pirate's Oasis",
        slide4Desc: "Relax under palm trees in a hammock right next to the roaring waterfall.",
        slide5Title: "Galley Feast",
        slide5Desc: "After the round, share a giant platter of golden fries with the crew.",
        pricesTitle: "Admission Prices & Hours",
        priceHeaderAge: "Player",
        priceHeaderPrice: "Price (Round)",
        priceAdult: "Adults",
        priceKid: "Children (up to 12 years)",
        priceFamily: "Family Card (2 Adults + 2 Kids)",
        priceTen: "10-Round Pass (Adults)",
        priceNote: "Price Highlight: New ticketing and club rental machine on site!",
        hoursTitle: "Opening Hours & Office",
        hoursDaily: "Kiosk & Office Hours",
        hoursTimes: "Kiosk: 07:00 AM – 09:00 PM",
        hoursDesc: "Our office is staffed daily during the season from 08:00 AM to 06:00 PM. Outside these hours, you can play flexibly from 07:00 AM to 09:00 PM thanks to our automated rental kiosk!",
        kioskSectionTitle: "Club & Ball Rental Kiosk",
        kioskSectionSubtitle: "How our modern ticket and club rental machine works on site",
        kioskStep1Title: "1. Payment",
        kioskStep1Desc: "Pay conveniently cashless with an EC-card or credit card at the kiosk terminal.",
        kioskStep2Title: "2. Select Clubs",
        kioskStep2Desc: "Select the number of players. Compartments contain combinations of 2, 3, or 4 clubs and balls (priced at 8.50 € per player). Note: Child clubs are not yet available at the kiosk (planned for the future). You can rent child clubs during office hours (08:00 AM – 06:00 PM) at the main office.",
        kioskStep3Title: "3. Email & PIN",
        kioskStep3Desc: "Enter your email address and a self-chosen 6-digit PIN. The PIN is also emailed to you. Remember it!",
        kioskStep4Title: "4. Open Slot & Play",
        kioskStep4Desc: "The slot opens automatically. Grab your clubs/balls. (A 15 € deposit per slot is pre-authorized).",
        kioskStep5Title: "5. Return",
        kioskStep5Desc: "Enter PIN, slot opens. Return all rented clubs and balls to the locker. Your deposit is immediately refunded!",
        kioskAlertTitle: "Important Note on Returns",
        kioskAlertDesc: "Should you lose a ball, no worries – our crew will search for it. However, all rented clubs must be returned to the slot in the correct quantity to properly close your rental game.",
        
        // Rules Section
        rulesTitle: "Game & Conduct Rules",
        rulesSubtitle: "For a safe, fair, and fun round on our adventure course",
        rulesHeader: "Game Rules",
        rulesF1: "Max 4 players per group (flight). Larger groups must split up.",
        rulesF2: "The goal is to get the ball into the hole with as few strokes as possible. Each stroke counts as 1 point.",
        rulesF3: "After max 7 unsuccessful strokes, write down an 8 and finish the hole.",
        rulesF4: "The ball is placed within one putter length of the rear border at the start.",
        rulesF5: "Flagsticks must always remain in the hole during play.",
        rulesF6: "If a ball lands in water or out of bounds, replace it at the exit point (+ 1 penalty stroke).",
        rulesEndNote: "At the end, sum up all strokes – the player with the lowest score wins.",
        conductHeader: "Code of Conduct",
        conductF1: "Only step on the play lanes with flat, non-slip (sport) shoes.",
        conductF2: "Keep the sequence of holes 1-9 (Jungle Camp) and 1-9 (Treasure Hunt).",
        conductF3: "Do not disturb other groups by loud noise or entering their holes prematurely.",
        conductF4: "Only play with rented gear. In case of loss: Ball 1.00 € | Club 12.00 € fee.",
        conductF5: "Never stand directly behind a player performing their swing.",
        conductF6: "Retrieve balls from water hazards exclusively using the provided nets.",
        conductF7: "Parents must supervise their children and instruct them about hazards (water, slopes).",
        conductF8: "Pirate dogs are welcome on the course if kept on a leash. For any minor mishaps, waste bags are available at the bins near the course.",

        // Putter to Golf Section
        putterTitle: "Want more? From Putter to Golf...",
        putterSubtitle: "You putted and laughed. Golf is closer than you think! Learn the game with our Pros.",
        compactTitle: "DGV License - Compact Course",
        compactDesc: "The official DGV entry in a group setting. Learn all basic swings, behavior rules, and key theory during a compact week (4 days), concluding with the license exam. Clubs and practice balls included.",
        compactDetails: "Compact Course | max 8 people | 349 € per person",
        indivTitle: "DGV License - Individual Course",
        indivDesc: "Tailored coaching by our Pro. Enjoy flexible dates, personal feedback, and intense training in a small group of 2 or 3 players up to the successful license exam. Clubs and practice balls included.",
        indivDetails: "Individual Course | 2 to 3 people | 499 € per person",
        btnLearnMore: "Inquire Course",

        contactTitle: "Homeport Coordinates",
        contactHdrAddress: "Address",
        contactHdrPhone: "Phone",
        contactHdrEmail: "Email",
        contactHdrWeb: "Website",
        modalTitle: "Enlist Crew for Adventure & Golf",
        modalSub: "Send us your preferred date. We will get back to you immediately!",
        formName: "Your Name / Captain",
        formEmail: "Your Email Address",
        formDate: "Preferred Date",
        formPlayers: "Number of Pirates (Min. 6)",
        formMessage: "Message in a Bottle",
        formPlaceholderMessage: "Ahoi! We would like to come on...",
        btnSend: "Submit Request via Email",
        modalEmailNote: "Note: Your inquiry will be prepared as an email draft to info@wissmannshof.de.",
        btnDownloadScorecard: "Download Scorecard (PDF)",
        kidsMapTitle: "For Young Apprentice Pirates 🏴‍☠️",
        kidsMapDesc: "To keep our small sailors fully prepared, download the colorful Kids' Golf Map featuring all the exciting game details and illustrations!",
        btnDownloadKidsMap: "Download Kids' Golf Map (PDF)",
        copyright: "Sport- und Golf-Resort Gut Wissmannshof. All rights reserved.",
        imprint: "Imprint",
        privacy: "Privacy Policy"
    }
};

// Global State
let currentLang = localStorage.getItem('sgr_lang') || 'de';
let currentHoleIndex = 0;
let currentSlideIndex = 0;
let slideInterval;

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initHoleSelector();
    initSlider();
    initMobileNav();
    initModal();
});

/* ==========================================================================
   Language Switcher Logic
   ========================================================================== */
function initLanguage() {
    const deBtn = document.getElementById('lang-de');
    const enBtn = document.getElementById('lang-en');
    
    deBtn.addEventListener('click', () => setLanguage('de'));
    enBtn.addEventListener('click', () => setLanguage('en'));
    
    // Apply initial language
    updateLanguageUI();
}

function setLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;
    localStorage.setItem('sgr_lang', lang);
    updateLanguageUI();
    
    // Update the currently displayed hole texts to match the selected language
    renderActiveHole();
}

function updateLanguageUI() {
    // Toggle active buttons
    document.getElementById('lang-de').classList.toggle('active', currentLang === 'de');
    document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
    
    // Update all elements with a translation key
    const translateElements = document.querySelectorAll('[data-t]');
    translateElements.forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[currentLang] && translations[currentLang][key]) {
            // Check if it's an input or textarea with placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[currentLang][key]);
                }
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
}

/* ==========================================================================
   Hole Selector / Scorecard Logic
   ========================================================================== */
function initHoleSelector() {
    const grid = document.getElementById('holes-grid');
    const prevBtn = document.getElementById('hole-prev-btn');
    const nextBtn = document.getElementById('hole-next-btn');
    
    // Generate 18 buttons
    holesData.forEach((hole, index) => {
        const btn = document.createElement('button');
        btn.classList.add('hole-btn');
        btn.textContent = hole.num;
        btn.setAttribute('aria-label', `Hole ${hole.num}`);
        if (index === 0) btn.classList.add('active');
        
        btn.addEventListener('click', () => {
            setActiveHole(index);
        });
        
        grid.appendChild(btn);
    });
    
    prevBtn.addEventListener('click', () => {
        let prevIndex = currentHoleIndex - 1;
        if (prevIndex < 0) prevIndex = holesData.length - 1;
        setActiveHole(prevIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        let nextIndex = currentHoleIndex + 1;
        if (nextIndex >= holesData.length) nextIndex = 0;
        setActiveHole(nextIndex);
    });
    
    // Render hole 1 initial content
    renderActiveHole();
}

function setActiveHole(index) {
    currentHoleIndex = index;
    
    // Toggle active state on grid buttons
    const btns = document.querySelectorAll('.hole-btn');
    btns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });
    
    // Render content with smooth transition
    const panel = document.getElementById('hole-detail-panel');
    panel.classList.remove('fade-in');
    void panel.offsetWidth; // Trigger reflow to restart animation
    panel.classList.add('fade-in');
    
    renderActiveHole();
}

function renderActiveHole() {
    const hole = holesData[currentHoleIndex];
    
    document.getElementById('hole-num-val').textContent = hole.num;
    document.getElementById('hole-par-val').textContent = hole.par;
    document.getElementById('hole-dist-val').textContent = hole.dist + 'm';
    document.getElementById('hole-loop-val').textContent = currentLang === 'de' ? hole.loopDe : hole.loopEn;
    
    document.getElementById('hole-quote').textContent = currentLang === 'de' ? hole.sloganDe : hole.sloganEn;
    document.getElementById('hole-desc').textContent = currentLang === 'de' ? hole.descDe : hole.descEn;
    
    // Dynamic Hole Map / Diagram loading
    const mapWrapper = document.getElementById('hole-map-wrapper');
    const mapImg = document.getElementById('hole-map-img');
    if (mapWrapper && mapImg) {
        if (hole.image) {
            mapImg.src = hole.image;
            mapImg.alt = currentLang === 'de' ? `Bahn ${hole.num} Grafik` : `Hole ${hole.num} Map`;
            mapWrapper.style.display = 'block';
        } else {
            mapWrapper.style.display = 'none';
        }
    }
}

/* ==========================================================================
   Image Slider Logic
   ========================================================================== */
function initSlider() {
    const wrapper = document.getElementById('slider-wrapper');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dotsContainer = document.getElementById('slider-dots');
    const slides = document.querySelectorAll('.slide');
    
    // Create navigation dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (idx === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Slide ${idx + 1}`);
        
        dot.addEventListener('click', () => {
            goToSlide(idx);
            resetSliderAutoplay();
        });
        
        dotsContainer.appendChild(dot);
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSliderAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSliderAutoplay();
    });
    
    // Autoplay configuration
    startSliderAutoplay();
}

function startSliderAutoplay() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function resetSliderAutoplay() {
    clearInterval(slideInterval);
    startSliderAutoplay();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    let idx = currentSlideIndex - 1;
    if (idx < 0) idx = slides.length - 1;
    goToSlide(idx);
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    let idx = currentSlideIndex + 1;
    if (idx >= slides.length) idx = 0;
    goToSlide(idx);
}

function goToSlide(index) {
    currentSlideIndex = index;
    const wrapper = document.getElementById('slider-wrapper');
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
}

/* ==========================================================================
   Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav-link');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        const isOpen = menu.classList.contains('open');
        toggle.innerHTML = isOpen ? '&#10006;' : '&#9776;'; // X or Hamburger
    });
    
    // Close menu when clicking link
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.innerHTML = '&#9776;';
        });
    });
}

/* ==========================================================================
   Booking Modal & Email Link Generator
   ========================================================================== */
function initModal() {
    const modal = document.getElementById('booking-modal');
    const openBtns = document.querySelectorAll('.trigger-booking');
    const closeBtn = document.getElementById('modal-close');
    const form = document.getElementById('booking-form');
    
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('open');
        });
    });
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Read form values
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const date = document.getElementById('form-date').value;
        const players = document.getElementById('form-players').value;
        const note = document.getElementById('form-msg').value;
        
        // Validate minimum players
        if (parseInt(players) < 6) {
            alert(currentLang === 'de' 
                ? 'Ahoi! Für dieses Angebot müsst ihr mindestens 6 Piraten sein.' 
                : 'Ahoi! You need at least 6 pirates for this offer.');
            return;
        }
        
        // Subject line
        const subject = encodeURIComponent(`Adventure & Golf Anfrage - ${name}`);
        
        // Body formatted in fun pirate slang
        let body = '';
        if (currentLang === 'de') {
            body = `Ahoi Gut Wissmannshof Crew!\n\n` +
                   `Wir möchten gerne unseren nächsten Törn buchen und die Leinen losmachen:\n\n` +
                   `Kapitän: ${name}\n` +
                   `Wunschtermin: ${date}\n` +
                   `Anzahl der Piraten: ${players} Personen\n` +
                   `Flaschenpost-Notiz: ${note}\n\n` +
                   `Yo-ho-ho! Meldet euch gerne bei uns zur Bestätigung.\n\n` +
                   `Beste Grüße,\n${name}\n(${email})`;
        } else {
            body = `Ahoi Gut Wissmannshof Crew!\n\n` +
                   `We would like to book our next voyage and set sail:\n\n` +
                   `Captain: ${name}\n` +
                   `Preferred Date: ${date}\n` +
                   `Number of Pirates: ${players} people\n` +
                   `Message in a Bottle: ${note}\n\n` +
                   `Yo-ho-ho! Please get back to us to confirm the trip.\n\n` +
                   `Best regards,\n${name}\n(${email})`;
        }
        
        const mailtoLink = `mailto:info@wissmannshof.de?subject=${subject}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        modal.classList.remove('open');
        form.reset();
    });
}


