let quiz = `Alan Turing entwickelte das Werkzeug „Bombe“, um die _________ Enigma-Nachrichten zu entschlüsseln.
russischen
deutschen
amerikanischen
britischen

Alan Turing ist berühmt für sein _________ , was eines der Fundamente der theoretischen Informatik ist.
Zahlenmodell
Teilbarkeitsmodell
Berechenbarkeitsmodell
Analysismodell

Alan Turing gilt als Vater der _________.
Datenbanken
künstlichen Intelligenz
Netzwerktechnik
Spieleentwicklung

Das „Turing-Test“ Konzept dient dazu, die Fähigkeit einer Maschine zu bewerten, _________ zu imitieren.
Menschliches Denken
Maschinelles Lernen
Datenverarbeitung
Computergrafik

Alan Turing arbeitete während des Zweiten Weltkriegs in _________.
Bletchley Park
Silicon Valley
CERN
MIT

Alan Turing wurde 1952 wegen _________ verurteilt.
Spionage
Hochverrat
Homosexualität
Diebstahl

Turing entwickelte das Konzept der „_________“, die als abstrakte Maschine zur Modellierung von Berechnungen dient.
Universalmaschine
Finite-Automaten
Von-Neumann-Architektur
Pascaline

In welchem Jahr wurde Alan Turing geboren?
1902
1912
1922
1932

Alan Turing starb 1954 durch _________.
Autounfall
Herzinfarkt
Vergiftung
Erschießung`


let lines = quiz.split('\n');

let questions_diff = [[]];

for (let i = 0;i<lines.length;i++) {
    var leng = questions_diff.length;
    if (lines[i] == "") questions_diff.push([]);
    else questions_diff[leng-1].push(lines[i]);
}

console.log(questions_diff)

document.getElementById("question-form").innerHTML += `<h1 id="title">Quiz</h1>
`


for (let i=0;i<questions_diff.length;i++) {
  document.getElementById("question-form").innerHTML += `<div class="question-div" id="question-${i+1}">
          <p class="quiz-question">${questions_diff[i][0]}</p>
          <label for="${questions_diff[i][1]}"><input type="radio" name=${i+1} class="input-radio auto" value="${questions_diff[i][1]}" checked>${questions_diff[i][1]}</label>
          <br>
          <label for="${questions_diff[i][2]}"><input type="radio" name=${i+1} class="input-radio auto" value="${questions_diff[i][2]}">${questions_diff[i][2]}</label>
          <br>
          <label for="${questions_diff[i][3]}"><input type="radio" name=${i+1} class="input-radio auto" value="${questions_diff[i][3]}">${questions_diff[i][3]}</label>
          <br>
          <label for="${questions_diff[i][4]}"><input type="radio" name=${i+1} class="input-radio auto" value="${questions_diff[i][4]}">${questions_diff[i][4]}</label>
          <br>
        </div>
        `
}

document.getElementById("question-form").innerHTML += `
<div>
  <button type="submit" id="submit">Submit</button>
</div>
`