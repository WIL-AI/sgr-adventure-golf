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
        descDe: "Der Auftakt gleicht einer schmalen Schneise durch dichtes Gestrüpp: Büsche kauern rechts und links, zwei tückische Bunker lauern am Wegesrand. Nur wer seinen Schlag von Anfang an unter Kontrolle hat, findet den Weg sicher zur Fahne.",
        descEn: "The start resembles a narrow lane through dense brush: bushes crouch left and right, and two treacherous bunkers lie in wait by the wayside. Only those who control their stroke from the beginning will safely find the path to the flag."
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
        descDe: "Die Bahn windet sich in einer wilden Spirale um einen dichten Busch, als wollte sie jeden Spieler einmal um die eigene Achse drehen. Der Ball muss den ungewöhnlichen Bogen mitgehen, sonst bleibt er irgendwo im Grün hängen - ein Loch für Köpfchen statt für rohe Kraft.",
        descEn: "The lane winds in a wild spiral around a dense bush, as if it wanted to spin each player around their own axis. The ball must follow the unusual curve, otherwise it will get stuck in the rough - a hole for brains rather than raw power."
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
        descDe: "Ein kleiner Wasserfall stürzt über moosbewachsene Felsen direkt neben dem Grün und liefert die passende Geräuschkulisse für den entscheidenden Putt. Wer sich vom plätschernden Wasser nicht ablenken lässt, hat hier gute Chancen auf ein Ass.",
        descEn: "A small waterfall tumbles over mossy rocks right next to the green, providing the perfect soundtrack for the decisive putt. Those who don't let the babbling water distract them have a good chance of an ace here."
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
        descDe: "Ein Teich mit einer schmalen Holzbrücke teilt die Bahn in zwei Welten: Der leichte Verlauf umgeht das Wasser großzügig, der schwierige balanciert den Ball hauchdünn am Ufer entlang. Ein falscher Schlag, und der Ball versinkt für immer in den Fluten.",
        descEn: "A pond with a narrow wooden bridge divides the lane into two worlds: the easy route bypasses the water generously, while the difficult one balances the ball razor-thinly along the bank. One wrong stroke, and the ball sinks into the waters forever."
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
        descDe: "Das Grün liegt wie eine einsame Insel inmitten eines glitzernden Teichs, weit ab vom sicheren Ufer. Nur ein Schlag mit exaktem Maß und ruhiger Hand bringt den Ball trockenen Fußes ans Ziel - alles andere endet mit einem Platscher.",
        descEn: "The green sits like a lonely island in the middle of a glistening pond, far from the safe shore. Only a stroke with exact measure and a steady hand brings the ball dry-footed to the target - anything else ends with a splash."
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
        descDe: "Der Weg schlängelt sich in engen Kurven an einem Bunker entlang, als wollte er jeden geraden Schlag vereiteln. Erst nach der letzten Biegung öffnet sich der Blick auf das Grün - Geduld und ein ruhiges Handgelenk zahlen sich hier aus.",
        descEn: "The path winds in tight curves along a bunker, as if trying to thwart any straight shot. Only after the last bend does the view of the green open up - patience and a steady wrist pay off here."
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
        descDe: "Ein kleiner Golfwagen steht am Rand geparkt, als würde er gespannt zuschauen, wie sich die Bälle einen Weg zwischen den Bunkern hindurchsuchen. Zwischen Sand und Fahrspur bleibt nur ein schmaler Korridor - Zielgenauigkeit schlägt hier jede Kraft.",
        descEn: "A small golf cart is parked at the edge, as if watching expectantly as the balls seek a path between the bunkers. Only a narrow corridor remains between sand and cart track - accuracy beats raw power here."
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
        descDe: "Die Fairway zieht sich ruhig am Waldrand entlang, gesäumt von dichtem Grün, das jeden verirrten Ball sofort verschluckt. Die Stille hier täuscht: Nur ein sauber gemessener Schlag findet den schmalen Korridor bis zur Fahne.",
        descEn: "The fairway runs quietly along the edge of the forest, bordered by dense green that swallows any stray ball immediately. The silence here is deceptive: only a cleanly measured shot finds the narrow corridor to the flag."
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
        descDe: "Zum Abschluss des Famous-Golf-Parcours führt eine schmale, von Bäumen gesäumte Fairway geradewegs auf das Grün zu. Rechts und links warten dichte Kronen auf jeden Ausrutscher - ein letzter Konzentrationstest, bevor der Dschungel-Kurs wartet.",
        descEn: "To conclude the Famous Golf course, a narrow, tree-lined fairway leads straight toward the green. Dense crowns wait for any slip-up on the right and left - a final test of concentration before the Jungle Course awaits."
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
        descDe: "Ein schnurgerader Auftakt führt mitten hinein ins dichte Grün des Dschungels - der ideale Einstieg, um Schläger und Auge aufeinander einzuspielen. Von hier an wird der Pfad wilder, also lohnt sich ein ruhiger, sicherer erster Schlag.",
        descEn: "A straight-as-an-arrow start leads right into the dense green of the jungle - the ideal warm-up to align club and eye. From here on, the path becomes wilder, so a calm, safe first shot is well worth it."
    },
    {
        num: 11,
        image: "assets/hole_11.jpg",
        par: 3,
        dist: 15,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Heimathafen für müde Seebären: Schlafen wie im Logbuch, essen wie im Piratenroman, golfen wie Schatzsucher und lachen wie echte Freibeuter.",
        sloganEn: "Homeport for weary sea dogs: Sleep like in a logbook, eat like in a pirate novel, golf like treasure hunters, and laugh like true buccaneers.",
        descDe: "Der Pfad schlängelt sich schmal zwischen knorrigen Baumstämmen hindurch, als hätte der Dschungel selbst ihn gewachsen. Wer die Kurve zu weit schneidet, landet im dichten Unterholz - nur mit Gefühl und einem sanften Schlag bleibt der Ball auf Kurs.",
        descEn: "The path winds narrowly between gnarly tree trunks, as if the jungle itself had grown it. If you cut the corner too close, you will land in dense undergrowth - only with touch and a gentle stroke will the ball stay on course."
    },
    {
        num: 12,
        image: "assets/hole_12.jpg",
        par: 4,
        dist: 20,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Gut Wissmannshof – wo euer Zimmer zur Kajüte wird, das Restaurant zur Galley, der Platz zum Golfrevier und jeder Tag zur Abenteuerfahrt.",
        sloganEn: "Gut Wissmannshof – where your room becomes a cabin, the restaurant a galley, the course a golf territory, and each day a voyage of adventure.",
        descDe: "Ein träger Wasserlauf säumt die linke Flanke der Bahn, als hätte sich hier ein kleiner Dschungelfluss seinen Weg gebahnt. Der leichte Verlauf hält respektvollen Abstand zum Ufer, der schwierige zwängt sich waghalsig nah am Wasser entlang - ein Fehltritt, und der Ball treibt talwärts.",
        descEn: "A sluggish watercourse borders the left flank of the lane, as if a small jungle river had carved its way here. The easy route keeps a respectful distance from the bank, while the difficult one squeezes daringly close to the water - one slip, and the ball drifts downstream."
    },
    {
        num: 13,
        image: "assets/hole_13.jpg",
        par: 3,
        dist: 12,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Arr! Wer hier übernachtet, frühstückt wie ein Pirat, spielt Golf wie ein Entdecker und findet Spaß wie auf einer Schatzinsel.",
        sloganEn: "Arr! Stay overnight, breakfast like a pirate, play golf like an explorer, and find fun like on a treasure island.",
        descDe: "Noch mehr Wasser, noch mehr Nervenkitzel: Die Fahne versteckt sich hinter einer schmalen Landzunge, umspült von einem ruhigen Dschungelteich. Der mutige Schlag nimmt die direkte Route übers Wasser, der vorsichtige umrundet den Teich auf Nummer sicher.",
        descEn: "More water, more thrills: the flag hides behind a narrow spit of land, washed by a calm jungle pond. The brave shot takes the direct route over the water, while the cautious one goes around the pond to be safe."
    },
    {
        num: 14,
        image: "assets/hole_14.jpg",
        par: 2,
        dist: 8,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Von der Kajüte zum Abschlag: Auf Gut Wissmannshof liegen Hotel, Restaurant, Golfplatz und Piratenabenteuer nur eine Planke voneinander entfernt.",
        sloganEn: "From cabin to tee-off: At Gut Wissmannshof, hotel, restaurant, golf course, and pirate adventure are just a plank apart.",
        descDe: "Eine prall gefüllte Schatztruhe wacht über eine wacklige Hängebrücke, die tief über eine Dschungelschlucht führt. Der Ball muss die schmalen Holzplanken exakt treffen, um sicher zum Ziel auf der anderen Seite zu gelangen - wehe, er verfehlt die Brücke und stürzt in die Tiefe.",
        descEn: "A treasure chest filled to the brim watches over a wobbly suspension bridge that leads deep across a jungle canyon. The ball must hit the narrow wooden planks precisely to reach the target on the other side safely - woe to it if it misses the bridge and plunges into the depths."
    },
    {
        num: 15,
        image: "assets/hole_15.jpg",
        par: 3,
        dist: 13,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Ahoi Genießer! Hier gibt’s weiche Kissen, starke Küche, weite Fairways und jede Menge Seemannsgarn für den Abend an der Bar.",
        sloganEn: "Ahoi gourmets! Here are soft pillows, hearty cooking, wide fairways, and plenty of sailor's yarn for evenings at the bar.",
        descDe: "Ein alter Jeep hat sich mitten in den Dschungel verirrt und steht seither als stille Landmarke an der Kurve, die die Bahn ums dichte Gebüsch herum nimmt. Vielleicht seine letzte Expedition - für Spieler markiert er jedenfalls den Punkt, an dem der Schlag die Richtung wechseln muss.",
        descEn: "An old jeep has got lost in the middle of the jungle and has stood there ever since as a silent landmark on the curve where the lane bends around dense bushes. Perhaps its last expedition - for players it marks the point where the stroke must change direction."
    },
    {
        num: 16,
        image: "assets/hole_16.jpg",
        par: 3,
        dist: 11,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Gut Wissmannshof: Hafen für alle, die erst gut schlafen, dann gut essen, dann gut golfen und am Ende laut ‚Yo-ho-ho!‘ rufen wollen.",
        sloganEn: "Gut Wissmannshof: Haven for all who want to sleep well, eat well, golf well, and shout 'Yo-ho-ho!' in the end.",
        descDe: "Zwischen schattigen Palmen und einem Ring aus glatten Flusskieseln windet sich die Bahn auf das versteckte Grün zu, als führe sie zu einem geheimen Dschungeltempel. Wer den Bogen um die Kiesel schafft, hat den schwierigsten Teil bereits hinter sich.",
        descEn: "Between shady palm trees and a ring of smooth river pebbles, the lane winds toward the hidden green, as if leading to a secret jungle temple. If you make the curve around the pebbles, you've already conquered the hardest part."
    },
    {
        num: 17,
        image: "assets/hole_17.jpg",
        par: 4,
        dist: 17,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Wer hier anlegt, erlebt die volle Fahrt: Gemütlich nächtigen, lustvoll schlemmen, mutig golfen und mit der Crew bis zur letzten Welle feiern.",
        sloganEn: "Anchor here for the full voyage: Cozy lodging, hearty feasting, brave golfing, and celebrating with the crew to the last wave.",
        descDe: "Ein zickzack-gemustertes Tierfell zieht sich über die gesamte Länge der Bahn, als hätte hier ein Dschungelbewohner seine Spur hinterlassen. Volle Konzentration ist gefragt, um dem wilden Muster exakt zu folgen - ein einziger Ausrutscher, und der Ball verschwindet im Schlangenschlund.",
        descEn: "A zigzag-patterned animal skin runs the entire length of the lane, as if a jungle inhabitant had left its track here. Full concentration is required to follow the wild pattern exactly - a single slip-up, and the ball disappears into the snake's mouth."
    },
    {
        num: 18,
        image: "assets/hole_18.jpg",
        par: 3,
        dist: 14,
        loopDe: "Schleife 2: Schatzsuche",
        loopEn: "Loop 2: Treasure Hunt",
        sloganDe: "Euer Piratenkurs: Hotelbett, Restaurantteller, Golfball und Bauchmuskel-Lachen – alles an einem Ort, alles auf Gut Wissmannshof.",
        sloganEn: "Your pirate course: Hotel bed, restaurant plate, golf ball, and belly laughs – all in one place, all at Gut Wissmannshof.",
        descDe: "Zum großen Finale des Dschungel-Parcours wartet ein herzförmiges Grün, gesäumt von alten, moosbewachsenen Holzfässern - vielleicht die letzten Vorräte einer vergessenen Expedition. Ein versöhnlicher, freundlicher Abschluss nach neun Bahnen voller Wasser, Brücken und wilder Kurven.",
        descEn: "For the grand finale of the Jungle Course, a heart-shaped green awaits, bordered by old, mossy wooden barrels - perhaps the last supplies of a forgotten expedition. A reconciling, friendly finish after nine holes full of water, bridges, and wild curves."
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
        priceNote: "<strong>Neuer Automat f&uuml;r Schl&auml;ger & B&auml;lle vor Ort!</strong><br>Bitte beachtet: Am Automaten k&ouml;nnen zurzeit Schl&auml;ger nur zum regul&auml;ren Preis von 8,50 &euro; pro Teilnehmer ausgegeben werden. Zuk&uuml;nftig wird der Automat erweitert, sodass auch Kombinationsangebote f&uuml;r Familien (z. B. 2 Erwachsene + 2 Kinder) zur Entnahme bereitstehen. So k&ouml;nnt ihr jederzeit vollkommen flexibel spielen!",
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
        priceNote: "<strong>New ticketing and club rental machine on site!</strong><br>Please note: Currently, the machine only dispenses clubs at the regular price of &euro;8.50 per participant. In the future, the machine will be upgraded to support family combo offers (e.g., 2 adults + 2 children) directly. This will allow you to play with complete flexibility at any time!",
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
                el.innerHTML = translations[currentLang][key];
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


