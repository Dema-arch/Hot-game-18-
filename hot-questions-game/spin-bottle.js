// База завдань для Spin the Bottle
const bottleTasks = [
    "Поцілуй в губи",
    "Поцілуй в щоку",
    "Обійми міцно",
    "Зроби комплімент",
    "Станцюй разом",
    "Поцілуй в лоб",
    "Тримайтесь за руки хвилину",
    "Поцілуй в руку",
    "Зроби масаж плечей",
    "Розкажи щось особисте",
    "Поцілуй в носик",
    "Обійми ззаду",
    "Шепочи щось на вухо",
    "Поцілуй в обидві щоки",
    "Дивіться в очі 30 секунд",
    "Поцілуй в чоло",
    "Зроби селфі разом",
    "Розкажи жарт",
    "Поцілуй руку",
    "Обійми та покружляй"
];

// Глобальні змінні
let players = [];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    players = [];
    for (let i = 0; i < 4; i++) {
        const name = document.getElementById(`player${i}`).value.trim();
        if (name === '') {
            alert('Будь ласка, введіть всі імена!');
            return;
        }
        players.push(name);
    }
    
    document.getElementById('spinResult').classList.add('hidden');
    showScreen('gameScreen');
}

function spinBottle() {
    const bottle = document.getElementById('bottle');
    const spinBtn = document.getElementById('spinBtn');
    
    spinBtn.disabled = true;
    
    const randomRotation = Math.floor(Math.random() * 360) + 1800;
    bottle.style.transform = `rotate(${randomRotation}deg)`;
    
    setTimeout(() => {
        const finalAngle = randomRotation % 360;
        const playerIndex = Math.floor((finalAngle / 360) * players.length);
        const targetIndex = (playerIndex + Math.floor(players.length / 2)) % players.length;
        
        const spinner = players[playerIndex];
        const target = players[targetIndex];
        const task = bottleTasks[Math.floor(Math.random() * bottleTasks.length)];
        
        document.getElementById('spinner').textContent = spinner;
        document.getElementById('target').textContent = target;
        document.getElementById('spinTask').textContent = task;
        document.getElementById('spinResult').classList.remove('hidden');
        
        spinBtn.disabled = false;
    }, 3000);
}
