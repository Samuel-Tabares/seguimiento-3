let tuitionValue = 7000000
let PaymentMethod = 0

while (true) {
    PaymentMethod = parseInt(prompt('Select a numbered method to pay, number 1 for complete paying (5% discount) ; number 2 for paying in 2 installments ; number 3 for paying in 3 installments'))

    if (PaymentMethod >= 1 && PaymentMethod <= 3) {
        if (PaymentMethod == 1) {
            alert(`It will cost you ` + tuitionValue * 0.95 + ` pesos, with the discount for complete paying`)
        }else if (PaymentMethod == 2) {
            let total = (tuitionValue / 2)+(tuitionValue * 0.02)
            alert(`You choosed 2 installments, `+ total +` pesos each installment`)
        }else if (PaymentMethod ==3) {
            let total = (tuitionValue / 3)+(tuitionValue * 0.02) +0.6666666665
            alert(`You choosed 3 installments, ` + total + ` pesos each installment`)
        }
        break;
    } else {
        alert('You choosed a wrong value')
    }
}