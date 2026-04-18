// Дії для легкого рівня (різноманітні дії без повторень)
const easyActions = [
    { performer: 'both', action: 'Ніжно поцілуйте один одного протягом 30 секунд' },
    { performer: 'p1', action: 'Зроби масаж шиї та плечей партнеру' },
    { performer: 'p2', action: 'Поцілуй його груди та соски' },
    { performer: 'p1', action: 'Погладь її стегна повільними рухами' },
    { performer: 'p2', action: 'Облизуй його вуха та шию' },
    { performer: 'p1', action: 'Зроби куні протягом 2 хвилин' },
    { performer: 'p2', action: 'Зроби мінет протягом 2 хвилин' },
    { performer: 'p1', action: 'Поцілуй її живіт та пупок' },
    { performer: 'p2', action: 'Дрочи його член руками' },
    { performer: 'p1', action: 'Пальцюй її одним пальцем' },
    { performer: 'p2', action: 'Лижи його яйця' },
    { performer: 'p1', action: 'Смокчи її клітор' },
    { performer: 'p2', action: 'Візьми член глибоко в рот' },
    { performer: 'p1', action: 'Масажуй її груди та соски' },
    { performer: 'p2', action: 'Поцілуй його живіт' },
    { performer: 'both', action: 'Поцілуйтесь з язиком' },
    { performer: 'p1', action: 'Покуси її соски ніжно' },
    { performer: 'p2', action: 'Погладь його член через білизну' },
    { performer: 'p1', action: 'Поцілуй внутрішню сторону її стегон' },
    { performer: 'p2', action: 'Облизуй головку його члена' },
    { performer: 'p1', action: 'Введи два пальці в її піхву' },
    { performer: 'p2', action: 'Соси його член з рухами голови' },
    { performer: 'p1', action: 'Лижи її від входу до клітора' },
    { performer: 'p2', action: 'Дрочи його член двома руками' },
    { performer: 'p1', action: 'Смокчи її груди' },
    { performer: 'p2', action: 'Поцілуй його шию та вуха' },
    { performer: 'both', action: 'Обійміться голими тілами' },
    { performer: 'p1', action: 'Погладь її сідниці' },
    { performer: 'p2', action: 'Масажуй його яйця' },
    { performer: 'p1', action: 'Лижи її клітор швидкими рухами' },
    { performer: 'p2', action: 'Соси член з контактом очей' },
    { performer: 'p1', action: 'Пальцюй її трьома пальцями' },
    { performer: 'p2', action: 'Лижи його член від основи' },
    { performer: 'p1', action: 'Поцілуй її ноги та ступні' },
    { performer: 'p2', action: 'Дрочи член та лижи яйця' },
    { performer: 'p1', action: 'Масажуй її точку G' },
    { performer: 'p2', action: 'Візьми яйця в рот' },
    { performer: 'both', action: 'Помастурбуйте один одному' },
    { performer: 'p1', action: 'Лижи її повільно та ніжно' },
    { performer: 'p2', action: 'Соси член швидко' },
    { performer: 'p1', action: 'Поцілуй її спину' },
    { performer: 'p2', action: 'Погладь його груди' },
    { performer: 'p1', action: 'Введи палець в її дупу' },
    { performer: 'p2', action: 'Соси член з слиною' },
    { performer: 'p1', action: 'Лижи її та пальцюй одночасно' },
    { performer: 'p2', action: 'Дрочи член швидко' },
    { performer: 'p1', action: 'Смокчи її клітор та пальцюй' },
    { performer: 'p2', action: 'Візьми член в горло' },
    { performer: 'both', action: 'Зробіть 69' },
    { performer: 'p1', action: 'Поцілуй її всю' }
];

