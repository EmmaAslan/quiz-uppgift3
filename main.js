let colorButton = document.querySelector("#colorButton");
let color = false;
let resultButton = document.querySelector("#result"); //Resultat-knappen
let score = document.querySelector("#score"); //Element för att skriva ut poängen

let frameOne = document.querySelector("#frameOne"); //Div för alla frågor plus knapp
let frameTwo = document.querySelector("#frameTwo"); //Div för totalpoängen 

frameOne.hidden = false;
frameTwo.hidden = true;

let resetButton = document.querySelector("#reset");

//Darkmode & lightmode
document.body.style.backgroundColor = "#D7CDE5"
document.body.style.color = "#402468";
score.style.textShadow = "2px 2px 5px #5A426E";
score.style.webkitTextStroke = "0.3px black";

colorButton.addEventListener("click", () => {
    if (color === false) {
        document.body.style.backgroundColor = "#522F85";
        document.body.style.color = "#D7CDE5";
        color = true;
        colorButton.innerHTML =`Change to lightmode <i class='fas fa-sun'></i>`; //Change to lightmode
        score.style.textShadow = "2px 2px 5px #402468";
    } else {
        document.body.style.backgroundColor = "#D7CDE5";
        document.body.style.color = "#522F85";
        color = false;
        colorButton.innerHTML =`Change to darkmode <i class="fas fa-moon"></i>`; //Change to darkmode
        score.style.textShadow = "2px 2px 5px #5A426E";
    }
});

//Skapa en counter för att sammanställa ett värde till "score"
let counter = 0;

//Frågor + knapp + färger
let correct = document.querySelectorAll("[value='true']");
let totalScore = document.querySelectorAll("h3") //Antalet frågor

resultButton.addEventListener("click", (e) => {
    e.preventDefault();
    let counter = 0;

    //Göm frågorna och visa endast resultatet
    if (frameOne.hidden === false) {
        console.log("Funkar detta?");
        frameOne.hidden = true;
        frameTwo.hidden = false;
    } 

    //För varje input med value=true ikryssat = lägg till en siffra till counter (ett poäng)
    correct.forEach((input) => {
        if (input.checked) {
            console.log("Ett rätt svar");
            counter++;  
        }
    });

    //Kolla alla checkboxarna, om alla utan värdet false är ikryssade - lägg till en siffra till counter (ett poäng)
    //Om en box med "false" är ikryssade - inget poäng
    //Om inte alla "true"-boxar är ikryssade - inget poäng
    if (document.getElementById("check1").checked && document.getElementById("check2").checked==false && document.getElementById("check3").checked==false && document.getElementById("check4").checked && document.getElementById("check5").checked && document.getElementById("check6").checked==false) {
        counter++;
    } 

    //Poängbox 
    score.textContent = "Antal rätt: " + counter + "/7 ";

    //Färga poängtext + lägga till ikon beroende på resultat
    //Alla rätt
    if (counter === totalScore.length) {
        score.style.color = "#35d700"; //Grön
        score.innerHTML += ` <i class="fas fa-star"></i>`;
    } 
    //Mer än 50% rätt men mindre än alla rätt
    else if (counter > totalScore.length * 0.5 && counter < totalScore.length){
        score.style.color = "#FFAA00"; //Orange
        score.innerHTML += ` <i class="fas fa-star-half-alt"></i>`;
    } 
    //Mindre än 50% rätt
    else {
        score.style.color = "#BE0000"; //Röd
        score.innerHTML += ` <i class="far fa-star"></i>`;
    }
}); 
    
