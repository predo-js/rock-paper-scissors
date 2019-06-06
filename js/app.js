const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');
let message = document.getElementById('message');
let userCounter = 0;
let userScore =  document.getElementById('user-score');
let computerCounter = 0;
let computerScore = document.getElementById('computer-score');

rock.addEventListener('click', () => { game('rock'); });
paper.addEventListener('click', () => { game('paper'); });
scissors.addEventListener('click', () => { game('scissors'); });
reset.addEventListener('click', () => {
    document.getElementById('your-choice').textContent = '';
    document.getElementById('computer-choice').textContent = '';
    userScore.textContent = '0';
    computerScore.textContent = '0';
    message.textContent = '';
});


function game(userChoice)
{
    //CARDS
    let yourChoiceDiv = document.getElementById('your-choice');
    let computerChoiceDiv = document.getElementById('computer-choice');

    if(userChoice === 'rock')
    {
        yourChoiceDiv.textContent = '';
        let rockIcon = document.createElement('i');
        rockIcon.setAttribute('class', 'fas fa-hand-rock');
        yourChoiceDiv.appendChild(rockIcon);
    }
    else if(userChoice === 'paper')
    {
        yourChoiceDiv.textContent = '';
        let paperIcon = document.createElement('i');
        paperIcon.setAttribute('class', 'fas fa-hand-paper');
        yourChoiceDiv.appendChild(paperIcon);
    }
    else if(userChoice === 'scissors')
    {
        yourChoiceDiv.textContent = '';
        let scissorsIcon = document.createElement('i');
        scissorsIcon.setAttribute('class', 'fas fa-hand-scissors');
        yourChoiceDiv.appendChild(scissorsIcon);
    }

    let computerChoice = Math.floor((Math.random() * 3) + 1);

    switch(computerChoice)
    {
        case 1:
            computerChoice = 'rock';
            break;

        case 2:
            computerChoice = 'paper';
            break;

        case 3:
            computerChoice = 'scissors';
            break;
    }

    if(computerChoice === 'rock')
    {
        computerChoiceDiv.textContent = '';
        let rockIcon = document.createElement('i');
        rockIcon.setAttribute('class', 'fas fa-hand-rock');
        computerChoiceDiv.appendChild(rockIcon);
    }
    else if(computerChoice === 'paper')
    {
        computerChoiceDiv.textContent = '';
        let paperIcon = document.createElement('i');
        paperIcon.setAttribute('class', 'fas fa-hand-paper');
        computerChoiceDiv.appendChild(paperIcon);
    }
    else if(computerChoice === 'scissors')
    {
        computerChoiceDiv.textContent = '';
        let scissorsIcon = document.createElement('i');
        scissorsIcon.setAttribute('class', 'fas fa-hand-scissors');
        computerChoiceDiv.appendChild(scissorsIcon);
    }

    switch(userChoice + computerChoice)
    {
        //WINS
        case 'rockscissors':
            userCounter++;
            userScore.textContent = userCounter;
            message.textContent = 'Rock beats Scissors. You win!';
            break;
        case 'paperrock':
            userCounter++;
            userScore.textContent = userCounter;
            message.textContent = 'Paper beats Rock. You win!';
            break;
        case 'scissorspaper':
            userCounter++;
            userScore.textContent = userCounter;
            message.textContent = 'Scissors beats paper. You win!';
            break;

        //LOSES
        case 'rockpaper':
            computerCounter++;
            computerScore.textContent = computerCounter;
            message.textContent = 'Paper beats Rock. You lose!';
            break;
        case 'paperscissors':
            computerCounter++;
            computerScore.textContent = computerCounter;
            message.textContent = 'Scissors beats paper. You lose!';
            break;
        case 'scissorsrock':
            computerCounter++;
            computerScore.textContent = computerCounter;
            message.textContent = 'Rock beats Scissors. You lose!';
            break;

        //DRAWS
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            message.textContent = 'Draw!';
    }
}