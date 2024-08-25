let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user-score");
const comPara = document.querySelector("#com-score");

const genComputerChoice = () => {
    let option = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx]
}
let drawGame = () => {
    console.log("draw match");
    msg.innerText = "Game was draw.Play again"
    msg.style.backgroundColor = "#081b31"
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        comPara.innerText = compScore

        msg.innerText = `You lost!${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice =", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true

        }
        else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, compChoice, userChoice);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choices was clicked", userChoice);
        playGame(userChoice)
    })
})