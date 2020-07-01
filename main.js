const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const optionsBtn = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOptions = ['グー', 'パー', 'チョキ'];

        optionsBtn.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                playerHand.setAttribute('src', `./imgs/${this.textContent}.png`);
                computerHand.setAttribute('src', `./imgs/${computerChoice}.png`);
            });
        });
    };

    const newScore = () => {
        const pNewScore = document.querySelector('.player-score p');
        const cNewScore = document.querySelector('.computer-score p');

        pNewScore.textContent = playerScore;
        cNewScore.textContent = computerScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')
        if (playerChoice === computerChoice) {
            winner.textContent = '引き分け';
            return;
        }

        if (playerChoice === 'グー') {
            if (computerChoice === 'チョキ') {
                winner.textContent = '勝ち！'
                playerScore++;
                newScore();
                return;
            } else {
                winner.textContent = '負け…'
                computerScore++;
                newScore();
                return;
            }
        }
        
        if (playerChoice === 'パー') {
            if (computerChoice === 'チョキ') {
                winner.textContent = '負け…'
                computerScore++;
                newScore();
                return;
            } else {
                winner.textContent = '勝ち！'
                playerScore++;
                newScore();
                return;
            }
        }
        
        if (playerChoice === 'チョキ') {
            if (computerChoice === 'グー') {
                winner.textContent = '負け…'
                computerScore++;
                newScore();
                return;
            } else {
                winner.textContent = '勝ち！'
                playerScore++;
                newScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
}

game();