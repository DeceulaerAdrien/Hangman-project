
let wordslist = [
/*     "Fleurs",
    "Truc",
    "Martien",
 */    "Bruyant",
/*     "Millionnaire",
    "Comique",
    "Fantaisie",
    "Message",
    "Entasser",
    "Titre",
    "Europe",
    "Hiberner",
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
    "Becode",
    "JavaScript",
    "mois",
    "radio",
    "parcourir",
    "care",
    "point",
 */];
let mot ="";
let trying = 0;
let maxtry = 6;
let deviner = [];
let bonMot;

function randomWord() {
   mot = wordslist[Math.floor(Math.random()*wordslist.length)];
}
function letterButton(){
    let boutton = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(lettre =>
        `<button class ="lettre" id ="` + lettre + `"onClick="verif('`+ lettre +`')">`+ lettre +`</button>`
    ).join("");
        document.getElementById('buttonLetter').innerHTML = boutton;
};
function verif(choice){

    deviner.indexOf(choice) === -1 ? deviner.push(choice) : null;
    document.getElementById(choice).setAttribute('disabled', true);

    if (mot.indexOf(choice) >= 0){

        status();
        checkWin();
        document.getElementById(choice).style.backgroundColor = "green";

    } 
    else if(mot.indexOf(choice) === -1) {
        trying ++;
        fail();
        pendu();
        checkLose();
        document.getElementById(choice).style.backgroundColor = "red";

    };
};
function status(){

    bonMot = mot.split('').map(lettre => (deviner.indexOf(lettre) >=0 ? lettre :" _ ")).join('');
    document.getElementById('goodWord').innerHTML = bonMot;

};
function fail(){
    document.getElementById('numberFail').innerHTML = trying;
};
function pendu() {
    document.getElementById('pendu').src = 'assets/pendu ' + trying + '.png';

};
function checkWin(){
    if (status === mot){ 
        document.getElementById("buttonLetter").innerHTML = "You Win!!!"  
    };
};
function checkLose(){
    if (trying === maxtry){ 
        document.getElementById("buttonLetter").innerHTML = "Game Over"
        document.getElementById('goodWord').innerHTML = 'The answer was: ' + mot;
  
    };
};
randomWord();
status();
pendu();
letterButton();


