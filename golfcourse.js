/* ==========================================================================
 Gut Wissmannshof - Golf Course & Interactive 18-Hole Guide Engine
 Bilingual Support (DE / EN), Interactive Hole Viewer, Lightbox
 ========================================================================== */

const HOLE_DATA = [
 // --- KURS BLAU (Holes 1 - 9) ---
 {
 id: 1,
 loop: 'blau',
 holeNumber: 1,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 1 – Panoramablick', en: 'Hole 1 – Panoramic Vista' },
 par: 4,
 hcp: 11,
 tees: { white: 367, yellow: 350, blue: 317, red: 301 },
 image: 'assets/course_holes/blau_1.jpg',
 desc: {
 de: 'Ein einladender Auftakt mit herrlichem Weitblick über das Kasseler Land. Das Fairway fällt leicht ab, verlangt jedoch einen präzisen Abschlag zwischen den rechten Fairwaybunker und das linke Semirough.',
 en: 'An inviting opening hole offering sweeping views across the Kassel countryside. The fairway gently slopes downhill but demands an accurate tee shot between the fairway bunker on the right and the left semi-rough.'
 },
 protip: {
 de: 'Vom Tee genügt ein solides Holz 3 oder langes Eisen. Die Annäherung sollte idealerweise unterhalb der Fahne platziert werden, da das Grün von hinten nach vorne hängt.',
 en: 'A 3-wood or long iron off the tee is ideal. Aim your approach below the pin, as this green slopes noticeably from back to front.'
 }
 },
 {
 id: 2,
 loop: 'blau',
 holeNumber: 2,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 2 – Das sanfte Dogleg', en: 'Hole 2 – The Gentle Dogleg' },
 par: 4,
 hcp: 9,
 tees: { white: 375, yellow: 360, blue: 330, red: 315 },
 image: 'assets/course_holes/blau_2.jpg',
 desc: {
 de: 'Ein leichtes Dogleg nach links. Longhitter können versuchen, über die Bunkerkante links abzukürzen, während der sichere Weg über die rechte Fairwayhälfte führt.',
 en: 'A gentle dogleg left. Longer hitters can cut the corner over the left bunker edge, while the safer route is down the right side of the fairway.'
 },
 protip: {
 de: 'Achten Sie beim zweiten Schlag auf die gut platzierten Grünbunker links und rechts. Ein präzises Eisen auf das Grünzentrum spart Schläge.',
 en: 'Pay close attention to the greenside bunkers flanking both left and right on your second shot. A well-struck iron to the center of the green is best.'
 }
 },
 {
 id: 3,
 loop: 'blau',
 holeNumber: 3,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 3 – Die Klippe', en: 'Hole 3 – The Cliff' },
 par: 3,
 hcp: 17,
 tees: { white: 172, yellow: 158, blue: 140, red: 125 },
 image: 'assets/course_holes/blau_3.jpg',
 desc: {
 de: 'Ein anspruchsvolles Par 3 über ein natürliches Geländetal. Das Grün ist stufenförmig angelegt und wird vorne von tiefen Sandhindernissen bewacht.',
 en: 'A demanding Par 3 over a natural valley. The two-tier green is well guarded in front by deep sand hazards.'
 },
 protip: {
 de: 'Wählen Sie lieber einen Schläger mehr, um die vorderen Bunker sicher zu überwinden. Der Wind dreht hier gerne im Taleinschnitt.',
 en: 'Take one club extra to comfortably clear the front bunkers. Wind tends to swirl through the valley opening.'
 }
 },
 {
 id: 4,
 loop: 'blau',
 holeNumber: 4,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 4 – Der Waldkorridor', en: 'Hole 4 – Forest Corridor' },
 par: 5,
 hcp: 3,
 tees: { white: 520, yellow: 495, blue: 455, red: 435 },
 image: 'assets/course_holes/blau_4.jpg',
 desc: {
 de: 'Ein langes, strategisches Par 5. Nach dem Abschlag öffnet sich die Bahn leicht nach rechts, bevor sie in eine verengte Grünzone mit seitlichen Wasserhindernissen mündet.',
 en: 'A long, tactical Par 5. The fairway swings slightly right before narrowing down into a green complex guarded by lateral water hazards.'
 },
 protip: {
 de: 'Hier ist Taktik Trumpf: Legen Sie den zweiten Schlag clever vor dem Querbunker ab, um mit einem vollen Wedge das Grün attackieren zu können.',
 en: 'Strategy is key: Lay up cleanly short of the fairway hazard to leave yourself a confident full wedge into the flag.'
 }
 },
 {
 id: 5,
 loop: 'blau',
 holeNumber: 5,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 5 – Gutshof-Blick', en: 'Hole 5 – Manor View' },
 par: 4,
 hcp: 7,
 tees: { white: 390, yellow: 370, blue: 335, red: 310 },
 image: 'assets/course_holes/blau_5.jpg',
 desc: {
 de: 'Ein gerades Par 4 mit leicht ansteigendem Verlauf. Der Drive muss mittig platziert werden, da alte Eichen die Landezone seitlich begrenzen.',
 en: 'A straight Par 4 playing slightly uphill. The drive requires laser accuracy, bordered by mature oak trees on both sides.'
 },
 protip: {
 de: 'Das Grün ist extrem onduliert. Achten Sie auf die tagesaktuelle Fahnenposition für die richtige Schlägerwahl beim Schlag ins Grün.',
 en: 'The putting surface features undulating slopes. Check the daily pin sheet closely before selecting your approach club.'
 }
 },
 {
 id: 6,
 loop: 'blau',
 holeNumber: 6,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 6 – Schluchten-Schwung', en: 'Hole 6 – Gorge Swing' },
 par: 3,
 hcp: 13,
 tees: { white: 185, yellow: 170, blue: 145, red: 130 },
 image: 'assets/course_holes/blau_6.jpg',
 desc: {
 de: 'Ein optisch spektakuläres Par 3. Von erhöhten Abschlägen blickt man auf ein großzügiges Grün, das jedoch durch ein seitliches Wasserhindernis verteidigt wird.',
 en: 'A visually stunning Par 3. Elevated tees look down upon an expansive green defended by water hazard on the right side.'
 },
 protip: {
 de: 'Spielen Sie sicherheitshalber das linke Grünzentrum an, um das Wasser rechts komplett aus dem Spiel zu nehmen.',
 en: 'Target the left-center of the green to take the water on the right completely out of the equation.'
 }
 },
 {
 id: 7,
 loop: 'blau',
 holeNumber: 7,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 7 – Das Wissmannshof-Monster', en: 'Hole 7 – The Wissmannshof Beast' },
 par: 5,
 hcp: 1,
 tees: { white: 545, yellow: 518, blue: 472, red: 450 },
 image: 'assets/course_holes/blau_7.webp',
 desc: {
 de: 'Die schwerste Bahn auf Kurs Blau. Ein echtes Monster-Par 5 mit über 540 Metern von Weiß. Wind, Steigung und strategisch platzierte Bunker fordern höchste Konzentration.',
 en: 'The stroke index 1 hole on Course Blue. A genuine monster Par 5 stretching over 540 meters from the back tees. Elevation and hazards demand peak focus.'
 },
 protip: {
 de: 'Versuchen Sie nicht zu forcieren. Drei solide, kontrollierte Schläge sind der sicherste Weg zu einem Par oder soliden Bogey.',
 en: 'Do not force distance. Three controlled, smart shots are the safest path to a Par or well-earned Bogey.'
 }
 },
 {
 id: 8,
 loop: 'blau',
 holeNumber: 8,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 8 – Eichenallee', en: 'Hole 8 – Oak Avenue' },
 par: 4,
 hcp: 5,
 tees: { white: 410, yellow: 388, blue: 350, red: 330 },
 image: 'assets/course_holes/blau_8.jpg',
 desc: {
 de: 'Ein langes, geradliniges Par 4 mit leichtem Gefälle. Ein präziser Abschlag ist Pflicht, um eine freie Sicht auf das leicht erhöht liegende Grün zu haben.',
 en: 'A demanding, long Par 4 sloping downhill. A precise drive is essential to retain an unobstructed view onto the elevated green.'
 },
 protip: {
 de: 'Der Annäherungsschlag spielt sich meist einen halben Schläger kürzer als die gemessene Distanz durch das Gefälle.',
 en: 'The approach shot plays roughly half a club shorter than the yardage due to the downhill elevation.'
 }
 },
 {
 id: 9,
 loop: 'blau',
 holeNumber: 9,
 loopName: { de: 'Kurs Blau (Landefeld)', en: 'Course Blue (Landefeld)' },
 name: { de: 'Bahn 9 – Heimkehr zum Gutshof', en: 'Hole 9 – Manor Homecoming' },
 par: 4,
 hcp: 15,
 tees: { white: 335, yellow: 315, blue: 285, red: 265 },
 image: 'assets/course_holes/blau_9.webp',
 desc: {
 de: 'Ein klassisches Abschlussloch der ersten Neun, das direkt auf das Clubhaus und die Hotelterrasse zuführt. Eine lohnende Birdie-Chance bei klugem Course-Management.',
 en: 'A classic finishing hole for the front nine, leading back towards the clubhouse and hotel terrace. A rewarding birdie opportunity with smart course management.'
 },
 protip: {
 de: 'Ein kontrollierter Schlag mit dem Holz 3 in die Fairwaymitte eröffnet ein leichtes Wedge auf ein treppenförmiges Grün.',
 en: 'A controlled 3-wood into the center fairway leaves a straightforward wedge into a stepped green.'
 }
 },

 // --- KURS GELB (Holes 10 - 18 / Gelb 1 - 9) ---
 {
 id: 10,
 loop: 'gelb',
 holeNumber: 10,
 loopHoleNumber: 1,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 10 (Gelb 1) – Der Neustart', en: 'Hole 10 (Yellow 1) – The Restart' },
 par: 4,
 hcp: 12,
 tees: { white: 355, yellow: 335, blue: 305, red: 285 },
 image: 'assets/course_holes/gelb_1.jpg',
 desc: {
 de: 'Der Auftakt in die zweiten 9 Bahnen. Ein breites Fairway belohnt mutige Abschläge, während ein seitlicher Bunker auf der linken Seite vermieden werden sollte.',
 en: 'The start of the back nine. A generous fairway welcomes confident drives, while a fairway bunker on the left must be avoided.'
 },
 protip: {
 de: 'Zielen Sie auf die rechte Fairwayhälfte, um den optimalen Anspielwinkel ins Grün zu erhalten.',
 en: 'Aim towards the right half of the fairway for the cleanest angle into the green surface.'
 }
 },
 {
 id: 11,
 loop: 'gelb',
 holeNumber: 11,
 loopHoleNumber: 2,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 11 (Gelb 2) – Präzisions-Challenge', en: 'Hole 11 (Yellow 2) – Precision Challenge' },
 par: 3,
 hcp: 18,
 tees: { white: 160, yellow: 145, blue: 130, red: 115 },
 image: 'assets/course_holes/gelb_2.jpg',
 desc: {
 de: 'Ein kurzes, aber tückisches Par 3. Das Grün ist von drei Bunkern umgeben und erfordert einen hoch geschlagenen, weich landenden Eisenschlag.',
 en: 'A short but tricky Par 3. The green is heavily protected by three bunkers and requires a high, soft-landing iron shot.'
 },
 protip: {
 de: 'Spielen Sie auf die Grünmitte, unabhängig von der Fahnenposition. Hier ist das Grün am breitesten.',
 en: 'Target the middle of the green regardless of pin location; that is where the landing area is most generous.'
 }
 },
 {
 id: 12,
 loop: 'gelb',
 holeNumber: 12,
 loopHoleNumber: 3,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 12 (Gelb 3) – Die Höhenlinie', en: 'Hole 12 (Yellow 3) – The Contour' },
 par: 5,
 hcp: 4,
 tees: { white: 505, yellow: 480, blue: 440, red: 420 },
 image: 'assets/course_holes/gelb_3.jpg',
 desc: {
 de: 'Ein flüssig geschwungenes Par 5 entlang sanfter Hügelkuppen. Longhitter können bei Rückenwind mit dem zweiten Schlag das Grün attackieren.',
 en: 'A gracefully undulating Par 5 along rolling ridges. Long hitters can reach the green in two with favorable tailwinds.'
 },
 protip: {
 de: 'Vorsicht vor dem versteckten Graben 80 Meter vor dem Grün – planen Sie Ihre Vorlage präzise.',
 en: 'Watch out for the cross-ditch 80 meters short of the green – calculate your layup carefully.'
 }
 },
 {
 id: 13,
 loop: 'gelb',
 holeNumber: 13,
 loopHoleNumber: 4,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 13 (Gelb 4) – Plateau-Angriff', en: 'Hole 13 (Yellow 4) – Plateau Strike' },
 par: 4,
 hcp: 8,
 tees: { white: 380, yellow: 360, blue: 325, red: 305 },
 image: 'assets/course_holes/gelb_4.jpg',
 desc: {
 de: 'Ein ansteigendes Par 4 mit einem anspruchsvollen Plateaugrün. Zu kurze Schläge rollen über das Fairwaygefälle zurück.',
 en: 'An uphill Par 4 leading to a tiered plateau green. Short shots risk rolling back down the false front.'
 },
 protip: {
 de: 'Nehmen Sie für die Annäherung einen Schläger mehr, um den Höhenunterschied auszugleichen.',
 en: 'Take one club extra on your approach to compensate for the significant upward elevation.'
 }
 },
 {
 id: 14,
 loop: 'gelb',
 holeNumber: 14,
 loopHoleNumber: 5,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 14 (Gelb 5) – Der Weitblick', en: 'Hole 14 (Yellow 5) – Far Vista' },
 par: 4,
 hcp: 10,
 tees: { white: 365, yellow: 345, blue: 310, red: 290 },
 image: 'assets/course_holes/gelb_5.webp',
 desc: {
 de: 'Eine der schönsten Bahnen der Anlage mit Fernsicht. Ein breites Fairway verzeiht auch kleinere Ungenauigkeiten beim Abschlag.',
 en: 'One of the scenic highlights of the resort with expansive vistas. A generous fairway forgives slight miscues off the tee.'
 },
 protip: {
 de: 'Platzieren Sie Ihren Drive rechts der Mitte für eine ungestörte Annäherung an das von Bäumen eingerahmte Grün.',
 en: 'Place your drive slightly right of center for an unobstructed look into the tree-framed green.'
 }
 },
 {
 id: 15,
 loop: 'gelb',
 holeNumber: 15,
 loopHoleNumber: 6,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 15 (Gelb 6) – Die Herausforderung', en: 'Hole 15 (Yellow 6) – The Gauntlet' },
 par: 5,
 hcp: 2,
 tees: { white: 535, yellow: 510, blue: 465, red: 445 },
 image: 'assets/course_holes/gelb_6.jpg',
 desc: {
 de: 'Das anspruchsvollste Par 5 der zweiten Neun. Ein doppelter Dogleg-Charakter erfordert drei taktisch durchdachte Schläge.',
 en: 'The toughest Par 5 on the back nine. A double dogleg character demands three smartly engineered shots.'
 },
 protip: {
 de: 'Geduld zahlt sich aus: Bleiben Sie auf dem Fairway und attackieren Sie erst mit dem dritten Schlag die Fahne.',
 en: 'Patience pays dividends: Stay firmly in the fairway and attack the flag only with your third shot.'
 }
 },
 {
 id: 16,
 loop: 'gelb',
 holeNumber: 16,
 loopHoleNumber: 7,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 16 (Gelb 7) – Am See', en: 'Hole 16 (Yellow 7) – Lakeside' },
 par: 3,
 hcp: 16,
 tees: { white: 175, yellow: 160, blue: 138, red: 122 },
 image: 'assets/course_holes/gelb_7.jpg',
 desc: {
 de: 'Ein traumhaftes Par 3 mit Wasserhindernis vor dem Grün. Hier schlägt das Herz jedes Golfers höher.',
 en: 'A gorgeous Par 3 featuring a shimmering water hazard in front of the green. A pure thrill shot.'
 },
 protip: {
 de: 'Wählen Sie ausreichend Schlägerlänge. Der Wind vom Wasser bläst Bälle gerne kürzer als erwartet.',
 en: 'Choose sufficient club length. Breezes off the water often hold balls up shorter than expected.'
 }
 },
 {
 id: 17,
 loop: 'gelb',
 holeNumber: 17,
 loopHoleNumber: 8,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 17 (Gelb 8) – Der Kurvenläufer', en: 'Hole 17 (Yellow 8) – The Sweeper' },
 par: 4,
 hcp: 6,
 tees: { white: 398, yellow: 375, blue: 340, red: 320 },
 image: 'assets/course_holes/gelb_8.jpg',
 desc: {
 de: 'Ein langes Dogleg nach rechts. Ein kraftvoller Drive eröffnet die Chance auf das Par.',
 en: 'A long dogleg right. A powerful and shaped drive gives you the best chance at Par.'
 },
 protip: {
 de: 'Nicht zu viel abkürzen – der Wald rechts schluckt mutige Bälle schnell. Mitte Fairway ist ideal.',
 en: 'Do not cut too much of the dogleg – the trees on the right are unforgiving. Center fairway is ideal.'
 }
 },
 {
 id: 18,
 loop: 'gelb',
 holeNumber: 18,
 loopHoleNumber: 9,
 loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
 name: { de: 'Bahn 18 (Gelb 9) – Das Grand Finale', en: 'Hole 18 (Yellow 9) – The Grand Finale' },
 par: 4,
 hcp: 14,
 tees: { white: 340, yellow: 320, blue: 290, red: 270 },
 image: 'assets/course_holes/gelb_9.jpg',
 desc: {
 de: 'Der spektakuläre Abschluss vor der Sonnenterrasse des Resorthotels. Ein malerisches Grün mit Zuschauern garantiert Gänsehaut-Momente.',
 en: 'The spectacular finishing hole right in front of the resort sun terrace. A scenic green framed by clubhouse spectators.'
 },
 protip: {
 de: 'Schlagen Sie einen soliden Abschlag und genießen Sie den finalen Pitch auf das Inselgrün-Flair der 18.',
 en: 'Hit a solid tee shot and enjoy the applause on your final approach directly to the clubhouse green.'
 }
 }
];

