//pseudocode

//set time to 60 by accessing the time span

let timeEl = document.getElementById("time");

timeEl.textContent = 60 + " " + "seconds";

let timeLeft = 60;

//this adds 60 with seconds concatenated to timeEl
// timeEl.textContent = timeLeft + " " + "seconds";

//use setInterval to countdown from 60 per second


//pressing the start quiz button will activate set interval
let startButton = document.getElementById("start");

startButton.addEventListener("click", function(){
    
    hideStartScreen() 
    startQuestions()
    
    timeInterval = setInterval(function(){
        timeLeft--
        
        timeEl.textContent = timeLeft + " " + "seconds";
        
        if (timeLeft <= 0) {//this syntax ensures that even if numbers are negative, time = 0
            clearInterval(timeInterval);
            timeEl.textContent = 0
        }
    }, 1000)
    
})


//FUNCTIONS:

//creating a function to reveal the questions
function startQuestions() {

    let startQuiz = document.getElementById("questions");
    startQuiz.getAttribute("class");
    startQuiz.setAttribute("class", "start");

    //adds styling to the answers elements using CSS selectors
    let choicesStyling = document.getElementById("choices")
    choicesStyling.setAttribute("style", "position: absolute; left: 800px")
}


//hides the start-screen 
function hideStartScreen() {

    let startScreen = document.getElementById("start-screen")
    startScreen.getAttribute("class")
    startScreen.setAttribute("class", "hide")//this will change the class=start to hide in html
}
















//clicking the start quiz button
// let StartQuizTimer = document.getElementById("start");
// let timeEl = document.getElementById("time");

// //setting the timer to 60 s and couting down to zero 
//     timeLeft = 60


// StartQuizTimer.addEventListener("click", function() {
    
//     let countdown = setInterval(function(){
//         timeLeft--;
        
//         timeEl.textContent = timeLeft + "sec"; 
        
//         if(timeLeft <= 0) {//stops at zero

//             clearInterval(countdown)
//             timeEl.textContent = 0;
//             }
        
    
//     }, 1000)
//     console.log("button pressed");})

//create a function for questions - need to loop through the array of questions in javascript
//https://www.youtube.com/watch?v=g7gmL4Fadno


// function questions() {
// console.log(questions);
// }

// questions();


   //added extras - prevent time being affected by multiple presses of start quiz button 


    
    
    



    


   





















// element = refer to id = start: to get to this in js would need to use queryselector function
// */
// let startTimerandQuizEl = document.querySelector("#start");//selects the start quiz button

// //timer can be stored in id time which begins at 0
// //assign variable time to the time id using querySelector 
// let time = document.querySelector(".timer");

// time = 0;

// startQuizButton = startTimerandQuizEl.addEventListener("click", function(){

//     //hook into time variable for an active timer using setInterval:
//     time = setInterval(function () {
//         console.log("hello")//using console.log like this in the function starts the time and this counts in seconds

//         //need to change the txt 0 in the span of time id to reflect the timer. Will need to use querySelector and possible textContent
        
//     }, 1000);





// });