// Дії для рівня "З перчинкою" (більш екстремальні та різноманітні)
const spicyActions = [
    { performer: 'p1', action: 'Зроби анілінгус партнерці' },
    { performer: 'p2', action: 'Зроби анілінгус партнеру' },
    { performer: 'p1', action: 'Лижи її дупу глибоко' },
    { performer: 'p2', action: 'Соси член до закінчення в рот' },
    { performer: 'p1', action: 'Введи палець в її дупу під час куні' },
    { performer: 'p2', action: 'Візьми член в горло до кінця' },
    { performer: 'p1', action: 'Плюнь на її дупу та лижи' },
    { performer: 'p2', action: 'Прийми сперму на обличчя' },
    { performer: 'p1', action: 'Введи два пальці в її дупу' },
    { performer: 'p2', action: 'Соси член та масажуй яйця' },
    { performer: 'p1', action: 'Лижи її дупу та піхву одночасно' },
    { performer: 'p2', action: 'Дрочи член до закінчення' },
    { performer: 'p1', action: 'Пальцюй її дупу швидко' },
    { performer: 'p2', action: 'Прийми сперму в рот та покажи' },
    { performer: 'both', action: 'Зробіть 69 з анальною стимуляцією' },
    { performer: 'p1', action: 'Лижи її дупу з вібрацією язика' },
    { performer: 'p2', action: 'Соси член з глибоким заковтуванням' },
    { performer: 'p1', action: 'Введи три пальці в її дупу' },
    { performer: 'p2', action: 'Прийми закінчення на груди' },
    { performer: 'p1', action: 'Масажуй її точку G та дупу' },
    { performer: 'p2', action: 'Лижи його дупу язиком' },
    { performer: 'p1', action: 'Доведи її до сквірту' },
    { performer: 'p2', action: 'Соси член до кінця' },
    { performer: 'p1', action: 'Лижи її дупу та клітор' },
    { performer: 'p2', action: 'Візьми сперму в рот та ковтни' },
    { performer: 'p1', action: 'Пальцюй її дупу та піхву' },
    { performer: 'p2', action: 'Дрочи член на свої груди' },
    { performer: 'p1', action: 'Введи язик глибоко в дупу' },
    { performer: 'p2', action: 'Соси яйця та член' },
    { performer: 'p1', action: 'Лижи її всю знизу' },
    { performer: 'p2', action: 'Прийми закінчення на язик' },
    { performer: 'both', action: 'Взаємний анілінгус' },
    { performer: 'p1', action: 'Шльопай її по дупі та лижи' },
    { performer: 'p2', action: 'Соси член жорстко' },
    { performer: 'p1', action: 'Пальцюй її дупу чотирма пальцями' },
    { performer: 'p2', action: 'Дрочи член швидко до кінця' },
    { performer: 'p1', action: 'Лижи її дупу з слиною' },
    { performer: 'p2', action: 'Прийми сперму на обличчя та облизни' },
    { performer: 'p1', action: 'Масажуй її анус зсередини' },
    { performer: 'p2', action: 'Соси член з анальним пальцем' },
    { performer: 'p1', action: 'Доведи її до оргазму анально' },
    { performer: 'p2', action: 'Візьми член глибоко та затримай' },
    { performer: 'p1', action: 'Лижи її дупу та вставляй пальці' },
    { performer: 'p2', action: 'Прийми закінчення в горло' },
    { performer: 'p1', action: 'Розтягуй її дупу пальцями' },
    { performer: 'p2', action: 'Соси член до останньої краплі' },
    { performer: 'both', action: 'Взаємна оральна стимуляція' },
    { performer: 'p1', action: 'Лижи її скрізь' },
    { performer: 'p2', action: 'Дрочи член на себе' },
    { performer: 'p1', action: 'Введи кулак в її піхву' }
];

