let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let timerInterval = null;
let timeLeft = 30;

const actions = [
    "Поцілуй",
    "Полижи",
    "Масажуй",
    "Покусай",
    "Погладь",
    "Посмокчи"
];

const bodyParts = [
    "Шию",
    "Груди",
    "Соски",
    "Живіт",
    "Стегна",
    "Інтимні зони",
    "Сідниці",
    "Вуха",
    "Губи",
    "Спину"
];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showInstructions() {
    showScreen('instructionsScreen');
}

function startGame() {
    currentPlayer = 1;
    player1Score = 0;
    player2Score = 0;
    updateScores();
    showScreen('gameScreen');
    updatePlayerTurn();
}

function updatePlayerTurn() {
    document.getElementById('playerTurn').textContent = `Хід гравця ${currentPlayer}`;
}

function updateScores() {
    document.getElementById('player1Score').textContent = `${player1Score} очок`;
    document.getElementById('player2Score').textContent = `${player2Score} очок`;
}

function rollDice() {
    const actionDice = document.getElementById('actionDice');
    const bodyDice = document.getElementById('bodyDice');
    const rollBtn = document.getElementById('rollBtn');
    
    rollBtn.disabled = true;
    document.getElementById('resultCard').style.display = 'none';
    
    // Анімація кубиків
    let rolls = 0;
    const rollInterval = setInterval(() => {
        actionDice.textContent = actions[Math.floor(Math.random() * actions.length)];
        bodyDice.textContent = bodyParts[Math.floor(Math.random() * bodyParts.length)];
        rolls++;
        
        if (rolls > 15) {
            clearInterval(rollInterval);
            const finalAction = actions[Math.floor(Math.random() * actions.length)];
            const finalBody = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            
            actionDice.textContent = finalAction;
            bodyDice.textContent = finalBody;
            
            setTimeout(() => {
                showResult(finalAction, finalBody);
                rollBtn.disabled = false;
            }, 500);
        }
    }, 100);
}

function showResult(action, bodyPart) {
    document.getElementById('resultAction').textContent = action;
    document.getElementById('resultBody').textContent = bodyPart;
    document.getElementById('resultCombination').textContent = `${action} ${bodyPart}`;
    document.getElementById('resultCard').style.display = 'block';
    
    startTimer();
}

function startTimer() {
    stopTimer();
    timeLeft = 30;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft === 0) {
            stopTimer();
            alert('Час вийшов! Переходьте до наступного ходу.');
            completeTask();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    document.getElementById('timerValue').textContent = timeLeft;
}

function completeTask() {
    stopTimer();
    
    // Додаємо очко поточному гравцю
    if (currentPlayer === 1) {
        player1Score++;
    } else {
        player2Score++;
    }
    
    updateScores();
    
    // Міняємо гравця
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updatePlayerTurn();
    
    // Ховаємо результат
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('actionDice').textContent = '🎲';
    document.getElementById('bodyDice').textContent = '🎲';
}