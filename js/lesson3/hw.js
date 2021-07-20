// - створити функцію яка обчислює та повертає площу прямокутника висотою
function getSquare(width, height) {
    return width * height;
}

console.log("square 2 and 5: ", getSquare(2, 5));

// - створити функцію яка обчислює та повертає площу кола
function getCircleSquare(radius) {
    return Math.PI * Math.pow(radius, 2);
}

console.log("circle square 8: ", getCircleSquare(8));

// - створити функцію яка обчислює та повертає об'єм циліндру
function getCylinderVolume(radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
}

console.log("cylinder volume r 3 h 8: ", getCylinderVolume(3, 8));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function getMinNumber(numberArray) {
    const sortedArray = numberArray.sort(function (a, b) {
        return a - b;
    });
    console.log("max: ", sortedArray[sortedArray.length - 1]);
    return sortedArray[0];
}

console.log("min: ", getMinNumber([3, 5, 2, 8, 34]));
// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function makeTextBlock(text) {
    document.write(`<div>${text}</div>`);
}

makeTextBlock("hello");
makeTextBlock("block 2");

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function makeThreeItemsList(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

makeThreeItemsList("list item");

// - створити функцію яка  створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function makeSomeItemsList(text, count) {
    document.write(`<ul>`);

    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

makeSomeItemsList("one of six", 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function makeTypedList(array) {
    document.write(`<ul>`);

    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }

    document.write(`</ul>`);
}

makeTypedList([1, 2, "hello", true, false, null]);
