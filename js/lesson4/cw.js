// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

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

let clients = [
    new Client(1, 'Oleg', 'Gavryliak', 'lavryliak@gmail.com', 380631125555, ['item1', 'item2']),
    new Client(2, 'Maryan', 'Butchyn', 'butchyn@gmail.com', 380631125552, ['item6', 'item7', 'item8', 'item9', 'item10']),
    new Client(3, 'Natalya', 'Khomitska', 'khomitska@gmail.com', 380634485773, ['item1', 'item2', 'item3', 'item4']),
    new Client(4,'Sofia','Fedyna', 'fedyna@gmail.com',380638844523,['item6', 'item7', 'item8', 'item9', 'item10']),
    new Client(5,'Petro','Senyk','senyk@gmail.com',380687238951,['item1', 'item2', 'item3']),
    new Client(6, 'Oleg', 'Lesyuk', 'lesyuk@gmail.com', 380631125155, ['item1', 'item2', 'item3', 'item5']),
    new Client(7, 'Maryana', 'Zaets', 'zaets@gmail.com', 380631125551, ['item6', 'item7', 'item8', 'item9', 'item10', 'item5']),
    new Client(8, 'Natalya', 'Paranchuk', 'paranchuk@gmail.com', 380634485873, ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']),
    new Client(9,'Sofia','Fedyuk', 'fedyuk@gmail.com',380638244523,['item6', 'item7', 'item8', 'item9', 'item10']),
    new Client(10,'Petro','Korol','korol@gmail.com',380687238851,['item1', 'item2', 'item3', 'item4', 'item5'])
];
console.log(clients)
let sort1 = clients.sort(function(a,b) {

    return a.order.length - b.order.length
});
console.log(sort1)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку