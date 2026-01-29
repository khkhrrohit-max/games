let s1 = document.querySelector("#s1");

s1.onclick = () =>{
    console.log("you click on rock");
   
}

let s2 = document.querySelector("#s2");
s2.onclick = () =>{
    console.log("you click on paper");
    
}

let s3 = document.querySelector("#s3");

s3.onclick = () =>{
    console.log("you click on scissors");

    
}


s1.onclick = () => { console.log("rock");  };
s2.onclick = () => { console.log("paper"); };
s3.onclick = () => { console.log("scissors"); };

let playerScore = 0;
let computerScore = 0;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];  
}

function determineWinner(player, computer) {
    if (player === computer) return 'tie';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) return 'win';
    return 'lose';  
}

function play(choice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(choice, computerChoice);
    
    let message = '';
    if (result === 'win') {
        playerScore++;
        message = `You win! (${choice} beats ${computerChoice})`;
        btn1.textContent = `YOU ${playerScore}`;
    } else if (result === 'lose') {
        computerScore++;
        message = `You lose! (${computerChoice} beats ${choice})`;
        btn2.textContent = `COMPUTER ${computerScore}`;
    } else {
        message = `Tie! Both chose ${choice}`;
    }
    
    msg.textContent = message;
    
    console.log(`Player: ${choice}, Computer: ${computerChoice}, Result: ${result}`);
}


s1.onclick = () => play('rock');
s2.onclick = () => play('paper');
s3.onclick = () => play('scissors');

let b = document.querySelector(".sb");  
b.onclick = () => {
    alert("Button clicked!");  

};