// Canyon Course Extra Card Info
const CANYON_COURSE_DATA = {
 image: 'assets/course_holes/canyon_course.jpg',
 name: { de: 'Canyon-Kurs (6-Loch Kurzplatz / Academy)', en: 'Canyon Course (6-Hole Academy Course)' },
 desc: {
 de: 'Unser anspruchsvoller 6-Loch Kurzplatz (in Kürze erweitert auf 9 Loch) bietet sowohl Anfängern als auch Meisterschaftsspielern das ideale Terrain für präzises Kurzspiel, Pitchen und Chippen unter realen Platzbedingungen. Auch ohne Platzreife bespielbar!',
 en: 'Our challenging 6-hole short course (expanding to 9 holes shortly) offers beginners and champions alike the perfect venue to dial in short game, pitching, and chipping. Playable without handicap certificate!'
 }
};

/* ==========================================================================
 State & Translation Dictionary
 ========================================================================== */
let currentHoleIndex = 0; // 0 -> Hole 1 (Blau 1)
let currentLoopFilter = 'blau'; // 'blau', 'gelb', 'canyon'
let currentLang = localStorage.getItem('sgr_lang') || 'de';

const TRANSLATIONS = {
 de: {
 navHome: 'Startseite',
 navOverview: 'Golfplatz',
 navHoles: 'Hole 1–18',
 navGallery: 'Impressionen',
 navSpecs: 'Course Rating',
 navDownloads: 'Downloads',
 navPractice: 'Übungsanlagen',
 navBtnBooking: 'Startzeit buchen',
 tagGallery: 'Atmosphäre &amp; Natur',
 galleryHeading: 'Impressionen unserer 27-Loch-Anlage',
 gallerySub: 'Perfekt modellierte Fairways, kristallklare Wasserhindernisse, schneeweiße Sandbunker und blühende Naturlandschaften im Herzen des Kasseler Landes.',
 heroBadge: '27-Loch Meisterschaftsanlage &amp; Canyon-Kurs',
 heroTitle: 'Die <span>Golfbahnen</span> auf Gut Wissmannshof.',
 heroLead: 'Erleben Sie spektakuläre Ausblicke über das Kasseler Land, meisterhafte Fairways, anspruchsvolle Greens und Course-Architektur auf absolutem PGA-Niveau – 365 Tage im Jahr bespielbar.',
 btnHeroExplore: 'Bahnen interaktiv erkunden ↓',
 btnHeroBook: 'Startzeit reservieren',
 fact1Number: '27',
 fact1Label: 'Loch Golf-Erlebnis',
 fact2Number: '18',
 fact2Label: 'Meisterschaftskurs Blau-Gelb',
 fact3Number: '4',
 fact3Label: 'Abschläge pro Bahn (W/G/B/R)',
 fact4Number: '365',
 fact4Label: 'Tage ganzjährig bespielbar',
 
 tagLoops: 'Platzarchitektur',
 loopsHeading: 'Unsere Kurs-Kombinationen',
 loopsSub: 'Die Anlage von Gut Wissmannshof besticht durch drei unverwechselbare 9-Loch Schleifen und den Canyon Kurzplatz.',
 
 loopBlauTitle: 'Kurs Blau (Landefeld)',
 loopBlauBadge: 'Bahnen 1–9',
 loopBlauSpec1: 'Länge Weiß: 3.299 m | Gelb: 3.091 m',
 loopBlauSpec2: 'Par: 36 | 2x Par 5, 2x Par 3, 5x Par 4',
 loopBlauDesc: 'Weite Ausblicke, abwechslungsreiche Höhenprofile und strategisch platzierte Wasser- und Sandhindernisse.',
 btnViewBlau: 'Bahnen 1–9 ansehen →',
 
 loopGelbTitle: 'Kurs Gelb',
 loopGelbBadge: 'Bahnen 10–18',
 loopGelbSpec1: 'Länge Weiß: 3.148 m | Gelb: 2.940 m',
 loopGelbSpec2: 'Par: 36 | 2x Par 5, 2x Par 3, 5x Par 4',
 loopGelbDesc: 'Flüssig eingebettet in das sanfte Gelände mit spektakulärem Finale vor der Resorthotel-Sonnenterrasse.',
 btnViewGelb: 'Bahnen 10–18 ansehen →',
 
 loopCanyonTitle: 'Canyon-Kurs (Kurzplatz)',
 loopCanyonBadge: '6 Loch (in Kürze 9 Loch)',
 loopCanyonSpec1: 'Par 18 / 6 anspruchsvolle Bahnen',
 loopCanyonSpec2: 'Ohne Platzerlaubnis / PE bespielbar',
 loopCanyonDesc: 'Perfekt für die schnelle Runde nach Feierabend, Training des kurzen Spiels und für Einsteiger. In Kürze auf 9 Loch erweitert!',
 btnViewCanyon: 'Canyon-Kurs ansehen →',

 loopRotTitle: 'Kurs Rot (Ausblick)',
 loopRotBadge: 'In Entwicklung',
 loopRotSpec1: '9 weitere Meisterschaftsbahnen',
 loopRotSpec2: 'Erweiterung auf 27 vollwertige Meisterschaftslöcher',
 loopRotDesc: 'Die dritte 9-Loch-Schleife vervollständigt künftig das 27-Loch Meisterschaftsresort Wissmannshof.',
 btnViewRot: 'In Planung',

 tagGuide: 'Interaktiver Course-Guide',
 guideHeading: 'Bahnen im Detail entdecken',
 guideSub: 'Wählen Sie eine Bahn aus, um die detaillierte Platzgrafik, Distanzen aller Teeboxen und Pro-Tipps anzuzeigen.',
 
 tabBlau: 'Kurs Blau (Bahnen 1–9)',
 tabGelb: 'Kurs Gelb (Bahnen 10–18)',
 tabCanyon: 'Canyon-Kurs (Kurzplatz)',
 selectorTitle: 'Bahn wählen:',
 zoomHint: '🔍 Klick zum Vergrößern',
 
 lblPar: 'Par',
 lblHcp: 'HCP / Index',
 lblTeeWhite: 'Weiß (Champ.)',
 lblTeeYellow: 'Gelb (Herren)',
 lblTeeBlue: 'Blau (Champ. D.)',
 lblTeeRed: 'Rot (Damen)',
 lblTeeMeters: 'm',
 
 lblTactic: 'Strategie & Bahnbeschreibung',
 lblProTip: 'Pro-Tipp vom Head-Pro',
 btnPrevHole: '← Vorherige Bahn',
 btnNextHole: 'Nächste Bahn →',
 
 tagSpecs: 'DGV Course Rating &amp; Slope',
 specsHeading: 'Vorgabentabelle &amp; Platzdaten',
 specsSub: 'Offizielle Einstufung des Deutschen Golf Verbandes (DGV) für 18-Loch Blau-Gelb und 9-Loch Runden.',
 thTee: 'Abschlag / Farbe',
 thPar: 'Par',
 thLength: 'Länge (CR)',
 thSlope: 'Slope',
 thCR: 'Course Rating',
 
 tagDownloads: 'Service &amp; Unterlagen',
 downloadsHeading: 'Downloads &amp; Dokumente',
 downloadsSub: 'Laden Sie sich offizielle Scorekarten, Vorgabentabellen und Spielregeln direkt als PDF herunter.',
 dl1Title: '18-Loch Scorekarte',
 dl1Desc: 'Offizielle Scorekarte für Kurs Blau-Gelb inkl. Bahngrafiken, Handicap-Tabellen und Vorgabenmatrix.',
 btnDl1: 'Scorekarte herunterladen (PDF)',
 dl2Title: 'DGV Slope- & Vorgabentabellen',
 dl2Desc: 'Komplette Umrechnungstabellen für Damen und Herren von allen Teeboxen (Weiß, Gelb, Blau, Rot).',
 btnDl2: 'Vorgabentabelle öffnen (PDF)',
 dl3Title: 'Platz- & Spielordnung',
 dl3Desc: 'Wissenswertes zu Spieltempo, Etikette, Kleiderordnung und Platzregeln auf Gut Wissmannshof.',
 btnDl3: 'Platzregeln einsehen (PDF)',

 tagPractice: 'Trainingszentrum',
 practiceHeading: 'Großzügige Übungsanlagen',
 practiceSub: 'Optimale Trainingsbedingungen für alle Spielstärken direkt neben dem Clubhaus und Hotel.',
 pf1Title: 'Große Driving Range mit Rasen- & Mattenabschlägen',
 pf1Desc: 'Zahlreiche Zielgrüns und überdachte Abschlaghütten für ganzjähriges Training bei jeder Witterung.',
 pf2Title: 'Großes Putting- & Chipping-Grün',
 pf2Desc: 'Originalgetreue Geschwindigkeiten und Ondulierungen wie auf den Meisterschaftsbahnen.',
 pf3Title: 'Übungsbunker & Pitching-Areal',
 pf3Desc: 'Perfektionieren Sie Ihr Bunkerspiel und Annäherungen aus allen Distanzen und Hanglagen.',
 pf4Title: 'PGA Golfschule & Pro-Betreuer',
 pf4Desc: 'Modernste Video- & Schwunganalyse sowie individueller Unterricht für Anfänger und Fortgeschrittene.',

 tagBooking: 'Abschlag sichern',
 ctaBookHeading: 'Bereit für Ihre Runde auf Gut Wissmannshof?',
 ctaBookSub: 'Buchen Sie Ihre gewünschte Startzeit bequem online über PC CADDIE oder telefonisch im Clubsekretariat.',
 btnPCCaddieBook: 'Startzeit online via PC CADDIE buchen ↗',
 ctaCallDirect: 'Oder anrufen unter +49 (0) 5543 999 333'
 },
 en: {
 navHome: 'Home',
 navOverview: 'Golf Course',
 navHoles: 'Holes 1–18',
 navGallery: 'Impressions',
 navSpecs: 'Course Rating',
 navDownloads: 'Downloads',
 navPractice: 'Practice Facilities',
 navBtnBooking: 'Book Tee Time',
 tagGallery: 'Atmosphere &amp; Scenery',
 galleryHeading: 'Impressions of our 27-Hole Destination',
 gallerySub: 'Pristine fairways, shimmering water hazards, quartz sand dunes, and rolling greenery in the Kassel countryside.',
 heroBadge: '27-Hole Championship Resort &amp; Canyon Course',
 heroTitle: 'The <span>Golf Course</span> at Gut Wissmannshof.',
 heroLead: 'Experience spectacular vistas across the Kassel countryside, pristine fairways, challenging greens and world-class course architecture – playable 365 days a year.',
 btnHeroExplore: 'Explore Holes Interactively ↓',
 btnHeroBook: 'Reserve Tee Time',
 fact1Number: '27',
 fact1Label: 'Holes Golf Destination',
 fact2Number: '18',
 fact2Label: 'Championship Blue-Yellow',
 fact3Number: '4',
 fact3Label: 'Tee Boxes per Hole (W/Y/B/R)',
 fact4Number: '365',
 fact4Label: 'Days Year-Round Playable',

 tagLoops: 'Course Layout',
 loopsHeading: 'Our Course Loops',
 loopsSub: 'Gut Wissmannshof features three distinctive 9-hole loops plus the Canyon short course.',

 loopBlauTitle: 'Course Blue (Landefeld)',
 loopBlauBadge: 'Holes 1–9',
 loopBlauSpec1: 'Length White: 3,299 m | Yellow: 3,091 m',
 loopBlauSpec2: 'Par: 36 | 2x Par 5, 2x Par 3, 5x Par 4',
 loopBlauDesc: 'Expansive vistas, diverse elevation changes, and strategically placed hazards.',
 btnViewBlau: 'View Holes 1–9 →',

 loopGelbTitle: 'Course Yellow',
 loopGelbBadge: 'Holes 10–18',
 loopGelbSpec1: 'Length White: 3,148 m | Yellow: 2,940 m',
 loopGelbSpec2: 'Par: 36 | 2x Par 5, 2x Par 3, 5x Par 4',
 loopGelbDesc: 'Flowing smoothly along rolling terrain with a breathtaking grand finale in front of the sun terrace.',
 btnViewGelb: 'View Holes 10–18 →',

 loopCanyonTitle: 'Canyon Course (Short Course)',
 loopCanyonBadge: '6 Holes (9 Holes shortly)',
 loopCanyonSpec1: 'Par 18 / 6 challenging holes',
 loopCanyonSpec2: 'Playable without handicap certificate',
 loopCanyonDesc: 'Ideal for quick practice, dialling in short game, and beginners. Expanding to 9 holes shortly!',
 btnViewCanyon: 'View Canyon Course →',

 loopRotTitle: 'Course Red (Outlook)',
 loopRotBadge: 'In Development',
 loopRotSpec1: '9 additional championship holes',
 loopRotSpec2: 'Expansion to a full 27-hole tournament destination',
 loopRotDesc: 'The third 9-hole loop will complete the premier 27-hole resort at Gut Wissmannshof.',
 btnViewRot: 'In Planning',

 tagGuide: 'Interactive Course Guide',
 guideHeading: 'Explore Every Hole in Detail',
 guideSub: 'Select any hole below to inspect high-resolution flyover graphics, distances from all tees, and tactical pro tips.',

 tabBlau: 'Course Blue (Holes 1–9)',
 tabGelb: 'Course Yellow (Holes 10–18)',
 tabCanyon: 'Canyon Course (Short Course)',
 selectorTitle: 'Select Hole:',
 zoomHint: '🔍 Click to zoom',

 lblPar: 'Par',
 lblHcp: 'HCP / Index',
 lblTeeWhite: 'White (Champ.)',
 lblTeeYellow: 'Yellow (Men)',
 lblTeeBlue: 'Blue (Champ. L.)',
 lblTeeRed: 'Red (Ladies)',
 lblTeeMeters: 'm',

 lblTactic: 'Tactical Overview & Course Note',
 lblProTip: 'Head Pro Tip',
 btnPrevHole: '← Previous Hole',
 btnNextHole: 'Next Hole →',

 tagSpecs: 'DGV Course Rating &amp; Slope',
 specsHeading: 'Handicap Tables &amp; Course Specs',
 specsSub: 'Official German Golf Association (DGV) rating for 18-hole Blue-Yellow and 9-hole loops.',
 thTee: 'Tee / Color',
 thPar: 'Par',
 thLength: 'Length (CR)',
 thSlope: 'Slope',
 thCR: 'Course Rating',

 tagDownloads: 'Service &amp; Documents',
 downloadsHeading: 'Downloads &amp; Scorecards',
 downloadsSub: 'Download official scorecards, handicap slope tables, and course rules directly as PDF.',
 dl1Title: '18-Hole Scorecard',
 dl1Desc: 'Official scorecard for Course Blue-Yellow including layout graphics and handicap matrix.',
 btnDl1: 'Download Scorecard (PDF)',
 dl2Title: 'DGV Slope & Playing Tables',
 dl2Desc: 'Complete playing handicap conversion tables for ladies and gentlemen across all tee markers.',
 btnDl2: 'Open Handicap Table (PDF)',
 dl3Title: 'Course Rules & Etiquette',
 dl3Desc: 'Everything you need to know about pace of play, dress code, and local rules at Gut Wissmannshof.',
 btnDl3: 'View Course Rules (PDF)',

 tagPractice: 'Training Academy',
 practiceHeading: 'Expansive Practice Facilities',
 practiceSub: 'Optimal training facilities for golfers of all levels located adjacent to the clubhouse and hotel.',
 pf1Title: 'Grand Driving Range with Turf & Covered Bays',
 pf1Desc: 'Multiple target greens and covered bays for year-round training in all weather conditions.',
 pf2Title: 'Spacious Putting & Chipping Green',
 pf2Desc: 'True speeds and subtle breaks identical to the championship greens.',
 pf3Title: 'Practice Bunkers & Pitching Zone',
 pf3Desc: 'Dial in your bunker game and approaches from varied lies and distance markers.',
 pf4Title: 'PGA Golf Academy & Pro Coaches',
 pf4Desc: 'Advanced swing and video analysis with bespoke coaching for beginners and scratch players.',

 tagBooking: 'Reserve Your Game',
 ctaBookHeading: 'Ready for Your Round at Gut Wissmannshof?',
 ctaBookSub: 'Book your tee time conveniently online via PC CADDIE or contact the clubhouse reception desk.',
 btnPCCaddieBook: 'Book Tee Time via PC CADDIE ↗',
 ctaCallDirect: 'Or call directly: +49 (0) 5543 999 333'
 }
};

