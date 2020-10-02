const form = document.querySelector(".form-quiz");
let tableauResultats = [];
const reponses = ["b", "d", "c", "c", "b"];
const emojis = ["✔️", "🌟", "👀", "😭", "👎"];
const titreResultat = document.querySelector("#titreResultat");
const aideResultat = document.querySelector("#aideResultat");
const noteResultat = document.querySelector("#noteResultat");
const toutesLesQuestions = document.querySelectorAll(".blocQuestion");
let verifTableau = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    // console.log(tableauResultats);
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
    // console.log(verifTableau);
    afficherResultats(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);
    switch(nbDeFautes) {
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️"
            aideResultat.innerText = ""
            noteResultat.innerText = "5/5"
            break;
        case 1:
            titreResultat.innerText = "🌟 Vous y êtes presque ! 🌟";
            aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = "4/5";
            break;
        case 2:
            titreResultat.innerText = "🌟 Encore un effort ! 👀";
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "3/5";
            break;
        case 3:
            titreResultat.innerText = "👀 Il reste quelques erreurs ! 😭";
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "2/5";
            break;
        case 4:
            titreResultat.innerText = "😭 Peux mieux faire ! 😭";
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "1/5";
            break;
        case 5:
            titreResultat.innerText = "👎 Ah ouais quand même ! 0 ! 👎";
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "0/5";
            break;
        default: 
            "Oups, cas inattendu !";
    }
}