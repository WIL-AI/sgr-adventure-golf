/**
 * Gut Wissmannshof - News Database & Data Layer
 * Provides default resort news, preset image catalog, and localStorage persistence.
 */

const NEWS_IMAGE_PRESETS = [
    {
        id: 'golden_hour_tree',
        title: 'Sonnenuntergang am See (Golden Hour)',
        category: 'Platz / Atmosphäre',
        url: 'assets/gallery_golden_hour_tree_lake.jpg'
    },
    {
        id: 'sunset_canyon',
        title: 'Canyon Course Sonnenuntergang',
        category: 'Platz / Canyon',
        url: 'assets/gallery_sunset_canyon_lake.jpg'
    },
    {
        id: 'island_green',
        title: 'Inselgrün mit Kiefernwald',
        category: 'Platz / Signature Hole',
        url: 'assets/gallery_island_green_pineforest.jpg'
    },
    {
        id: 'lavender_fairway',
        title: 'Fairway mit Lavendelblüte',
        category: 'Platz / Natur',
        url: 'assets/gallery_lavender_fairway.jpg'
    },
    {
        id: 'bunker_stonewall',
        title: 'Bunker mit Natursteinmauer',
        category: 'Platz / Design',
        url: 'assets/gallery_bunker_stonewall_water.jpg'
    },
    {
        id: 'fairway_waves',
        title: 'Sanfte Fairway-Wellen & Eichen',
        category: 'Platz / Panorama',
        url: 'assets/gallery_fairway_waves_oak.jpg'
    },
    {
        id: 'panorama_dunes',
        title: 'Dünen-Panorama & Wasser',
        category: 'Platz / Panorama',
        url: 'assets/gallery_panorama_dunes_lake.jpg'
    },
    {
        id: 'flag_pin',
        title: 'Fahne im Abendlicht',
        category: 'Golf / Detail',
        url: 'assets/gallery_flag_pin.jpg'
    },
    {
        id: 'resort_hotel',
        title: 'Resort Hotel Außenansicht',
        category: 'Hotel / Resort',
        url: 'assets/resort_hotel.jpg'
    },
    {
        id: 'restaurant_indoor',
        title: 'Restaurant Wissmannshof Interieur',
        category: 'Gastronomie',
        url: 'assets/restaurant_indoor.webp'
    },
    {
        id: 'resort_academy',
        title: 'Golf Akademie & Fitting',
        category: 'Akademie / Training',
        url: 'assets/resort_academy.jpg'
    },
    {
        id: 'hotel_room',
        title: 'Elegante Suite / Hotelzimmer',
        category: 'Hotel / Wohnen',
        url: 'assets/hotel_room.webp'
    }
];

