const body = document.querySelector("body");
const container = document.getElementById("container");
const calculator = document.getElementById("calculator");
const buttonDiv = document.getElementById("headerButtons");
const startCalcBtn = document.createElement("button");
const startGameBtn = document.createElement("button");
const ulList = document.getElementById("optionList");
const headerTextMain = document.querySelector(".headerTextMain");
const headerText = document.querySelector(".headerText");
const scoreDisplay = document.querySelector("#score")
const problemEl = document.getElementById("problems")
const input = document.getElementById("input")
const ansResponse = document.getElementById("answerResponse")
ulList.appendChild(headerText);


// buttons
startCalcBtn.addEventListener("click", startCalculator);
startGameBtn.addEventListener("click", startGame);
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

};

function startGame() {
    let playing = true;
    let score = 0;
    let correctAnswer;
    score.textContent = `Score: ${score}`

    calculator.style.visibility = "visible";
    input.style.visibility = "visible";
    headerTextMain.textContent = "Test your focus!\nAnswer as many problems as you can in 60 seconds!"; // Why isn't the line break working?
    const element = document.getElementById("optionList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };

    // let timer = setTimeout(gameOver, 10000);
    generateMathProblems();

};

    // function gameOver() {
    //     playing = false;
    //     clearTimeout(timer)
    //     alert(`Game over! Your score: ${score}`)
    // };

    function checkAnswer() {
        let userAnswer = parseInt(input.value)
        if (userAnswer === correctAnswer) {
            ansResponse.textContent = "Correct!"
            score += 1
        }
        else {
            ansResponse.textContent = "Incorrect!"
        }
        setTimeout(() => {
            ansResponse.textContent = ""
            generateMathProblems()
        }, 800)
    }

    input.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            checkAnswer()
        }
    })

    function generateMathProblems() {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let ops = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]
        
        problemEl.textContent = `${num1} ${ops} ${num2}?`
        correctAnswer = eval(num1 + ops + num2)
        
        console.log(problemEl.textContent)
        console.log(correctAnswer)
        input.value = ''
        input.focus()
    };