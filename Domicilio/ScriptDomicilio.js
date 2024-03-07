let productNumber = 0
let product = ''
let price = 0

while (true) {
    productNumber = parseInt(prompt('Select asociated restaurant: 1 for Burguer, 2 for Pizza, 3 for Chinese Food'))

    if (productNumber == 1) {
        product = 'Simple Burguer'
        price = 25000
        alert(`You have choosed ${product}, this will cost you ${price} pesos`)
        break;
    } else if (productNumber == 2){
        product = 'Family Pizza'
        price = 85000
        alert(`You have choosed ${product}, this will cost you ${price} pesos`)
        break;
    } else if(productNumber == 3){
        product = 'Chicken Noodles'
        price = 18000
        alert(`You have choosed ${product}, this will cost you ${price} pesos`)
        break;
    } else {
        alert('You choosed an incorrect value, please restart')
    }
}

let cuantity = 0

while (true){
    cuantity = parseInt(prompt(`Select the cuantity of your product: ${product}, remember, you can only get the delivery from 23000 pesos, otherwise, you cant order.`))
    price *= cuantity

    if (price > 23000) {
        alert(`The total of your order will be ${price} pesos for ${cuantity} ${product}, plus 5000 pesos for the delivery.`)
        price += 5000
        break;
    } else {
        alert('You can only order above 23000 pesos, please retry')
    }
}
 alert(`The summary of your order: ${cuantity} ${product} will cost: ${price} pesos, including the delivery, from 45 minutes to 1 hour and you can only pay by credit/debit card or cash`)