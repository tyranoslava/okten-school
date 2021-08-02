const wakeUp = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('1 Прокинутися')
            resolve()
        }, 10);
    }))
}

const smile = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('2 Посміхнутися')
            resolve()
        }, 15);
    }))
}

const haveShower = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('3 Піти в душ')
            resolve()
        }, 5);
    }))
}

const haveBreakfast = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('4 Поснідати')
            resolve()
        }, 50);
    }))
}

const goToWork = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('5 Поїхати на роботу')
            resolve()
        }, 25);
    }))
}

const stayAlive = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('6 Дожити до обіду')
            resolve()
        }, 16);
    }))
}

const haveLunch = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('7 Пообідати')
            resolve()
        }, 38);
    }))
}

const think = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('8 Подумати про сенс життя')
            resolve()
        }, 4);
    }))
}

const goHome = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('9 Поїхати додому')
            resolve()
        }, 24);
    }))
}

const haveDinner = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('10 Повечеряти')
            resolve()
        }, 30);
    }))
}


wakeUp().then(() => smile())
    .then(() => haveShower())
    .then(() => haveBreakfast())
    .then(() => goToWork())
    .then(() => stayAlive())
    .then(() => haveLunch())
    .then(() => think())
    .then(() => goHome())
    .then(() => haveDinner())
    .catch((error) => console.log(error))

const asyncFunction = async function () {
    await wakeUp();
    await smile();
    await haveShower();
    await haveBreakfast();
    await goToWork();
    await stayAlive();
    await haveLunch();
    await think();
    await goHome();
    await haveDinner();
}

setTimeout(() => {
    console.log('---------------')
    asyncFunction();

}, 1000)
