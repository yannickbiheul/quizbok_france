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
    bonneReponse: "b"
};

let question2 = {
    question: "Quel président ne fait pas partie de la cinquième république ?",
    reponse1: "Alain Poher",
    reponse2: "François Mitterand",
    reponse3: "François Hollande",
    reponse4: "René Coty",
    bonneReponse: "d"
};

let question3 = {
    question: "À quel département correspond le code 41 ?",
    reponse1: "Jura",
    reponse2: "Landes",
    reponse3: "Loire-et-Cher",
    reponse4: "Loire",
    bonneReponse: "c"
};

let question4 = {
    question: "À quel peintre français doit-on le tableau \"Le radeau de la Méduse\" ?",
    reponse1: "Claude Monet",
    reponse2: "Paul Cezanne",
    reponse3: "Jean Louis Théodore Géricault",
    reponse4: "Jean Baptiste Corot",
    bonneReponse: "c"
};

let question5 = {
    question: "Quel est le plus long fleuve français ?",
    reponse1: "Le Rhône",
    reponse2: "La Loire",
    reponse3: "La Seine",
    reponse4: "L' Odet",
    bonneReponse: "b"
};

let questions = [question1, question2, question3, question4, question5];
let scoreUser = 0;
let form = document.querySelector("form");
let consignes = document.querySelector("#consignes");
let boutonValid = document.querySelector("#boutonValid");
let boutonSuppr = document.querySelector("#boutonSuppr");


/* Bloc QUESTION 1 */

let laQuestion1 = document.querySelector(".laQuestion1");
let laReponse1Q1 = document.querySelector(".laReponse1Q1");
let laReponse2Q1 = document.querySelector(".laReponse2Q1");
let laReponse3Q1 = document.querySelector(".laReponse3Q1");
let laReponse4Q1 = document.querySelector(".laReponse4Q1");
let reponseJoueurQ1 = "";

laQuestion1.textContent = question1.question;
laReponse1Q1.textContent = question1.reponse1;
laReponse2Q1.textContent = question1.reponse2;
laReponse3Q1.textContent = question1.reponse3;
laReponse4Q1.textContent = question1.reponse4;

let input1Q1 = document.getElementById("57");
let input2Q1 = document.getElementById("67");
let input3Q1 = document.getElementById("77");
let input4Q1 = document.getElementById("87");
let inputsQ1 = [input1Q1, input2Q1, input3Q1, input4Q1];

for (let i = 0; i < inputsQ1.length; i++) {
    inputsQ1[i].addEventListener("input", function(e) {
        reponseJoueurQ1 = e.target.value;
        if (e.target.value === question1.bonneReponse) {
            console.log(e.target.value + " : Bonne réponse !");
            scoreUser++;
        } else {
            console.log(e.target.value + " : Mauvaise réponse !");
        }
    })
}

/* Bloc QUESTION 2 */

let laQuestion2 = document.querySelector(".laQuestion2");
let laReponse1Q2 = document.querySelector(".laReponse1Q2");
let laReponse2Q2 = document.querySelector(".laReponse2Q2");
let laReponse3Q2 = document.querySelector(".laReponse3Q2");
let laReponse4Q2 = document.querySelector(".laReponse4Q2");
let reponseJoueurQ2 = "";

laQuestion2.textContent = question2.question;
laReponse1Q2.textContent = question2.reponse1;
laReponse2Q2.textContent = question2.reponse2;
laReponse3Q2.textContent = question2.reponse3;
laReponse4Q2.textContent = question2.reponse4;

let input1Q2 = document.getElementById("poher");
let input2Q2 = document.getElementById("mitterand");
let input3Q2 = document.getElementById("hollande");
let input4Q2 = document.getElementById("coty");
let inputsQ2 = [input1Q2, input2Q2, input3Q2, input4Q2];

for (let i = 0; i < inputsQ2.length; i++) {
    inputsQ2[i].addEventListener("input", function (e) {
        reponseJoueurQ2 = e.target.value;
        if (e.target.value === question2.bonneReponse) {
            console.log(e.target.value + " : Bonne réponse !");
            scoreUser++;
        } else {
            console.log(e.target.value + " : Mauvaise réponse !");
        }
    })
}

/* Bloc QUESTION 3 */

let laQuestion3 = document.querySelector(".laQuestion3");
let laReponse1Q3 = document.querySelector(".laReponse1Q3");
let laReponse2Q3 = document.querySelector(".laReponse2Q3");
let laReponse3Q3 = document.querySelector(".laReponse3Q3");
let laReponse4Q3 = document.querySelector(".laReponse4Q3");
let reponseJoueurQ3 = "";

