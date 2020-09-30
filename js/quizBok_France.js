const form = document.querySelector(".form-quiz");
let tableauResultats = [];
const reponses = ["b", "d", "c", "c", "b"];
const emojis = ["✔️", "🌟", "👀", "😭", "👎"];
const titreResultat = doxument.querySelector(".resultats h2");
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
    tableauResultats = [];
})