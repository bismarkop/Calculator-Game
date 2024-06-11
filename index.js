const body = document.querySelector("body");
const container = document.getElementById("container");
const calculator = document.getElementById("calculator");
const buttonDiv = document.getElementById("headerButtons");
const startCalcBtn = document.createElement("button");
const startGameBtn = document.createElement("button");
const ulList = document.getElementById("optionList");
const headerTextMain = document.querySelector(".headerTextMain");
const headerText = document.querySelector(".headerText");
ulList.appendChild(headerText);


// buttons
startCalcBtn.addEventListener("click", startCalculator);
startGameBtn.addEventListener("click", startGame);
startCalcBtn.textContent = "Calculator";
startGameBtn.textContent = "Start Game";
buttonDiv.appendChild(startCalcBtn);
buttonDiv.appendChild(startGameBtn);
buttonDiv.style.display = "flex";
buttonDiv.style.width = "100%";
buttonDiv.style.gap = "10px";
buttonDiv.style.alignItems = "center";
buttonDiv.style.justifyContent = "center";



function startCalculator() {
    calculator.style.visibility = "visible";
    headerTextMain.textContent = "Use the calculator to answer simple math problems.";
    const element = document.getElementById("optionList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

};

function startGame() {
    calculator.style.visibility = "visible";
    headerTextMain.textContent = "Test your focus!\nAnswer as many problems as you can in 60 seconds!"; // Why isn't the line break working?
    
    const element = document.getElementById("optionList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    generateMathProblems();

};

function generateMathProblems() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let ops = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]

    

    return prompt (`${num1} ${ops} ${num2}?`)
};