/* ==========================================================================
 Render Active Hole Function
 ========================================================================== */
function renderHole(index) {
 if (currentLoopFilter === 'canyon') {
 renderCanyonCourse();
 return;
 }

 if (index < 0) index = 0;
 if (index >= HOLE_DATA.length) index = HOLE_DATA.length - 1;
 currentHoleIndex = index;

 const hole = HOLE_DATA[index];
 const isEn = (currentLang === 'en');

 // Update active state in hole button grid
 const holeBtns = document.querySelectorAll('.hole-btn');
 holeBtns.forEach(btn => {
 const btnHole = parseInt(btn.getAttribute('data-hole'), 10);
 if (btnHole === hole.id) {
 btn.classList.add('active');
 } else {
 btn.classList.remove('active');
 }
 });

 // Populate Hole Showcase
 const showcaseContainer = document.getElementById('hole-showcase-container');
 if (!showcaseContainer) return;

 const holeNumStr = hole.id < 10 ? `0${hole.id}` : `${hole.id}`;
 const holeTitle = isEn ? hole.name.en : hole.name.de;
 const holeDesc = isEn ? hole.desc.en : hole.desc.de;
 const holeProTip = isEn ? hole.protip.en : hole.protip.de;
 const loopNameStr = isEn ? hole.loopName.en : hole.loopName.de;

 const t = TRANSLATIONS[currentLang];

 showcaseContainer.innerHTML = `
 <div class="hole-graphic-wrapper" onclick="openLightbox('${hole.image}', '${holeNumStr} – ${holeTitle}')">
 <img src="${hole.image}" alt="${holeTitle}" class="hole-graphic-img" id="current-hole-img">
 <div class="hole-zoom-hint">${t.zoomHint}</div>
 </div>
 
 <div class="hole-info-content">
 <div class="hole-header-meta">
 <div class="hole-title-group">
 <div style="font-size:0.82rem; font-weight:700; color:var(--color-gold); text-transform:uppercase; letter-spacing:0.06em;">${loopNameStr}</div>
 <h3>${holeTitle}</h3>
 </div>
 <div class="hole-par-hcp-bar">
 <div class="meta-pill">
 <span>${t.lblPar}</span>
 <strong>${hole.par}</strong>
 </div>
 <div class="meta-pill" style="border-left: 1px solid #DCD5C5; padding-left: 14px;">
 <span>${t.lblHcp}</span>
 <strong>${hole.hcp}</strong>
 </div>
 </div>
 </div>

 <!-- Tee Distances -->
 <div class="tee-distances-grid">
 <div class="tee-box-item">
 <div class="tee-indicator tee-white"></div>
 <div class="tee-name">${t.lblTeeWhite}</div>
 <div class="tee-meters">${hole.tees.white} <small style="font-size:0.75rem; font-weight:600;">${t.lblTeeMeters}</small></div>
 </div>
 <div class="tee-box-item">
 <div class="tee-indicator tee-yellow"></div>
 <div class="tee-name">${t.lblTeeYellow}</div>
 <div class="tee-meters">${hole.tees.yellow} <small style="font-size:0.75rem; font-weight:600;">${t.lblTeeMeters}</small></div>
 </div>
 <div class="tee-box-item">
 <div class="tee-indicator tee-blue"></div>
 <div class="tee-name">${t.lblTeeBlue}</div>
 <div class="tee-meters">${hole.tees.blue} <small style="font-size:0.75rem; font-weight:600;">${t.lblTeeMeters}</small></div>
 </div>
 <div class="tee-box-item">
 <div class="tee-indicator tee-red"></div>
 <div class="tee-name">${t.lblTeeRed}</div>
 <div class="tee-meters">${hole.tees.red} <small style="font-size:0.75rem; font-weight:600;">${t.lblTeeMeters}</small></div>
 </div>
 </div>

 <!-- Description -->
 <div class="hole-description-box">
 <h4>${t.lblTactic}</h4>
 <p>${holeDesc}</p>
 </div>

 <!-- Pro Tip -->
 <div class="protip-box">
 <div class="protip-icon">★</div>
 <div class="protip-text">
 <h5>${t.lblProTip}</h5>
 <p>${holeProTip}</p>
 </div>
 </div>

 <!-- Navigation buttons -->
 <div class="hole-nav-controls">
 <button class="btn-hole-nav" onclick="changeHole(-1)">${t.btnPrevHole}</button>
 <button class="btn-hole-nav" onclick="changeHole(1)">${t.btnNextHole}</button>
 </div>
 </div>
 `;
}