laQuestion3.textContent = question3.question;
laReponse1Q3.textContent = question3.reponse1;
laReponse2Q3.textContent = question3.reponse2;
laReponse3Q3.textContent = question3.reponse3;
laReponse4Q3.textContent = question3.reponse4;

let input1Q3 = document.getElementById("jura");
let input2Q3 = document.getElementById("landes");
let input3Q3 = document.getElementById("loireCher");
let input4Q3 = document.getElementById("loire");
let inputsQ3 = [input1Q3, input2Q3, input3Q3, input4Q3];

for (let i = 0; i < inputsQ3.length; i++) {
    inputsQ3[i].addEventListener("input", function (e) {
        reponseJoueurQ3 = e.target.value;
        if (e.target.value === question3.bonneReponse) {
            console.log(e.target.value + " : Bonne réponse !");
            scoreUser++;
        } else {
            console.log(e.target.value + " : Mauvaise réponse !");
        }
    })
}

/* Bloc QUESTION 4 */

let laQuestion4 = document.querySelector(".laQuestion4");
let laReponse1Q4 = document.querySelector(".laReponse1Q4");
let laReponse2Q4 = document.querySelector(".laReponse2Q4");
let laReponse3Q4 = document.querySelector(".laReponse3Q4");
let laReponse4Q4 = document.querySelector(".laReponse4Q4");
let reponseJoueurQ4 = "";

laQuestion4.textContent = question4.question;
laReponse1Q4.textContent = question4.reponse1;
laReponse2Q4.textContent = question4.reponse2;
laReponse3Q4.textContent = question4.reponse3;
laReponse4Q4.textContent = question4.reponse4;

let input1Q4 = document.getElementById("monet");
let input2Q4 = document.getElementById("cezanne");
let input3Q4 = document.getElementById("gericault");
let input4Q4 = document.getElementById("corot");
let inputsQ4 = [input1Q4, input2Q4, input3Q4, input4Q4];

for (let i = 0; i < inputsQ4.length; i++) {
    inputsQ4[i].addEventListener("input", function (e) {
        reponseJoueurQ4 = e.target.value;
        if (e.target.value === question4.bonneReponse) {
            console.log(e.target.value + " : Bonne réponse !");
            scoreUser++;
        } else {
            console.log(e.target.value + " : Mauvaise réponse !");
        }
    })
}

/* Bloc QUESTION 5 */

let laQuestion5 = document.querySelector(".laQuestion5");
let laReponse1Q5 = document.querySelector(".laReponse1Q5");
let laReponse2Q5 = document.querySelector(".laReponse2Q5");
let laReponse3Q5 = document.querySelector(".laReponse3Q5");
let laReponse4Q5 = document.querySelector(".laReponse4Q5");
let reponseJoueurQ5 = "";

laQuestion5.textContent = question5.question;
laReponse1Q5.textContent = question5.reponse1;
laReponse2Q5.textContent = question5.reponse2;
laReponse3Q5.textContent = question5.reponse3;
laReponse4Q5.textContent = question5.reponse4;

let input1Q5 = document.getElementById("rhone");
let input2Q5 = document.getElementById("laLoire");
let input3Q5 = document.getElementById("seine");
let input4Q5 = document.getElementById("odet");
let inputsQ5 = [input1Q5, input2Q5, input3Q5, input4Q5];

for (let i = 0; i < inputsQ5.length; i++) {
    inputsQ5[i].addEventListener("input", function (e) {
        reponseJoueurQ5 = e.target.value;
        if (e.target.value === question5.bonneReponse) {
            console.log(e.target.value + " : Bonne réponse !");
            scoreUser++;
        } else {
            console.log(e.target.value + " : Mauvaise réponse !");
        }
    })
}

boutonSuppr.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.reload();
});

function validForm(e) {
    e.preventDefault();
    form.removeEventListener("submit", validForm);
    if (scoreUser === 0) {
        consignes.style.color = "var(--red)";
        consignes.textContent = "Sérieux ?! " + scoreUser + " points ?!";
    } else if (scoreUser === 1) {
        consignes.style.color = "var(--red)";
        consignes.textContent = "Vous n'avez gagné que " + scoreUser + " point !";
    } else if (scoreUser < 3) {
        consignes.style.color = "var(--red)";
        consignes.textContent = "Vous n'avez gagné que " + scoreUser + " points !";
    } else {
        consignes.style.color = "var(--green)";
        consignes.textContent = "Vous avez gagné " + scoreUser + " points !";
    }
    boutonSuppr.addEventListener("click", function () {
        e.preventDefault();
        window.location.reload();
    });
}

form.addEventListener("submit", validForm);