// Додаємо унікальні дії для легкого рівня
const easyUnique = [
    { performer: 'p1', action: 'Поцілуй її ключиці' },
    { performer: 'p2', action: 'Погладь його спину' },
    { performer: 'p1', action: 'Масажуй її ноги' },
    { performer: 'p2', action: 'Поцілуй його плечі' },
    { performer: 'p1', action: 'Лижи її пупок' },
    { performer: 'p2', action: 'Кусай його вуха' },
    { performer: 'p1', action: 'Гладь її волосся' },
    { performer: 'p2', action: 'Цілуй його шию' },
    { performer: 'p1', action: 'Масажуй її сідниці' },
    { performer: 'p2', action: 'Лижи його груди' },
    { performer: 'p1', action: 'Поцілуй її коліна' },
    { performer: 'p2', action: 'Гладь його живіт' },
    { performer: 'p1', action: 'Дихай на її шию' },
    { performer: 'p2', action: 'Шепочи йому на вухо' },
    { performer: 'p1', action: 'Масажуй її руки' },
    { performer: 'p2', action: 'Поцілуй його пальці' },
    { performer: 'p1', action: 'Лижи її щиколотки' },
    { performer: 'p2', action: 'Кусай його губи' },
    { performer: 'p1', action: 'Гладь її обличчя' },
    { performer: 'p2', action: 'Цілуй його лоб' },
    { performer: 'p1', action: 'Масажуй її талію' },
    { performer: 'p2', action: 'Лижи його пупок' },
    { performer: 'p1', action: 'Поцілуй її зап\'ястя' },
    { performer: 'p2', action: 'Гладь його стегна' },
    { performer: 'p1', action: 'Дихай на її груди' },
    { performer: 'p2', action: 'Шепочи брудні слова' },
    { performer: 'p1', action: 'Масажуй її литки' },
    { performer: 'p2', action: 'Поцілуй його сідниці' },
    { performer: 'p1', action: 'Лижи її пальці' },
    { performer: 'p2', action: 'Кусай його плечі' },
    { performer: 'p1', action: 'Гладь її стегна зсередини' },
    { performer: 'p2', action: 'Цілуй його живіт' },
    { performer: 'p1', action: 'Масажуй її ступні' },
    { performer: 'p2', action: 'Лижи його шию' },
    { performer: 'p1', action: 'Поцілуй її лікті' },
    { performer: 'p2', action: 'Гладь його дупу' },
    { performer: 'p1', action: 'Дихай на її вухо' },
    { performer: 'p2', action: 'Шепочи що хочеш' },
    { performer: 'p1', action: 'Масажуй її спину' },
    { performer: 'p2', action: 'Поцілуй його ребра' },
    { performer: 'p1', action: 'Лижи її руки' },
    { performer: 'p2', action: 'Кусай його соски' },
    { performer: 'p1', action: 'Гладь її все тіло' },
    { performer: 'p2', action: 'Цілуй його скрізь' },
    { performer: 'p1', action: 'Масажуй її все' },
    { performer: 'p2', action: 'Лижи його повільно' },
    { performer: 'p1', action: 'Поцілуй її ніжно' },
    { performer: 'p2', action: 'Гладь його пристрасно' },
    { performer: 'p1', action: 'Дихай на неї гаряче' },
    { performer: 'p2', action: 'Шепочи як добре' }
];