const DEFAULT_NEWS = [
    {
        id: 'news-oktoberfest-2026',
        category: 'turniere',
        categoryLabel: { de: 'Turniere & Events', en: 'Tournaments & Events' },
        featured: true,
        date: '2026-10-03',
        image: 'assets/gallery_golden_hour_tree_lake.jpg',
        title: {
            de: 'Oktoberfest Scramble 2026: Sportlicher Wettkampf & bayerische Gemütlichkeit',
            en: 'Oktoberfest Scramble 2026: Great Golf & Bavarian Hospitality'
        },
        teaser: {
            de: 'O\'zapft is auf Gut Wissmannshof! Am Samstag, den 3. Oktober 2026 laden wir zum beliebten Oktoberfest Scramble mit Weißwurst-Frühstück, Halfway-Schmankerln und zünftiger Siegerehrung ein.',
            en: 'Celebrate our traditional Oktoberfest Scramble on October 3, 2026 with exciting team golf, Bavarian delicacies, and a festive clubhouse evening.'
        },
        author: 'Spielführung & Clubsekretariat',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Zünftige Stimmung, beste Platzbedingungen und geselliges Teamplay: Am Samstag, 3. Oktober 2026, steigt das traditionelle Oktoberfest Scramble auf Gut Wissmannshof.</p>
                
                <h3>Turnierformat & Spielmodus</h3>
                <p>Gespielt wird ein vergnüglicher 4er-Scramble (nicht handicaprelevant), bei dem der gemeinsame Teamgeist und die Freude am Spiel an erster Stelle stehen. Kanonenstart ist um 11:00 Uhr auf unserer 18-Loch-Meisterschaftsanlage.</p>

                <h3>Bayerische Gaumenfreuden & Rahmenprogramm</h3>
                <ul>
                    <li><strong>10:00 Uhr:</strong> Zünftiges Weißwurst-Frühstück mit frischen Brezn zur Einstimmung im Clubhaus</li>
                    <li><strong>Rundenverpflegung:</strong> Bayerische Halfway-Hütte mit frisch gezapftem Festbier und herzhaften Schmankerln</li>
                    <li><strong>Ab 17:30 Uhr:</strong> Großes bayerisches Abendbuffet im Club-Restaurant mit knusprigem Krustenbraten, Hendl und ofenfrischem Kaiserschmarrn</li>
                    <li><strong>Siegerehrung & Prämierung:</strong> Trachten, Dirndl & Lederhosen sind ausdrücklich erwünscht – die originellsten Outfits werden mit Sonderpreisen prämiert!</li>
                </ul>

                <p>Die Startplätze sind wie in jedem Jahr heiß begehrt. Anmeldungen sind ab sofort online über PC CADDIE oder direkt im Clubsekretariat möglich.</p>
            `,
            en: `
                <p class="lead-text">Festive atmosphere, pristine course conditions, and great team spirit: On Saturday, October 3, 2026, Gut Wissmannshof hosts its traditional Oktoberfest Scramble.</p>
                
                <h3>Tournament Format</h3>
                <p>Fun 4-player scramble with shotgun start at 11:00 AM on our 18-hole Championship course.</p>

                <h3>Bavarian Culinary Delights & Evening Program</h3>
                <ul>
                    <li><strong>10:00 AM:</strong> Traditional Bavarian breakfast with pretzels and white sausages</li>
                    <li><strong>Halfway Station:</strong> Fresh festival draft beer and hearty snacks</li>
                    <li><strong>From 5:30 PM:</strong> Festive evening buffet with roast pork, crispy chicken, and warm Kaiserschmarrn</li>
                    <li><strong>Dress Code:</strong> Traditional Bavarian attire (Tracht / Dirndl) warmly welcomed with special awards for best outfits!</li>
                </ul>
            `
        }
    },
    {
        id: 'news-baerli-cup-clubmeister-2026',
        category: 'turniere',
        categoryLabel: { de: 'Turniere & Events', en: 'Tournaments & Events' },
        featured: true,
        date: '2026-09-27',
        image: 'assets/gallery_flag_pin.jpg',
        title: {
            de: 'Bärli Cup Benefiz-Turnier & Rückblick auf die Clubmeisterschaften 2026',
            en: 'Bärli Cup Charity Tournament & Club Championship Highlights 2026'
        },
        teaser: {
            de: 'Großartiger Sport für den guten Zweck: Beim traditionsreichen Bärli Cup 2026 erspielten unsere Teilnehmer eine fantastische Spendensumme. Ein Rückblick auf spannende Meisterschaftstage auf Gut Wissmannshof.',
            en: 'Exciting golf for a noble cause: The Bärli Cup 2026 delivered thrilling competition and generous donations alongside our annual Club Championships.'
        },
        author: 'Turnierleitung & Vorstand',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Ein Spätsommer im Zeichen von sportlichen Spitzenleistungen und sozialem Engagement: Der Bärli Cup 2026 und die Clubmeisterschaften boten hochklassiges Golf auf unserem 18-Loch Championship Course.</p>
                
                <h3>Der Bärli Cup 2026: Golfen und Gutes tun</h3>
                <p>Über 70 Golferinnen und Golfer traten beim diesjährigen Bärli Cup Benefiz-Turnier an, um gemeinsam wichtige regionale Hilfsprojekte zu unterstützen. Dank großzügiger Sponsoren, Startgelder und Sonderwertungen an Bahn 7 und Bahn 14 konnte ein neuer Spendenrekord überreicht werden. Wir bedanken uns von Herzen bei allen Förderern, Spielern und Helfern für dieses überwältigende Engagement!</p>

                <h3>Packende Clubmeisterschaften</h3>
                <p>Bereits bei den vorangegangenen Clubmeisterschaften in den Klassen Offen, AK 50 und AK 65 lieferten sich unsere Mitglieder packende Duelle bis zum 18. Grün. Bei besten Platzverhältnissen und spurtreuen Grüns wurden herausragende Scores erspielt.</p>

                <blockquote>
                    „Herzlichen Glückwunsch allen Clubmeisterinnen und Clubmeistern 2026 und ein großes Dankeschön an das Greenkeeping- und Gastronomie-Team für die perfekte Organisation dieses Turnierwochenendes!“
                    <cite>— Spielführer Gut Wissmannshof</cite>
                </blockquote>
            `,
            en: `
                <p class="lead-text">A wonderful weekend celebrating sporting excellence and charitable commitment: The Bärli Cup 2026 and our annual Club Championships provided fantastic golf on our championship course.</p>
                
                <h3>Bärli Cup 2026 Charity Success</h3>
                <p>Over 70 players participated in this year’s charity event, raising a record donation sum for regional community projects. A heartfelt thank you to all sponsors, players, and volunteers!</p>

                <h3>Club Championship Thrills</h3>
                <p>Our members competed across Open, Senior 50+, and 65+ divisions, delivering sensational finishes right down to the 18th green.</p>
            `
        }
    },
    {
        id: 'news-quirmbach-2026',
        category: 'golfschule',
        categoryLabel: { de: 'Golfschule', en: 'Golf Academy' },
        featured: true,
        date: '2026-09-20',
        image: 'assets/resort_academy.jpg',
        title: {
            de: 'Stefan Quirmbach startet bei uns als „Signature Pro“',
            en: 'Stefan Quirmbach joins Gut Wissmannshof as „Signature Pro“'
        },
        teaser: {
            de: 'Ab Beginn des Jahres 2027 wird es auf unserer Anlage eine besondere sportliche Handschrift geben: Master Professional und PGA-Ehrenpräsident Stefan Quirmbach wird als „Signature Pro“ im Sport- und Golf-Resort Gut Wissmannshof tätig sein.',
            en: 'Starting early 2027, Master Professional and long-standing PGA President Stefan Quirmbach will join Gut Wissmannshof as our exclusive Signature Pro.'
        },
        author: 'Clubmanagement Gut Wissmannshof',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Liebe Mitglieder,</p>
                <p>schon heute arbeiten wir an Vorhaben, die Euren Besuch auf Gut Wissmannshof im kommenden Jahr abwechslungsreicher machen werden. Dazu gehört der vollständige Ausbau des Canyon-Kurses — und einige Ergänzungen, mit denen wir Euch zu gegebener Zeit gern überraschen möchten.</p>

                <h3>Neuausrichtung & Erweiterung unserer Golfschule</h3>
                <p>Auch unsere Golfschule richten wir dafür neu aus. Bereits jetzt zeichnet sich ab, dass wir Euch ab 2027 neue Formate anbieten können: Themenkurse zum langen Spiel, zum Bunker oder zum Putten, Themeneinheiten direkt auf dem Platz, flexiblere Zeitfenster für Euer Einzeltraining — und neue Turnierformate stehen ebenfalls in unseren Überlegungen.</p>
                <p>Das Ziel dahinter ist einfach: Dass Ihr Euer Spiel Stück für Stück verbessert und weniger Schläge auf Eurer Scorekarte stehen habt.</p>

                <h3>Stefan Quirmbach als „Signature Pro“</h3>
                <p>Das vollständige Golfschulkonzept 2027 stellen wir Euch vor, sobald die laufenden Gespräche abgeschlossen sind. Eine maßgebliche Entscheidung können wir Euch jedoch heute bereits mitteilen: Ab Beginn des Jahres 2027 wird es auf unserer Anlage eine besondere sportliche Handschrift geben — Stefan Quirmbach wird als „Signature Pro“ im Sport- und Golf-Resort Gut Wissmannshof tätig sein.</p>

                <p>Den meisten von Euch dürfte sein Name vertraut sein. Stefan Quirmbach hat den deutschen Golfsport über Jahrzehnte mitgeprägt — als Präsident der PGA of Germany von 2000 bis 2021, damit als am längsten amtierender Präsident in der Geschichte des Verbandes. Seit 2021 ist er dessen Ehrenpräsident. Er ist Master Professional und Health Professional der PGA of Germany, seit 1996 Five-Star Professional der PGA of Europe und wurde 2022 als erstes deutsches PGA-Mitglied mit der renommierten Christer Lindberg Bowl ausgezeichnet.</p>

                <p>In den vergangenen 23 Jahren hat Stefan Quirmbach seine eigene Golfschule im Hardenberg Golfresort geleitet; davor haben seine Frau Katharina und er das Golfresort Semlin am See im Namen von drei Investoren aufgebaut.</p>

                <h3>Was bedeutet „Signature Pro“?</h3>
                <p>Stefan Quirmbach übernimmt bei uns keine Leitungsfunktion in der Golfschule. Er arbeitet eigenständig und in eigener Verantwortung und wird dabei einen Kundenkreis betreuen, den er aus dem gesamten Bundesgebiet mit nach Gut Wissmannshof bringt.</p>
                <p>Sein Training ist von hohem technischen Anspruch geprägt und wird durch moderne Systeme zur Bewegungs- und Ballfluganalyse unterstützt. Auf dem Wissmannshof wird er Einzelunterricht sowie ausgewählte Spezialkurse anbieten und parallel dazu auch weiterhin seine Trainingsreisen durchführen. Informationen zu seinem Angebot auf dem Wissmannshof findet Ihr ab Dezember auf <strong><a href="https://www.stefanquirmbach.de" target="_blank">www.stefanquirmbach.de</a></strong>.</p>
                <p>Für Euch bedeutet das: Auch Ihr könnt Stefan Quirmbach zukünftig hier auf dem Wissmannshof für Euer eigenes Training buchen. Dieses Angebot ergänzt das bestehende Trainingsangebot unserer Anlage.</p>

                <h3>Unsere Golfschule bleibt Eure feste Anlaufstelle</h3>
                <p>Was Ihr an unserer Golfschule schätzt, bleibt Euch selbstverständlich erhalten. Sie bleibt Eure erste Adresse für den laufenden Unterrichtsbetrieb — und wir bauen sie aus. Neben Daniel Wünsche wird Euch künftig auch ein Junior Pro zur Verfügung stehen. Damit können wir das Angebot für Mitglieder und Gäste deutlich erweitern und verschiedene Einstiegsangebote für alle, die neu zum Golf kommen oder nach längerer Pause wieder einsteigen, ermöglichen.</p>
                <p>Für Eure Trainingsplanung gilt wie gewohnt: Die verfügbaren Trainerzeiten der Golfschule findet Ihr im Timetable in PC CADDIE — dort könnt Ihr Eure Unterrichtsstunden direkt buchen.</p>

                <p>Wir freuen uns auf das Jahr 2027 und darauf, gemeinsam mit Euch die nächsten sportlichen Schritte auf dem Wissmannshof zu gehen.</p>
            `,
            en: `
                <p class="lead-text">Dear Members,</p>
                <p>We are continuously working to elevate your golfing experience at Gut Wissmannshof. Alongside the full expansion of the Canyon Course, we are excited to announce a major enhancement to our golf academy from 2027.</p>

                <h3>Stefan Quirmbach as Signature Pro</h3>
                <p>Master Professional and PGA of Germany Honorary President Stefan Quirmbach will join Gut Wissmannshof as our Signature Pro from early 2027. With over two decades leading his academy at Hardenberg, Stefan brings world-class expertise, launch monitor analysis, and specialized coaching clinics to our resort.</p>
                <p>Members and guests can book individual sessions with Stefan Quirmbach starting December on <a href="https://www.stefanquirmbach.de" target="_blank">www.stefanquirmbach.de</a>.</p>
            `
        }
    },
    {
        id: 'news-001',
        category: 'turniere',
        categoryLabel: { de: 'Turniere & Events', en: 'Tournaments & Events' },
        featured: true,
        date: '2026-10-18',
        image: 'assets/gallery_golden_hour_tree_lake.jpg',
        title: {
            de: 'Großes Saisonabschluss-Turnier & Herbst-Gala 2026',
            en: 'Grand Season Finale Tournament & Autumn Gala 2026'
        },
        teaser: {
            de: 'Feiern Sie mit uns den krönenden Abschluss einer fantastischen Golfsaison! Es erwartet Sie ein hochkarätiges 18-Loch-Turnier mit Live-Scoring, gefolgt von einer exklusiven 4-Gänge-Gala.',
            en: 'Celebrate the grand finale of a fantastic golf season with us! Look forward to a high-caliber 18-hole tournament with live scoring, followed by an exclusive 4-course gala.'
        },
        author: 'Turnierleitung Gut Wissmannshof',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Ein golferisches Highlight zum Ausklang des Jahres: Am Samstag, den 18. Oktober 2026, lädt das Gut Wissmannshof alle Mitglieder und Gäste zum traditionellen Saisonabschluss-Turnier ein.</p>
                
                <h3>Ablauf & Turnierformat</h3>
                <p>Gespielt wird ein handicaprelevantes 18-Loch-Einzelzählspiel nach Stableford auf unserer anspruchsvollen Meisterschaftskombination. Gestartet wird ab 10:00 Uhr im Kanonenstart. An ausgewählten Bahnen warten Sonderwertungen wie <em>Nearest-to-the-Pin</em> an Bahn 7 und der <em>Longest Drive</em> an Bahn 14 auf Sie.</p>
                
                <blockquote>
                    „Der Saisonabschluss ist für uns jedes Jahr ein ganz besonderes Fest der Gemeinschaft. Ein packendes Turnier bei bester Platzqualität, abgerundet durch ein exquisites Menü.“
                    <cite>— Spielführer Gut Wissmannshof</cite>
                </blockquote>

                <h3>Kulinarischer Abend im Club-Restaurant</h3>
                <p>Ab 18:30 Uhr empfangen wir Sie mit einem Champagner-Aperitif auf der Seeterrasse, bevor unser Küchenchef ein saisonales 4-Gänge-Galamenü mit regionalen Spezialitäten serviert. Die feierliche Siegerehrung wird von stimmungsvoller Live-Musik begleitet.</p>

                <h3>Anmeldung & Startplätze</h3>
                <p>Die Teilnehmerzahl ist auf 84 Spieler begrenzt. Anmeldungen sind ab sofort online über das Buchungsportal oder direkt im Clubsekretariat möglich. Meldeschluss ist der 14. Oktober 2026, 18:00 Uhr.</p>
            `,
            en: `
                <p class="lead-text">A golfing highlight to crown the year: On Saturday, October 18, 2026, Gut Wissmannshof invites all members and guests to our traditional Season Finale Tournament.</p>
                
                <h3>Schedule & Format</h3>
                <p>The tournament will be played as an 18-hole individual Stableford on our championship combination. Cannon start begins at 10:00 AM. Exciting special challenges await, including <em>Nearest-to-the-Pin</em> on Hole 7 and <em>Longest Drive</em> on Hole 14.</p>
                
                <blockquote>
                    "The season finale is always a heartfelt celebration of our golf community. High-level golf on pristine fairways, followed by culinary excellence."
                    <cite>— Captain of Gut Wissmannshof</cite>
                </blockquote>

                <h3>Gala Dinner & Evening Program</h3>
                <p>From 6:30 PM, enjoy a champagne reception on the lake terrace before our chef serves an exquisite 4-course autumn gala menu. The awards ceremony will be accompanied by live music.</p>

                <h3>Registration</h3>
                <p>Field is limited to 84 players. Registration is open online or via the club secretariat. Deadline: October 14, 2026, 6:00 PM.</p>
            `
        }
    },
    {
        id: 'news-002',
        category: 'resort',
        categoryLabel: { de: 'Neues aus dem Golfresort', en: 'Golfresort News' },
        featured: false,
        date: '2026-09-22',
        image: 'assets/gallery_sunset_canyon_lake.jpg',
        title: {
            de: 'Canyon Course Erweiterung: 9 spektakuläre neue Bahnen ab Frühjahr 2027',
            en: 'Canyon Course Expansion: 9 Spectacular New Holes Coming Spring 2027'
        },
        teaser: {
            de: 'Die Bauarbeiten für unseren neuen Canyon Course schreiten zügig voran. Freuen Sie sich auf dramatische Höhenunterschiede, tiefe Schluchten und atemberaubende Naturimpressionen.',
            en: 'Construction of our new Canyon Course is progressing rapidly. Look forward to dramatic elevation changes, deep gorges, and breathtaking natural scenery.'
        },
        author: 'Platzbau-Kommission',
        readTime: '4 Min.',
        content: {
            de: `
                <p class="lead-text">Gut Wissmannshof wächst weiter zu einer der vielseitigsten 27-Loch-Golfanlagen Deutschlands heran: Die Arbeiten an den 9 Bahnen des neuen Canyon Course befinden sich voll im Zeitplan.</p>
                
                <h3>Einzigartiges Platzdesign in hügeliger Topografie</h3>
                <figure class="article-figure float-right">
                    <img src="assets/gallery_bunker_stonewall_water.jpg" alt="Canyon Course Bauarbeiten" loading="lazy">
                    <figcaption>Moderne Natursteinmauern und Wasserflächen am Canyon Course.</figcaption>
                </figure>
                <p>Der Canyon Course nutzt die natürlichen Schluchten und bewaldeten Hänge der nordhessischen Hügellandschaft optimal aus. Geplant sind herausfordernde Tees mit Blick über das Tal, strategisch platzierte Wasserhindernisse und ondulierende Grüns, die jedem Handicap taktisches Geschick abverlangen.</p>

                <p>Besonderes Augenmerk liegt auf der ökologischen Einbettung: Mehr als 5 Hektar neue Blühwiesen und heimische Gehölze wurden bereits angepflanzt, um Lebensräume für Vögel und Insekten zu schaffen.</p>

                <h3>Eröffnungsturnier im Frühjahr 2027</h3>
                <p>Nach der erfolgreichen Graseinsaat im Spätsommer werden die Grüns über den Winter optimal gepflegt. Die feierliche Eröffnung ist für Mai 2027 mit einer exklusiven Turnierwoche geplant.</p>
            `,
            en: `
                <p class="lead-text">Gut Wissmannshof continues its evolution into one of Germany’s most diverse 27-hole golf resorts: Works on the 9 holes of the new Canyon Course remain perfectly on schedule.</p>
                
                <h3>Dramatic Course Architecture</h3>
                <figure class="article-figure float-right">
                    <img src="assets/gallery_bunker_stonewall_water.jpg" alt="Canyon Course construction" loading="lazy">
                    <figcaption>Natural stone retaining walls and water hazards on the new course.</figcaption>
                </figure>
                <p>The Canyon Course embraces the natural ravines and forested slopes of the Hessian hills. Highlights include elevated tees with panoramic valley views, strategic water hazards, and undulating green complexes.</p>

                <p>Ecological sustainability is paramount: Over 5 hectares of wildflower meadows and native trees have been planted alongside the fairways.</p>

                <h3>Grand Opening in Spring 2027</h3>
                <p>Following grass maturation over the winter, the ceremonial opening is scheduled for May 2027 with an exclusive week of invitationals.</p>
            `
        }
    },
    {
        id: 'news-003',
        category: 'hotel_gastro',
        categoryLabel: { de: 'Hotel & Gastronomie', en: 'Hotel & Gastronomy' },
        featured: false,
        date: '2026-09-15',
        image: 'assets/restaurant_indoor.webp',
        title: {
            de: 'Kulinarische Herbstwochen: Wildspezialitäten & Edle Tropfen im Club-Restaurant',
            en: 'Culinary Autumn Weeks: Game Specialties & Fine Wines at the Club Restaurant'
        },
        teaser: {
            de: 'Unser Küchenteam präsentiert ab Oktober eine erlesene Herbstkarte mit frischem Wild aus regionaler Jagd, Waldpilzen und passenden Spitzenweinen aus unserem Weinkeller.',
            en: 'Starting in October, our culinary team presents a selected autumn menu featuring fresh regional game, forest mushrooms, and handpicked wines from our cellar.'
        },
        author: 'Gastronomie Gut Wissmannshof',
        readTime: '2 Min.',
        content: {
            de: `
                <p class="lead-text">Wenn die Tage kürzer werden und die Wälder rund um Wissmannshof in warmen Herbstfarben leuchten, wird es im Club-Restaurant besonders gemütlich.</p>
                
                <h3>Regionale Gaumenfreuden & Hausgemachte Klassiker</h3>
                <p>Küchenchef und Team haben für die Herbstwochen eine exklusive Menüfolge kreiert: Von der samtigen Kürbis-Ingwer-Suppe über geschmorten Hirschrücken in Wacholder-Jus bis hin zu lauwarmem Zwetschgen-Crumble mit Bourbon-Vanilleeis.</p>

                <h3>Weinbegleitung & Tastings</h3>
                <p>Zu jedem Gang empfehlen wir korrespondierende Spitzenweine aus deutschen und internationalen Lagen. Freitags bieten wir zudem geführte Weinverkostungen in unserer Lounge an.</p>
                
                <p><strong>Tischreservierungen:</strong> Wir empfehlen eine frühzeitige Reservierung unter +49 (0) 5543 9999 oder direkt an der Rezeption.</p>
            `,
            en: `
                <p class="lead-text">As the foliage around Wissmannshof turns golden, our restaurant welcomes you to intimate autumn evenings by the fireside.</p>
                
                <h3>Regional Delicacies</h3>
                <p>Enjoy braised venison saddle, wild mushroom risotto, and warm plum crumble paired with hand-selected vintage wines.</p>

                <p><strong>Reservations:</strong> Book your table via +49 (0) 5543 9999 or at our hotel reception.</p>
            `
        }
    },
    {
        id: 'news-004',
        category: 'angebote',
        categoryLabel: { de: 'Angebote & Training', en: 'Offers & Training' },
        featured: false,
        date: '2026-09-08',
        image: 'assets/gallery_lavender_fairway.jpg',
        title: {
            de: 'After-Work Sundowner Golf: Jeden Donnerstag ab 17:00 Uhr',
            en: 'After-Work Sundowner Golf: Every Thursday from 5:00 PM'
        },
        teaser: {
            de: 'Lassen Sie den Arbeitstag sportlich ausklingen: 9 entspannte Löcher in der Abendsonne inklusive Begrüßungs-Cocktail auf der Clubhaus-Terrasse zum Sonderpreis.',
            en: 'Unwind after work with a relaxed 9 holes in the evening golden hour, including a welcome drink on our clubhouse terrace at a special sunset rate.'
        },
        author: 'Clubmanagement',
        readTime: '2 Min.',
        content: {
            de: `
                <p class="lead-text">Entspanntes Golfen im goldenen Abendlicht: Unser beliebtes After-Work-Format „Sundowner Golf“ geht in die Verlängerung.</p>
                
                <h3>Das Sundowner-Paket umfasst:</h3>
                <ul>
                    <li>9-Loch Greenfee ab 17:00 Uhr</li>
                    <li>Token für die Driving Range zum Aufwärmen</li>
                    <li>Erfrischender Sundowner-Cocktail oder Craft Beer auf der Clubterrasse</li>
                    <li>Sonderpreis für Gäste: 39,- € (Mitglieder kostenfrei)</li>
                </ul>

                <p>Keine vorherige Turnieranmeldung erforderlich – einfach Startzeit über PC CADDIE oder telefonisch buchen und den Sonnenuntergang auf dem Course genießen.</p>
            `,
            en: `
                <p class="lead-text">Relax and recharge in the evening golden hour with our weekly Sundowner Golf session.</p>
                
                <h3>The Sundowner Package includes:</h3>
                <ul>
                    <li>9-Hole Green Fee from 5:00 PM</li>
                    <li>Driving Range warm-up tokens</li>
                    <li>Sunset cocktail or craft beer on the terrace</li>
                    <li>Special guest rate: €39 (Members free)</li>
                </ul>
            `
        }
    },
    {
        id: 'news-005',
        category: 'platz',
        categoryLabel: { de: 'Platz & Natur', en: 'Course & Nature' },
        featured: false,
        date: '2026-08-28',
        image: 'assets/gallery_bunker_stonewall_water.jpg',
        title: {
            de: 'Herbst-Pflegeprogramm: Bunkersanierung & Aerifizierung für Spitzen-Grüns',
            en: 'Autumn Greenkeeping: Bunker Restoration & Aerification for Pristine Greens'
        },
        teaser: {
            de: 'Um auch im kommenden Frühjahr perfekte Spielbedingungen zu garantieren, startet unser Greenkeeping-Team mit gezielten Pflegemaßnahmen und neuen Naturstein-Einfassungen.',
            en: 'To ensure world-class turf conditions next spring, our greenkeeping team is commencing scheduled maintenance and handcrafted natural stone bunker revetments.'
        },
        author: 'Head-Greenkeeper',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Erstklassige Fairways und spurtreue Grüns sind das Markenzeichen von Gut Wissmannshof. Mit Beginn des Frühherbstes investieren wir kontinuierlich in die Platzsubstanz.</p>
                
                <h3>Bunkersanierung an den Bahnen 4, 8 und 12</h3>
                <p>Die Grünbunker der Bahnen 4, 8 und 12 erhalten eine neue Drainage und eine hochwertige Naturstein-Einfassung aus heimischem Sandstein. Gleichzeitig wird der Spezialsand erneuert, um perfekten Ballkontakt und optimalen Wasserabfluss bei Regen zu gewährleisten.</p>

                <h3>Terminierung der Pflegearbeiten</h3>
                <p>Der Spielbetrieb bleibt während der Arbeiten uneingeschränkt auf mindestens 18 Bahnen gewährleistet. Eventuelle Ausweichgrüns werden am Abschlag 1 tagesaktuell bekanntgegeben.</p>
            `,
            en: `
                <p class="lead-text">Pristine fairways and true-rolling greens define Gut Wissmannshof. Our autumn investment plan focuses on long-term turf excellence.</p>
                
                <h3>Bunker Upgrades on Holes 4, 8, and 12</h3>
                <p>Bunkers are receiving new deep drainage systems and local sandstone revetments with tour-grade sand.</p>
            `
        }
    },
    {
        id: 'news-006',
        category: 'golfschule',
        categoryLabel: { de: 'Golfschule', en: 'Golf Academy' },
        featured: false,
        date: '2026-08-14',
        image: 'assets/resort_academy.jpg',
        title: {
            de: 'Neues High-End Performance Fitting mit TrackMan 4 im Akademie-Zentrum',
            en: 'New High-End Performance Fitting with TrackMan 4 at the Academy'
        },
        teaser: {
            de: 'Optimieren Sie Ihr Spiel mit präziser Radartechnologie: Unsere PGA-Pros bieten ab sofort maßgeschneiderte Schläger-Fittings und Schwunganalysen der neuesten Generation.',
            en: 'Elevate your game with precision radar tracking: Our PGA professionals now offer tailored club fitting and next-generation swing analysis with TrackMan 4.'
        },
        author: 'Golf Akademie Wissmannshof',
        readTime: '3 Min.',
        content: {
            de: `
                <p class="lead-text">Modernste Golftechnologie für messbare Fortschritte: Das Akademie-Zentrum von Gut Wissmannshof wurde mit dem neuesten TrackMan 4 Dual-Radar-System ausgestattet.</p>
                
                <h3>Maßgeschneidertes Schläger-Fitting</h3>
                <p>Egal ob Driver, Eisen oder Wedges – mit über 250 Schaft-Kopf-Kombinationen führender Premium-Hersteller finden unsere PGA-Professionals das exakt auf Ihren Schwung abgestimmte Setup. Ballgeschwindigkeit, Abflugwinkel und Spin-Raten werden in Echtzeit analysiert.</p>

                <h3>Terminvereinbarung</h3>
                <p>Individuelle Fitting-Sessions (60 oder 90 Minuten) können ab sofort online oder im Pro Shop gebucht werden. Beim Kauf eines Schlägersatzes wird die Fitting-Gebühr zu 100% angerechnet.</p>
            `,
            en: `
                <p class="lead-text">Cutting-edge golf technology for measurable improvement: The Wissmannshof Academy is now equipped with the latest TrackMan 4 dual-radar launch monitor.</p>
                
                <h3>Custom Fitting & Analysis</h3>
                <p>Test over 250 shaft and head combinations with our PGA certified club fitters. Fitting fees are 100% credited towards equipment purchases.</p>
            `
        }
    }
];

// Storage key
const NEWS_STORAGE_KEY = 'sgr_resort_news';

/**
 * News Repository API
 * Synchronous local access with async server sync, JSON backup & code export.
 */
const NewsRepository = {
    _cached: null,

    getAll: function() {
        if (this._cached && Array.isArray(this._cached) && this._cached.length > 0) {
            return this._cached;
        }
        try {
            const stored = localStorage.getItem(NEWS_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    this._cached = parsed;
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Could not read news from localStorage, using defaults:', e);
        }
        this._cached = DEFAULT_NEWS;
        return DEFAULT_NEWS;
    },

    /**
     * Attempts to fetch the latest news dataset from data/news.json or api/news.php
     * Returns a Promise resolving to the news array.
     */
    syncFromServer: async function() {
        // First try api/news.php, then fallback to data/news.json
        const endpoints = ['data/news.json', 'api/news.php'];
        for (const url of endpoints) {
            try {
                const resp = await fetch(url + '?t=' + Date.now(), { cache: 'no-store' });
                if (resp.ok) {
                    const data = await resp.json();
                    if (Array.isArray(data) && data.length > 0) {
                        this._cached = data;
                        try {
                            localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(data));
                        } catch (e) {}
                        return data;
                    }
                }
            } catch (err) {
                // Endpoint unavailable (e.g. static/local environment)
            }
        }
        return this.getAll();
    },

    saveAll: function(newsList) {
        if (!Array.isArray(newsList)) return false;
        this._cached = newsList;
        try {
            localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(newsList));
        } catch (e) {
            console.error('Failed to save news to localStorage:', e);
        }

        // Asynchronously push to server API if reachable
        try {
            fetch('api/news.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newsList)
            }).then(r => r.json()).then(res => {
                if (res.success) {
                    console.log('✅ News successfully synchronized with server storage (data/news.json)');
                }
            }).catch(() => {
                // PHP API not reachable or static host
            });
        } catch (e) {}

        return true;
    },

    getById: function(id) {
        const list = this.getAll();
        return list.find(item => item.id === id) || null;
    },

    saveItem: function(item) {
        const list = [...this.getAll()];
        const index = list.findIndex(n => n.id === item.id);
        if (index >= 0) {
            list[index] = item;
        } else {
            list.unshift(item); // New items to the top
        }
        this.saveAll(list);
        return item;
    },

    deleteItem: function(id) {
        const list = this.getAll();
        const filtered = list.filter(item => item.id !== id);
        this.saveAll(filtered);
        return filtered;
    },

    resetToDefault: function() {
        this.saveAll(DEFAULT_NEWS);
        return DEFAULT_NEWS;
    },

    getPresets: function() {
        return NEWS_IMAGE_PRESETS;
    },

    /**
     * Import JSON string or array, merge/overwrite and persist.
     */
    importData: function(data, overwrite = true) {
        let items = data;
        if (typeof data === 'string') {
            try {
                items = JSON.parse(data);
            } catch (e) {
                throw new Error('Ungültiges JSON-Format: ' + e.message);
            }
        }
        if (!Array.isArray(items)) {
            throw new Error('Import-Daten müssen ein Array von News-Artikeln sein.');
        }

        let result;
        if (overwrite) {
            result = items;
        } else {
            const current = this.getAll();
            const existingIds = new Set(current.map(i => i.id));
            const newItems = items.filter(i => !existingIds.has(i.id));
            result = [...newItems, ...current];
        }

        this.saveAll(result);
        return result;
    }
};

// Export to window for browser usage
window.NewsRepository = NewsRepository;
window.DEFAULT_NEWS = DEFAULT_NEWS;
window.NEWS_IMAGE_PRESETS = NEWS_IMAGE_PRESETS;
