// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function numRandom() {
    let randomArray = [];
    for (i = 0; i < 10; i++) {
        randomArray.push(Math.round(Math.random() * 100));
    }
    return randomArray;
}

console.log(numRandom());

// - Змінити попередню функцію, щоб діапазон можна було визначити через аргументи.

function newNumRandom(min, max) {
    let randomArray = [];
    const range = max - min;
    for (i = 0; i < 10; i++) {
        randomArray.push(Math.round(Math.random() * range
            + min));
    }
    return randomArray;
}

console.log(newNumRandom(50, 1000));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

const randomArr = numRandom();

let sortArr = randomArr.sort(function (a, b) {
    return a - b;
});
console.log(sortArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відфільтрувати його за допомоги filter, за лишивши тільки парні числа

let filterArr = randomArr.filter(function (value) {
    return value % 2 === 0;
});
console.log(filterArr);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let mapArr = randomArr.map(function (value) {
    return `${value}`;
    // return String(value);
    // return '' + value;
});
console.log(mapArr);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];

users.push(new User(2, 'Petro', 'Chernyakov', 'chernyakov@gmail.com', '+38093124569'));
users.push(new User(4, 'Taras', 'Pylypjak', 'pylypjak@gmail.com', '+380687418529'));
users.push(new User(1, 'Oleg', 'Lyashko', 'lyashko@gmail.com', '+380631237894'));
users.push(new User(5, 'Nazar', 'Zirchak', 'zirchak@gmail.com', '+380638529637'));
users.push(new User(6, 'Vlad', 'Syrota', 'syrota@gmail.com', '+380679637418'));
users.push(new User(3, 'Myroslav', 'Pavlyshyn', 'pavlyshyn@gmail.com', '+380957894561'));
users.push(new User(8, 'Oleksandr', 'Prystash', 'prystash@gmail.com', '+380931594872'));
users.push(new User(10, 'Ostap', 'Bezpalyuk', 'bezpalyuk@gmail.com', '+380638673542'));
users.push(new User(7, 'Dmytro', 'Pylypchuk', 'pylypchuk@gmail.com', '+380954567891'));
users.push(new User(9, 'Maksym', 'Zakorchemnyj', 'zakorchemnyj@gmail.com', '+380683261598'));

console.log(users);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та
// відсортувати його по id по зростанню (sort)

let usersFilter = users.filter(function (value) {
    return value.id % 2 === 0;
});
console.log(usersFilter);

let usersSort = users.sort(function (user1, user2) {
    return user1.id - user2.id;
});
console.log(usersSort);