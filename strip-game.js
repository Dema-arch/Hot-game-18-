let currentLevel = 'soft';
let currentPlayer = 1;
let player1Clothes = 5;
let player2Clothes = 5;
let usedTasks = [];

const tasks = {
    soft: [
        "Поцілуй партнера в шию протягом 10 секунд",
        "Зроби масаж плечей партнеру 30 секунд",
        "Танцюй повільний танець з партнером",
        "Обійми партнера ззаду і пошепчи щось сексуальне",
        "Поцілуй партнера в вухо",
        "Погладь партнера по волоссю",
        "Зроби комплімент зовнішності партнера",
        "Поцілуй партнера в губи протягом 5 секунд",
        "Обійми партнера і притисни до себе",
        "Погладь партнера по спині",
        "Поцілуй партнера в щоку 5 разів",
        "Зроби масаж ніг партнеру",
        "Танцюй сексуальний танець для партнера",
        "Поцілуй партнера в лоб",
        "Обійми партнера за талію",
        "Погладь партнера по руках",
        "Поцілуй партнера в плече",
        "Зроби масаж рук партнеру",
        "Притисни партнера до стіни і поцілуй",
        "Погладь партнера по обличчю",
        "Поцілуй партнера в ключицю",
        "Обійми партнера і не відпускай 30 секунд",
        "Погладь партнера по животу",
        "Поцілуй партнера в підборіддя",
        "Зроби масаж спини партнеру",
        "Танцюй для партнера 20 секунд",
        "Поцілуй партнера в носик",
        "Обійми партнера за шию",
        "Погладь партнера по стегнах",
        "Поцілуй партнера в зап'ястя",
        "Зроби масаж шиї партнеру",
        "Притисни партнера до себе ззаду",
        "Погладь партнера по грудях",
        "Поцілуй партнера в живіт",
        "Обійми партнера за стегна",
        "Погладь партнера по сідницях",
        "Поцілуй партнера в стегно",
        "Зроби масаж сідниць партнеру",
        "Танцюй lap dance для партнера 15 секунд",
        "Поцілуй партнера в пупок"
    ],
    medium: [
        "Зніми одну річ одягу з партнера зубами",
        "Поцілуй партнера в груди через одяг",
        "Зроби масаж інтимних зон через одяг",
        "Танцюй стриптіз для партнера 30 секунд",
        "Поцілуй партнера між грудей",
        "Погладь партнера по інтимних місцях через одяг",
        "Зніми бюстгальтер партнерки однією рукою",
        "Поцілуй партнера в соски через одяг",
        "Зроби lap dance партнеру 30 секунд",
        "Погладь партнера по статевих органах через одяг",
        "Поцілуй партнера в пах через одяг",
        "Зніми трусики партнерки зубами",
        "Зроби масаж грудей партнерці",
        "Поцілуй партнера в сідниці",
        "Погладь партнера по голому тілу",
        "Зніми штани партнера зубами",
        "Поцілуй партнера в соски",
        "Зроби масаж статевих органів партнеру",
        "Танцюй голим торсом для партнера",
        "Погладь партнера по голих грудях",
        "Поцілуй партнера в інтимні місця",
        "Зніми всю білизну партнера",
        "Зроби масаж всього тіла партнеру",
        "Поцілуй партнера скрізь крім інтимних місць",
        "Погладь партнера по голих сідницях",
        "Зніми останню річ одягу з партнера",
        "Поцілуй партнера в статеві органи через білизну",
        "Зроби масаж інтимних зон партнеру",
        "Танцюй повністю голим для партнера",
        "Погладь партнера по статевих органах",
        "Поцілуй партнера в клітор/головку",
        "Зроби оральні ласки партнеру 10 секунд",
        "Полижи соски партнера",
        "Погладь партнера між ніг",
        "Поцілуй партнера в анус",
        "Зроби масаж простати/точки G",
        "Полижи статеві органи партнера",
        "Погладь партнера всередині",
        "Поцілуй партнера в промежину",
        "Зроби оральні ласки до оргазму"
    ],
    hard: [
        "Зроби мінет партнеру 30 секунд",
        "Зроби кунілінгус партнерці 30 секунд",
        "Полижи анус партнера",
        "Зроби глибокий мінет партнеру",
        "Полижи клітор партнерки",
        "Зроби масаж простати партнеру",
        "Полижи вагіну партнерки",
        "Зроби мінет з глибоким заковтуванням",
        "Полижи яйця партнера",
        "Зроби кунілінгус до оргазму",
        "Полижи головку члена партнера",
        "Зроби масаж точки G партнерці",
        "Полижи промежину партнера",
        "Зроби мінет до оргазму",
        "Полижи анус і статеві органи партнера",
        "Зроби подвійну стимуляцію партнерці",
        "Полижи все тіло партнера",
        "Зроби оральні ласки в позі 69",
        "Полижи партнера від ануса до клітора/головки",
        "Зроби римінг партнеру",
        "Полижи внутрішню частину стегон партнера",
        "Зроби оральні ласки з іграшкою",
        "Полижи соски і статеві органи партнера",
        "Зроби кунілінгус з пальцями всередині",
        "Полижи партнера в найчутливіших місцях",
        "Зроби мінет з масажем яєць",
        "Полижи клітор і вагіну партнерки",
        "Зроби оральні ласки з вібратором",
        "Полижи анус партнера з пальцем всередині",
        "Зроби подвійне проникнення язиком і пальцями",
        "Полижи партнера до множинного оргазму",
        "Зроби оральні ласки в душі",
        "Полижи партнера з льодом у роті",
        "Зроби кунілінгус з масажем грудей",
        "Полижи партнера з медом/шоколадом",
        "Зроби мінет з масажем простати",
        "Полижи партнера в позі догі-стайл",
        "Зроби оральні ласки з зав'язаними очима",
        "Полижи партнера до сквірту",
        "Зроби все, що партнер скаже протягом 2 хвилин"
    ]
};