// Додаємо унікальні дії для гострого рівня
const spicyUnique = [
    { performer: 'p1', action: 'Шльопай її по обличчю ніжно' },
    { performer: 'p2', action: 'Дуси його трохи' },
    { performer: 'p1', action: 'Плюй їй в рот' },
    { performer: 'p2', action: 'Лижи його дупу глибоко' },
    { performer: 'p1', action: 'Тягни її за волосся' },
    { performer: 'p2', action: 'Дряпай його спину' },
    { performer: 'p1', action: 'Кусай її груди' },
    { performer: 'p2', action: 'Шльопай його по дупі' },
    { performer: 'p1', action: 'Введи всю руку' },
    { performer: 'p2', action: 'Соси член жорстко' },
    { performer: 'p1', action: 'Лижи її дупу та плюй' },
    { performer: 'p2', action: 'Прийми сперму всюди' },
    { performer: 'p1', action: 'Пальцюй її жорстко' },
    { performer: 'p2', action: 'Дрочи член агресивно' },
    { performer: 'p1', action: 'Шльопай її сильно' },
    { performer: 'p2', action: 'Кричи від задоволення' },
    { performer: 'p1', action: 'Лижи її скрізь з слиною' },
    { performer: 'p2', action: 'Соси член до кінця' },
    { performer: 'p1', action: 'Введи все що можеш' },
    { performer: 'p2', action: 'Прийми все що дає' },
    { performer: 'p1', action: 'Тримай її за горло' },
    { performer: 'p2', action: 'Благай про більше' },
    { performer: 'p1', action: 'Плюй на неї' },
    { performer: 'p2', action: 'Облизуй все' },
    { performer: 'p1', action: 'Шльопай по піхві' },
    { performer: 'p2', action: 'Соси яйця жорстко' },
    { performer: 'p1', action: 'Лижи дупу з пальцями' },
    { performer: 'p2', action: 'Дрочи член на себе' },
    { performer: 'p1', action: 'Розтягуй її' },
    { performer: 'p2', action: 'Ковтай все' },
    { performer: 'p1', action: 'Кусай її дупу' },
    { performer: 'p2', action: 'Лижи його анус' },
    { performer: 'p1', action: 'Шльопай сильніше' },
    { performer: 'p2', action: 'Кричи голосніше' },
    { performer: 'p1', action: 'Введи більше пальців' },
    { performer: 'p2', action: 'Соси глибше' },
    { performer: 'p1', action: 'Лижи жорсткіше' },
    { performer: 'p2', action: 'Дрочи швидше' },
    { performer: 'p1', action: 'Тримай міцніше' },
    { performer: 'p2', action: 'Благай сильніше' },
    { performer: 'p1', action: 'Плюй більше' },
    { performer: 'p2', action: 'Облизуй краще' },
    { performer: 'p1', action: 'Шльопай жорсткіше' },
    { performer: 'p2', action: 'Соси довше' },
    { performer: 'p1', action: 'Лижи глибше' },
    { performer: 'p2', action: 'Дрочи сильніше' },
    { performer: 'p1', action: 'Введи все' },
    { performer: 'p2', action: 'Прийми все' },
    { performer: 'p1', action: 'Роби все' },
    { performer: 'p2', action: 'Насолоджуйся всім' }
];

// Об'єднуємо масиви
easyActions.push(...easyUnique);
spicyActions.push(...spicyUnique);

// Глобальні змінні
let currentLevel = 'easy';
let player1Name = '';
let player2Name = '';
let currentActionIndex = 0;
let actions = [];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function selectLevel(level) {
    currentLevel = level;
    showScreen('nameScreen');
}

function startGame() {
    player1Name = document.getElementById('player1').value.trim();
    player2Name = document.getElementById('player2').value.trim();
    
    if (player1Name === '' || player2Name === '') {
        alert('Введіть імена обох партнерів!');
        return;
    }
    
    // Вибираємо дії залежно від рівня
    const sourceActions = currentLevel === 'easy' ? easyActions : spicyActions;
    actions = shuffleArray([...sourceActions]);
    
    currentActionIndex = 0;
    updateGameScreen();
    showScreen('gameScreen');
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function updateGameScreen() {
    const action = actions[currentActionIndex];
    const progress = ((currentActionIndex + 1) / actions.length) * 100;
    
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentAction').textContent = currentActionIndex + 1;
    document.getElementById('totalActions').textContent = actions.length;
    
    // Визначаємо хто виконує
    let performer = '';
    if (action.performer === 'p1') {
        performer = player1Name;
    } else if (action.performer === 'p2') {
        performer = player2Name;
    } else {
        performer = player1Name + ' та ' + player2Name;
    }
    
    document.getElementById('actionPerformer').textContent = performer + ':';
    document.getElementById('actionText').textContent = action.action;
}

function nextAction() {
    currentActionIndex++;
    
    if (currentActionIndex >= actions.length) {
        showEndScreen();
    } else {
        updateGameScreen();
    }
}

function showEndScreen() {
    document.getElementById('completedActions').textContent = actions.length;
    document.getElementById('levelName').textContent = currentLevel === 'easy' ? 'Легкий 😊' : 'З перчинкою 🌶️';
    showScreen('endScreen');
}
