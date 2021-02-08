
let wordslist = [
    "Fleurs",
    "Truc",
    "Martien",
    "Bruyant",
    "Millionnaire",
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
];
let mot ="";
let trying = 0;
let maxtry = 6;
let deviner = [];
let bonMot;

function randomWord() {
   return mot = wordslist[Math.floor(Math.random()*wordslist.length)];
}
function letterButton(){
    let boutton = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(lettre =>
        `<button class ="lettre" id ="` + lettre + `">`+ lettre +`</button>`
    ).join("");
        document.getElementById('buttonLetter').innerHTML = boutton;
}
function verif(choix){
    if (mot.indexOf(choix) >= 0){
        
    } else if(mot.indexOf(choix) === -1) {
        trying ++;
        pendu()
    }
};
function fail(){

}
function pendu() {
    document.getElementById('pendu').src = 'assets/pendu ' + trying + '.png';
  }
function checkWin(){

}
function checkLose(){
    
}
console.log(randomWord());
letterButton();
pendu();

