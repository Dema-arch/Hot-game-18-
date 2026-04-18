// База слів для гри
const words = [
    // Тварини
    "Кіт", "Собака", "Слон", "Жираф", "Лев", "Тигр", "Ведмідь", "Вовк",
    "Лисиця", "Заєць", "Білка", "Їжак", "Миша", "Щур", "Хом'як", "Кріт",
    "Корова", "Кінь", "Свиня", "Вівця", "Коза", "Курка", "Качка", "Гуска",
    "Дельфін", "Кит", "Акула", "Риба", "Краб", "Восьминіг", "Медуза", "Морська зірка",
    "Орел", "Сова", "Ворона", "Горобець", "Голуб", "Папуга", "Пінгвін", "Страус",
    
    // Їжа та напої
    "Піца", "Бургер", "Паста", "Суші", "Салат", "Суп", "Стейк", "Курка",
    "Хліб", "Сир", "Масло", "Молоко", "Йогурт", "Морозиво", "Торт", "Печиво",
    "Яблуко", "Банан", "Апельсин", "Груша", "Виноград", "Полуниця", "Ананас", "Кавун",
    "Кава", "Чай", "Сік", "Вода", "Лимонад", "Пиво", "Вино", "Коктейль",
    
    // Предмети
    "Телефон", "Комп'ютер", "Телевізор", "Холодильник", "Пральна машина", "Мікрохвильовка", "Пилосос", "Праска",
    "Стіл", "Стілець", "Диван", "Ліжко", "Шафа", "Дзеркало", "Лампа", "Годинник",
    "Книга", "Ручка", "Олівець", "Зошит", "Папір", "Ножиці", "Клей", "Лінійка",
    "Окуляри", "Годинник", "Сумка", "Гаманець", "Ключі", "Парасолька", "Рюкзак", "Валіза",
    
    // Транспорт
    "Автомобіль", "Автобус", "Трамвай", "Тролейбус", "Метро", "Поїзд", "Літак", "Гелікоптер",
    "Велосипед", "Мотоцикл", "Скутер", "Самокат", "Корабель", "Яхта", "Човен", "Підводний човен",
    
    // Професії
    "Лікар", "Вчитель", "Поліцейський", "Пожежник", "Кухар", "Офіціант", "Продавець", "Касир",
    "Програміст", "Дизайнер", "Художник", "Музикант", "Співак", "Актор", "Режисер", "Письменник",
    "Будівельник", "Електрик", "Сантехнік", "Механік", "Водій", "Пілот", "Капітан", "Космонавт",
    
    // Місця
    "Школа", "Університет", "Лікарня", "Аптека", "Магазин", "Ресторан", "Кафе", "Бар",
    "Кінотеатр", "Театр", "Музей", "Бібліотека", "Парк", "Зоопарк", "Цирк", "Стадіон",
    "Пляж", "Гори", "Ліс", "Озеро", "Річка", "Море", "Океан", "Пустеля",
    
    // Спорт
    "Футбол", "Баскетбол", "Волейбол", "Теніс", "Хокей", "Бокс", "Карате", "Дзюдо",
    "Плавання", "Біг", "Стрибки", "Гімнастика", "Йога", "Фітнес", "Танці", "Шахи",
    
    // Природа
    "Дерево", "Квітка", "Трава", "Кущ", "Гриб", "Мох", "Лист", "Гілка",
    "Сонце", "Місяць", "Зірка", "Хмара", "Дощ", "Сніг", "Вітер", "Блискавка",
    "Весна", "Літо", "Осінь", "Зима", "Ранок", "День", "Вечір", "Ніч",
    
    // Емоції та почуття
    "Радість", "Сум", "Гнів", "Страх", "Любов", "Ненависть", "Щастя", "Горе",
    "Сміх", "Плач", "Посмішка", "Сльози", "Обійми", "Поцілунок", "Дружба", "Кохання",
    
    // Хобі та розваги
    "Читання", "Малювання", "Співи", "Танці", "Гра", "Кіно", "Музика", "Подорожі",
    "Фотографія", "Кулінарія", "Садівництво", "Риболовля", "Полювання", "Колекціонування", "Рукоділля", "В'язання"
];

// Глобальні змінні
let players = [];
let scores = {};
let currentPlayerIndex = 0;
let currentRound = 0;
let totalRounds = 10;
let usedWords = [];
let currentWord = '';

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    players = [];
    for (let i = 0; i < 6; i++) {
        const name = document.getElementById(`player${i}`).value.trim();
        if (name !== '') {
            players.push(name);
        }
    }
    
    if (players.length < 3) {
        alert('Потрібно мінімум 3 гравці!');
        return;
    }
    
    // Ініціалізуємо рахунок
    scores = {};
    players.forEach(player => {
        scores[player] = 0;
    });
    
    currentPlayerIndex = 0;
    currentRound = 0;
    usedWords = [];
    totalRounds = players.length * 2; // Кожен гравець загадує 2 рази
    
    nextRound();
}

function nextRound() {
    if (currentRound >= totalRounds) {
        showResults();
        return;
    }
    
    currentRound++;
    currentPlayerIndex = (currentRound - 1) % players.length;
    
    // Вибираємо нове слово
    let word;
    do {
        word = words[Math.floor(Math.random() * words.length)];
    } while (usedWords.includes(word));
    
    usedWords.push(word);
    currentWord = word;
    
    document.getElementById('currentPlayerName').textContent = players[currentPlayerIndex];
    document.getElementById('wordText').textContent = word;
    showScreen('wordScreen');
}

function startRound() {
    document.getElementById('currentPlayer').textContent = players[currentPlayerIndex];
    document.getElementById('currentRound').textContent = currentRound;
    document.getElementById('totalRounds').textContent = totalRounds;
    showScreen('gameScreen');
}

function wordGuessed() {
    // Додаємо очко гравцю, який загадував
    scores[players[currentPlayerIndex]]++;
    nextRound();
}

function skipWord() {
    nextRound();
}

function showResults() {
    const list = document.getElementById('scoresList');
    list.innerHTML = '';
    
    // Сортуємо гравців за очками
    const sortedPlayers = players.sort((a, b) => scores[b] - scores[a]);
    
    sortedPlayers.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = 'score-item';
        
        let medal = '';
        if (index === 0) medal = '🥇';
        else if (index === 1) medal = '🥈';
        else if (index === 2) medal = '🥉';
        
        item.innerHTML = `
            <span class="score-position">${medal} ${index + 1}.</span>
            <span class="score-player">${player}</span>
            <span class="score-points">${scores[player]} очок</span>
        `;
        list.appendChild(item);
    });
    
    showScreen('resultsScreen');
}
