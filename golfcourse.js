/* ==========================================================================
 Gut Wissmannshof - Golf Course & Interactive 18-Hole Guide Engine
 Bilingual Support (DE / EN), Interactive Hole Viewer, Lightbox
 ========================================================================== */

const HOLE_DATA = [
    // --- KURS BLAU (Holes 1 - 9 / Out) ---
    {
        id: 1,
        loop: 'blau',
        holeNumber: 1,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 1 – Der Auftakt', en: 'Hole 1 – The Opener' },
        par: 5,
        hcp: 3,
        tees: { white: 471, yellow: 459, blue: 448, red: 409 },
        image: 'assets/course_holes/blau_1.jpg',
        desc: {
            de: 'Ein meisterhaftes Par 5 zum Start mit weitem Blick über das nordhessische Hügelland. Ein solider Abschlag eröffnet gute Chancen auf ein sicheres Par.',
            en: 'A masterful opening Par 5 with sweeping views across the rolling countryside. A solid tee shot opens up great opportunities for a safe Par.'
        },
        protip: {
            de: 'Zielen Sie leicht rechts der Mitte, um den optimalen Winkel für den zweiten Schlag in Richtung Grün zu haben.',
            en: 'Target slightly right of center to set up the ideal angle for your second shot towards the green.'
        }
    },
    {
        id: 2,
        loop: 'blau',
        holeNumber: 2,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 2 – Das sanfte Dogleg', en: 'Hole 2 – The Gentle Dogleg' },
        par: 4,
        hcp: 13,
        tees: { white: 328, yellow: 304, blue: 293, red: 278 },
        image: 'assets/course_holes/blau_2.jpg',
        desc: {
            de: 'Ein kürzeres Par 4, das Taktik vor Weite belohnt. Der Landebereich wird von Bunkern und dem Semirough geschützt.',
            en: 'A shorter Par 4 that rewards strategy over distance. The landing area is framed by sand hazards and semi-rough.'
        },
        protip: {
            de: 'Ein langes Eisen oder Holz 3 vom Abschlag reicht völlig aus, um mit einem kurzen Wedge das Grün anzuspielen.',
            en: 'A long iron or 3-wood off the tee is ideal to leave a comfortable short wedge into the putting surface.'
        }
    },
    {
        id: 3,
        loop: 'blau',
        holeNumber: 3,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 3 – Die Klippe', en: 'Hole 3 – The Ridge' },
        par: 4,
        hcp: 5,
        tees: { white: 425, yellow: 400, blue: 374, red: 355 },
        image: 'assets/course_holes/blau_3.jpg',
        desc: {
            de: 'Ein langes und anspruchsvolles Par 4. Hier ist ein kontrollierter, kraftvoller Abschlag gefragt.',
            en: 'A demanding, long Par 4 requiring a powerful and controlled drive to reach the landing corridor.'
        },
        protip: {
            de: 'Spielen Sie das Grün defensiv über die Mitte an, da die vorderen Bunker Schläge festhalten.',
            en: 'Play defensively towards the center of the green to avoid the guarding front bunkers.'
        }
    },
    {
        id: 4,
        loop: 'blau',
        holeNumber: 4,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 4 – Der Waldkorridor', en: 'Hole 4 – Forest Corridor' },
        par: 5,
        hcp: 11,
        tees: { white: 451, yellow: 441, blue: 434, red: 413 },
        image: 'assets/course_holes/blau_4.jpg',
        desc: {
            de: 'Ein strategisches Par 5 entlang sanfter Hügelkuppen mit herrlichem Panorama.',
            en: 'A strategic Par 5 undulating along gentle ridges offering scenic views across the resort.'
        },
        protip: {
            de: 'Legen Sie den zweiten Schlag clever ab, um einen vollen Schlag mit Spin auf die Fahne zu haben.',
            en: 'Position your layup carefully to leave a full, spin-controlled wedge approach into the pin.'
        }
    },
    {
        id: 5,
        loop: 'blau',
        holeNumber: 5,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 5 – Das Präzisions-Par 3', en: 'Hole 5 – Precision Par 3' },
        par: 3,
        hcp: 15,
        tees: { white: 138, yellow: 117, blue: 107, red: 99 },
        image: 'assets/course_holes/blau_5.jpg',
        desc: {
            de: 'Ein kurzes, feines Par 3. Die richtige Schlägerwahl entscheidet über den Birdie-Putt.',
            en: 'A short, crisp Par 3 where precise club selection sets up great birdie opportunities.'
        },
        protip: {
            de: 'Achten Sie auf die Fahnenposition auf dem ondulierten Grün – die Mitte ist immer sicher.',
            en: 'Observe the daily pin position closely on this tiered green; center green is always the safe play.'
        }
    },
    {
        id: 6,
        loop: 'blau',
        holeNumber: 6,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 6 – Schluchten-Schwung', en: 'Hole 6 – Gorge Swing' },
        par: 4,
        hcp: 7,
        tees: { white: 334, yellow: 310, blue: 283, red: 264 },
        image: 'assets/course_holes/blau_6.jpg',
        desc: {
            de: 'Ein flüssig geformtes Par 4, das Genauigkeit vom Abschlag bis zum Loch belohnt.',
            en: 'A beautifully sculpted Par 4 rewarding precision from tee to green.'
        },
        protip: {
            de: 'Vermeiden Sie das seitliche Rough rechts – der linke Fairwaybereich eröffnet den besten Anspielwinkel.',
            en: 'Steer clear of the rough on the right; the left fairway section opens the cleanest angle to the pin.'
        }
    },
    {
        id: 7,
        loop: 'blau',
        holeNumber: 7,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 7 – Das Tannen-Par 3', en: 'Hole 7 – Pine Par 3' },
        par: 3,
        hcp: 9,
        tees: { white: 185, yellow: 173, blue: 137, red: 127 },
        image: 'assets/course_holes/blau_7.webp',
        desc: {
            de: 'Ein knackiges Par 3 über 170 Meter von Gelb. Gut verteidigt durch Bunker und Geländeondulationen.',
            en: 'A testing Par 3 playing over 170 meters from yellow tees, well defended by sand traps.'
        },
        protip: {
            de: 'Nehmen Sie im Zweifel einen Schläger mehr, um die vordere Bunkerkante sicher zu überwinden.',
            en: 'Take one club extra to comfortably clear the front bunker edges.'
        }
    },
    {
        id: 8,
        loop: 'blau',
        holeNumber: 8,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 8 – Eichenallee', en: 'Hole 8 – Oak Avenue' },
        par: 4,
        hcp: 17,
        tees: { white: 284, yellow: 261, blue: 236, red: 227 },
        image: 'assets/course_holes/blau_8.jpg',
        desc: {
            de: 'Ein kurzes Par 4 mit Birdie-Potenzial. Longhitter können das Grün direkt attackieren.',
            en: 'A short, sporty Par 4 with great birdie potential. Long hitters can challenge the green directly.'
        },
        protip: {
            de: 'Ein defensiver Schlag mit dem Eisen in die Fairwaymitte lässt ein einfaches Wedge zur Fahne.',
            en: 'A controlled iron to the fairway center leaves an easy wedge for a tap-in chance.'
        }
    },
    {
        id: 9,
        loop: 'blau',
        holeNumber: 9,
        loopName: { de: 'Kurs Blau (Hole 1–9)', en: 'Course Blue (Hole 1–9)' },
        name: { de: 'Bahn 9 – Heimkehr zum Gutshof', en: 'Hole 9 – Manor Homecoming' },
        par: 4,
        hcp: 1,
        tees: { white: 371, yellow: 342, blue: 316, red: 291 },
        image: 'assets/course_holes/blau_9.webp',
        desc: {
            de: 'Die schwerste Bahn auf Kurs Blau (HCP 1). Ein anspruchsvolles Finish der ersten Neun vor dem Clubhaus.',
            en: 'The handicap 1 challenge on Course Blue. A demanding and rewarding finish of the front nine.'
        },
        protip: {
            de: 'Spielen Sie hier auf Nummer sicher: Mitte Fairway, Mitte Grün – ein Par fühlt sich hier wie ein Birdie an!',
            en: 'Play for position: center fairway, center green – a Par on Hole 9 feels like a Birdie!'
        }
    },

    // --- KURS GELB (Holes 10 - 18 / In) ---
    {
        id: 10,
        loop: 'gelb',
        holeNumber: 10,
        loopHoleNumber: 1,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 10 (Gelb 1) – Der Neustart', en: 'Hole 10 (Yellow 1) – The Restart' },
        par: 4,
        hcp: 4,
        tees: { white: 406, yellow: 358, blue: 326, red: 299 },
        image: 'assets/course_holes/gelb_1.jpg',
        desc: {
            de: 'Ein starker Auftakt in die zweiten Neun über 358 Meter von Gelb mit HCP 4.',
            en: 'A formidable start to the back nine measuring 358 meters from yellow tees with handicap 4.'
        },
        protip: {
            de: 'Ein langer Drive auf die rechte Fairwayhälfte eröffnet den besten Blick auf das leicht erhöhte Grün.',
            en: 'A strong drive down the right half of the fairway opens up the clearest line to the green.'
        }
    },
    {
        id: 11,
        loop: 'gelb',
        holeNumber: 11,
        loopHoleNumber: 2,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 11 (Gelb 2) – Präzisions-Challenge', en: 'Hole 11 (Yellow 2) – Precision Challenge' },
        par: 4,
        hcp: 6,
        tees: { white: 318, yellow: 303, blue: 285, red: 260 },
        image: 'assets/course_holes/gelb_2.jpg',
        desc: {
            de: 'Ein tückisches Par 4 mit anspruchsvoll verteidigter Grünzone.',
            en: 'A tactical Par 4 demanding high accuracy on the approach into a well-bunkered green.'
        },
        protip: {
            de: 'Spielen Sie den Abschlag kontrolliert und vertrauen Sie auf Ihr kurzes Spiel.',
            en: 'Keep your tee shot under control and trust your short game into the pin.'
        }
    },
    {
        id: 12,
        loop: 'gelb',
        holeNumber: 12,
        loopHoleNumber: 3,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 12 (Gelb 3) – Das Schuss-Par 3', en: 'Hole 12 (Yellow 3) – The Shoot Par 3' },
        par: 3,
        hcp: 14,
        tees: { white: 142, yellow: 135, blue: 128, red: 106 },
        image: 'assets/course_holes/gelb_3.jpg',
        desc: {
            de: 'Ein attraktives Par 3 mit 135 Metern von Gelb – präzises Eisen gefragt!',
            en: 'An attractive Par 3 playing 135 meters from yellow tees – pure iron precision.'
        },
        protip: {
            de: 'Zielen Sie auf das Grünzentrum, um den Ball sicher zum Putt zu positionieren.',
            en: 'Aim for the center of the green to guarantee an easy two-putt Par.'
        }
    },
    {
        id: 13,
        loop: 'gelb',
        holeNumber: 13,
        loopHoleNumber: 4,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 13 (Gelb 4) – Das Weiten-Par 5', en: 'Hole 13 (Yellow 4) – The Long Par 5' },
        par: 5,
        hcp: 10,
        tees: { white: 493, yellow: 474, blue: 455, red: 428 },
        image: 'assets/course_holes/gelb_4.jpg',
        desc: {
            de: 'Ein großartiges Par 5 mit 474 Metern von Gelb entlang sanft geschwungener Fairways.',
            en: 'A great Par 5 stretching 474 meters from yellow tees along rolling fairways.'
        },
        protip: {
            de: 'Teilen Sie die Bahn in drei komfortable Schläge ein, um das Par souverän zu sichern.',
            en: 'Divide the hole into three controlled shots to secure your regulation Par.'
        }
    },
    {
        id: 14,
        loop: 'gelb',
        holeNumber: 14,
        loopHoleNumber: 5,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 14 (Gelb 5) – Das Insel-Gefühl', en: 'Hole 14 (Yellow 5) – Island Feeling' },
        par: 3,
        hcp: 18,
        tees: { white: 159, yellow: 142, blue: 133, red: 109 },
        image: 'assets/course_holes/gelb_5.webp',
        desc: {
            de: 'Ein malerisches Par 3 (HCP 18), das Konzentration und Gefühl verlangt.',
            en: 'A scenic Par 3 (Handicap 18) demanding steady nerves and pure club contact.'
        },
        protip: {
            de: 'Wählen Sie den passenden Schläger für die exakte Distanz und schwingen Sie locker durch.',
            en: 'Select the exact yardage club and commit to a smooth, balanced swing.'
        }
    },
    {
        id: 15,
        loop: 'gelb',
        holeNumber: 15,
        loopHoleNumber: 6,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 15 (Gelb 6) – Die Höhenlinie', en: 'Hole 15 (Yellow 6) – The Ridge' },
        par: 4,
        hcp: 8,
        tees: { white: 358, yellow: 341, blue: 318, red: 294 },
        image: 'assets/course_holes/gelb_6.jpg',
        desc: {
            de: 'Ein sportliches Par 4 mit weitem Blick über die Anlage.',
            en: 'A sporty Par 4 with grand panoramic views across the resort course.'
        },
        protip: {
            de: 'Vermeiden Sie die linken Bunker und spielen Sie den zweiten Schlag mit ausreichend Schläger.',
            en: 'Avoid the left fairway bunkers and ensure sufficient club on your approach.'
        }
    },
    {
        id: 16,
        loop: 'gelb',
        holeNumber: 16,
        loopHoleNumber: 7,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 16 (Gelb 7) – Das Monster Par 5', en: 'Hole 16 (Yellow 7) – The Monster Par 5' },
        par: 5,
        hcp: 2,
        tees: { white: 526, yellow: 502, blue: 468, red: 446 },
        image: 'assets/course_holes/gelb_7.jpg',
        desc: {
            de: 'Die schwerste Bahn der zweiten Neun (HCP 2). Über 500 Meter von Gelb mit Wasser und Sand.',
            en: 'The stroke index 2 monster on the back nine stretching over 500 meters from yellow tees.'
        },
        protip: {
            de: 'Hier ist intelligentes Course-Management der Schlüssel zum Erfolg. Drei präzise Schläge spielen.',
            en: 'Intelligent course management is key here. Execute three calculated, clean shots.'
        }
    },
    {
        id: 17,
        loop: 'gelb',
        holeNumber: 17,
        loopHoleNumber: 8,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 17 (Gelb 8) – Am See', en: 'Hole 17 (Yellow 8) – Lakeside' },
        par: 3,
        hcp: 16,
        tees: { white: 168, yellow: 145, blue: 136, red: 127 },
        image: 'assets/course_holes/gelb_8.jpg',
        desc: {
            de: 'Ein spektakuläres Par 3 am Wasser. Ein Postkarten-Motiv vor dem großen Finale.',
            en: 'A breathtaking Par 3 right along the water hazard – a postcard view before the finale.'
        },
        protip: {
            de: 'Lassen Sie sich vom Wasser nicht einschüchtern – ein satter Schlag auf Grünmitte reicht.',
            en: 'Do not let the water hazard distract you – commit to the center of the green.'
        }
    },
    {
        id: 18,
        loop: 'gelb',
        holeNumber: 18,
        loopHoleNumber: 9,
        loopName: { de: 'Kurs Gelb (Back Nine)', en: 'Course Yellow (Back Nine)' },
        name: { de: 'Bahn 18 (Gelb 9) – Das Grand Finale', en: 'Hole 18 (Yellow 9) – The Grand Finale' },
        par: 5,
        hcp: 12,
        tees: { white: 529, yellow: 488, blue: 457, red: 428 },
        image: 'assets/course_holes/gelb_9.jpg',
        desc: {
            de: 'Ein fulminantes Par 5 mit 488 Metern von Gelb direkt vor die Sonnenterrasse des Resorthotels.',
            en: 'A glorious finishing Par 5 measuring 488 meters from yellow right in front of the sun terrace.'
        },
        protip: {
            de: 'Genießen Sie den finalen Annäherungsschlag vor den Zuschauern auf der Clubhausterrasse!',
            en: 'Enjoy your final approach shot framed by the spectators on the clubhouse terrace!'
        }
    }
];

