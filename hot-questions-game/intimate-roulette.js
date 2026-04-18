// 100 завдань з таймером для Інтимної Рулетки
const rouletteChallenges = [
    { task: "Мінет протягом всього таймера", duration: 180 },
    { task: "Куні до оргазму", duration: 300 },
    { task: "Мастурбація партнера", duration: 120 },
    { task: "Пристрасні поцілунки", duration: 60 },
    { task: "Масаж інтимної зони", duration: 180 },
    { task: "Облизування тіла партнера", duration: 120 },
    { task: "Стриптиз повільний", duration: 90 },
    { task: "Горловий мінет", duration: 120 },
    { task: "Лизання дупи", duration: 180 },
    { task: "Пальцювання піхви/дупи", duration: 150 },
    { task: "Масаж грудей/члена", duration: 120 },
    { task: "Поцілунки по всьому тілу", duration: 180 },
    { task: "Мастурбація перед партнером", duration: 120 },
    { task: "Lap dance голим/голою", duration: 90 },
    { task: "Облизування сосків", duration: 120 },
    { task: "Римінг глибокий", duration: 180 },
    { task: "Мінет з глибоким горлом", duration: 150 },
    { task: "Куні з пальцюванням", duration: 240 },
    { task: "Масаж простати", duration: 180 },
    { task: "Поцілунки інтимної зони", duration: 120 },
    { task: "Мастурбація члена двома руками", duration: 120 },
    { task: "Облизування від шиї до стегон", duration: 180 },
    { task: "Стриптиз з масажем", duration: 150 },
    { task: "Мінет повільний", duration: 240 },
    { task: "Лизання клітора", duration: 180 },
    { task: "Пальцювання G-точки", duration: 150 },
    { task: "Масаж дупи з поцілунками", duration: 120 },
    { task: "Поцілунки та кусання", duration: 90 },
    { task: "Мастурбація до оргазму", duration: 180 },
    { task: "Lap dance з роздяганням", duration: 120 },
    { task: "Облизування вух та шиї", duration: 90 },
    { task: "Римінг з мастурбацією", duration: 180 },
    { task: "Мінет з облизуванням яєць", duration: 180 },
    { task: "Куні глибоке", duration: 240 },
    { task: "Масаж всього тіла голим/голою", duration: 300 },
    { task: "Поцілунки стегон та дупи", duration: 120 },
    { task: "Мастурбація партнера повільно", duration: 180 },
    { task: "Облизування живота та грудей", duration: 120 },
    { task: "Стриптиз сексуальний", duration: 90 },
    { task: "Мінет швидкий", duration: 120 },
    { task: "Лизання піхви та дупи", duration: 240 },
    { task: "Пальцювання дупи", duration: 150 },
    { task: "Масаж інтимної зони язиком", duration: 180 },
    { task: "Поцілунки по всьому тілу довго", duration: 240 },
    { task: "Мастурбація себе", duration: 150 },
    { task: "Lap dance на партнері", duration: 90 },
    { task: "Облизування сосків довго", duration: 150 },
    { task: "Римінг глибокий довго", duration: 240 },
    { task: "Мінет до кінця", duration: 180 },
    { task: "Куні до сквірту", duration: 300 },
    { task: "Масаж члена/піхви ротом", duration: 180 },
    { task: "Поцілунки інтимної зони довго", duration: 150 },
    { task: "Мастурбація члена швидко", duration: 90 },
    { task: "Облизування всього тіла", duration: 240 },
    { task: "Стриптиз з lap dance", duration: 120 },
    { task: "Мінет глибокий", duration: 150 },
    { task: "Лизання клітора швидко", duration: 120 },
    { task: "Пальцювання піхви та дупи", duration: 180 },
    { task: "Масаж дупи язиком", duration: 180 },
    { task: "Поцілунки та облизування", duration: 120 },
    { task: "Мастурбація до кінця", duration: 180 },
    { task: "Lap dance голим/голою довго", duration: 120 },
    { task: "Облизування вух, шиї та грудей", duration: 150 },
    { task: "Римінг з пальцюванням", duration: 180 },
    { task: "Мінет з мастурбацією яєць", duration: 180 },
    { task: "Куні з пальцюванням дупи", duration: 240 },
    { task: "Масаж простати язиком", duration: 180 },
    { task: "Поцілунки від шиї до інтимної зони", duration: 180 },
    { task: "Мастурбація партнера швидко", duration: 120 },
    { task: "Облизування грудей та живота", duration: 120 },
    { task: "Стриптиз повільний сексуальний", duration: 120 },
    { task: "Мінет повільний глибокий", duration: 240 },
    { task: "Лизання піхви глибоко", duration: 240 },
    { task: "Пальцювання G-точки швидко", duration: 150 },
    { task: "Масаж інтимної зони руками та ротом", duration: 180 },
    { task: "Поцілунки скрізь", duration: 240 },
    { task: "Мастурбація себе до оргазму", duration: 180 },
    { task: "Lap dance з поцілунками", duration: 120 },
    { task: "Облизування сосків та стегон", duration: 150 },
    { task: "Римінг глибокий з мастурбацією", duration: 240 },
    { task: "Мінет горловий до кінця", duration: 180 },
    { task: "Куні до оргазму довго", duration: 300 },
    { task: "Масаж всього тіла з поцілунками", duration: 300 },
    { task: "Поцілунки інтимної зони глибоко", duration: 180 },
    { task: "Мастурбація члена до кінця", duration: 150 },
    { task: "Облизування від голови до ніг", duration: 240 },
    { task: "Стриптиз з масажем та поцілунками", duration: 180 },
    { task: "Мінет швидкий до кінця", duration: 150 },
    { task: "Лизання клітора до оргазму", duration: 240 },
    { task: "Пальцювання дупи глибоко", duration: 180 },
    { task: "Масаж дупи язиком довго", duration: 240 },
    { task: "Поцілунки та облизування скрізь", duration: 240 },
    { task: "Мастурбація партнера до оргазму", duration: 180 },
    { task: "Lap dance голим/голою з поцілунками", duration: 150 },
    { task: "Облизування всього тіла довго", duration: 300 },
    { task: "Римінг та пальцювання разом", duration: 240 },
    { task: "Мінет глибокий довго", duration: 240 },
    { task: "Куні з пальцюванням обох дірок", duration: 300 }
];

