<script setup lang="ts">
const DATA_TERM = [
  {
    title: "für die Nutzung von Software Anamnesis® über das Internet (Software as a Service)",
    para: [
      `Stand: 01.07.2023 - Version 1.0`,
    ]
  },
  {
    title: "1.       Anwendungsbereich, Vertragspartner",
    para: [
      `Der Anwendungsbereich dieser AGB ist auf Geschäfte mit Unternehmern, juristischen Personen des öffentlichen Rechts sowie öffentlich-rechtlichen Sondervermögen beschränkt.`,
      `Vertragspartner sind.`,
    ]
  },
  {
    para: [
      `<span class="font-bold">die ADGI GmbH, (nachfolgend "Auftragnehmer" oder "ADGI")</span> Zürcherstrasse 20, 4310 Rheinfelden Schweiz`,
      `und`,
    ]
  },
  {
    para: [
      `<span class="font-bold">die Kundschaft oder auftraggebende Person oder, Ersteller (nachfolgend "Kundschaft" oder "auftraggebende Person" oder "Ersteller")</span> die diesem Software as a Service Vertrag mittels Anmeldung zustimmt als Unternehmer.`,
    ]
  },
  {
    title: "Einzeln auch bezeichnet als “Partei” oder gemeinsam bezeichnet als “Parteien”.",
    para: [
      `Die vorliegenden AGB gelten nicht gegenüber Verbrauchern.`,
      `Für die Nutzung der Software und die Erbringung ergänzender Dienstleistungen gelten ausschließlich diese Allgemeinen Geschäftsbedingungen („AGB“). Abweichende Geschäftsbedingungen werden nicht Vertragsbestandteil, auch wenn ADGI ihrer Geltung nicht widerspricht, es sei denn, solche Geschäftsbedingungen werden von ADGI ausdrücklich schriftlich anerkannt.`,
    ]
  },
  {
    title: "2.       Definitionen",
  },
  {
    title: "2.1. Kundschaft / auftraggebende Person / Ersteller",
    para: [
      `Das Unternehmen, das ein Konto unserer Anamnesis® besitzt und aus der Anamnesis-Datenbank Umfragen, Formulare, Anträge bzw. Frage- und Anmeldebögen zusammenstellt.`,
    ]
  },
  {
    title: "2.2. Nutzer",
    para: [
      `Das Unternehmen, das ein Konto unserer Anamnesis® besitzt und einen ihm zur Verfügung gestellten Anmeldebogen kostenfrei nutzt, für die Patienten zuzuweisen.`,
    ]
  },
  {
    title: "2.3. Befragter",
    para: [
      `Die Person, die eine Umfrage, ein Formular, einen Antrag oder einen Fragebogen erhält, der von Anamnesis® unterstützt wird.`,
    ]
  },
  {
    title: "2.4. Besucher",
    para: [
      `Sie besuchen gerade eine unserer Websites, weil Sie zu unserem großen Dank neugierig sind.`,
    ]
  },
  {
    title: "2.5. DSG",
    para: [
      `DSG bedeutet das schweizerische Bundesgesetz über den Datenschutz (Art. 19 ff. DSG).`,
    ]
  },
  {
    title: "2.6. EU DSGVO",
    para: [
      `Europäische Datenschutz-Grundverordnung (EU 2016/679).`,
    ]
  },
  {
    title: "3.       Vertragsgegenstand",
    para: [
      `Diese AGB gelten für die Nutzung unserer Software Anamnesis® gemäß der aktuellen Produktbeschreibung. Die Software Anamnesis® wird als Software-as-a-Service („SaaS“) über das Internet zur Verfügung gestellt.`,
      `Anamnesis® ist eine SaaS Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche der Kundschaft ermöglicht aus der bestehenden Datenbank ihre eigenen Fragebögen zusammenzustellen und zweckgemäss ihrer Patienten, ihrer Zuweisern zur Verfügung zu stellen.`,
      `Der Kundschaft wird ermöglicht, auf der Infrastruktur Anamnesis® einschließlich der Infrastruktur eines von ADGI beauftragten Dienstleisters, während der Laufzeit dieses Vertrags für Ihre Zwecke zu nutzen. Nicht Gegenstand des Vertrages ist die Verarbeitung der Patientendaten, Fragebögen und andere Formulare durch ADGI an Sie.`,
      `Jede der Parteien ist ein selbstständiger Unternehmer und in der Festlegung der Preise und Bestimmungen für ihre Leistungen und/oder Produkte unabhängig. Keine der Parteien ist ein gesetzlicher Vertreter der anderen Partei, noch wird sie dies behaupten. Durch diesen Vertrag wird weder ein Joint Venture noch ein Anstellungs- oder Vertretungsverhältnis zwischen den Parteien errichtet.`,
    ]
  },
  {
    title: "4.       Zustandekommen des Vertrages",
    para: [
      `Der Zugriff auf die Anamnesis® erfolgt durch Fernzugriff, d.h. Internet, auf die Server von Anamnesis.ch. Die Anbindung des Kunden auf das Internet, die Netzwerkverbindung sowie die Bereitstellung und Wartung der notwendigen Hard- und Software ist nicht Gegenstand dieses Vertrages. Bei Inkrafttreten dieses Vertrages gewährt ADGI, Fernzugriff auf die Anamnesis®. Sofern nicht anders vereinbart, bietet ADGI die Anamnesis® in der jeweils aktuellen Version an, welche allgemein den Kunden von ADGI zugänglich gemacht wird. Im Regelfall kommt der Vertrag zwischen auftraggebende Person und ADGI über eine Bestellung zustande, die auftraggebende Person über das Bestellformular auf https://www.anamnesis.ch/pricing aufgibt und die ADGI annimmt. Unabhängig von einer solchen Bestellung kommt der Vertrag zwischen auftraggebende Person und ADGI jedenfalls mit der Nutzung von Anamnesis® zustande, unabhängig davon, ob auftraggebende Person ein entgeltliches Abonnement abgeschlossen hat oder Anamnesis® im Rahmen eines Sonderangebotes für begrenzte Zeit kostenlos nutzt. Eine Nutzung von Anamnesis® ohne Vertragsabschluss ist ausgeschlossen.`,
    ]
  },
  {
    title: "5.       Open Source Software-Komponenten",
    para: [
      `Anamnesis® enthält Open Source Software-Komponenten. Ein Unternehmen, das ein Konto unserer Anamnesis® besitzt, kann ein ihm zur Verfügung gestelltes Formular kostenfrei nutzen, für die Patienten zuzuweisen. Ebenfalls ein Befragter kann einen ihm zur Verfügung gestellten Fragebogen kostenfrei nutzen, um die Daten an behandelnden Personen weiterzuleiten. Die Nutzung dieser Komponenten unterliegt ausschließlich der vorliegenden allgemeinen Geschäftsbedingungen.`,
    ]
  },
  {
    title: "6.       Leistungen von ADGI",
    para: [
      `Anamnesis® ermöglicht der Kundschaft, ihrer Patienten digitale Fragebögen zur Verfügung zu stellen. Auftraggebende Person kann Anamnesis® nutzen, um die Anamnese seiner Patienten zu erheben und zu dokumentieren als auch andere Arten von Fragebögen einzusetzen, beispielsweise Umfragen zur Patientenzufriedenheit oder Zuweiserzufriedenheit oder beispielsweise Anmeldebögen für Patientenzuweisung.`,
      `ADGI betreibt die für den Betrieb von Anamnesis® notwendigen Server- und Systemkomponenten und stellt die auftraggebende Person diese als Software-as-a-Service für die Dauer des Vertrags bereit. ADGI kann Hilfspersonen für die Erbringung der Dienstleistungen auf, oder im Zusammenhang mit, der Anamnesis® einsetzen.`,
    ]
  },
  {
    title: "7.       Zweckbestimmung",
    para: [
      `Die von Anamnesis® bereitgestellten Informationen dürfen nicht als Ersatz für ärztlichen Rat und ärztliche Therapie interpretiert oder genutzt werden. Anamnesis® ist nicht dafür bestimmt und geeignet, medizinische Diagnosen oder Behandlungen zu ersetzen oder hierfür eine Basis darzustellen. Anamnesis® ist ihrer Zweckbestimmung nach kein Medizinprodukt. Es liegt ausschließlich in Ihrem Verantwortungsbereich, wie Sie die mittels Anamnesis® erhobenen, eingegebenen oder generierten Daten und Informationen verwenden oder durch Dritte verwenden lassen.`,
    ]
  },
  {
    title: "8.       Änderungen",
    para: [
      `ADGI ist jederzeit berechtigt, die Funktionen sowie die Benutzerschnittstelle von Anamnesis® von Zeit zu Zeit nach eigenem Ermessen und nach Massgabe dieser AGB zu aktualisieren, um Anamnesis® und ihre Nutzung durch unsere auftraggebende Person zu verbessern.`,
      `Weiterentwicklungen von Anamnesis® schuldet ADGI nach diesen AGB nicht. ADGI behält sich jedoch das Recht vor, Anamnesis® jederzeit oder bei Gelegenheit vorübergehend oder dauerhaft abzuändern. Sollte ADGI Anamnesis® auf diese Weise ändern, dass Eigenschaften oder Funktionen, die sich aus ihrer aktuellen Produktbeschreibung als Sollbeschaffenheit ergeben, entfernt oder deaktiviert werden, ist auftraggebende Person zur außerordentlichen fristlosen Kündigung des Vertrages berechtigt.`,
    ]
  },
  {
    title: "9.       Nutzungsrechte",
    para: [
      `Die Anamnesis® gehört und verbleibt im Eigentum von ADGI GmbH. ADGI GmbH behält alle Rechte an Weiterentwicklungen, Übersetzungen, Änderungen und Updates/-grades der Anamnesis® und deren Kopien. Auftraggebende Person erhält das nicht ausschliessliche, nicht übertragbare, zeitlich limitierte, gebührenpflichtige und widerrufbare Recht für den in diesen AGB vereinbarten Einsatzbereich und im Rahmen der vereinbarten Zweckbestimmung sowie des vereinbarten Tarifs zu die Anamnesis® zu verwenden.`,
      `Das Nutzungsrecht der Kundschaft umfasst das Recht, „powered by Anamnesis®“ [bildlich]`,
      `auf seiner Webseite zu integrieren. Abgesehen davon umfasst dieses Nutzungsrecht jedoch nicht das   Recht, Kennzeichen, Firmennamen oder andere Bezeichnungen von ADGI GmbH zu Werbezwecken oder anderen Veröffentlichungen zu nutzen. Auftraggebende Person darf immaterialgüterrechtliche Vermerke, wie z.B. Kennzeichenrechts-, Urheberrechts-, Patentrechts-, Designrechts- und andere geschützte Vermerke der Anamnesis® weder vollständig oder teilweise entfernen, verändern, verdecken oder verbergen, noch das vollständige oder teilweise Entfernen, Verändern, Verdecken oder Verbergen durch Dritte zulassen.`,
      `Auftraggebende Person bestätigt, die Nutzungsbedingungen und die Datenschutzbestimmung,`,
      `online auf der Website von Anamnesis.ch gelesen bzw. erhalten zu haben und stimmt`,
      `diesen ausdrücklich zu.`,
      `Die auftraggebende Person darf weder durch Disassemblieren, Dekompilieren, Reverse Engineering noch durch sonstige Verfahren versuchen, den Quellcode der Anamnesis® oder Softwarekomponenten von Anamnesis® zu gewinnen bzw. zu entschlüsseln. Auch in Bezug auf alle Anamnesis-Komponenten ist die auftraggebende Person weder selbst befugt noch ist auftraggebende Person berechtigt, andere dabei zu unterstützen, Anamnesis® sowie die ihr zugrunde liegende Software zu vervielfältigen, sklavisch nach zu programmieren, zurück zu entwickeln, zu disassemblieren, zu dekompilieren oder anderweitig zu versuchen, den Quellcode zu erlangen. Im Verhältnis zwischen auftraggebende Person und ADGI erkennt auftraggebende Person an, dass ADGI die alleinige und ausschließliche Rechteinhaberin in Bezug auf Anamnesis® ist.`,
      `Die Rechte, die durch die Anamnesis® generierten Berichte als PDF zu speichern und zu vervielfältigen, bleiben unberührt. Nicht zulässig ist jedoch die Bearbeitung der Berichte in einer Weise, dass die Markenzeichen (z.B. das Anamnesis-Logo) entfernt werden.`,
    ]
  },
  {
    title: "10.   Schadloshaltung",
    para: [
      `Auftraggebende Person sichert zu, dass sie über die erforderlichen Rechte und Genehmigungen`,
      `verfügt, um Anamnesebögen und Zuweisung Anmeldebögen zu veröffentlichen, anzubieten.`,
    ]
  },
  {
    title: "11.   Pflichten",
    para: [
      `Auftraggebende Person ist dazu verpflichtet, bei der Bestellung von Anamnesis® wahre Angaben über die Umstände der Nutzung zu machen, insbesondere über die Anzahl der Anamnesis® nutzenden Ärzte die Art der Einrichtung (z.B. Einzel- oder Gemeinschaftspraxis oder Klinikabteilung).`,
      `Nutzen mehr Ärzte den Anamnesis-Zugang als auftraggebende Person bei der Bestellung angegeben hat, behält die ADGI das Recht vor, den Vertrag für jeden zusätzlichen Arzt in dem von auftraggebender Person gewählten Tarif zu erweitern und zusätzlich eine Verwaltungspauschale von CHF 100.- in Rechnung zu stellen, rückwirkend ab dem Zeitpunkt, zu dem ADGI die Überschreitung der Anzahl der bei der Bestellung angegebenen Ärzte, die Anamnesis® nutzen, feststellt.`,
      `Auftraggebende Person ist dazu verpflichtet, die Nutzerkennung, das Login-Passwort nicht an Dritte weiterzugeben, um die Nutzung von Anamnesis® und den Zugriff auf sensible Daten durch Unbefugte zu verhindern.`,
      `Wenn auftraggebende Person eine Befragung per E-Mail verschicken würde, ist er dazu verpflichtet, die Datenschutzkonformität der Übermittlung von Patientendaten via E-Mail sicherzustellen, z.B. über eine Einwilligung des Patienten.`,
      `Auftraggebende Person ist dazu verpflichtet, Änderungen der Kontaktdaten unverzüglich über die Seite “Anamnesis - Account" einzugeben.`,
      `Auftraggebende Person ist dazu verpflichtet, der ADGI die Geltendmachung angeblicher Rechte durch Dritte sowie Mängel oder Schäden an Anamnesis® unverzüglich anzuzeigen.`,
    ]
  },
  {
    title: "12.   Softwareupdates",
    para: [
      `ADGI aktualisiert die Anamnesis® in unregelmäßigen Abständen automatisch.`,
    ]
  },
  {
    title: "13.   Kostenloses Angebot",
    para: [
      `Wenn ADGI eine kostenlose Funktion anbietet, ist auftraggebende Person berechtigt, in der Funktion zur Verfügung gestellten Fragen und Antworten zur Bereitstellung eines Fragebogens zu nutzen. ADGI behält das Recht vor, den Funktionsumfang jederzeit zu verändern oder komplett auszuschalten. Während der Nutzung hat auftraggebende Person keinen Anspruch auf die Nutzung von Funktionen oder Dienstleistungen, die zahlenden Kunden vorbehalten sind.`,
    ]
  },
  {
    title: "14.   Kostenpflichtiges Abonnement",
    para: [
      `Auftraggebende Person kann jederzeit ein kostenpflichtiges Abonnement bestellen. `,
    ]
  },
  {
    title: "Mit der Bestellung erhält",
  },
  {
    title: "auftraggebende Person per E-Mail eine Bestätigung. ",
    para: [
      `Die einzelnen Abonnementstufen (“Tarife”) sind nachfolgend näher beschrieben.`,
    ]
  },
  {
    title: "Abonnement “Pro“",
    para: [
      `Mit dem Abonnement <span class="font-bold">“Pro“</span> kann auftraggebende Person;`,
      `Pro Fachbereich`,
      `Maximal 50 Formularbögen`,
      `Maximal 500 Einsendungen pro Monat`,
      `Maximal 2.000 Patientenerfassungen`,
      `Maximal 5.000 Besuche der Formulare durch Patienten.`,
      `Abonnement <span class="font-bold">“Pro“</span> ist für ein (1) Arzt / Ärztin / Behandelnde vorgesehen.  `,
      `Die Nutzung des Abonnements <span class="font-bold">“Pro“</span> ist für Unternehmen mit mehreren Standorten oder in mehreren Abteilungen oder durch mehrere Ärzte untersagt.`,
      `Abonnement <span class="font-bold">“Pro“</span> kann monatlich oder jährlich bestellt werden. Die erste Abbuchung von der Kreditkarte erfolgt mit der Bestellung. Der Betrag wird monatlich oder jährlich am Tag der Abonnements-Verlängerung automatisch von der Kreditkarte abgebucht. Das Abonnement wird automatisch ohne weitere Mitteilung um jeweils ein weiterer Monat oder weiteres Jahr verlängert, bis die Kunde es kündigt.`,
    ]
  },
  {
    title: "Die Kündigungsfrist beträgt bei monatlichem Abonnement zwei (2) Wochen bei",
  },
  {
    title: "jährlichem Abonnement zwei (2) Monaten zum Ablauf der Vertragslaufzeit.",
    para: [
      `Die Gebühren und der Funktionsumfang können sich bei einer Verlängerung ändern.`,
    ]
  },
  {
    title: "Die Kunde wird jedoch vor einer",
  },
  {
    title: "Änderung des Tarifs benachrichtigt",
    para: [
      ` und erhält die Gelegenheit, entsprechend den Bestimmungen in diesen AGB zu`,
      `kündigen oder in einen anderen Tarif zu wechseln.`,
      `Alle Preise sind Nettopreise und verstehen sich zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.`,
    ]
  },
  {
    title: "Abonnement “Institution“",
    para: [
      `Mit dem Abonnement <span class="font-bold">“Institution“</span> kann auftraggebende Person;`,
      `Pro Fachbereich`,
      `Maximal 50 Formularbögen`,
      `Maximal 500 Einsendungen pro Monat`,
      `Maximal 2.000 Patientenerfassungen`,
      `Maximal 5.000 Besuche der Formulare durch Patienten.`,
      `Die Nutzung des Abonnements “Institution“ ist für Unternehmen mit mehreren Standorten oder in mehreren Abteilungen oder durch mehrere Ärzte vorgesehen.`,
      `Abonnement <span class="font-bold">“Institution“</span> kann monatlich oder jährlich bestellt werden. Die erste Abbuchung von der Kreditkarte erfolgt mit der Bestellung. Der Betrag wird monatlich oder jährlich am Tag der Abonnements-Verlängerung automatisch von der Kreditkarte abgebucht.`,
      `Das Abonnement wird automatisch ohne weitere Mitteilung um jeweils ein weiterer Monat oder weiteres Jahr verlängert, bis die Kunde es kündigt.`,
    ]
  },
  {
    title: "Die Kündigungsfrist beträgt bei monatlichen Abonnement zwei (2) Wochen bei jährlichem",
  },
  {
    title: "Abonnement zwei (2) Monaten zum Ablauf der Vertragslaufzeit.",
    para: [
      `Die Gebühren und der Funktionsumfang können sich bei einer Verlängerung ändern. `,
    ]
  },
  {
    title: "Die Kunde wird jedoch vor einer",
  },
  {
    para: [
      `<span class="leading-[40px] font-bold">Änderung des Tarifs benachrichtigt und erhält die Gelegenheit, entsprechend den Bestimmungen in diesen AGB zu kündigen oder in einen anderen Tarif zu wechseln.</span>`,
    ]
  },
  {
    title: "15.   Zahlungsbedingungen",
    para: [
      `Für alle Abonnements steht die Kreditkartenzahlung als Zahlungsmethode zur Verfügung.`,
    ]
  },
  {
    title: "Jede Rechnung wird per E-Mail an die von auftraggebender Person registrierte E-Mail-Adresse versandt.",
    para: [
      `ADGI behält sich vor, die für den jeweiligen Tarif vereinbarten Preise zum Beginn einer neuen Vertragslaufzeit unter Berücksichtigung der tatsächlichen Kosten und Erfordernisse anzupassen. Bei Preiserhöhungen wird die Branchenüblichkeit beachten. `,
    ]
  },
  {
    title: "Über eine etwaige Preisanpassung wird die ADGI auftraggebende Person spätestens drei (3) Monate vor",
  },
  {
    para: [
      `<span class="leading-[40px] font-bold">Beginn der nächsten Vertragslaufzeit informieren, so dass die Kunde rechtzeitig kündigen kann, wenn die Kunde mit der Preiserhöhung nicht einverstanden sein sollte.</span>`,
      `Alle Preise sind Nettopreise und verstehen sich zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer. Wird innerhalb des Berechnungszeitraums der Umsatzsteuersatz geändert, gelten die Zeiträume mit dem jeweils geltenden Umsatzsteuersätzen als getrennte Berechnungszeiträume.`,
    ]
  },
  {
    title: "16.   Kündigung",
    para: [
      `Die Kunde kann jederzeit ihren Vertrag ordentlich kündigen.`,
    ]
  },
  {
    title: "Der frühestmögliche Kündigungszeitpunkt und die",
    para: [
      `<span class="font-bold">Kündigungsfrist richten sich nach der Laufzeit des bestellten Tarifs.</span>`,
      `Die Nutzung der Fragebogen durch die Patienten`,
      `und die Zuweiser und der Zugang zur Anamnesis® werden zum Zeitpunkt des Vertragsendes deaktiviert.`,
      `Im Falle einer Kündigung werden alle auf unserer Infrastruktur gespeicherten Daten, einschließlich der Patientendaten, Befragung Konfigurationen, gelöscht. Bei Beendigung dieses Vertrags erlischt ebenfalls das Zugriffsrecht auf die Server und Recht der Kundschaft zur Nutzung der Anamnesis® unverzüglich. Die Kundschaft ist verpflichtet, allfällige Dokumentation der Anamnesis® und alle davon erstellten Kopien oder Teilkopien unwiderruflich zu löschen und ADGI GmbH unaufgefordert schriftlich darüber zu informieren. Sollte auftraggebende Person dieser Pflicht nicht nachkommen oder dennoch auf die Server von Anamnesis® zugreifen, hat ADGI GmbH das Recht, der Kunde bis auf Weiteres die Servicegebühren in Rechnung zu stellen.`,
      `<span class="font-bold">Die Kündigung bedarf zumindest der Textform (z.B. via E-Mail an anamnesis).</span>`,
      `Das Recht auf außerordentliche fristlose Kündigung aus wichtigem Grund bleibt unberührt.`,
    ]
  },
  {
    title: "17.   Änderungen der Allgemeinen Geschäftsbedingungen (AGB)",
    para: [
      `Diese AGB können geändert werden, soweit hierdurch wesentliche Regelungen des Vertragsverhältnisses nicht berührt werden und dies zur Anpassung an Entwicklungen erforderlich ist, welche bei Vertragsschluss nicht vorhersehbar waren und deren Nichtberücksichtigung die Ausgewogenheit des Vertragsverhältnisses merklich stören würde. Wesentliche Regelungen sind insbesondere solche über Art und Umfang der vertraglich vereinbarten Leistungen und die Laufzeit einschließlich der Regelungen zur Kündigung. Ferner können Anpassungen oder Ergänzungen der AGB vorgenommen werden, soweit dies zur Beseitigung von Schwierigkeiten bei der Durchführung des Vertrages aufgrund von nach Vertragsschluss entstandenen Regelungslücken erforderlich ist. Dies kann insbesondere der Fall sein, wenn sich die Rechtsprechung ändert und Klauseln dieser AGB hiervon betroffen sind.`,
    ]
  },
  {
    title: "18.   Sperrung",
    para: [
      `ADGI behält sich das Recht vor, den Zugang zu Anamnesis® und die Nutzung der bereitgestellte Fragbogens zu sperren, wenn fällige Zahlungen aus dem Vertrag nicht geleistet wurden, obwohl ADGI die Kunde zweimal gemahnt hat und wenigstens dreißig (30) Kalendertage seit Zusendung der ersten Mahnung verstrichen sind. Eine solche Sperrung befreit die Kunde nicht von ihren Zahlungspflichten. Die Geltendmachung weiterer Ansprüche wegen Zahlungsverzuges bleibt der ADGI vorbehalten.`,
    ]
  },
  {
    title: "19.   Rechte bei Sachmängeln",
    para: [
      `ADGI gewährleistet, dass Anamnesis® die in der zugehörigen Produktbeschreibung beschriebenen Funktionen erfüllt. Erfüllt die Anamnesis® die vorstehende Vereinbarung nicht, kann die Kunde zunächst verlangen, dass ADGI die vereinbarten Funktionen von Anamnesis® wiederherstellen. Das gesetzliche Recht auf Minderung der Vergütung bleibt unberührt.`,
      `Sollte es der ADGI nicht gelingen, die Funktionen Anamnesis® wiederherzustellen, ist die Kunde zur außerordentlichen fristlosen Kündigung berechtigt, vorausgesetzt, die Kunde hat ADGI vorher schriftlich eine angemessene Frist zur Abhilfe gesetzt, und diese angemessene Frist ist erfolglos verstrichen.`,
      `Die verschuldensunabhängige Haftung für bereits bei Vertragsabschluss vorhandene Mängel wird ausdrücklich ausgeschlossen.`,
    ]
  },
  {
    title: "20.   Übrige Mängelhaftung",
    para: [
      `Auf die Sachmängelhaftung für Anamnesis® finden die vorstehenden Rechte bei Sachmängeln Anwendung. Für alle übrigen Fälle von Sach- und Rechtsmängeln gelten die nachfolgenden Bestimmungen.`,
      `ADGI gewährleistet, dass die vertragsgegenständlichen Leistungen nicht mit Sach- oder Rechtsmängeln behaftet sind. Die Kunde muss Sach- und Rechtsmängel unverzüglich wenigstens in Textform melden.`,
      `Liegt ein Sach- oder Rechtsmangel vor, werden wir nach eigener Wahl Nacherfüllung durch Beseitigung des Mangels oder durch Gebrauchsüberlassung einer rechtsmängelfreien Leistung bzw. Lieferung einer mangelfreien Sache vornehmen. Sie gewähren uns zur Durchführung der Nacherfüllung eine angemessene Frist.`,
      `Gelingt es uns innerhalb der von auftraggebender Person gesetzten angemessenen Frist nicht, einen Sach- oder Rechtsmangel zu beseitigen, so sind die Kunde berechtigt, uns eine angemessene Nachfrist mit der Androhung zu setzen, nach Ablauf dieser Nachfrist die Abonnementgebühr zu mindern, den Vertrag fristlos zu kündigen. Ein Anspruch auf Herausgabe des Quellcodes von Anamnesis® besteht jedoch nicht.`,
      `Das Recht auf Rücktritt vom Vertrag ist ausgeschlossen. Es wird durch das Recht zur fristlosen Kündigung ersetzt.`,
      `Mit Ausnahme von Schadens- und Aufwendungsersatzansprüchen nach Maßgabe der in diesen AGB vereinbarten Haftungsregelungen sind die vorstehend vereinbarten Mängelansprüche abschließend.`,
    ]
  },
  {
    title: "21.   Unterstützungspflicht, Verjährung",
    para: [
      `Auftraggebende Person muss ADGI unverzüglich über aufgetretene Sach- oder Rechtsmängel unterrichten. Des Weiteren hat auftraggebende Person uns unentgeltlich im Rahmen des Zumutbaren bei der Eingrenzung und Beseitigung der Mängel zu unterstützen, insbesondere auf unseren Wunsch die dem Kunden zur Verfügung stehenden zweckdienlichen Informationen zu überlassen.`,
      `Die Verjährungsfrist für Sach- und Rechtsmängel beträgt ein (1) Jahr. Abweichend von den vorstehenden Regelungen findet die gesetzliche Verjährungsfrist Anwendung, wenn ADGI einen Mangel arglistig verschwiegen oder eine Beschaffenheitsgarantie übernommen oder Vorsatz oder grobe Fahrlässigkeit zu vertreten hat.`,
    ]
  },
  {
    title: "22.   Haftung",
    para: [
      `Unter Vorbehalt zwingender gesetzlicher Bestimmungen, schliesst ADGI GmbH jegliche`,
      `Haftung unter diesem Vertrag für Schäden oder Gewährleistung aus. Die Haftungsbeschränkung gilt auch für allfällige Hilfspersonen von ADGI GmbH.`,
      `Unter Vorbehalt zwingender gesetzlicher Bestimmungen, haften ADGI GmbH oder ihre`,
      `Hilfspersonen unter keinen Umständen für Folgendes, selbst wenn sie informiert`,
      `wurden, dass dies eintreten könnte:`,
      `(i) Datenverlust oder -beschädigung;`,
      `(ii) konkrete, beiläufig entstehende, indirekte oder Folgeschäden; oder`,
      `(iii) Gewinn-, Geschäfts-, Umsatz-, Geschäftswerteinbussen oder Verlust erwarteter Einsparungen.`,
      `Weitergehende Haftungsansprüche auf Schaden- oder Aufwendungsersatz sind, gleich aus welchem Rechtsgrund, ausgeschlossen. Dies gilt insbesondere für die Haftung ohne Verschulden.`,
    ]
  },
  {
    title: "23.   Datenschutz",
    para: [
      `Personenbezogene Daten wird ADGI nur für vertraglich vereinbarte Zwecke im Rahmen des Vertragsverhältnisses oder aufgrund anderer schriftlicher Weisungen von auftraggebender Person und nur unter Einhaltung der datenschutzrechtlichen Bestimmungen verarbeiten (https://www.anamnesis.ch/privacy).`,
    ]
  },
  {
    title: "24.   Anwendbares Recht, Erfüllungsort, Gerichtsstand",
    para: [
      `Dieser Vertrag unterliegt Schweizerischem Recht ohne Berücksichtigung des Internationalen Privatrechts. Das Übereinkommen der Vereinten Nationen über Verträge über den internationalen Warenkauf vom 11. April 1980 (SR 0.221.211.1) findet keine Anwendung.`,
      `Streitigkeiten, die aus oder im Zusammenhang mit diesem Vertrag entstehen, unterliegen ausschliesslich der Gerichtsbarkeit des zuständigen Gerichts am Sitz von ADGI GmbH.`,
    ]
  },
  {
    title: "25.   Service Levels",
    para: [
      `<span class="font-bold">ADGI gewährleistet auftraggebende Person eine Verfügbarkeit von Anamnesis® von 98 % pro Monat.</span> Regulär geplante Wartungs- und Update-Zeiten unsererseits gelten nicht als Ausfallzeiten bei der Berechnung der monatlichen Verfügbarkeit. Sie werden zwölf (12) Stunden pro Monat nicht übersteigen und werden montags bis freitags an Werktagen nicht zwischen 07.00 h und 19.00 h (MEZ / MESZ) liegen.`,
    ]
  },
  {
    title: "26.   Ihre Mitteilungspflichten",
    para: [
      `Wenn auftraggebende Person feststellt, dass Anamnesis® nicht verfügbar ist, ist er verpflichtet, ADGI darüber zu informieren. Die Information hat unverzüglich per E-Mail zu erfolgen, sobald auftraggebende Person das Verfügbarkeitsproblem erkennt. Auftraggebende Person sollte vor einer Meldung sicherstellen, dass seine eigene Infrastruktur für den Zugang zum Internet ordnungsgemäß funktioniert.`,
    ]
  },
  {
    title: "27.   Haftungs- und Gewährleistungsausschluss",
    para: [
      `Die Gewährleistung der Service Level findet keine Anwendung auf Performance-Probleme, (i) deren Ursache außerhalb unserer Einflusssphäre liegen, (ii) die auf Handlungen oder Unterlassungen durch die Kunde, der Nutzer oder irgendwelcher Dritter zurückzuführen sind, oder (iii) die auf technische oder sonstige Einrichtungen von auftraggebender Person oder Dritter (außerhalb unserer ausschließlichen Kontrolle) zurückzuführen sind. Wir haben insbesondere keinerlei Einfluss auf den Datenfluss innerhalb des Netzwerkes auftraggebende Person und seiner Komponenten sowie auf den Datenfluss bis zum bzw. ab dem Leistungsübergabepunkt für Anamnesis® oder anderer Teile des Internets. Dieser Datenfluss hängt wesentlich von der Leistungsfähigkeit der Internet-Services ab, die von Dritten erbracht und gesteuert werden. Die Handlungen oder Unterlassungen dieser Dritten können die Verbindung zum Internet (oder Teilen davon) zeitweise beeinträchtigen oder verhindern. Wir können das Ausbleiben solcher Ereignisse nicht garantieren, obwohl wir im Rahmen des wirtschaftlich Zumutbaren versuchen werden, alle Maßnahmen zu ergreifen, die geeignet erscheinen, um solche Ereignisse abzustellen oder zu vermeiden. Dementsprechend haften wir nicht für Schäden, die aus oder im Zusammenhang mit solchen Ereignissen entstehen, es sei denn, wir hätten sie zu vertreten.`,
    ]
  },
 ]
</script>

<template>
  <div class="mx-auto px-6 sm:container xl:max-w-[1248px]">
    <div
      class="p-10 md:p-8 rounded-lg shadow-cards bg-white max-md:mb-0 max-lg:mb-14 lg:mb-[72px] relative bottom-[58px] lg:bottom-24">
      <h2 class="font-semibold text-3xl leading-120 text-black">Allgemeine Geschäftsbedingungen (AGB)</h2>
      <div class="text-black" v-for="(obj, i) of DATA_TERM " :key="i">
        <h2 class="font-bold text-lg leading-133 text-black mt-8">{{obj.title}}</h2>
        <p class="text-lg text-black leading-133 mt-8" v-for="data , i of obj.para" v-html="data"></p>
      </div>
    </div>
  </div>
</template>