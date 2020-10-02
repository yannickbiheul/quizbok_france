const form = document.querySelector(".form-quiz");
let tableauResultats = [];
const reponses = ["b", "d", "c", "c", "b"];
const emojis = ["✔️", "🌟", "👀", "😭", "👎"];
const titreResultat = document.querySelector(".resultats h2");
const texteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".blocQuestion");
let verifTableau = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {
    for (let a = 0; a < 5; a++) {
        if(tableauResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    console.log(verifTableau);
    verifTableau = [];
}