function renderCanyonCourse() {
 const isEn = (currentLang === 'en');
 const t = TRANSLATIONS[currentLang];
 const cData = CANYON_COURSE_DATA;
 const title = isEn ? cData.name.en : cData.name.de;
 const desc = isEn ? cData.desc.en : cData.desc.de;

 const showcaseContainer = document.getElementById('hole-showcase-container');
 if (!showcaseContainer) return;

 showcaseContainer.innerHTML = `
 <div class="hole-graphic-wrapper" onclick="openLightbox('${cData.image}', '${title}')">
 <img src="${cData.image}" alt="${title}" class="hole-graphic-img">
 <div class="hole-zoom-hint">${t.zoomHint}</div>
 </div>
 
 <div class="hole-info-content">
 <div class="hole-header-meta">
 <div class="hole-title-group">
 <div style="font-size:0.82rem; font-weight:700; color:var(--color-gold); text-transform:uppercase; letter-spacing:0.06em;">CANYON-KURSSYSTEM</div>
 <h3>${title}</h3>
 </div>
 <div class="hole-par-hcp-bar">
 <div class="meta-pill">
 <span>Bahnen</span>
 <strong>6 (9)</strong>
 </div>
 </div>
 </div>

 <div class="hole-description-box">
 <h4>${t.lblTactic}</h4>
 <p>${desc}</p>
 </div>

 <div class="protip-box">
 <div class="protip-icon">★</div>
 <div class="protip-text">
 <h5>${t.lblProTip}</h5>
 <p>${isEn ? 'Ideal for sharpening wedge distances and short pitching shots before playing the 18-hole championship course.' : 'Ideal, um vor der großen 18-Loch-Runde das Annäherungsspiel und Distanzgefühl für die Wedges einzustellen.'}</p>
 </div>
 </div>

 <div class="hole-nav-controls">
 <button class="btn-hole-nav" onclick="switchLoopTab('blau')">← ${t.tabBlau}</button>
 <button class="btn-hole-nav" onclick="switchLoopTab('gelb')">${t.tabGelb} →</button>
 </div>
 </div>
 `;
}

