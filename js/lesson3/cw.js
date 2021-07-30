// - створити функцію яка приймає масив та виводить його
function logArray(array) {
    console.log(array);
}

logArray([1, "hello", 20, false, null]);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function logMin(x, y, z) {
    const array = [x, y, z]
    array.sort(function (a, b) {
        return a - b;
    });
    console.log("min: ", array[0]);
}

logMin([4, 20, 1]);

// - створити функцію яка повертає найбільше число з масиву

function logMax(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    console.log("max: ", array[array.length - 1]);
}

logMax([44, 28, 31]);

// - створити функцію яка повертає найменьше число з масиву

function logMinArr(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    console.log("min: ", array[0]);
}

logMinArr([4, 20, 1]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function logSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    console.log("sum: ", sum);
}

logSum([4, 20, 1]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function logAvg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    console.log("sum: ", sum / array.length);
}

logAvg([40, 100, 10]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.

function logRandom(array) {
    const newArray = array.map(function () {
        return Math.round(Math.random() * 100);
    });
    logArray(newArray);
}

logRandom([1, 2, 3]);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

logObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}];

const allKeys = []

for (const item of logObjects) {
    console.log(item);
    for (const itemKey in item) {
        allKeys.push(itemKey)
    }
}
console.log(allKeys);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

const listOfObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}];

const allObjects = []

for (const object of listOfObjects) {
    console.log(object);
    for (const value in object) {
        allObjects.push(object[value]);
    }
}
console.log(allObjects);
