let colorButton = document.querySelector("#colorButton");
let color = false;
let resultButton = document.querySelector("#result");
let score = document.querySelector("#score");

document.body.style.backgroundColor = "#D7CDE5"
document.body.style.color = "#402468";

colorButton.addEventListener("click", () => {
    if (color === false) {
        document.body.style.backgroundColor = "#522F85";
        document.body.style.color = "#D7CDE5";
        color = true;
    } else {
        document.body.style.backgroundColor = "#D7CDE5";
        document.body.style.color = "#522F85";
        color = false;
    }
});

let correct = document.querySelectorAll("[value='true']");
console.log(correct);
let counter = 0;

resultButton.addEventListener("click", () => {
    let trueAnswers = "";
    correct.forEach((input) => {
        if (input.checked) {
            trueAnswers = input.value;
            console.log("Ett rätt svar");
            //score.textContent = trueAnswers;
            counter++;
        }
    });
    score.textContent = "Antal rätt: " + counter;
});


/*ATT GÖRA: 
- Skriva en fråga till fråga 6.
- Se till att resultat-knappen bara kan tryckas på en gång.
- Fixa fråga 7 + Räknas som ett poäng - hur??
- Färga score efter antal rätt
*/

/* resultButton.addEventListener("click", function(event) => {
    event.preventDefault();
    
    
    //console.log("Hej");
    // let trueOpt = document.getElementById("true1").value;
    // if (trueOpt === true) {
    //     console.log("Det funkar");
    // }
    // forEach
    
})
*/


// FRÅGA 7
let multiCorrect = [
{
    svar: "gul1",
    isCorrect: true
},
{
    svar: "grön1",
    isCorrect: false
},
{
    svar: "grön2",
    isCorrect: false
},
{
    svar: "grön3",
    isCorrect: false
},
{
    svar: "gul2",
    isCorrect: true
},
{
    svar: "grön4",
    isCorrect: false
}
]

let checkbox = document.querySelectorAll("input[type='checkbox']");
/*
resultButton.addEventListener("click", () => {
    let filtreraRättSvar = multiCorrect.filter((multi) => multi.isCorrect === true);

    //console.log(filtreraRättSvar)
    if (filtreraRättSvar.checked) {
        console.log("Funkar");
        let poäng = document.createElement("p");
        poäng.textContent = "1p";
        score.appendChild(poäng);
    }

    function correctCheckbox(){
        
    }

    /*
    checkbox.forEach((question)=> {
       if (checkbox.isCorrect == true){
          console.log("hej");
       } else {
           console.log("funkar inte");
       }
    })
    */
    
    /*
    if (checkbox.isCorrect == true){
        console.log("hej");
    } else {
        console.log("funkar inte");
    }
    
});
*/ 