function selectLevel(level) {
    currentLevel = level;
    showScreen('gameScreen');
    updateLevelIndicator();
    resetClothes();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function updateLevelIndicator() {
    const indicator = document.getElementById('levelIndicator');
    const levels = {
        soft: { emoji: '😊', name: 'М\'який рівень' },
        medium: { emoji: '🔥', name: 'Середній рівень' },
        hard: { emoji: '💋', name: 'Жорсткий рівень' }
    };
    indicator.textContent = `${levels[currentLevel].emoji} ${levels[currentLevel].name}`;
}

function resetClothes() {
    player1Clothes = 5;
    player2Clothes = 5;
    updateClothesDisplay();
}

function updateClothesDisplay() {
    document.getElementById('player1Clothes').textContent = `${player1Clothes} речей`;
    document.getElementById('player2Clothes').textContent = `${player2Clothes} речей`;
}

function rollDice() {
    const dice = document.getElementById('dice');
    const rollBtn = document.getElementById('rollBtn');
    
    rollBtn.disabled = true;
    
    // Анімація кубика
    let rolls = 0;
    const rollInterval = setInterval(() => {
        dice.textContent = Math.floor(Math.random() * 6) + 1;
        rolls++;
        
        if (rolls > 10) {
            clearInterval(rollInterval);
            const finalRoll = Math.floor(Math.random() * 6) + 1;
            dice.textContent = finalRoll;
            
            setTimeout(() => {
                showTask(finalRoll);
                rollBtn.disabled = false;
            }, 500);
        }
    }, 100);
}

function showTask(diceValue) {
    const taskCard = document.getElementById('taskCard');
    const taskText = document.getElementById('taskText');
    
    // Вибираємо випадкове завдання
    const availableTasks = tasks[currentLevel].filter((_, index) => !usedTasks.includes(index));
    
    if (availableTasks.length === 0) {
        usedTasks = [];
    }
    
    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    const task = availableTasks[randomIndex];
    const originalIndex = tasks[currentLevel].indexOf(task);
    usedTasks.push(originalIndex);
    
    taskText.innerHTML = `
        <div class="player-turn">Хід гравця ${currentPlayer}</div>
        <div class="dice-result">Випало: ${diceValue}</div>
        <div class="task-description">${task}</div>
    `;
    
    taskCard.style.display = 'block';
}

function completeTask() {
    document.getElementById('taskCard').style.display = 'none';
    switchPlayer();
}

function skipTask() {
    if (currentPlayer === 1) {
        player1Clothes--;
    } else {
        player2Clothes--;
    }
    
    updateClothesDisplay();
    document.getElementById('taskCard').style.display = 'none';
    
    if (player1Clothes === 0 || player2Clothes === 0) {
        endGame();
    } else {
        switchPlayer();
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function endGame() {
    const winner = player1Clothes === 0 ? 2 : 1;
    const loser = winner === 1 ? 2 : 1;
    
    document.getElementById('endMessage').innerHTML = `
        <div class="winner">🏆 Гравець ${winner} виграв!</div>
        <div class="loser">Гравець ${loser} повністю роздягнувся 😏</div>
        <div class="continue-hint">Тепер можете продовжити вечір... 🔥</div>
    `;
    
    showScreen('endScreen');
}

function resetGame() {
    currentPlayer = 1;
    usedTasks = [];
    document.getElementById('taskCard').style.display = 'none';
    document.getElementById('dice').textContent = '?';
    showScreen('levelScreen');
}