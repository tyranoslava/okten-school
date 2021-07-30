// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

clients.push(new Client(1, 'Oleg', 'Gavryliak', 'lavryliak@gmail.com', 380631125555, ['item1', 'item2']));
clients.push(new Client(2, 'Maryan', 'Butchyn', 'butchyn@gmail.com', 380631125552, ['item6', 'item7', 'item8', 'item9', 'item10']));
clients.push(new Client(3, 'Natalya', 'Khomitska', 'khomitska@gmail.com', 380634485773, ['item1', 'item2', 'item3', 'item4']));
clients.push(new Client(4, 'Sofia', 'Fedyna', 'fedyna@gmail.com', 380638844523, ['item6', 'item7', 'item8', 'item9', 'item10']));
clients.push(new Client(5, 'Petro', 'Senyk', 'senyk@gmail.com', 380687238951, ['item1', 'item2', 'item3']));
clients.push(new Client(6, 'Oleg', 'Lesyuk', 'lesyuk@gmail.com', 380631125155, ['item1', 'item2', 'item3', 'item5']));
clients.push(new Client(7, 'Maryana', 'Zaets', 'zaets@gmail.com', 380631125551, ['item6', 'item7', 'item8', 'item9', 'item10', 'item5']));
clients.push(new Client(8, 'Natalya', 'Paranchuk', 'paranchuk@gmail.com', 380634485873, ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']));
clients.push(new Client(9, 'Sofia', 'Fedyuk', 'fedyuk@gmail.com', 380638244523, ['item6', 'item7', 'item8', 'item9', 'item10']));
clients.push(new Client(10, 'Petro', 'Korol', 'korol@gmail.com', 380687238851, ['item1', 'item2', 'item3', 'item4', 'item5']));

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients)
let sort = clients.sort(function (a, b) {

    return a.order.length - b.order.length
});
console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(brand, model, year, maxSpeed, volume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        console.log(`Інформація про автомобіль: бренд: ${this.brand}, модель: ${this.model}, рік випуску: ${this.year}, максимальна швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.volume}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const car1 = new Car('kia', 'ceed', 2016, 220, 1.6);
car1.drive();
car1.info();
car1.increaseMaxSpeed(30);
car1.info();
car1.changeYear(2018);
car1.info();
car1.addDriver({name: 'Olena', age: 28});
console.log(car1.driver);
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Truck {
    constructor(brand, model, year, maxSpeed, volume) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Інформація про автомобіль: бренд: ${this.brand}, модель: ${this.model}, рік випуску: ${this.year}, максимальна швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.volume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const truck1 = new Truck('ford', 'f-max', 2018, 250, 12.0);
console.log(truck1);
truck1.increaseMaxSpeed(50);
truck1.changeYear(2020);
console.log(truck1);
truck1.addDriver({name: 'Petro', age: 31});
console.log(truck1.driver);
console.log(truck1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let girls = [
    new Cinderella('Lesya', 25, 37),
    new Cinderella('Marta', 24, 38),
    new Cinderella('Olena', 26, 39),
    new Cinderella('Liuba', 27, 36),
    new Cinderella('Orysya', 23, 37),
    new Cinderella('Julia', 25, 39),
    new Cinderella('Oksana', 28, 38),
    new Cinderella('Nastya', 22, 35),
    new Cinderella('Olesya', 24, 36),
    new Cinderella('Ira', 26, 37),
]

class Prince {
    constructor(name, age, findedShoeSize) {
        this.name = name;
        this.age = age;
        this.findedShoeSize = findedShoeSize;
    }
}

let prince = new Prince('Oleksa', 29, 35);

function findCinderella() {
    for (i = 0; i < girls.length; i++) {
        if (girls[i].shoeSize === prince.findedShoeSize) {
            return girls[i];
        }
    }
}

const trueCinderella = findCinderella();
console.log(trueCinderella);

let result = girls.find(function (cinderella) {
    return cinderella.shoeSize === prince.findedShoeSize
});

console.log(result);