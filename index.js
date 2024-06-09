var corr_answ = `deutschen
Berechenbarkeitsmodell
künstlichen Intelligenz
Menschliches Denken
Bletchley Park
Homosexualität
Universalmaschine
1912
Vergiftung`

var correct_questions = corr_answ.split('\n');

document.getElementById("question-form").addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden des Formulars
    
    // Werte der Radio-Buttons überprüfen
    // var wert = document.querySelector('input[name="1"]:checked').value;
    // alert("Sie haben " + wert + " ausgewählt.");

    var correct = [];
    var wrong = [];

    for (var i = 1;i<=correct_questions.length;i++) {
        const words = ['input[name="', i, '"]:checked'];
        const sentence = words.join("");
        var wert = document.querySelector(sentence).value;
        if (wert == correct_questions[i-1]) {
            correct.push(i);
        }
        else {
            wrong.push(i);
        }
    }

    // if (correct.length == correct_questions.length) {
    //     alert("All answers are correct");
    // }
    // else {
    //     var w = wrong.join(", ")
    //     var c = correct.join(", ")
    //     alert("The answers for "+c+" are correct, but the answers for "+w+" are wrong.");
    // }

    for (let i=0 ; i < correct.length;i++) {
        var s = document.querySelectorAll(`input[name="${correct[i]}"]`);
        for (let x=0;x<s.length;x++) {
            if (s[x].value == correct_questions[correct[i]-1]) {
                s[x].setAttribute("class","input-radio green")
            }
            else {
                s[x].setAttribute("class","input-radio auto")
            }
        }
    }

    for (let i=0 ; i < wrong.length;i++) {
        var s = document.querySelectorAll(`input[name="${wrong[i]}"]`);
        for (let x=0;x<s.length;x++) {
            if (s[x].value == document.querySelector(`input[name="${wrong[i]}"]:checked`).value) {
                s[x].setAttribute("class","input-radio red")
            }
            else {
                s[x].setAttribute("class","input-radio auto")
            }
        }
    }

    if (correct.length == correct_questions.length) {
            alert("All answers are correct");
        }

});