function changeHole(offset) {
 let nextIdx = currentHoleIndex + offset;
 if (nextIdx < 0) nextIdx = HOLE_DATA.length - 1;
 if (nextIdx >= HOLE_DATA.length) nextIdx = 0;
 
 // Check loop
 const targetHole = HOLE_DATA[nextIdx];
 if (targetHole.loop !== currentLoopFilter && currentLoopFilter !== 'all') {
 currentLoopFilter = targetHole.loop;
 updateLoopTabsUI();
 rebuildHoleButtons();
 }

 renderHole(nextIdx);
}

function selectHoleById(holeId) {
 const idx = HOLE_DATA.findIndex(h => h.id === holeId);
 if (idx !== -1) {
 currentHoleIndex = idx;
 const targetHole = HOLE_DATA[idx];
 if (targetHole.loop !== currentLoopFilter && currentLoopFilter !== 'canyon') {
 currentLoopFilter = targetHole.loop;
 updateLoopTabsUI();
 rebuildHoleButtons();
 }
 renderHole(idx);
 }
}

function switchLoopTab(loopKey) {
 currentLoopFilter = loopKey;
 updateLoopTabsUI();
 
 if (loopKey === 'canyon') {
 const selectorBar = document.getElementById('hole-selector-bar');
 if (selectorBar) selectorBar.style.display = 'none';
 renderCanyonCourse();
 } else {
 const selectorBar = document.getElementById('hole-selector-bar');
 if (selectorBar) selectorBar.style.display = 'flex';
 
 rebuildHoleButtons();
 if (loopKey === 'blau') {
 selectHoleById(1);
 } else if (loopKey === 'gelb') {
 selectHoleById(10);
 }
 }
}

