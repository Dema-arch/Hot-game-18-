// База персонажів для гри
const characters = [
    // Історичні постаті
    "Наполеон Бонапарт", "Клеопатра", "Альберт Ейнштейн", "Леонардо да Вінчі",
    "Юлій Цезар", "Марія Кюрі", "Вінстон Черчілль", "Жанна д'Арк",
    
    // Сучасні знаменитості
    "Ілон Маск", "Біл Гейтс", "Стів Джобс", "Марк Цукерберг",
    "Опра Вінфрі", "Джефф Безос", "Тейлор Свіфт", "Леді Гага",
    
    // Актори та актриси
    "Леонардо ДіКапріо", "Джонні Депп", "Том Круз", "Бред Пітт",
    "Анджеліна Джолі", "Дженніфер Лоуренс", "Скарлетт Йоганссон", "Роберт Дауні мол.",
    
    // Музиканти
    "Майкл Джексон", "Елвіс Преслі", "Фредді Мерк'юрі", "Джон Леннон",
    "Мадонна", "Бейонсе", "Ріанна", "Ед Ширан",
    
    // Спортсмени
    "Кріштіану Роналду", "Ліонель Мессі", "Майкл Джордан", "Мухаммед Алі",
    "Серена Вільямс", "Усейн Болт", "Майк Тайсон", "Роджер Федерер",
    
    // Вигадані персонажі
    "Гаррі Поттер", "Шерлок Холмс", "Джеймс Бонд", "Бетмен",
    "Супермен", "Людина-павук", "Дарт Вейдер", "Йода",
    "Залізна людина", "Капітан Америка", "Тор", "Халк",
    
    // Мультяшні персонажі
    "Міккі Маус", "Дональд Дак", "Багз Банні", "Том і Джеррі",
    "Шрек", "Спанч Боб", "Гомер Сімпсон", "Пітер Гріффін",
    
    // Політики
    "Барак Обама", "Дональд Трамп", "Володимир Зеленський", "Ангела Меркель",
    "Маргарет Тетчер", "Джон Кеннеді", "Авраам Лінкольн", "Нельсон Мандела",
    
    // Письменники
    "Вільям Шекспір", "Джоан Роулінг", "Стівен Кінг", "Агата Крісті",
    "Ернест Хемінгуей", "Марк Твен", "Джордж Оруелл", "Тарас Шевченко",
    
    // Художники
    "Пабло Пікассо", "Вінсент ван Гог", "Сальвадор Далі", "Мікеланджело",
    "Рембрандт", "Клод Моне", "Фріда Кало", "Енді Воргол",
    
    // Винахідники
    "Томас Едісон", "Нікола Тесла", "Олександр Белл", "Братя Райт",
    "Генрі Форд", "Стів Возняк", "Тім Бернерс-Лі", "Ларрі Пейдж",
    
    // Філософи
    "Сократ", "Платон", "Арістотель", "Конфуцій",
    "Фрідріх Ніцше", "Карл Маркс", "Зигмунд Фрейд", "Іммануїл Кант",
    
    // Режисери
    "Стівен Спілберг", "Мартін Скорсезе", "Квентін Тарантіно", "Крістофер Нолан",
    "Альфред Хічкок", "Стенлі Кубрик", "Джеймс Кемерон", "Пітер Джексон"
];

// Глобальні змінні
let players = [];
let playerCharacters = [];
let currentPlayerIndex = 0;

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
    
    // Перемішуємо персонажів та вибираємо по одному для кожного гравця
    const shuffled = shuffleArray([...characters]);
    playerCharacters = [];
    for (let i = 0; i < players.length; i++) {
        playerCharacters.push({
            player: players[i],
            character: shuffled[i]
        });
    }
    
    currentPlayerIndex = 0;
    showCharacterForPlayer();
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showCharacterForPlayer() {
    const current = playerCharacters[currentPlayerIndex];
    document.getElementById('currentPlayerName').textContent = current.player;
    document.getElementById('characterName').textContent = current.character;
    showScreen('characterScreen');
}

function nextCharacter() {
    currentPlayerIndex++;
    
    if (currentPlayerIndex >= players.length) {
        showScreen('gameScreen');
    } else {
        showCharacterForPlayer();
    }
}

function showCharacters() {
    const list = document.getElementById('charactersList');
    list.innerHTML = '';
    
    playerCharacters.forEach(pc => {
        const item = document.createElement('div');
        item.className = 'character-item';
        item.innerHTML = `
            <span class="character-player">${pc.player}:</span>
            <span class="character-name-small">${pc.character}</span>
        `;
        list.appendChild(item);
    });
    
    showScreen('allCharactersScreen');
}
