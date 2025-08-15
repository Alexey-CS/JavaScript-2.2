// Уровень 1:Базовые условия (if / else)
    // 1. Возрастной контроль:

const age = 19

if (age < 18) {
    console.log('Доступ запрещен')
} else if (age >= 18) {
    console.log('Добро пожаловать!')
}

    // 2. Четное или нечетное

const num = 2

if (num % 2 === 0) {
    console.log('Число четное')
} else {
    console.log('Число нечетное')
}

    // 3. Проверка пороля

let password = '12345'

if (password === 'qwerty') {
    console.log('Доступ разрешен')
} else {
    console.log('Неверный пароль')
}

// Уровень 2: Логические операторы
    // 4. Рабочий день или выходной

let day = 'понедельник'

if (day === 'суббота' || day ==='воскресенье') {
    console.log('Выходной')
} else {
    console.log('Рабочий день')
}

    // 5. Доступ по статусу

let isLoggedIn = true
let isAdmin = false

if (isLoggedIn === true && isAdmin === true) {
    console.log('Панель администратора')
} else {
    console.log('Нет доступа')
}

    // 6. Темная тема

let darkModeEnabled = false

console.log(!darkModeEnabled)

// Уровень 3: Тернальный оператор
    // 7. Баллы и зачет

let points = 50

console.log(points >= 60 ? 'Зачет': 'Не зачет')

    // 8. Показ имени // Правильно понимаю, что это для ознакомления, долго вкуривал сидел, чего нужно сделать)))

let username = ''
let nameToShow = username || 'Гость';
console.log('Привет', nameToShow)

// Уровень 4: Сравнения == и ===
    // 9. Разница между == и ===

console.log(0 == false) // 0, NaN, '', null, undefined в случае преобразования в булиан дают false, равенство верно
console.log(0 === false) // в данном случае сравниваются на прямую типы данных, поскольку они разные, утверждение неверно
console.log(null == undefined) // по тому же принципу, что в первом пункте
console.log(null === undefined) // по тому же принципу, что во втором пункте

// Уровень 5: switch
    // 10. Выбор роли:

let role = 'moderator'

switch (role) {
    case 'admin':
        console.log('Привет, админ!')
        break;
    case 'moderator':
        console.log('Привет, модератор!')
        break;
    case 'user':
        console.log('Привет, пользователь!')
        break;
    case 'guest':
    console.log('Гость, войдите в систему')
        break;    
}