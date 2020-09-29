/* MENU BURGER */
let boutonBurger = document.querySelector(".boutonBurger");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let menuBurger = document.querySelector(".menuBurger");
let elts = document.querySelectorAll(".elt");

function toggleMenu() {
    menuBurger.classList.toggle("menuBurgerOpen");
    span1.classList.toggle("span1Open");
    span2.classList.toggle("span2Open");
    span3.classList.toggle("span3Open");
}

boutonBurger.addEventListener("click", toggleMenu);

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener("click", toggleMenu);
}

/* QUESTIONS */
let question1 = {
    question: "Combien y'a t-il d'habitants en France (environ) ?",
    reponse1: "57 Millions",
    reponse2: "67 Millions",
    reponse3: "77 Millions",
    reponse4: "87 Millions",
    bonneReponse: "67 Millions"
};

let question2 = {
    question: "Quel président ne fait pas partie de la cinquième république ?",
    reponse1: "Alain Poher",
    reponse2: "François Mitterand",
    reponse3: "François Hollande",
    reponse4: "René Coty",
    bonneReponse: "René Coty"
};

let question3 = {
    question: "À quel département correspond le code 41 ?",
    reponse1: "Jura",
    reponse2: "Landes",
    reponse3: "Loire-et-Cher",
    reponse4: "Loire",
    bonneReponse: "Loire-et-Cher"
};

let question4 = {
    question: "À quel peintre français doit-on le tableau \"Le radeau de la Méduse\" ?",
    reponse1: "Claude Monet",
    reponse2: "Paul Cezanne",
    reponse3: "Jean Louis Théodore Géricault",
    reponse4: "Jean Baptiste Corot",
    bonneReponse: "Jean Louis Théodore Géricault"
};

let question5 = {
    question: "Quel est le plus long fleuve français ?",
    reponse1: "Le Rhône",
    reponse2: "La Loire",
    reponse3: "La Seine",
    reponse4: "L' Odet",
    bonneReponse: "La Loire"
};