/// Canyon Course Extra Card Info
const CANYON_COURSE_DATA = {
	image: 'assets/course_holes/canyon_course.jpg',
	name: { de: 'Canyon Academy Kurs', en: 'Canyon Academy Course' },
	desc: {
		de: 'Unser anspruchsvoller Canyon Academy Kurs (6 Loch, in Kürze auf 9 Loch erweitert) bietet sowohl Einsteigern als auch passionierten Golfern das ideale Terrain für präzises Spiel, Training und Platzreife unter realen Platzbedingungen. Auch ohne Platzreife bespielbar!',
		en: 'Our challenging Canyon Academy Course (6 holes, expanding to 9 holes shortly) provides beginners and passionate golfers with the ideal setting for accurate ball striking, scoring practice, and course qualification under real-world conditions. Playable without handicap certificate!'
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
        heroBadge: '18-Loch Resort Course &amp; Canyon Academy Kurs',
        heroTitle: 'Die <span>Golfbahnen</span> auf Gut Wissmannshof.',
        heroLead: 'Spektakuläre Ausblicke über das Kasseler Land, meisterhafte Fairways und herausfordernde Championship-Architektur.',
        btnHeroExplore: 'Hole 1–18 erkunden ↓',
        btnHeroBook: 'Startzeit reservieren',
        fact1Number: '18',
        fact1Label: 'Loch Resort Course (+ 9 Loch in Planung)',
        fact2Number: '18',
        fact2Label: 'Resort Course Blau-Gelb',
        fact3Number: '4',
        fact3Label: 'Abschläge pro Bahn (W/G/B/R)',
        fact4Number: '365',
        fact4Label: 'Tage ganzjährig bespielbar',
        
        tagLoops: 'Platzarchitektur',
        loopsHeading: 'Unsere Kurs-Kombinationen',
        loopsSub: 'Die Anlage von Gut Wissmannshof begeistert mit einem anspruchsvollen 18-Loch Resort Course (Kurs Gelb & Kurs Blau), dem Canyon Academy Kurs sowie 9 weiteren Meisterschaftslöchern in Planung.',
        
        lblDistance: 'Distanz:',
        lblParCourse: 'Par:',
        lblFormat: 'Format:',
        lblAccess: 'Zugang:',
        lblStatus: 'Status:',
        lblGoal: 'Ziel:',

        loopBlauTitle: 'Kurs Blau (Hole 1–9)',
        loopBlauBadge: 'Hole 1–9',
        loopBlauSpec1: 'Weiß: 2.987 m | Gelb: 2.807 m | Rot: 2.463 m',
        loopBlauPar: '36 (Out) · 9 Bahnen',
        loopBlauDesc: 'Weite Ausblicke über die sanften Hügel, abwechslungsreiche Höhenprofile und strategisch platzierte Wasser- und Sandhindernisse.',
        btnViewBlau: 'Hole 1–9 ansehen',
        
        loopGelbTitle: 'Kurs Gelb',
        loopGelbBadge: 'Hole 10–18',
        loopGelbSpec1: 'Weiß: 3.099 m | Gelb: 2.888 m | Rot: 2.497 m',
        loopGelbPar: '36 (In) · 9 Bahnen',
        loopGelbDesc: 'Flüssig eingebettet in das sanfte Gelände mit spektakulärem Finale vor der Resorthotel-Sonnenterrasse.',
        btnViewGelb: 'Hole 10–18 ansehen',
        
        loopCanyonTitle: 'Canyon Academy Kurs',
        loopCanyonBadge: '6 Loch (Ausbau auf 9 Loch)',
        loopCanyonFormat: '6 anspruchsvolle Academy-Bahnen (in Kürze 9 Loch)',
        loopCanyonAccess: 'Ohne Platzerlaubnis / PE bespielbar',
        loopCanyonDesc: 'Perfekt für effektives Training, schnelles Spiel nach Feierabend und fundierte Platzreifeausbildung. In Kürze auf 9 Loch erweitert!',
        btnViewCanyon: 'Canyon Academy Kurs ansehen',

        loopRotTitle: 'Kurs Rot (Ausblick)',
        loopRotBadge: 'In Entwicklung',
        loopRotSpec1: '9 weitere Resort-Bahnen',
        loopRotSpec2: 'Erweiterung des Resort Course um 9 Bahnen',
        loopRotDesc: 'Die dritte 9-Loch-Schleife (in Planung) erweitert künftig unsere Resort Course um 9 weitere spektakuläre Bahnen.',
        btnViewRot: 'In Planung',

        tagGuide: 'Interaktiver Course-Guide',
        guideHeading: 'Hole 1 bis 18 im Detail entdecken',
        guideSub: 'Wählen Sie eine Bahn aus, um die detaillierte Platzgrafik, Distanzen aller Teeboxen und Pro-Tipps anzuzeigen.',
        
        tabBlau: '🔵 Kurs Blau (Hole 1–9)',
        tabGelb: '🟡 Kurs Gelb (Hole 10–18)',
        tabCanyon: '🟢 Canyon Academy Kurs',
        selectorTitle: 'Bahn wählen:',
        zoomHint: 'Klick zum Vergrößern',
        
        lblPar: 'Par',
        lblHcp: 'HCP / Index',
        lblTeeWhite: 'Weiß (Champ.)',
        lblTeeYellow: 'Gelb (Herren)',
        lblTeeBlue: 'Blau (Herren)',
        lblTeeRed: 'Rot (Damen)',
        lblTeeMeters: 'm',
        
        lblTactic: 'Strategie & Bahnbeschreibung',
        lblProTip: 'Pro-Tipp',
        btnPrevHole: '← Vorherige Bahn',
        btnNextHole: 'Nächste Bahn →',

        tagGallery: 'Atmosphäre &amp; Natur',
        galleryHeading: 'Impressionen unserer Golfanlage',
        gallerySub: 'Perfekt modellierte Fairways, kristallklare Wasserhindernisse, schneeweiße Sandbunker und blühende Naturlandschaften im Herzen des Kasseler Landes.',
        
                        tagSpecs: 'DGV Course Rating &amp; Slope',
        specsHeading: 'Rating Table &amp; Course Data',
        specsSub: 'Official German Golf Association (DGV) rating for the 18-hole Resort Course (Blue/Yellow Combination).',
        thTee: 'Tee / Color',
        thTarget: 'Category / Rating',
        thPar: 'Par',
        thLength: 'Length',
        thSlope: 'Slope',
        thCR: 'Course Rating (CR)',
        specsGroupMen: 'Men – 18-Hole Resort Course (Blue/Yellow Loop)',
        specsGroupWomen: 'Women – 18-Hole Resort Course (Blue/Yellow Loop)',
        teeWhiteMen: 'Back Championship Tees',
        teeYellowMen: 'Standard Back Tees',
        teeBlueMen: 'Middle Tees',
        teeRedMen: 'Forward Standard Tees',
        teeOrangeMen: 'Short Course Tees',
        teeGreenMen: 'Junior Tees',
        teeYellowWomen: 'Back Tees',
        teeBlueWomen: 'Middle Tees',
        teeRedWomen: 'Standard Forward Tees',
        teeOrangeWomen: 'Short Course Tees',
        teeGreenWomen: 'Junior Tees',

        tagDownloads: 'Service &amp; Documents',
        downloadsHeading: 'Downloads &amp; Scorecards',
        downloadsSub: 'Download official scorecards and handicap playing tables directly as PDF.',
        dl1Title: '18-Hole Scorecard',
        dl1Desc: 'Official scorecard for Course Blue-Yellow including layout graphics and handicap matrix.',
        btnDl1: 'Download Scorecard (PDF)',
        dl2Title: 'DGV Slope & Playing Tables',
        dl2Desc: 'Complete playing handicap conversion tables for ladies, gentlemen, and juniors across all tee markers.',
        btnDl2: 'Open Playing Table (PDF)',

        tagPractice: 'Training Academy',
        practiceHeading: 'Expansive Practice Facilities',
        practiceSub: 'Optimal training facilities for golfers of all levels located adjacent to the clubhouse and hotel.',
        pf1Title: 'Grand Driving Range with Turf & Covered Bays',
        pf1Desc: 'Multiple target greens and covered bays for year-round training in all weather conditions.',
        pf2Title: 'Spacious Putting & Chipping Green',
        pf2Desc: 'True speeds and subtle breaks identical to the resort greens.',
        pf3Title: 'Practice Bunkers & Pitching Zone',
        pf3Desc: 'Dial in your bunker game and approaches from varied lies and distance markers.',
        pf4Title: 'PGA Golf Academy & Pro Coaches',
        pf4Desc: 'Advanced swing and video analysis with bespoke coaching for beginners and scratch players.',

        tagBooking: 'Reserve Your Game',
        ctaBookHeading: 'Ready for Your Round at Gut Wissmannshof?',
        ctaBookSub: 'Book your tee time conveniently online via PC CADDIE or contact the clubhouse reception desk.',
        btnPCCaddieBook: 'Book Tee Time via PC CADDIE ↗',
        ctaCallDirect: 'Or call directly: +49 (0) 55 43 / 999 335',

        tagMap: 'Location &amp; Directions',
        mapHeading: 'Getting to Gut Wissmannshof',
        mapSub: 'Located in the scenic border triangle of Hesse, Lower Saxony, and Thuringia – only 15 minutes from Kassel and minutes off the A7 motorway.',
        mapCardTitle: 'Your Journey to Us',
        navAlertTitle: 'Important Navigation Advice:',
        navAlertText: 'For accurate satellite navigation, please always enter the full street address <strong>"Wissmannshof 1" (34355 Staufenberg)</strong> into your GPS device.',
        tip1Title: 'Via the A7 Motorway:',
        tip1Desc: 'Exit at Kassel-Nord or Hedemünden / Hann. Münden – well signposted from there.',
        tip2Title: 'Free Parking &amp; EV Charging:',
        tip2Desc: 'Spacious parking available directly adjacent to the clubhouse and resort hotel.',
        btnGoogleRoute: 'Calculate Fast Route with Google Maps ↗'
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
 <p>${isEn ? 'Ideal for sharpening wedge distances and short pitching shots before playing the 18-hole resort course.' : 'Ideal, um vor der großen 18-Loch-Runde das Annäherungsspiel und Distanzgefühl für die Wedges einzustellen.'}</p>
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
