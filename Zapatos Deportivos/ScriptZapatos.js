let shoeModelNumber = 0
let shoeModel = ''

while(true) {
    shoeModelNumber = parseInt(prompt("Select the model of your shoes, 1 for classic ; 2 for running ; 3 for basketball"))

    if (shoeModelNumber == 1) {
        shoeModel = 'Classic'
        alert(`You have choosed ${shoeModel} model`)
        break;
    } else if (shoeModelNumber == 2) {
        shoeModel = 'Running'
        alert(`You have choosed ${shoeModel} model`)
        break;
    } else if (shoeModelNumber == 3) {
        shoeModel = 'Basketball'
        alert(`You have choosed ${shoeModel} model`)
        break;
    } else {
        alert('You have a wrong answer, please type the number of the model')
    }
}

let size = 0

while (true) {
    size = parseInt(prompt('Select your size, number from 35 to 44'))

    if (size >= 35 && size <= 44) {
        alert(`You choosed size ${size}`)
        break;
    } else {
        alert(`You choosed ${size} remember, number from 35 to 44`)
    }
}

let pairs = 0

while (true) {
    pairs = parseInt(prompt('Select number of pairs of shoes, min 1 and max 5, if you buy more than 3 pairs, you will have 10% discount'))

    if (pairs >= 1 && pairs <= 5) {
        alert(`You selected ${pairs} pairs of ${shoeModel} shoes, ${size} size`)
        break;
    } else {
        alert('You have selected a wrong value, 1 min and 5 max')
    }
}

let classicPrice = 500000
let runningPrice = 800000
let basketballPrice = 1000000
let message = ''

if (pairs >= 3) { //adding discount
    if (shoeModelNumber == 1) {
        message = ('It will cost you '+ (classicPrice * pairs)* 0.9 + ' pesos')
    } else if (shoeModelNumber == 2) {
        message = ('It will cost you '+ (runningPrice * pairs)* 0.9 + ' pesos')
    } else if(shoeModelNumber == 3) {
        message = ('It will cost you '+ (basketballPrice * pairs)* 0.9 + ' pesos')
    }
}else if (pairs < 3) {
    if (shoeModelNumber == 1) {
        message = ('It will cost you '+ classicPrice * pairs + ' pesos')
    } else if (shoeModelNumber == 2) {
        message = ('It will cost you '+ runningPrice * pairs + ' pesos')
    } else if(shoeModelNumber == 3) {
        message = ('It will cost you '+ basketballPrice * pairs + ' pesos')
    }
}
alert(message)
