var question_count = 3;
var correct_questions = ["deutschen", "Berechenbarkeitsmodell", "britischen"]

document.getElementById("question-form").addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden des Formulars
    
    // Werte der Radio-Buttons überprüfen
    // var wert = document.querySelector('input[name="1"]:checked').value;
    // alert("Sie haben " + wert + " ausgewählt.");

    var correct = [];
    var wrong = [];

    for (var i = 1;i<=question_count;i++) {
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

    if (correct.length == question_count) {
        alert("All answers are correct");
    }
    else {
        var w = wrong.join(", ")
        var c = correct.join(", ")
        alert("The answers for "+c+" are correct, but the answers for "+w+" are wrong.");
    }

});