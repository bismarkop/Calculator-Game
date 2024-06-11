const body = document.querySelector("body");
const container = document.getElementById("container");
const calculator = document.getElementById("calculator");
const buttonDiv = document.getElementById("buttons");
const startCalcBtn = document.createElement("button");
const startGameBtn = document.createElement("button");


// buttons
startCalcBtn.addEventListener("click", startCalculator);
startGameBtn.addEventListener("click", startGame);
startCalcBtn.textContent = "Calculator";
startGameBtn.textContent = "Start Game";
buttonDiv.appendChild(startCalcBtn);
buttonDiv.appendChild(startGameBtn);
buttonDiv.style.display = "flex";
buttonDiv.style.width = "100%";
buttonDiv.style.gap = "2px";
buttonDiv.style.alignItems = "center";
buttonDiv.style.justifyContent = "center";



function startCalculator() {
    calculator.style.visibility = "visible";
};

function startGame() {
    calculator.style.visibility = "visible";

};