// Глобальні змінні
let player1Name = '';
let player2Name = '';
let currentChallengeIndex = 0;
let shuffledChallenges = [];
let timerInterval = null;
let timeRemaining = 0;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    player1Name = document.getElementById('player0').value.trim();
    player2Name = document.getElementById('player1').value.trim();
    
    if (player1Name === '' || player2Name === '') {
        alert('Будь ласка, введіть обidва імені!');
        return;
    }
    
    currentChallengeIndex = 0;
    shuffledChallenges = shuffleArray([...rouletteChallenges]);
    
    document.getElementById('totalChallenges').textContent = shuffledChallenges.length;
    
    showScreen('gameScreen');
    displayChallenge();
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function displayChallenge() {
    if (currentChallengeIndex >= shuffledChallenges.length) {
        showScreen('endScreen');
        return;
    }
    
    const challenge = shuffledChallenges[currentChallengeIndex];
    
    document.getElementById('challengeText').textContent = challenge.task;
    document.getElementById('currentChallenge').textContent = currentChallengeIndex + 1;
    
    timeRemaining = challenge.duration;
    updateTimerDisplay();
    
    const progress = ((currentChallengeIndex + 1) / shuffledChallenges.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('startTimer').style.display = 'inline-block';
    document.getElementById('nextChallenge').style.display = 'none';
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    document.getElementById('startTimer').style.display = 'none';
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            document.getElementById('nextChallenge').style.display = 'inline-block';
        }
    }, 1000);
}

function nextChallenge() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    currentChallengeIndex++;
    displayChallenge();
}
