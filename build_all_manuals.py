import os
import base64
import subprocess
import shutil
import tempfile
import pypdf

# 1. Read resort logo
logo_path = os.path.join("assets", "logo_regular_black.png")
if os.path.exists(logo_path):
    with open(logo_path, "rb") as f:
        logo_b64 = base64.b64encode(f.read()).decode("utf-8")
else:
    logo_b64 = ""

print(f"Loaded logo b64 length: {len(logo_b64)}")

# =============================================================
# COMPACT GERMAN TEMPLATE (EXACTLY 3 PAGES)
# =============================================================
html_de_compact = f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Anleitung Gut Wissmannshof — News Redaktion & Platzstatus</title>
    <style>
        @page {{
            size: A4 portrait;
            margin: 7mm 10mm 7mm 10mm;
        }}

        :root {{
            --primary: #0D2218;
            --primary-light: #163828;
            --gold: #B8963E;
            --gold-dark: #9E7F30;
            --gold-bg: #F9F6F0;
            --cream: #F8F5EE;
            --cream-dark: #EDE7DA;
            --charcoal: #2A2E2B;
            --muted: #5E6660;
            --border: #E2DBD0;
            --white: #FFFFFF;
            --green: #28A745;
            --green-bg: #E8F5E9;
            --green-text: #1B5E20;
            --red: #C82333;
            --red-bg: #FDEDEC;
            --red-text: #891621;
            --amber: #E67E22;
            --amber-bg: #FEF9E7;
            --amber-text: #935116;
        }}

        * {{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }}

        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: var(--charcoal);
            background: #FFFFFF;
            font-size: 8.8pt;
            line-height: 1.36;
        }}

        .page {{
            width: 100%;
            height: 282mm;
            max-height: 282mm;
            page-break-after: always;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            background: #FFFFFF;
            padding: 0;
        }}
        .page:last-child {{
            page-break-after: auto;
        }}

        .page-header {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 5px;
            border-bottom: 1.5px solid var(--border);
            margin-bottom: 7px;
        }}
        .page-header-left {{
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .header-logo-mini {{
            height: 21px;
            width: auto;
        }}
        .header-brand {{
            font-size: 7.8pt;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--primary);
        }}
        .header-tag {{
            font-size: 7pt;
            font-weight: 700;
            color: var(--gold-dark);
            background: var(--gold-bg);
            border: 1px solid var(--border);
            padding: 2px 6px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        .page-header-right {{
            font-size: 7.2pt;
            font-weight: 600;
            color: var(--muted);
        }}

        .page-footer {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 5px;
            border-top: 1px solid var(--border);
            margin-top: 6px;
            font-size: 7.2pt;
            color: var(--muted);
        }}
        .page-footer-left {{
            display: flex;
            align-items: center;
            gap: 6px;
        }}
        .footer-dot {{
            width: 3.5px;
            height: 3.5px;
            border-radius: 50%;
            background: var(--gold);
        }}
        .page-footer-right {{
            font-weight: 700;
            color: var(--primary);
        }}

        .page-content {{
            flex: 1;
            display: flex;
            flex-direction: column;
        }}

        h2.section-title {{
            font-size: 11pt;
            font-weight: 800;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 6px;
            padding-bottom: 3px;
            border-bottom: 1.5px solid var(--gold);
        }}
        h3.block-title {{
            font-size: 9.2pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 2px;
        }}

        .card-white {{
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 6px;
            padding: 8px 11px;
            margin-bottom: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }}
        .card-gold {{
            background: linear-gradient(135deg, #FAF7EE 0%, #F5EEDB 100%);
            border: 1px solid #D6C291;
            border-radius: 6px;
            padding: 8px 11px;
            margin-bottom: 6px;
        }}

        .badge {{
            display: inline-flex;
            align-items: center;
            gap: 3px;
            font-size: 6.8pt;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 3px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }}
        .badge-green {{ background: var(--green-bg); color: var(--green-text); border: 1px solid #C8E6C9; }}
        .badge-red {{ background: var(--red-bg); color: var(--red-text); border: 1px solid #FFCDD2; }}
        .badge-amber {{ background: var(--amber-bg); color: var(--amber-text); border: 1px solid #FFE082; }}
        .badge-gold {{ background: var(--gold-bg); color: var(--gold-dark); border: 1px solid #E2DBD0; }}
        .badge-dark {{ background: var(--primary); color: #FFFFFF; }}

        .grid-2 {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 6px;
        }}
        .grid-3 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 7px;
            margin-bottom: 6px;
        }}
        .grid-4 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 6px;
            margin-bottom: 6px;
        }}

        .step-row {{
            display: flex;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 6px;
        }}
        .step-num {{
            width: 19px;
            height: 19px;
            min-width: 19px;
            border-radius: 50%;
            background: var(--primary);
            color: var(--white);
            font-size: 7.5pt;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;
        }}
        .step-num.gold {{
            background: var(--gold);
            color: var(--primary);
        }}
        .step-body {{
            flex: 1;
        }}
        .step-title {{
            font-size: 8.8pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 1px;
        }}
        .step-desc {{
            font-size: 8.2pt;
            color: var(--charcoal);
            line-height: 1.32;
        }}

        table.status-table {{
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 6px;
            font-size: 7.9pt;
        }}
        table.status-table th {{
            background: var(--primary);
            color: var(--white);
            padding: 4px 7px;
            text-align: left;
            font-size: 7.2pt;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        table.status-table th:first-child {{ border-top-left-radius: 4px; }}
        table.status-table th:last-child {{ border-top-right-radius: 4px; }}
        table.status-table td {{
            padding: 4px 7px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
        }}
        table.status-table tr:nth-child(even) td {{
            background: var(--cream);
        }}

        .alert-tip {{
            background: #F0F7F4;
            border-left: 3px solid var(--green);
            padding: 5px 9px;
            border-radius: 0 4px 4px 0;
            margin-bottom: 5px;
            font-size: 7.9pt;
        }}
        .code-pill {{
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            background: #ECE6D8;
            padding: 1px 5px;
            border-radius: 3px;
            font-size: 7.8pt;
            font-weight: 700;
            color: var(--primary);
            border: 1px solid #D6CCA8;
        }}

        .mockup-bar {{
            background: var(--primary);
            color: var(--white);
            padding: 5px 9px;
            border-radius: 5px 5px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 7.4pt;
            font-weight: 700;
        }}
        .mockup-body {{
            background: var(--white);
            border: 1px solid var(--primary);
            border-top: none;
            border-radius: 0 0 5px 5px;
            padding: 7px 9px;
            margin-bottom: 6px;
        }}

        .hero-banner {{
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: var(--white);
            border-radius: 8px;
            padding: 12px 14px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}
        .hero-banner h1 {{
            font-size: 15pt;
            line-height: 1.15;
            font-weight: 800;
            color: #FFFFFF;
            margin-bottom: 2px;
        }}
        .hero-banner p {{
            font-size: 8.2pt;
            color: #EDE7DA;
            line-height: 1.3;
        }}

        .check-item {{
            display: flex;
            align-items: flex-start;
            gap: 6px;
            margin-bottom: 4px;
            font-size: 8.1pt;
        }}
        .check-box-icon {{
            width: 14px;
            height: 14px;
            min-width: 14px;
            border-radius: 3px;
            background: var(--green);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 7.8pt;
            font-weight: 900;
            margin-top: 1px;
        }}
    </style>
</head>
<body>

<!-- ======================================================== -->
<!-- SEITE 1 DE: SCHNELLSTART, LOGIN & MORGENROUTINE (PLATZ) -->
<!-- ======================================================== -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof Golf Resort</span>
            <span class="header-tag">Praxis-Leitfaden</span>
        </div>
        <div class="page-header-right">Saison 2026 • Version 2.1 (Kompakt)</div>
    </div>

    <div class="page-content">
        <!-- Compact Hero Banner -->
        <div class="hero-banner">
            <div>
                <h1>News-Redaktion &amp; Live-Platzstatus Studio</h1>
                <p>Kompakte Schritt-für-Schritt Anleitung für Sekretariat, Pro Shop, Clubmanagement &amp; Content-Pflege.</p>
            </div>
            <span class="badge badge-gold" style="font-size: 7.2pt; padding: 4px 8px;">Intern &amp; Vertraulich</span>
        </div>

        <!-- Access Box -->
        <div class="card-gold" style="margin-bottom: 8px; padding: 8px 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <strong style="color: var(--primary); font-size: 8.8pt;">🔑 Zugangsdaten &amp; Direkteinstieg (PC, Tablet &amp; Smartphone)</strong>
                <span style="font-size: 7.2pt; color: var(--muted);">Läuft direkt im Browser ohne Installation</span>
            </div>
            <div class="grid-2" style="margin-bottom: 4px;">
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 4px; padding: 6px 9px;">
                    <span style="font-size: 6.8pt; text-transform: uppercase; font-weight: 800; color: var(--muted); display: block;">Webadresse (Portal URL)</span>
                    <strong style="font-size: 9pt; color: var(--primary);">wissmannshof.golf/admin-news.html</strong>
                </div>
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 4px; padding: 6px 9px;">
                    <span style="font-size: 6.8pt; text-transform: uppercase; font-weight: 800; color: var(--muted); display: block;">Passwort für den Redaktionsbereich</span>
                    <strong style="font-size: 9.8pt; font-family: monospace; color: #B8963E; letter-spacing: 0.04em;">Sgr2026#</strong>
                    <span style="font-size: 6.8pt; color: var(--muted); font-family: sans-serif;">(Alt: Wissmannshof2026)</span>
                </div>
            </div>
            <div style="font-size: 7.4pt; color: var(--muted);">
                💡 <strong>Tipp:</strong> Als Lesezeichen im Browser ablegen. Der Login bleibt auf Ihrem Endgerät sicher gespeichert.
            </div>
        </div>

        <!-- Module 1 Header -->
        <h2 class="section-title">Modul 1: Die tägliche Morgenroutine (Platzstatus in 60 Sekunden)</h2>
        <p style="font-size: 8.2pt; color: var(--muted); margin-bottom: 6px;">
            Golfer informieren sich morgens als Erstes über den Platzzustand. Der Statuskasten befindet sich im Backend ganz oben und aktualisiert in Echtzeit die Startseite, das Buchungssystem und alle Monitore im Clubhaus.
        </p>

        <!-- Mockup of the 4 Status Boxes -->
        <div class="mockup-bar">
            <span>⛳ BEREICH 1: LIVE RESORT- &amp; PLATZSTATUS (HOMEPAGE &amp; BILDSCHIRME)</span>
            <span style="color: #90EE90; font-size: 6.8pt;">● LIVE SYNCHRONISIERT</span>
        </div>
        <div class="mockup-body">
            <div class="grid-4" style="margin-bottom: 0;">
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">1. ÖFFNUNGSZEITEN</div>
                    <div style="font-size: 8.5pt; font-weight: 800; color: var(--primary); margin: 1px 0;">09:00 - 15:00 Uhr</div>
                    <div style="font-size: 6.5pt; color: var(--muted);">Sekretariat &amp; Telefon</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">2. E-GOLF-CARTS</div>
                    <span class="badge badge-green" style="margin: 1px 0;">✓ ERLAUBT</span>
                    <div style="font-size: 6.5pt; color: var(--muted);">Notiz: nur auf Wegen</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">3. TROLLEYS</div>
                    <span class="badge badge-green" style="margin: 1px 0;">✓ ERLAUBT</span>
                    <div style="font-size: 6.5pt; color: var(--muted);">Winterräder empfohlen</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">4. PLATZ &amp; GRÜNS</div>
                    <span class="badge badge-green" style="margin: 1px 0;">✓ GEÖFFNET</span>
                    <div style="font-size: 6.5pt; color: var(--muted);">18-Loch regulär</div>
                </div>
            </div>
        </div>

        <!-- 4 Step Morning Instructions -->
        <h3 class="block-title" style="margin-bottom: 4px;">Schritt-für-Schritt Ablauf:</h3>

        <div class="step-row">
            <div class="step-num">1</div>
            <div class="step-body">
                <div class="step-title">Öffnungszeiten &amp; Rezeption prüfen</div>
                <div class="step-desc">
                    Tragen Sie die heutigen Servicezeiten ein, z.&nbsp;B. <span class="code-pill">täglich 09:00 - 15:00 Uhr</span>. Dieser Wert steuert gleichzeitig die Hinweistexte für Anrufer und Webseiten-Gäste.
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">2</div>
            <div class="step-body">
                <div class="step-title">Golf-Carts &amp; Trolleys freigeben oder einschränken</div>
                <div class="step-desc">
                    Wählen Sie im Dropdown den Status: <strong>Erlaubt (Grün)</strong>, <strong>Eingeschränkt (Gelb)</strong> oder <strong>Gesperrt (Rot)</strong>. Ergänzen Sie bei Bedarf eine Zusatznotiz (z.&nbsp;B. <em>„Nur auf Fairways/Wegen fahren“</em> oder <em>„Nur mit Winterrädern“</em>).
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">3</div>
            <div class="step-body">
                <div class="step-title">Platzstatus &amp; Grüns festlegen (Schnellvorlagen nutzen!)</div>
                <div class="step-desc">
                    Wählen Sie, ob der Platz <strong>Geöffnet</strong>, <strong>Eingeschränkt</strong> oder <strong>Gesperrt</strong> ist und ob auf <strong>Sommer- oder Wintergrüns</strong> gespielt wird.<br>
                    <strong>1-Klick Vorlagen:</strong> Das Dropdown <em>„Schnellvorlage wählen“</em> stellt häufige Szenarien sofort passend ein (z.&nbsp;B. <em>„18-Loch regulär geöffnet“</em>, <em>„9-Loch Kurs Gelb geöffnet“</em> oder <em>„Frost / Witterungsbedingt gesperrt“</em>).
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num gold">4</div>
            <div class="step-body">
                <div class="step-title">Speichern &amp; Veröffentlichen (Der goldene Button)</div>
                <div class="step-desc">
                    Klicken Sie ganz unten in der Box auf <strong>„Status jetzt speichern &amp; veröffentlichen“</strong>.<br>
                    Eine grüne Bestätigung erscheint sofort (<em>„Live synchronisiert“</em>). Startseite und Infoboards schalten sich ohne Neuladen um.
                </div>
            </div>
        </div>

        <div class="card-gold" style="margin-top: 4px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 8.2pt; margin-bottom: 2px;">
                ⚡ Was geschieht im Hintergrund?
            </div>
            <div style="font-size: 7.8pt; color: var(--charcoal); line-height: 1.3;">
                Das System überträgt den Status augenblicklich an den zentralen Web-Server. Besucher der Website sowie die Info-Bildschirme im Clubhaus und im Gastronomiebereich aktualisieren sich synchron im laufenden Betrieb.
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Modul 1: Morgenroutine</span>
        </div>
        <div class="page-footer-right">Seite 1 von 3</div>
    </div>
</div>

<!-- ======================================================== -->
<!-- SEITE 2 DE: MODUL 2: NEWS-EDITOR STUDIO                 -->
<!-- ======================================================== -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Modul 2: Content Studio</span>
        </div>
        <div class="page-header-right">News, Turniere &amp; Fotogalerie</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Modul 2: News-Editor Studio (Beiträge professionell veröffentlichen)</h2>
        <p style="font-size: 8.2pt; color: var(--muted); margin-bottom: 7px;">
            Ob Turnierbericht, Ankündigung eines Restaurant-Specials oder Platzarbeiten: Im News-Studio erstellen Sie ansprechende Beiträge mit Titelbild, formatiertem Fließtext, hochauflösenden Schnappschüssen und Live-Vorschau.
        </p>

        <div class="grid-2">
            <!-- Left Column: Input Steps -->
            <div>
                <h3 class="block-title" style="margin-bottom: 4px;">Die Eingabefelder im Überblick:</h3>

                <div class="step-row">
                    <div class="step-num">1</div>
                    <div class="step-body">
                        <div class="step-title">Titel &amp; Kategorie</div>
                        <div class="step-desc">
                            Prägnante Überschrift (z.&nbsp;B. <em>„Spannendes Finale bei den Clubmeisterschaften 2026“</em>).<br>
                            Kategorie wählen: <span class="badge badge-gold">Turniere</span> <span class="badge badge-green">Aktuelles</span> <span class="badge badge-amber">Gastronomie</span> <span class="badge badge-dark">Platz &amp; Resort</span>.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">2</div>
                    <div class="step-body">
                        <div class="step-title">Der Teaser (Vorschautext)</div>
                        <div class="step-desc">
                            2 bis 3 kurze Sätze (ca. 100–160 Zeichen). Erscheint auf den Kacheln der Startseite und weckt das Interesse zum Weiterlesen.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">3</div>
                    <div class="step-body">
                        <div class="step-title">Titelbild festlegen (16:9 Format)</div>
                        <div class="step-desc">
                            Klick auf <strong>„Datei auswählen“</strong> (Upload vom PC/Handy) oder Bild aus dem Resort-Archiv wählen. Das System bietet eine automatische <strong>16:9 Ausschnitt-Vorschau</strong> für perfekte Kachel-Optik.
                        </div>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num">4</div>
                    <div class="step-body">
                        <div class="step-title">Fließtext &amp; Formatierungs-Toolbar</div>
                        <div class="step-desc">
                            Nutzen Sie die Buttons oberhalb des Textfeldes:
                            <div style="margin-top: 2px; display: flex; gap: 3px; flex-wrap: wrap;">
                                <span class="badge badge-gold">+ Absatz</span>
                                <span class="badge badge-gold">+ Zwischenüberschrift</span>
                                <span class="badge badge-gold">+ Zitat-Box</span>
                                <span class="badge badge-gold">Fett / Kursiv</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Visual Features -->
            <div>
                <div class="card-white" style="border: 1.5px solid var(--gold); background: #FCFAF6; padding: 7px 10px;">
                    <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 3px;">
                        <span style="font-size: 10pt;">📸</span>
                        <h3 class="block-title" style="color: var(--primary); margin: 0; font-size: 8.8pt;">Fotos im Text einbetten</h3>
                    </div>
                    <p style="font-size: 7.9pt; color: var(--charcoal); margin-bottom: 4px;">
                        Klicken Sie auf den Button <strong>„+ Foto in Text einfügen“</strong>:
                    </p>
                    <ul style="font-size: 7.6pt; color: var(--muted); margin-left: 14px; line-height: 1.3; margin-bottom: 4px;">
                        <li>Laden Sie beliebig viele Schnappschüsse hoch.</li>
                        <li>Geben Sie eine <strong>Bildunterschrift</strong> ein (z.&nbsp;B. <em>„Siegerehrung Brutto Damen“</em>).</li>
                        <li>Leser können das Foto auf der Website per Klick in voller 4K-Auflösung vergrößern!</li>
                    </ul>
                    <span class="badge badge-green" style="font-size: 6.5pt;">Automatisch mobil optimiert</span>
                </div>

                <div class="card-white" style="padding: 7px 10px;">
                    <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 2px;">
                        <span style="font-size: 10pt;">⏱</span>
                        <h3 class="block-title" style="color: var(--primary); margin: 0; font-size: 8.8pt;">Zeitsteuerung &amp; Gültigkeitsdauer</h3>
                    </div>
                    <p style="font-size: 7.8pt; color: var(--charcoal); margin-bottom: 2px;">
                        Setzen Sie optional ein <strong>Ablaufdatum</strong> (z.&nbsp;B. Turnieranmeldung bis 15. Juli). Nach diesem Tag wandert der Beitrag automatisch ins Archiv!
                    </p>
                </div>

                <div class="card-white" style="border-left: 3px solid var(--green); padding: 7px 10px;">
                    <div style="font-size: 7pt; font-weight: 800; text-transform: uppercase; color: var(--green-text); margin-bottom: 2px;">
                        👁 Echtzeit-Vorschau (Live-Preview)
                    </div>
                    <p style="font-size: 7.8pt; color: var(--charcoal);">
                        Auf der rechten Bildschirmseite sehen Sie synchron zwei Vorschauen: 
                        1. <strong>Kachelansicht</strong> (Startseite) und 
                        2. <strong>Vollbild-Artikel</strong> (wie beim Klick auf „Weiterlesen“).
                    </p>
                </div>
            </div>
        </div>

        <div class="alert-tip" style="margin-top: 2px;">
            <strong>Veröffentlichen:</strong> Klicken Sie unten auf <strong>„Beitrag speichern &amp; veröffentlichen“</strong>. Soll der Beitrag erst vorbereitet werden, wählen Sie als Status einfach <strong>„Entwurf“</strong>.
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Modul 2: Content Studio</span>
        </div>
        <div class="page-footer-right">Seite 2 von 3</div>
    </div>
</div>

<!-- ======================================================== -->
<!-- SEITE 3 DE: MODUL 3: VERWALTUNG, SYNC, CHECKLISTE & FAQ -->
<!-- ======================================================== -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Modul 3: Verwaltung &amp; Referenz</span>
        </div>
        <div class="page-header-right">Verwaltung, Backup, Checkliste &amp; FAQ</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Modul 3: Beitragsverwaltung, Datensicherheit &amp; Checkliste</h2>

        <p style="font-size: 8.2pt; color: var(--muted); margin-bottom: 6px;">
            Unterhalb des Editors finden Sie die zentrale Übersicht aller bestehenden Artikel. Hier verwalten Sie den Status, führen Korrekturen durch und sichern Daten.
        </p>

        <!-- Table Mockup -->
        <table class="status-table">
            <thead>
                <tr>
                    <th style="width: 34%;">Titel / Thema</th>
                    <th style="width: 18%;">Kategorie</th>
                    <th style="width: 16%;">Datum</th>
                    <th style="width: 18%;">Status</th>
                    <th style="width: 14%;">Aktionen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Bärli-Cup Saisonauftakt 2026</strong></td>
                    <td><span class="badge badge-gold">Turniere</span></td>
                    <td>28. März 2026</td>
                    <td><span class="badge badge-green">● Veröffentlicht</span></td>
                    <td><span class="code-pill">✏️</span> <span class="code-pill" style="color: red;">🗑</span></td>
                </tr>
                <tr>
                    <td><strong>Frühjahrs-Menü im Restaurant</strong></td>
                    <td><span class="badge badge-amber">Gastronomie</span></td>
                    <td>15. April 2026</td>
                    <td><span class="badge badge-green">● Veröffentlicht</span></td>
                    <td><span class="code-pill">✏️</span> <span class="code-pill" style="color: red;">🗑</span></td>
                </tr>
                <tr>
                    <td><strong>Platzarbeiten Grüns Fairway 12</strong></td>
                    <td><span class="badge badge-dark">Platz &amp; Resort</span></td>
                    <td>02. Mai 2026</td>
                    <td><span class="badge badge-amber">Entwurf</span></td>
                    <td><span class="code-pill">✏️</span> <span class="code-pill" style="color: red;">🗑</span></td>
                </tr>
            </tbody>
        </table>

        <div class="grid-3" style="margin-top: 4px; margin-bottom: 6px;">
            <div class="card-white" style="padding: 6px 9px;">
                <strong style="font-size: 7.6pt; color: var(--primary); display: block; margin-bottom: 2px;">✏️ BEITRAG BEARBEITEN</strong>
                <span style="font-size: 7.6pt; color: var(--charcoal);">Lädt den kompletten Artikel samt Bildern zurück ins Formular zur Korrektur.</span>
            </div>
            <div class="card-white" style="padding: 6px 9px;">
                <strong style="font-size: 7.6pt; color: var(--primary); display: block; margin-bottom: 2px;">🔄 STATUS WECHSELN</strong>
                <span style="font-size: 7.6pt; color: var(--charcoal);">1-Klick Umschaltung zwischen <strong>Veröffentlicht</strong>, <strong>Entwurf</strong> und <strong>Archiv</strong>.</span>
            </div>
            <div class="card-white" style="padding: 6px 9px;">
                <strong style="font-size: 7.6pt; color: var(--red); display: block; margin-bottom: 2px;">🗑 BEITRAG LÖSCHEN</strong>
                <span style="font-size: 7.6pt; color: var(--charcoal);">Entfernt den Artikel nach Sicherheitsbestätigung dauerhaft.</span>
            </div>
        </div>

        <div class="grid-2" style="margin-bottom: 6px;">
            <div class="card-gold" style="padding: 6px 10px;">
                <strong style="color: var(--primary); font-size: 8.2pt; display: flex; align-items: center; gap: 4px; margin-bottom: 2px;">
                    ☁️ Multi-Device &amp; Cloud-Sync
                </strong>
                <p style="font-size: 7.6pt; color: var(--charcoal); line-height: 1.3;">
                    Arbeitsplätze an Rezeption, Pro Shop und Büro synchronisieren sich nahtlos. Die grüne Sync-Pille bestätigt den aktuellen Stand.
                </p>
            </div>
            <div class="card-white" style="border: 1px solid var(--border); padding: 6px 10px;">
                <strong style="color: var(--primary); font-size: 8.2pt; display: flex; align-items: center; gap: 4px; margin-bottom: 2px;">
                    💾 1-Klick Backup herunterladen
                </strong>
                <p style="font-size: 7.6pt; color: var(--charcoal); line-height: 1.3;">
                    Mit Klick auf <strong>„JSON-Backup herunterladen“</strong> sichern Sie alle News-Artikel und Bilder lokal auf Ihrem Rechner.
                </p>
            </div>
        </div>

        <!-- Checklist Card -->
        <div class="card-gold" style="margin-bottom: 6px; padding: 7px 10px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 8.6pt; margin-bottom: 5px; display: flex; align-items: center; gap: 5px;">
                <span>📋</span> Die 6-Punkte-Checkliste vor der Veröffentlichung
            </div>
            <div class="grid-2" style="margin-bottom: 0;">
                <div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Aussagekräftige Überschrift:</strong> Neugier weckend &amp; fehlerfrei.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Richtige Kategorie:</strong> Turniere, Aktuelles oder Gastro zugeordnet.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Kurzer Teaser:</strong> Max. 2–3 Sätze für die Startseiten-Kachel.</div></div>
                </div>
                <div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Scharfes Titelbild:</strong> 16:9 Querformat-Ausschnitt geprüft.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Strukturierter Text:</strong> Absätze &amp; Zwischenüberschriften genutzt.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Live-Vorschau kontrolliert:</strong> Kachel &amp; Artikel wirken harmonisch.</div></div>
                </div>
            </div>
        </div>

        <!-- Compact FAQ -->
        <h3 class="block-title" style="margin-bottom: 3px;">Häufige Fragen aus der Praxis (FAQ):</h3>
        <div class="grid-2" style="margin-bottom: 6px;">
            <div class="card-white" style="padding: 5px 8px; margin-bottom: 0;">
                <div style="font-weight: 700; color: var(--primary); font-size: 7.8pt;">❓ Wie schnell sind Änderungen live?</div>
                <div style="font-size: 7.4pt; color: var(--charcoal);"><strong>Sofort.</strong> Platzstatus und News sind innerhalb von Sekunden auf der Website abrufbar.</div>
            </div>
            <div class="card-white" style="padding: 5px 8px; margin-bottom: 0;">
                <div style="font-weight: 700; color: var(--primary); font-size: 7.8pt;">❓ Bild auf Kachel abgeschnitten?</div>
                <div style="font-size: 7.4pt; color: var(--charcoal);">Startseiten-Kacheln nutzen <strong>16:9 Querformat</strong>. Ausschnitt im Editor-Schieberegler anpassen.</div>
            </div>
        </div>

        <div style="background: var(--primary); color: #FFFFFF; border-radius: 6px; padding: 7px 11px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="font-size: 7.2pt; font-weight: 800; color: var(--gold); text-transform: uppercase;">Technischer Support &amp; Webmaster-Hilfe</div>
                <div style="font-size: 7.6pt; color: #EDE7DA;">Bei Fragen zu Systemupdates oder Sonderformaten wenden Sie sich an Ihren Web-Administrator.</div>
            </div>
            <div style="text-align: right; font-size: 7.4pt; font-weight: 700; color: #FFFFFF;">
                Gut Wissmannshof<br><span style="color: var(--gold);">www.wissmannshof.golf</span>
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>News &amp; Platzstatus Leitfaden</span>
            <span class="footer-dot"></span>
            <span>Modul 3 &amp; Checkliste</span>
        </div>
        <div class="page-footer-right">Seite 3 von 3</div>
    </div>
</div>

</body>
</html>
"""

# =============================================================
# COMPACT ENGLISH TEMPLATE (EXACTLY 2 PAGES - FRONT & BACK!)
# =============================================================
html_en_compact = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gut Wissmannshof — News Editorial & Course Status Quick Guide</title>
    <style>
        @page {{
            size: A4 portrait;
            margin: 7mm 10mm 7mm 10mm;
        }}

        :root {{
            --primary: #0D2218;
            --primary-light: #163828;
            --gold: #B8963E;
            --gold-dark: #9E7F30;
            --gold-bg: #F9F6F0;
            --cream: #F8F5EE;
            --cream-dark: #EDE7DA;
            --charcoal: #2A2E2B;
            --muted: #5E6660;
            --border: #E2DBD0;
            --white: #FFFFFF;
            --green: #28A745;
            --green-bg: #E8F5E9;
            --green-text: #1B5E20;
            --red: #C82333;
            --red-bg: #FDEDEC;
            --red-text: #891621;
            --amber: #E67E22;
            --amber-bg: #FEF9E7;
            --amber-text: #935116;
        }}

        * {{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }}

        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: var(--charcoal);
            background: #FFFFFF;
            font-size: 8.8pt;
            line-height: 1.36;
        }}

        .page {{
            width: 100%;
            height: 282mm;
            max-height: 282mm;
            page-break-after: always;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            background: #FFFFFF;
            padding: 0;
        }}
        .page:last-child {{
            page-break-after: auto;
        }}

        .page-header {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 5px;
            border-bottom: 1.5px solid var(--border);
            margin-bottom: 7px;
        }}
        .page-header-left {{
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .header-logo-mini {{
            height: 21px;
            width: auto;
        }}
        .header-brand {{
            font-size: 7.8pt;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--primary);
        }}
        .header-tag {{
            font-size: 7pt;
            font-weight: 700;
            color: var(--gold-dark);
            background: var(--gold-bg);
            border: 1px solid var(--border);
            padding: 2px 6px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        .page-header-right {{
            font-size: 7.2pt;
            font-weight: 600;
            color: var(--muted);
        }}

        .page-footer {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 5px;
            border-top: 1px solid var(--border);
            margin-top: 6px;
            font-size: 7.2pt;
            color: var(--muted);
        }}
        .page-footer-left {{
            display: flex;
            align-items: center;
            gap: 6px;
        }}
        .footer-dot {{
            width: 3.5px;
            height: 3.5px;
            border-radius: 50%;
            background: var(--gold);
        }}
        .page-footer-right {{
            font-weight: 700;
            color: var(--primary);
        }}

        .page-content {{
            flex: 1;
            display: flex;
            flex-direction: column;
        }}

        h2.section-title {{
            font-size: 11pt;
            font-weight: 800;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 6px;
            padding-bottom: 3px;
            border-bottom: 1.5px solid var(--gold);
        }}
        h3.block-title {{
            font-size: 9.2pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 2px;
        }}

        .card-white {{
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 6px;
            padding: 8px 11px;
            margin-bottom: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }}
        .card-gold {{
            background: linear-gradient(135deg, #FAF7EE 0%, #F5EEDB 100%);
            border: 1px solid #D6C291;
            border-radius: 6px;
            padding: 8px 11px;
            margin-bottom: 6px;
        }}

        .badge {{
            display: inline-flex;
            align-items: center;
            gap: 3px;
            font-size: 6.8pt;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 3px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }}
        .badge-green {{ background: var(--green-bg); color: var(--green-text); border: 1px solid #C8E6C9; }}
        .badge-red {{ background: var(--red-bg); color: var(--red-text); border: 1px solid #FFCDD2; }}
        .badge-amber {{ background: var(--amber-bg); color: var(--amber-text); border: 1px solid #FFE082; }}
        .badge-gold {{ background: var(--gold-bg); color: var(--gold-dark); border: 1px solid #E2DBD0; }}
        .badge-dark {{ background: var(--primary); color: #FFFFFF; }}

        .grid-2 {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 6px;
        }}
        .grid-3 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 7px;
            margin-bottom: 6px;
        }}
        .grid-4 {{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 6px;
            margin-bottom: 6px;
        }}

        .step-row {{
            display: flex;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 6px;
        }}
        .step-num {{
            width: 19px;
            height: 19px;
            min-width: 19px;
            border-radius: 50%;
            background: var(--primary);
            color: var(--white);
            font-size: 7.5pt;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;
        }}
        .step-num.gold {{
            background: var(--gold);
            color: var(--primary);
        }}
        .step-body {{
            flex: 1;
        }}
        .step-title {{
            font-size: 8.8pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 1px;
        }}
        .step-desc {{
            font-size: 8.2pt;
            color: var(--charcoal);
            line-height: 1.32;
        }}

        .alert-tip {{
            background: #F0F7F4;
            border-left: 3px solid var(--green);
            padding: 5px 9px;
            border-radius: 0 4px 4px 0;
            margin-bottom: 5px;
            font-size: 7.9pt;
        }}
        .code-pill {{
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            background: #ECE6D8;
            padding: 1px 5px;
            border-radius: 3px;
            font-size: 7.8pt;
            font-weight: 700;
            color: var(--primary);
            border: 1px solid #D6CCA8;
        }}

        .mockup-bar {{
            background: var(--primary);
            color: var(--white);
            padding: 5px 9px;
            border-radius: 5px 5px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 7.4pt;
            font-weight: 700;
        }}
        .mockup-body {{
            background: var(--white);
            border: 1px solid var(--primary);
            border-top: none;
            border-radius: 0 0 5px 5px;
            padding: 7px 9px;
            margin-bottom: 6px;
        }}

        .hero-banner {{
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: var(--white);
            border-radius: 8px;
            padding: 12px 14px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}
        .hero-banner h1 {{
            font-size: 15pt;
            line-height: 1.15;
            font-weight: 800;
            color: #FFFFFF;
            margin-bottom: 2px;
        }}
        .hero-banner p {{
            font-size: 8.2pt;
            color: #EDE7DA;
            line-height: 1.3;
        }}

        .check-item {{
            display: flex;
            align-items: flex-start;
            gap: 6px;
            margin-bottom: 4px;
            font-size: 8.1pt;
        }}
        .check-box-icon {{
            width: 14px;
            height: 14px;
            min-width: 14px;
            border-radius: 3px;
            background: var(--green);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 7.8pt;
            font-weight: 900;
            margin-top: 1px;
        }}
    </style>
</head>
<body>

<!-- ======================================================== -->
<!-- PAGE 1 EN: ACCESS & MODULE 1 (MORNING COURSE STATUS)     -->
<!-- ======================================================== -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof Golf Resort</span>
            <span class="header-tag">Operations Quick Guide • English</span>
        </div>
        <div class="page-header-right">Season 2026 • Compact Front &amp; Back</div>
    </div>

    <div class="page-content">
        <!-- Compact Hero Banner -->
        <div class="hero-banner">
            <div>
                <h1>News Editorial &amp; Live Course Status Studio</h1>
                <p>Compact operations handbook for Front Desk, Pro Shop, Greenkeeping, and Management.</p>
            </div>
            <span class="badge badge-gold" style="font-size: 7.2pt; padding: 4px 8px;">Staff Confidential</span>
        </div>

        <!-- Access Box -->
        <div class="card-gold" style="margin-bottom: 8px; padding: 8px 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <strong style="color: var(--primary); font-size: 8.8pt;">🔑 Direct Access &amp; Login Credentials (PC, iPad &amp; Mobile)</strong>
                <span style="font-size: 7.2pt; color: var(--muted);">Runs in any browser without installation</span>
            </div>
            <div class="grid-2" style="margin-bottom: 4px;">
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 4px; padding: 6px 9px;">
                    <span style="font-size: 6.8pt; text-transform: uppercase; font-weight: 800; color: var(--muted); display: block;">Web Portal URL</span>
                    <strong style="font-size: 9pt; color: var(--primary);">wissmannshof.golf/admin-news.html</strong>
                </div>
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 4px; padding: 6px 9px;">
                    <span style="font-size: 6.8pt; text-transform: uppercase; font-weight: 800; color: var(--muted); display: block;">Editorial Password</span>
                    <strong style="font-size: 9.8pt; font-family: monospace; color: #B8963E; letter-spacing: 0.04em;">Sgr2026#</strong>
                    <span style="font-size: 6.8pt; color: var(--muted); font-family: sans-serif;">(Alt: Wissmannshof2026)</span>
                </div>
            </div>
            <div style="font-size: 7.4pt; color: var(--muted);">
                💡 <strong>Everyday Tip:</strong> Bookmark this page. Session authentication persists on your device.
            </div>
        </div>

        <!-- Module 1 Header -->
        <h2 class="section-title">Module 1: Daily Course &amp; Resort Status (60-Second Morning Routine)</h2>
        <p style="font-size: 8.2pt; color: var(--muted); margin-bottom: 6px;">
            Every morning, golfers check our website first to see whether carts are allowed and which greens are in play. The status box is located at the very top of the admin page and broadcasts to the homepage, booking system, and clubhouse TV displays.
        </p>

        <!-- Mockup of the 4 Status Boxes -->
        <div class="mockup-bar">
            <span>⛳ SECTION 1: LIVE RESORT &amp; COURSE STATUS (HOMEPAGE &amp; MONITORS)</span>
            <span style="color: #90EE90; font-size: 6.8pt;">● LIVE SYNCHRONIZED</span>
        </div>
        <div class="mockup-body">
            <div class="grid-4" style="margin-bottom: 0;">
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">1. OPENING HOURS</div>
                    <div style="font-size: 8.5pt; font-weight: 800; color: var(--primary); margin: 1px 0;">09:00 - 15:00 hrs</div>
                    <div style="font-size: 6.5pt; color: var(--muted);">Reception &amp; Phones</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">2. GOLF CARTS</div>
                    <span class="badge badge-green" style="margin: 1px 0;">✓ ALLOWED</span>
                    <div style="font-size: 6.5pt; color: var(--muted);">Note: stay on cart paths</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">3. TROLLEYS</div>
                    <span class="badge badge-green" style="margin: 1px 0;">✓ ALLOWED</span>
                    <div style="font-size: 6.5pt; color: var(--muted);">Winter wheels recommended</div>
                </div>
                <div style="background: #FAF8F3; border: 1px solid var(--border); border-radius: 4px; padding: 5px 7px;">
                    <div style="font-size: 6.8pt; font-weight: 800; color: var(--muted);">4. COURSE &amp; GREENS</div>
                    <span class="badge badge-green" style="margin: 1px 0;">✓ OPEN</span>
                    <div style="font-size: 6.5pt; color: var(--muted);">18-Holes Regular</div>
                </div>
            </div>
        </div>

        <!-- 4 Step Morning Instructions -->
        <h3 class="block-title" style="margin-bottom: 4px;">4-Step Quick Instructions:</h3>

        <div class="step-row">
            <div class="step-num">1</div>
            <div class="step-body">
                <div class="step-title">Verify Reception &amp; Phone Hours</div>
                <div class="step-desc">
                    Enter today’s service hours, e.g. <span class="code-pill">daily 09:00 - 15:00 hrs</span>. This dynamically updates phone assistant greetings and website visitors.
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">2</div>
            <div class="step-body">
                <div class="step-title">Set Golf Carts &amp; Trolleys Rules</div>
                <div class="step-desc">
                    Select state: <strong>Allowed (Green)</strong>, <strong>Restricted (Amber)</strong>, or <strong>Prohibited (Red)</strong>.<br>
                    <em>Optional note:</em> e.g. <em>“Stay on cart paths only”</em> or <em>“Winter wheels required”</em>.
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num">3</div>
            <div class="step-body">
                <div class="step-title">Select Course Status &amp; Greens (Use 1-Click Presets!)</div>
                <div class="step-desc">
                    Select whether the course is <strong>Open</strong>, <strong>Partially Open</strong>, or <strong>Closed (Frost/Weather)</strong>, and whether <strong>Summer Greens</strong> or <strong>Winter Greens</strong> are in play.<br>
                    <strong>Speed Tip:</strong> The <em>„Schnellvorlage wählen“</em> dropdown automatically configures common scenarios with a single click (e.g. <em>„18-Loch regulär geöffnet“</em> or <em>„Witterungsbedingt gesperrt“</em>).
                </div>
            </div>
        </div>

        <div class="step-row">
            <div class="step-num gold">4</div>
            <div class="step-body">
                <div class="step-title">Save &amp; Publish (The Golden Button)</div>
                <div class="step-desc">
                    Click <strong>„Status jetzt speichern &amp; veröffentlichen“</strong> at the bottom of the card.<br>
                    A green confirmation toast appears instantly. The public website and clubhouse TV screens update without reloading.
                </div>
            </div>
        </div>

        <div class="card-gold" style="margin-top: 4px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 8.2pt; margin-bottom: 2px;">
                ⚡ Instant Live Synchronization
            </div>
            <div style="font-size: 7.8pt; color: var(--charcoal); line-height: 1.3;">
                Saved statuses broadcast immediately to web visitors and active digital clubhouse boards. No server reboot or manual deployment required.
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>Editorial Quick Guide</span>
            <span class="footer-dot"></span>
            <span>Module 1: Morning Routine</span>
        </div>
        <div class="page-footer-right">Page 1 of 2</div>
    </div>
</div>

<!-- ======================================================== -->
<!-- PAGE 2 EN: NEWS STUDIO, MANAGEMENT & CHECKLIST           -->
<!-- ======================================================== -->
<div class="page">
    <div class="page-header">
        <div class="page-header-left">
            <img src="data:image/png;base64,{logo_b64}" class="header-logo-mini" alt="Gut Wissmannshof">
            <span class="header-brand">Gut Wissmannshof</span>
            <span class="header-tag">Module 2 &amp; 3: Content &amp; Reference</span>
        </div>
        <div class="page-header-right">Publishing, Management &amp; Checklist</div>
    </div>

    <div class="page-content">
        <h2 class="section-title">Module 2: Publishing News, Tournaments &amp; Event Photos</h2>
        <p style="font-size: 8.2pt; color: var(--muted); margin-bottom: 6px;">
            Create tournament recaps, culinary announcements, and course maintenance updates with crisp photos and real-time live preview.
        </p>

        <div class="grid-2">
            <div>
                <h3 class="block-title" style="margin-bottom: 3px;">Key Steps:</h3>
                <div class="step-row">
                    <div class="step-num">1</div>
                    <div class="step-body">
                        <div class="step-title">Headline &amp; Category</div>
                        <div class="step-desc">
                            Catchy title (e.g. <em>„Thrilling Finish at the 2026 Club Championships“</em>).<br>
                            Categories: <span class="badge badge-gold">Turniere</span> <span class="badge badge-green">Aktuelles</span> <span class="badge badge-amber">Gastronomie</span> <span class="badge badge-dark">Platz &amp; Resort</span>.
                        </div>
                    </div>
                </div>
                <div class="step-row">
                    <div class="step-num">2</div>
                    <div class="step-body">
                        <div class="step-title">Teaser &amp; 16:9 Hero Image</div>
                        <div class="step-desc">
                            Write 2–3 punchy sentences for card view. Upload a landscape photo or choose from the archive; check the 16:9 crop guide.
                        </div>
                    </div>
                </div>
                <div class="step-row">
                    <div class="step-num">3</div>
                    <div class="step-body">
                        <div class="step-title">Body Text &amp; Formatting Toolbar</div>
                        <div class="step-desc">
                            Format using quick buttons: <span class="badge badge-gold">+ Paragraph</span> <span class="badge badge-gold">+ H3 Heading</span> <span class="badge badge-gold">+ Quote</span> <span class="badge badge-gold">Bold</span>.
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card-white" style="border: 1.5px solid var(--gold); background: #FCFAF6; padding: 6px 9px;">
                    <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 2px;">
                        <span style="font-size: 9.5pt;">📸</span>
                        <strong style="color: var(--primary); font-size: 8.4pt;">Embed Photos in Text Body</strong>
                    </div>
                    <p style="font-size: 7.6pt; color: var(--charcoal); margin-bottom: 3px;">
                        Click <strong>„+ Foto in Text einfügen“</strong> to upload multiple shots with descriptive captions (e.g. <em>„Award Ceremony Ladies Gross“</em>). Readers can tap photos for 4K lightbox view.
                    </p>
                    <span class="badge badge-green" style="font-size: 6.5pt;">Auto Mobile Optimized</span>
                </div>

                <div class="card-white" style="border-left: 3px solid var(--green); padding: 6px 9px;">
                    <div style="font-size: 6.8pt; font-weight: 800; text-transform: uppercase; color: var(--green-text); margin-bottom: 1px;">
                        👁 Real-Time Live Preview
                    </div>
                    <p style="font-size: 7.6pt; color: var(--charcoal);">
                        The right column dynamically displays both the <strong>Card Teaser</strong> (homepage) and the <strong>Full Article</strong> layout.
                    </p>
                </div>
            </div>
        </div>

        <h2 class="section-title" style="margin-top: 4px;">Module 3: Article Management, Cloud-Sync &amp; Backups</h2>

        <div class="grid-3" style="margin-bottom: 6px;">
            <div class="card-white" style="padding: 5px 8px;">
                <strong style="font-size: 7.6pt; color: var(--primary); display: block;">✏️ EDIT ARTICLE</strong>
                <span style="font-size: 7.4pt; color: var(--charcoal);">Click pencil icon to reload complete article into editor.</span>
            </div>
            <div class="card-white" style="padding: 5px 8px;">
                <strong style="font-size: 7.6pt; color: var(--primary); display: block;">🔄 1-CLICK STATUS</strong>
                <span style="font-size: 7.4pt; color: var(--charcoal);">Toggle <strong>Published</strong>, <strong>Draft</strong>, or <strong>Archive</strong> in the table.</span>
            </div>
            <div class="card-white" style="padding: 5px 8px;">
                <strong style="font-size: 7.6pt; color: var(--red); display: block;">💾 1-CLICK BACKUP</strong>
                <span style="font-size: 7.4pt; color: var(--charcoal);">Download JSON backup for 100% offline security.</span>
            </div>
        </div>

        <!-- Pre-Publishing Checklist Card -->
        <div class="card-gold" style="margin-bottom: 6px; padding: 7px 10px;">
            <div style="font-weight: 800; color: var(--primary); font-size: 8.6pt; margin-bottom: 4px; display: flex; align-items: center; gap: 5px;">
                <span>📋</span> Pre-Publishing Quality Checklist
            </div>
            <div class="grid-2" style="margin-bottom: 0;">
                <div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Headline:</strong> Clear, informative, and typo-free.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Category:</strong> Tournaments, News, or Gastronomy.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Teaser:</strong> Max. 2–3 sentences for card view.</div></div>
                </div>
                <div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>16:9 Image:</strong> Clean landscape hero photo selected.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Text Structure:</strong> Subheadings &amp; paragraphs formatted.</div></div>
                    <div class="check-item"><div class="check-box-icon">✓</div><div><strong>Preview Checked:</strong> Card and article layouts look great.</div></div>
                </div>
            </div>
        </div>

        <div style="background: var(--primary); color: #FFFFFF; border-radius: 6px; padding: 7px 11px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="font-size: 7.2pt; font-weight: 800; color: var(--gold); text-transform: uppercase;">Technical Support &amp; Webmaster</div>
                <div style="font-size: 7.6pt; color: #EDE7DA;">For system updates, feature inquiries, or password resets, contact your web team.</div>
            </div>
            <div style="text-align: right; font-size: 7.4pt; font-weight: 700; color: #FFFFFF;">
                Gut Wissmannshof<br><span style="color: var(--gold);">www.wissmannshof.golf</span>
            </div>
        </div>
    </div>

    <div class="page-footer">
        <div class="page-footer-left">
            <span>Gut Wissmannshof</span>
            <span class="footer-dot"></span>
            <span>Editorial Quick Guide</span>
            <span class="footer-dot"></span>
            <span>Module 2 &amp; 3</span>
        </div>
        <div class="page-footer-right">Page 2 of 2</div>
    </div>
</div>

</body>
</html>
"""

# Write HTML files
with open("anleitung-news-redaktion-de.html", "w", encoding="utf-8") as f:
    f.write(html_de_compact)
print("Wrote compact anleitung-news-redaktion-de.html")

with open("guide-news-editorial-en.html", "w", encoding="utf-8") as f:
    f.write(html_en_compact)
print("Wrote compact guide-news-editorial-en.html")

# Function to compile HTML to PDF using Chrome Headless
def compile_pdf(html_rel_path, pdf_temp_path):
    chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    abs_html = os.path.abspath(html_rel_path)
    file_uri = "file:///" + abs_html.replace("\\", "/")
    temp_profile = os.path.join(tempfile.gettempdir(), f"chrome-pdf-{os.getpid()}-{os.path.basename(html_rel_path)}")
    
    cmd = [
        chrome_exe,
        "--headless=new",
        "--disable-gpu",
        f"--user-data-dir={temp_profile}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_temp_path}",
        file_uri
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(temp_profile):
        shutil.rmtree(temp_profile, ignore_errors=True)
        
    if os.path.exists(pdf_temp_path) and os.path.getsize(pdf_temp_path) > 0:
        return True
    else:
        print("Chrome error:", result.stderr)
        return False

temp_dir = tempfile.gettempdir()
pdf_de_temp = os.path.join(temp_dir, "Anleitung_Gut_Wissmannshof_News_Redaktion_DE.pdf")
pdf_en_temp = os.path.join(temp_dir, "Guide_Gut_Wissmannshof_News_Editorial_EN.pdf")
pdf_combined_temp = os.path.join(temp_dir, "Gut_Wissmannshof_News_Redaktion_Komplett_DE_EN.pdf")

print("Compiling German PDF...")
if compile_pdf("anleitung-news-redaktion-de.html", pdf_de_temp):
    reader_de = pypdf.PdfReader(pdf_de_temp)
    print(f"German PDF successfully generated ({len(reader_de.pages)} pages, {os.path.getsize(pdf_de_temp)} bytes)")
else:
    print("Failed to generate German PDF")

print("Compiling English PDF...")
if compile_pdf("guide-news-editorial-en.html", pdf_en_temp):
    reader_en = pypdf.PdfReader(pdf_en_temp)
    print(f"English PDF successfully generated ({len(reader_en.pages)} pages, {os.path.getsize(pdf_en_temp)} bytes)")
else:
    print("Failed to generate English PDF")

# Merge DE and EN into combined PDF
print("Merging DE and EN into combined bilingual master PDF...")
writer = pypdf.PdfWriter()
writer.append(pdf_de_temp)
writer.append(pdf_en_temp)
writer.add_metadata({
    "/Title": "Gut Wissmannshof — News Redaktion & Platzstatus Leitfaden (DE & EN Edition)",
    "/Author": "Gut Wissmannshof Golf Resort",
    "/Subject": "Kompakte Bedienungsanleitung & Quick Reference Guide (5 Seiten)",
    "/Keywords": "Gut Wissmannshof, Golf, News, Redaktion, Platzstatus, Carts, Trolleys"
})
with open(pdf_combined_temp, "wb") as f_out:
    writer.write(f_out)
writer.close()

reader_comb = pypdf.PdfReader(pdf_combined_temp)
print(f"Combined PDF generated ({len(reader_comb.pages)} pages, {os.path.getsize(pdf_combined_temp)} bytes)")

# Copy files to Workspace and Artifacts directory
artifact_dir = r"C:\Users\MW-T-\.gemini\antigravity\brain\cd4e502d-c38b-4764-a0c3-57d9edbc6cad"
files_to_copy = [
    (pdf_de_temp, "Anleitung_Gut_Wissmannshof_News_Redaktion_DE.pdf"),
    (pdf_en_temp, "Guide_Gut_Wissmannshof_News_Editorial_EN.pdf"),
    (pdf_combined_temp, "Gut_Wissmannshof_News_Redaktion_Komplett_DE_EN.pdf"),
    (pdf_combined_temp, "Anleitung_Gut_Wissmannshof_News_Redaktion.pdf"),
]

for src, fname in files_to_copy:
    # Workspace
    dst_ws = os.path.join(".", fname)
    shutil.copyfile(src, dst_ws)
    print(f"Copied to workspace: {dst_ws}")
    
    # Artifact directory
    if os.path.exists(artifact_dir):
        dst_art = os.path.join(artifact_dir, fname)
        shutil.copyfile(src, dst_art)
        print(f"Copied to artifact dir: {dst_art}")

# Cleanup temp files
for p in [pdf_de_temp, pdf_en_temp, pdf_combined_temp]:
    if os.path.exists(p):
        try: os.remove(p)
        except: pass

print("All builds and distributions completed successfully!")
