## [Programmierung und Design von WebApplications mit HTML5, CSS3 und JavaScript](https://lsf.uni-regensburg.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=148115&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) ##

SS2020 

Leitung: Dr. Friedrich Wünsch, Louis Ritzkowski

# Projektname #
Corona-Survival-Game
Eva Pulina, Matr.Nr. 1861525


### Beschreibung ###
einfaches Jump-n-Run mit aktuellem Bezug und leichter Gesellschaftskritik
zwei Modi:

    Healthy: Spieler_in muss 5 Klopapier-Rollen sammeln, den Viren ausweichen
    oder sich mit Masken schützen. Auch vor Mann ausweichen, der das
    Klopapier stiehlt

    Dark: es sollen möglichst viele Menschen mit dem Virus angesteckt werden

### Umsetzung ###


### Steuerung (Falls Spiel) ###
nur eine Funktion: jump mittels Click.
Neustart durch click auf screen oder menu.
shoot-Funktion (click auf "shoot") löst nur ein Husten aus und hat keinen Einfluss auf den Spielverlauf.


### Wichtige Klassen/Dateien ###
coronaJump.js ist der Kern,
Basis bilden gameEngine.js und gameTemplate.js (größtenteils 
übernommen oder inspiriert von gegebenem Code aus dem Kurs)




### Designentscheidungen ###
"trashy", bunt-giftgrün.
einfache Symbole, die dennoch erkannt werden (sollten).
(eigene) Sounds sollen Kollisionen mit Objekten
veranschaulichen und klares, lustiges aber nicht 
zu nerviges Feedback geben.
Klopapier-Skala (bzw. Personen-Skala im Dark-Mode) zeigt sofort an, was das Ziel des Spiels ist
und wie der aktuelle Bestand ist


### Anmerkung ###
erstes eigenes Programmier-Projekt (zuvor stets Gruppenarbeiten)
und erstes HTML / JS / CSS Projekt