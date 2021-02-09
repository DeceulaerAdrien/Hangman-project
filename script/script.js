let wordslist = [
    "fleurs",
    "truc",
    "martien",
    "bruyant",
    "millionnaire",
    "comique",
    "fantaisie",
    "message",
    "entasser",
    "titre",
    "europe",
    "hiberner",
    "vacances",
    "frustration",
    "boutton",
    "pendu",
    "silicone",
    "code",
    "domaine",
    "internet",
    "chance",
    "woods",
    "becode",
    "javascript",
    "mois",
    "radio",
    "parcourir",
    "care",
    "point",
    "seconde",
    "jouer",
    "chaud",
    "demain",
    "profiter",
    "boulot",
    "vocalise",
    "democratie",
    "heure",
    "debutant",
];

let result ="";
let trying = 0;
let maxtry = 6;
let deviner = [];
let bonMot;

function randomWord() {
   result = wordslist[Math.floor(Math.random()*wordslist.length)];
}
function letterButton(){
    let boutton = 'abcdefghijklmnopqrstuvwxyz'.split('').map(lettre =>
        `<button class ="lettre" id ="` + lettre + `"onClick="verif('`+ lettre +`')">`+ lettre +`</button>`
    ).join("");
        document.getElementById('buttonLetter').innerHTML = boutton;
};
function verif(choice){

    deviner.indexOf(choice) === -1 ? deviner.push(choice) : null;
    document.getElementById(choice).setAttribute('disabled', true);

    if (result.indexOf(choice) >= 0){

        status();
        checkWin();
        document.getElementById(choice).style.backgroundColor = "green";
        console.log(deviner)

    } 
    else if(result.indexOf(choice) === -1) {
        trying ++;
        fail();
        pendu();
        checkLose();
        document.getElementById(choice).style.backgroundColor = "red";
        console.log(deviner)

    };
};
function status(){

    bonMot = result.split('').map(lettre => (deviner.indexOf(lettre) >=0 ? lettre :" _ ")).join('');
    document.getElementById('goodWord').innerHTML = bonMot;
    
};
function fail(){
    document.getElementById('numberFail').innerHTML = trying;
};
function pendu() {
    document.getElementById('pendu').src = 'assets/pendu ' + trying + '.png';
};
function checkWin(){
    if (bonMot === result){ 
        document.getElementById("buttonLetter").innerHTML = "You Win!!!"  
    };
};
function checkLose(){
    if (trying === maxtry){ 
        document.getElementById("buttonLetter").innerHTML = "Game Over"
        document.getElementById('goodWord').innerHTML = 'The answer was: ' + result;
  
    };
};
function reset(){

    trying = 0;
    deviner = [];
    document.getElementById('pendu').src = 'assets/pendu 0.png';
  
    randomWord();
    status();
    fail();
    letterButton();

}
randomWord();
status();
pendu();
letterButton();
console.log(deviner)

