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

    document.getElementById("points-div").style.display="flex";
    let points_value = parseInt(document.getElementById("points-p").innerHTML);
    let repeat_value = parseInt(document.getElementById("repeat-p").innerHTML);
    document.getElementById("points-p").innerHTML = ` ${correct.length}\\${correct_questions.length}`;
    document.getElementById("repeat-p").innerHTML = repeat_value + 1;


});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}