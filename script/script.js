//liste des mots possibles
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
    "melon",
    "malin",
    "pourcent",
];
//let result stocke le mot venant de la liste.
let result ="";
//trying et max try sont les valeurs metant a jour le nombre d'échecs
let trying = 0;
let maxtry = 6;
//deviner stock tous les resultat déja tester
let deviner = [];
//bonmot est une varibale attendant d'etre rempli par le mot créer
let bonMot;
//prend un mot au hasard dans la liste
function randomWord() {
   result = wordslist[Math.floor(Math.random()*wordslist.length)];
}
//génere les boutons lettres dans le HTML 
function letterButton(){
    let boutton = 'abcdefghijklmnopqrstuvwxyz'.split('').map(lettre =>
        `<button class ="lettre" id ="` + lettre + `" onClick="verif('`+ lettre +`')">` + lettre + `</button>`
    ).join("");
        document.getElementById('buttonLetter').innerHTML = boutton;
};
//verifie la validiter de la lettre a chaque appuis des bouttons.
function verif(choice){

    if (deviner.indexOf(choice) === -1) {

        deviner.push(choice)
    }
    
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
//si une lettre est valide change les Underscores par la dites lettre
function status(){
    
    bonMot = result.split('').map(lettre => (deviner.indexOf(lettre) >=0 ? lettre :" _ ")).join('');
    document.getElementById('goodWord').innerHTML = bonMot;
    
};
//en cas d'échec, incrémente le compteur d'échec
function fail(){
    document.getElementById('numberFail').innerHTML = trying;
};
//en cas d'échec, met a jour l'image du pendu 
function pendu() {
    document.getElementById('pendu').src = 'assets/pendu tableau ' + trying + '.png';
};
//en cas de réussite lance la fonction pour verifier si la partie est gagné et y met fin.
function checkWin(){
    if (bonMot === result){ 
        document.getElementById("buttonLetter").innerHTML = "You Win!!!"  
    };
};
//même chose que checkWin mais return une défaite
function checkLose(){
    
    if (trying === maxtry){ 
        document.getElementById("buttonLetter").innerHTML = "Game Over"
        document.getElementById('goodWord').innerHTML = 'The answer was: ' + result;
  
    };
};
//le bouton reset remet les valeur de bases a 0
function reset(){

    trying = 0;
    deviner = [];
    document.getElementById('pendu').src = 'assets/pendu tableau 0.png';
  
    randomWord();
    status();
    fail();
    letterButton();

}
randomWord();
status();
pendu();
letterButton();