function updateLoopTabsUI() {
 const tabs = document.querySelectorAll('.guide-tab-btn');
 tabs.forEach(tab => {
 if (tab.getAttribute('data-tab') === currentLoopFilter) {
 tab.classList.add('active');
 } else {
 tab.classList.remove('active');
 }
 });
}

function rebuildHoleButtons() {
 const grid = document.getElementById('hole-btn-grid');
 if (!grid) return;
 grid.innerHTML = '';

 let visibleHoles = [];
 if (currentLoopFilter === 'blau') {
 visibleHoles = HOLE_DATA.filter(h => h.loop === 'blau');
 } else if (currentLoopFilter === 'gelb') {
 visibleHoles = HOLE_DATA.filter(h => h.loop === 'gelb');
 } else {
 visibleHoles = HOLE_DATA;
 }

 visibleHoles.forEach(h => {
 const btn = document.createElement('button');
 btn.className = 'hole-btn';
 btn.setAttribute('data-hole', h.id);
 btn.textContent = h.id < 10 ? `0${h.id}` : `${h.id}`;
 btn.onclick = () => selectHoleById(h.id);
 grid.appendChild(btn);
 });
}

/* ==========================================================================
 Lightbox Zoom
 ========================================================================== */
function openLightbox(imgSrc, captionText) {
 const modal = document.getElementById('lightbox-modal');
 const modalImg = document.getElementById('lightbox-img');
 const modalCaption = document.getElementById('lightbox-caption');

 if (modal && modalImg) {
 modalImg.src = imgSrc;
 if (modalCaption) modalCaption.textContent = captionText || '';
 modal.classList.add('active');
 document.body.style.overflow = 'hidden';
 }
}

