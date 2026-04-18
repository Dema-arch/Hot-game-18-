// 150 карток з 5 поступовими діями (чергування хлопець/дівчина)
const sexCards = [
    {
        steps: [
            { performer: 'boy', action: 'Ніжно поцілуй її шию та вуха' },
            { performer: 'girl', action: 'Погладь його член через штани' },
            { performer: 'boy', action: 'Зніми з неї верх та поцілуй груди' },
            { performer: 'girl', action: 'Розстебни його штани та витягни член' },
            { performer: 'boy', action: 'Зніми з неї трусики та поцілуй між ніг' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Стань на коліна та поцілуй його живіт' },
            { performer: 'boy', action: 'Погладь її волосся та обличчя' },
            { performer: 'girl', action: 'Повільно облизуй його член' },
            { performer: 'boy', action: 'Стогни та дивись їй в очі' },
            { performer: 'girl', action: 'Візьми член глибоко в рот' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Поклади її на спину та розсунь ноги' },
            { performer: 'girl', action: 'Розслабся та насолоджуйся' },
            { performer: 'boy', action: 'Повільно лижи її клітор' },
            { performer: 'girl', action: 'Тримай його голову та направляй' },
            { performer: 'boy', action: 'Вставляй язик всередину та лижи' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Сядь зверху на нього обличчям' },
            { performer: 'boy', action: 'Тримай її за стегна' },
            { performer: 'girl', action: 'Повільно насаджуйся на член' },
            { performer: 'boy', action: 'Гладь її груди та соски' },
            { performer: 'girl', action: 'Їдь на члені швидше' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Поверни її спиною до себе' },
            { performer: 'girl', action: 'Нахилися вперед та обопрись руками' },
            { performer: 'boy', action: 'Повільно входь в неї ззаду' },
            { performer: 'girl', action: 'Прогнись та підстав дупу' },
            { performer: 'boy', action: 'Трахай її глибоко та ритмічно' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Ляж на живіт та розсунь ноги' },
            { performer: 'boy', action: 'Поцілуй її спину та сідниці' },
            { performer: 'girl', action: 'Підніми дупу вгору' },
            { performer: 'boy', action: 'Лижи її дупу та піхву' },
            { performer: 'girl', action: 'Стогни від задоволення' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Сядь на край ліжка' },
            { performer: 'girl', action: 'Стань між його ніг' },
            { performer: 'boy', action: 'Погладь її груди та живіт' },
            { performer: 'girl', action: 'Нахилися та візьми член в рот' },
            { performer: 'boy', action: 'Тримай її за волосся та направляй' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Ляж на спину та підніми ноги' },
            { performer: 'boy', action: 'Стань на коліна між її ніг' },
            { performer: 'girl', action: 'Обійми його ногами' },
            { performer: 'boy', action: 'Входь в неї повільно' },
            { performer: 'girl', action: 'Цілуй його та стискай членом' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Поклади її на бік' },
            { performer: 'girl', action: 'Підніми верхню ногу' },
            { performer: 'boy', action: 'Входь в неї збоку' },
            { performer: 'girl', action: 'Гладь його руку на своїх грудях' },
            { performer: 'boy', action: 'Трахай її та цілуй шию' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Стань раком на ліжку' },
            { performer: 'boy', action: 'Шльопни її по дупі' },
            { performer: 'girl', action: 'Прогнись сильніше' },
            { performer: 'boy', action: 'Плюнь на її дупу та розітри' },
            { performer: 'girl', action: 'Готуйся до анального сексу' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Повільно вставляй палець в її дупу' },
            { performer: 'girl', action: 'Розслабся та дихай глибоко' },
            { performer: 'boy', action: 'Додай другий палець' },
            { performer: 'girl', action: 'Звикай до відчуттів' },
            { performer: 'boy', action: 'Повільно входь членом в дупу' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Сядь на його обличчя' },
            { performer: 'boy', action: 'Лижи її піхву знизу' },
            { performer: 'girl', action: 'Нахилися та візьми член в рот' },
            { performer: 'boy', action: 'Вставляй палець в її дупу' },
            { performer: 'girl', action: 'Сосі член та стогни' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Поцілуй її груди та соски' },
            { performer: 'girl', action: 'Обійми його голову' },
            { performer: 'boy', action: 'Смокчи соски та кусай їх' },
            { performer: 'girl', action: 'Стогни та гладь його спину' },
            { performer: 'boy', action: 'Спускайся поцілунками до піхви' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Масажуй його яйця руками' },
            { performer: 'boy', action: 'Відкинь голову назад' },
            { performer: 'girl', action: 'Лижи яйця язиком' },
            { performer: 'boy', action: 'Гладь її волосся' },
            { performer: 'girl', action: 'Візьми яйця в рот' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Підніми її ноги на свої плечі' },
            { performer: 'girl', action: 'Тримайся за простирадло' },
            { performer: 'boy', action: 'Входь в неї глибоко' },
            { performer: 'girl', action: 'Кричи від задоволення' },
            { performer: 'boy', action: 'Трахай її швидко та жорстко' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Стань біля стіни' },
            { performer: 'boy', action: 'Підійди ззаду та притисни її' },
            { performer: 'girl', action: 'Обопрись руками об стіну' },
            { performer: 'boy', action: 'Підніми її одну ногу' },
            { performer: 'girl', action: 'Прийми його член стоячи' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Сядь на стілець' },
            { performer: 'girl', action: 'Сядь на нього обличчям' },
            { performer: 'boy', action: 'Тримай її за талію' },
            { performer: 'girl', action: 'Їдь на члені вгору-вниз' },
            { performer: 'boy', action: 'Смокчи її груди' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Ляг на край ліжка' },
            { performer: 'boy', action: 'Стань між її ніг' },
            { performer: 'girl', action: 'Підніми ноги вгору' },
            { performer: 'boy', action: 'Тримай її за щиколотки' },
            { performer: 'girl', action: 'Насолоджуйся глибоким проникненням' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Плюнь на її груди' },
            { performer: 'girl', action: 'Розітри слину по грудях' },
            { performer: 'boy', action: 'Поклади член між грудей' },
            { performer: 'girl', action: 'Стисни груди навколо члена' },
            { performer: 'boy', action: 'Трахай її груди' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Повернись до нього спиною' },
            { performer: 'boy', action: 'Обійми її ззаду' },
            { performer: 'girl', action: 'Нахилися вперед' },
            { performer: 'boy', action: 'Входь в неї стоячи' },
            { performer: 'girl', action: 'Гойдайся в такт' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Поклади її на стіл' },
            { performer: 'girl', action: 'Розсунь ноги широко' },
            { performer: 'boy', action: 'Стань між її ніг' },
            { performer: 'girl', action: 'Тримайся за край столу' },
            { performer: 'boy', action: 'Трахай її на столі' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Стань на четвереньки' },
            { performer: 'boy', action: 'Стань на коліна ззаду' },
            { performer: 'girl', action: 'Прогни спину' },
            { performer: 'boy', action: 'Шльопай її по дупі' },
            { performer: 'girl', action: 'Просись трахати сильніше' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Ляг на спину' },
            { performer: 'girl', action: 'Сядь на нього спиною' },
            { performer: 'boy', action: 'Тримай її за стегна' },
            { performer: 'girl', action: 'Їдь на члені назад' },
            { performer: 'boy', action: 'Дивись як член входить' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Дрочи його член двома руками' },
            { performer: 'boy', action: 'Стогни та напружуйся' },
            { performer: 'girl', action: 'Прискорюй темп' },
            { performer: 'boy', action: 'Попереджай що зараз кінчиш' },
            { performer: 'girl', action: 'Прийми сперму на груди' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Пальцюй її двома пальцями' },
            { performer: 'girl', action: 'Розсунь ноги ширше' },
            { performer: 'boy', action: 'Додай третій палець' },
            { performer: 'girl', action: 'Стогни голосніше' },
            { performer: 'boy', action: 'Пальцюй швидко до оргазму' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Облизуй його член від яєць до головки' },
            { performer: 'boy', action: 'Гладь її обличчя' },
            { performer: 'girl', action: 'Смокчи головку члена' },
            { performer: 'boy', action: 'Тримай її за волосся' },
            { performer: 'girl', action: 'Візьми член глибоко в горло' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Лижи її від дупи до клітора' },
            { performer: 'girl', action: 'Підніми дупу вище' },
            { performer: 'boy', action: 'Вставляй язик в дупу' },
            { performer: 'girl', action: 'Розсунь сідниці руками' },
            { performer: 'boy', action: 'Плюй на дупу та продовжуй лизати' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Сядь на його член повільно' },
            { performer: 'boy', action: 'Тримай її за талію' },
            { performer: 'girl', action: 'Крутися на члені' },
            { performer: 'boy', action: 'Піднімай її вгору-вниз' },
            { performer: 'girl', action: 'Стрибай швидко до оргазму' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Зв\'яжи їй руки' },
            { performer: 'girl', action: 'Довірся йому повністю' },
            { performer: 'boy', action: 'Дражни її тіло' },
            { performer: 'girl', action: 'Благай про більше' },
            { performer: 'boy', action: 'Трахай її жорстко' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Дрочи його член та лижи яйця' },
            { performer: 'boy', action: 'Відкинь голову від задоволення' },
            { performer: 'girl', action: 'Візьми яйця в рот' },
            { performer: 'boy', action: 'Гладь її голову' },
            { performer: 'girl', action: 'Повернись до члена та соси' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Трахай її в місіонерській позі' },
            { performer: 'girl', action: 'Обійми його ногами' },
            { performer: 'boy', action: 'Цілуй її пристрасно' },
            { performer: 'girl', action: 'Дряпай його спину' },
            { performer: 'boy', action: 'Кінчай в неї глибоко' }
        ]
    }
];

// Додаємо ще 120 карток для досягнення 150
const additionalCards = [
    {
        steps: [
            { performer: 'girl', action: 'Поцілуй його шию та груди' },
            { performer: 'boy', action: 'Гладь її волосся' },
            { performer: 'girl', action: 'Спускайся поцілунками до члена' },
            { performer: 'boy', action: 'Розслабся та насолоджуйся' },
            { performer: 'girl', action: 'Повільно соси член' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Масажуй її клітор пальцем' },
            { performer: 'girl', action: 'Стогни та розслабся' },
            { performer: 'boy', action: 'Вставляй палець всередину' },
            { performer: 'girl', action: 'Рухай стегнами' },
            { performer: 'boy', action: 'Пальцюй та лижи одночасно' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Сядь на його обличчя спиною' },
            { performer: 'boy', action: 'Лижи її піхву та дупу' },
            { performer: 'girl', action: 'Нахилися до його члена' },
            { performer: 'boy', action: 'Тримай її за стегна' },
            { performer: 'girl', action: 'Соси член в позі 69' }
        ]
    },
    {
        steps: [
            { performer: 'boy', action: 'Підніми її та притисни до стіни' },
            { performer: 'girl', action: 'Обійми його ногами' },
            { performer: 'boy', action: 'Входь в неї стоячи' },
            { performer: 'girl', action: 'Цілуй його пристрасно' },
            { performer: 'boy', action: 'Трахай її біля стіни' }
        ]
    },
    {
        steps: [
            { performer: 'girl', action: 'Ляг на живіт' },
            { performer: 'boy', action: 'Ляг на неї зверху' },
            { performer: 'girl', action: 'Підніми дупу трохи' },
            { performer: 'boy', action: 'Входь в неї ззаду' },
            { performer: 'girl', action: 'Насолоджуйся вагою його тіла' }
        ]
    }
];

// Генеруємо решту карток з різноманітними діями
for (let i = 0; i < 115; i++) {
    const templates = [
        {
            steps: [
                { performer: 'boy', action: 'Поцілуй її інтимні місця' },
                { performer: 'girl', action: 'Стогни від задоволення' },
                { performer: 'boy', action: 'Лижи її повільно' },
                { performer: 'girl', action: 'Тримай його голову' },
                { performer: 'boy', action: 'Доведи її до оргазму' }
            ]
        },
        {
            steps: [
                { performer: 'girl', action: 'Дражни його член губами' },
                { performer: 'boy', action: 'Дивись на неї зверху' },
                { performer: 'girl', action: 'Соси головку члена' },
                { performer: 'boy', action: 'Стогни від задоволення' },
                { performer: 'girl', action: 'Візьми член глибше' }
            ]
        },
        {
            steps: [
                { performer: 'boy', action: 'Входь в неї повільно' },
                { performer: 'girl', action: 'Прийми його член' },
                { performer: 'boy', action: 'Трахай її ритмічно' },
                { performer: 'girl', action: 'Рухайся в такт' },
                { performer: 'boy', action: 'Прискорюй темп' }
            ]
        },
        {
            steps: [
                { performer: 'girl', action: 'Їдь на його члені' },
                { performer: 'boy', action: 'Тримай її за стегна' },
                { performer: 'girl', action: 'Крутися та стрибай' },
                { performer: 'boy', action: 'Піднімай її вгору-вниз' },
                { performer: 'girl', action: 'Кінчай на його члені' }
            ]
        },
        {
            steps: [
                { performer: 'boy', action: 'Трахай її раком' },
                { performer: 'girl', action: 'Прогнись сильніше' },
                { performer: 'boy', action: 'Шльопай по дупі' },
                { performer: 'girl', action: 'Кричи від задоволення' },
                { performer: 'boy', action: 'Кінчай в неї' }
            ]
        }
    ];
    additionalCards.push(templates[i % templates.length]);
}

sexCards.push(...additionalCards);

// Глобальні змінні
let currentCardIndex = 0;
let currentStepIndex = 0;
let player1Name = '';
let player2Name = '';

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    player1Name = document.getElementById('player1').value.trim();
    player2Name = document.getElementById('player2').value.trim();
    
    if (player1Name === '' || player2Name === '') {
        alert('Введіть імена обох партнерів!');
        return;
    }
    
    // Перемішуємо картки
    shuffleArray(sexCards);
    
    currentCardIndex = 0;
    currentStepIndex = 0;
    updateGameScreen();
    showScreen('gameScreen');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateGameScreen() {
    const card = sexCards[currentCardIndex];
    const step = card.steps[currentStepIndex];
    
    const progress = ((currentCardIndex * 5 + currentStepIndex + 1) / (sexCards.length * 5)) * 100;
    
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentStep').textContent = currentCardIndex * 5 + currentStepIndex + 1;
    document.getElementById('totalSteps').textContent = sexCards.length * 5;
    
    // Визначаємо хто виконує
    let performer = '';
    if (step.performer === 'boy') {
        performer = player1Name;
    } else {
        performer = player2Name;
    }
    
    document.getElementById('stepPerformer').textContent = performer + ':';
    document.getElementById('stepAction').textContent = step.action;
}

function nextStep() {
    currentStepIndex++;
    
    if (currentStepIndex >= sexCards[currentCardIndex].steps.length) {
        currentStepIndex = 0;
        currentCardIndex++;
        
        if (currentCardIndex >= sexCards.length) {
            showEndScreen();
            return;
        }
    }
    
    updateGameScreen();
}

function showEndScreen() {
    document.getElementById('completedSteps').textContent = sexCards.length * 5;
    showScreen('endScreen');
}
