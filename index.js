const body = document.querySelector("body");
const container = document.getElementById("container");
const calculator = document.getElementById("calculator");
const buttonDiv = document.getElementById("headerButtons");
const startCalcBtn = document.createElement("button");
const startGameBtn = document.createElement("button");
startCalcBtn.setAttribute('id', 'calcBtn');
startGameBtn.setAttribute('id', 'startGameBtn');
const ulList = document.getElementById("optionList");
const headerTextMain = document.querySelector(".headerTextMain");
const headerText = document.querySelector(".headerText");
const scoreDisplay = document.querySelector("#score");
const problemEl = document.getElementById("problems");
const input = document.getElementById("input");
const ansResponse = document.getElementById("answerResponse");
ulList.appendChild(headerText);
let playing = false;


// Button styles and functions
startCalcBtn.addEventListener("click", startCalculator);
startGameBtn.addEventListener("click", startGame);
startGameBtn.addEventListener("click", function() {
    startGameBtn.textContent = "Stop Game";
});
startCalcBtn.textContent = "Calculator";
startGameBtn.textContent = "Start Game";
buttonDiv.appendChild(startCalcBtn);
buttonDiv.appendChild(startGameBtn);
container.appendChild(scoreDisplay)
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

    input.style.visibility = "hidden";
    problemEl.textContent = '';
    scoreDisplay.textContent = '';

};


function startGame() {
    playing = true;
    let score = 0;
    let correctAnswer;
    input.value = ''
    input.focus()

    scoreDisplay.textContent = `Score: ${score}`
    calculator.style.visibility = "visible";
    input.style.visibility = "visible";
    startGameBtn.removeEventListener("click", startGame)
    startGameBtn.addEventListener("click", gameOver);
    input.type = "number"

    headerTextMain.textContent = "Test your focus!\nAnswer as many problems as you can in 60 seconds!";
    
    
    const element = document.getElementById("optionList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };

    let timer = setTimeout(gameOver, 60000);
    generateMathProblems();
    flashingNumbers();


    function gameOver() {
        playing = false;
        clearTimeout(timer);
        alert(`Game over! Your score: ${score}`);
        scoreDisplay.style.alignItems = "center";
        scoreDisplay.innerHTML = `Score: ${score}<br>Press 'Start Game' to play again!`;
        input.style.visibility = "hidden";
        problemEl.textContent = '';
        startGameBtn.textContent = "Start Game";
        startGameBtn.style.visibility = "visible";
        startGameBtn.removeEventListener("click", gameOver)
        startGameBtn.addEventListener("click", startGame);
    };

    function checkAnswer() {
        let userAnswer = parseInt(input.value)
        if (userAnswer === correctAnswer) {
            ansResponse.style.color = "green";
            ansResponse.textContent = "Correct!";
            score += 1;
        }
        else {
            ansResponse.style.color = "red";
            ansResponse.textContent = "Incorrect!";
        }
        setTimeout(() => {
            ansResponse.textContent = "";
            generateMathProblems();
        }, 800);
    }

    input.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            checkAnswer();
        }
    });

    function generateMathProblems() {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let ops = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        
        problemEl.textContent = `${num1} ${ops} ${num2}?`;
        correctAnswer = eval(num1 + ops + num2);
        input.value = '';
        input.focus();
    };

    function flashingNumbers() {
        if (!playing) {
            return;
        }
        let flashNumber = document.createElement('div');
        flashNumber.classList.add('flash-number');
        flashNumber.style.top = `${Math.random() * 80}%`;
        flashNumber.style.left = `${Math.random() * 80}%`;
        flashNumber.textContent = Math.floor(Math.random() * 100);
        body.appendChild(flashNumber);
        flashNumber.style.display = 'block';
        setTimeout(() => {
            body.removeChild(flashNumber)
        }, 500)

        if (playing) {
            setTimeout(flashingNumbers, Math.random() * 1000 + 500)
        }
    }
};