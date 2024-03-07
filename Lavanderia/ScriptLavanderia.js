let ServiceOptionPP = null // set 'ServiceOptionPP' as 'null', Customer selects the service Per Piece

const BasicService = 'Basic'
const PremiumService = 'Premium'
const BasicPrice = 2000
const PremiumPrice = 4000


while (true) {
    ServiceOptionPP = parseInt(prompt('Select your service, type 1 if you want basic service (2000 pesos per piece), and 2 if you want premium service (4000 pesos per piece, you will have included drying and ironing)...'));
    
    if (ServiceOptionPP === 1) {
        alert(`You choosed ${BasicService} service, It will cost you ${BasicPrice} pesos per piece`)
        break;
    }else if(ServiceOptionPP === 2) {
        alert(`You choosed ${PremiumService} service, It will cost you ${PremiumPrice} pesos per piece`)
        break;
    }else{
        alert(`You have typed an incorrect value, remember, "1" is for basic service, and "2" is for premium service`)
    }
}

let NumberOfPieces = null

while (true) {
    NumberOfPieces = parseInt(prompt(`select the cuantity of clothing pieces you want to wash, min 1 piece, max 20 pieces...`));

    if (NumberOfPieces <= 20 && NumberOfPieces >= 1) {
        alert(`you have choosed ${NumberOfPieces} pieces`)
        break;
    }else {
        alert(`wrong number, min 1 piece, max 20 pieces.`)
    }
}



switch (ServiceOptionPP) {
    case 1:
        alert(`The total charge for ${NumberOfPieces} clothing pieces and ${BasicService} service is ` + (NumberOfPieces * BasicPrice) + `pesos.`);
        break;
    case 2:
        alert(`The total charge for ${NumberOfPieces} clothing pieces and ${PremiumService} service is ` + (NumberOfPieces*PremiumPrice) + `pesos.`);
        break;
    default:
        alert(`You have choosed an incorrect value for the service or the clothing pieces... restart`)
        break;
}