function closeLightbox() {
 const modal = document.getElementById('lightbox-modal');
 if (modal) {
 modal.classList.remove('active');
 document.body.style.overflow = '';
 }
}

/* ==========================================================================
 Language Switching System
 ========================================================================== */
window.setLanguage = function(lang) {
 currentLang = lang;
 localStorage.setItem('sgr_lang', lang);
 document.documentElement.lang = lang;

 // Update active button state
 const deBtn = document.getElementById('lang-de');
 const enBtn = document.getElementById('lang-en');
 if (deBtn && enBtn) {
 if (lang === 'de') {
 deBtn.classList.add('active');
 enBtn.classList.remove('active');
 } else {
 enBtn.classList.add('active');
 deBtn.classList.remove('active');
 }
 }

 // Apply translations to data-t elements
 const dict = TRANSLATIONS[lang] || TRANSLATIONS.de;
 document.querySelectorAll('[data-t]').forEach(el => {
 const key = el.getAttribute('data-t');
 if (dict[key]) {
 el.innerHTML = dict[key];
 }
 });

 // Re-render current hole details
 renderHole(currentHoleIndex);
};

/* ==========================================================================
 DOM Init
 ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
 // Initial loop and hole render
 rebuildHoleButtons();
 switchLoopTab('blau');

 // Apply saved language
 const savedLang = localStorage.getItem('sgr_lang') || 'de';
 window.setLanguage(savedLang);

 // Mobile Menu Toggle
 const menuToggle = document.getElementById('mobile-menu-toggle');
 const mainNav = document.getElementById('main-nav');
 if (menuToggle && mainNav) {
 menuToggle.addEventListener('click', () => {
 mainNav.classList.toggle('open');
 });
 }

 // Close lightbox on click outside image
 const lightbox = document.getElementById('lightbox-modal');
 if (lightbox) {
 lightbox.addEventListener('click', (e) => {
 if (e.target === lightbox) {
 closeLightbox();
 }
 });
 }

 // Keyboard support: Left/Right arrow for hole navigation, Esc for lightbox
 document.addEventListener('keydown', (e) => {
 if (e.key === 'Escape') {
 closeLightbox();
 } else if (e.key === 'ArrowRight') {
 if (currentLoopFilter !== 'canyon') changeHole(1);
 } else if (e.key === 'ArrowLeft') {
 if (currentLoopFilter !== 'canyon') changeHole(-1);
 }
 });
});
