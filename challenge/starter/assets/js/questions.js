//questions array

let questionsArray = [
    
{title: " What does setAttribute() do?", answers:["1. Refers to an element in html", "2. Fixes a problem in code", "3. Sets the style for an element", "4. Attributes a button to an element"], correctAnswer: 2},

{title: " What is a querySelector()", answers:["1. Displays all the elements queried", "2. Displays the first element queried", "3. Displays the last element queried", "4. Answers your question"], correctAnswer: 1},

{title: "Time intervals are represented by which unit?", answers:["1. Milliseconds", "2. Microseconds", "3. Megaseconds", "Nanoseconds"], correctAnswer: 0},

{title: "How do you deal with Event Bubbling?", answers:["1. You can't, impossible to correct", "2. Hope for the best", "3. Use stopProgagation()", "4. Burst the bubbles with a mouse"], correctAnswer: 2}

]


//Question 1

let questionsDiv = document.getElementById("questions");

//need to access questions title to insert title

questionsDiv.children[0].textContent = questionsArray[0].title

//need to add answers as buttons to choices div
let choicesDiv = document.getElementById("choices")

//for the answers create an ol and append to choices div

olEl = document.createElement("ol")
choicesOlEl = choicesDiv.appendChild(olEl);


buttonEl1 = document.createElement("button")
buttonEl2 = document.createElement("button")
buttonEl3 = document.createElement("button")
buttonEl4 = document.createElement("button")

//appends button to ol in choicesDiv

answerButtonEl1 = choicesOlEl.appendChild(buttonEl1)
answerButtonEl2 = choicesOlEl.appendChild(buttonEl2)
answerButtonEl3 = choicesOlEl.appendChild(buttonEl3)
answerButtonEl4 = choicesOlEl.appendChild(buttonEl4)

//inserts answers from Q1 to 
choice1 = answerButtonEl1.textContent = questionsArray[0].answers[0]
choice2 = answerButtonEl2.textContent = questionsArray[0].answers[1]
choice3 = answerButtonEl3.textContent = questionsArray[0].answers[2]
choice4 = answerButtonEl4.textContent = questionsArray[0].answers[3]

//when correct answer is chosen message is displayed to say "correct" in italics
//and when wrong the message to display is "wrong"


//function
let ansButton1 = document.querySelectorAll("button")[1]
    ansButton1.setAttribute("class", "wrong")

let ansButton2 = document.querySelectorAll("button")[2]
    ansButton2.setAttribute("class", "wrong")

let ansButton3 = document.querySelectorAll("button")[3]
    ansButton3.setAttribute("class", "correct")

let ansButton4 = document.querySelectorAll("button")[4]
    ansButton4.setAttribute("class", "wrong")


choicesContainer = document.querySelector(".choices")

choicesContainer.addEventListener("click", function(event){
let element = event.target



if (element.matches(".correct")) {

    displayMessage("Correct!")

}else {
    displayMessage("Wrong Answer!")
}



function displayMessage(string){
    let pTag = document.createElement("p")
    pTagEl = choicesDiv.appendChild(pTag)
pTagEl.setAttribute("style", "font-style: italic; font-weight: bold; font-family: cursive")
    pTagEl.textContent = string
}

})