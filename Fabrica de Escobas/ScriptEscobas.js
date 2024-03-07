let tipoEscobaNumero = 0
let tipoEscoba = ''
let precio = 0

while (true) {
    tipoEscobaNumero = parseInt(prompt('Seleccione el tipo de escoba, 1 para dura ; 2 para suave ; 3 para cepillo'))

    if (tipoEscobaNumero == 1) {
        tipoEscoba = 'Escoba Dura'
        alert('seleccionaste escoba dura')
        break;
    } else if (tipoEscobaNumero == 2) {
        tipoEscoba = 'Escoba Suave'
        alert('En este momento se nos acabaron las escobas suaves, por favor, digite otro valor') // el profe no dijo a que precio vendemos las escobas suaves, entonces lo pongo fuera de stock
    } else if (tipoEscobaNumero == 3) {
        tipoEscoba = 'Cepillo'
        alert('Seleccionaste cepillo')
        break;
    } else {
        alert('Digitaste mal el numero, recuerda que debes digitar un numero del 1 al 3')
    }
}
let materialEscoba = 0

while (true) {
    if (tipoEscobaNumero == 1) {
        while(true){
            materialEscoba = parseInt(prompt('Manejamos escoba dura sintetica a 8000 pesos, digite 1 para elegirla; o digite 2 para elegir escoba dura natural a 10000 pesos'))
            if (materialEscoba == 1) {
                precio = 8000
                tipoEscoba = 'Escoba Dura Sintetica'
                alert('seleccionaste escoba dura sintetica a 8000 pesos')
                break;
            } else if (materialEscoba == 2){
                tipoEscoba = 'Escoba Dura Natural'
                precio = 10000
                alert('seleccionaste escoba dura natural a 10000 pesos')
                break;
            } else{
                alert('no seleccionaste tipo de escoba')
            }
        }
        break;
    } else if (tipoEscobaNumero == 2) {
        break;
    } else if (tipoEscobaNumero == 3) {
        while (true){
            materialEscoba = parseInt(prompt('Manejamos cepillo sintetico a 12000 pesos, digite 1 para elegirlo; o digite 2 para elegir cepillo natural  a 15000 pesos'))
            if (materialEscoba == 1) {
                tipoEscoba = 'Cepillo Sintetico'
                precio = 12000
                alert('seleccionaste cepillo sintetico a 12000 pesos')
                break;
            } else if (materialEscoba == 2){
                tipoEscoba = 'Cepillo Natural'
                precio = 15000
                alert('seleccionaste cepillo natural  a 15000 pesos')
                break;
            } else{
                alert('no seleccionaste tipo de cepillo')
            }
        }
        break;
    }
}
let adicionalNumero = 0
let adicional = ''

while (true){
    adicionalNumero = parseInt(prompt('Desea algun adicional? digite "0" para continuar, "1" si desea mango largo (2000 pesos adicionales), "2" si desea gancho en la punta (500 pesos adicionales)'))

    if (adicionalNumero == 0) {
        adicional = 'sin adicional'
        break;
    } else if (adicionalNumero == 1){
        adicional = 'Mango Largo'
        precio += 2000
        alert('Seleccionaste mango largo por 2000 pesos')
        break;
    } else if (adicionalNumero == 2){
        adicional = 'Gancho en Punta'
        precio += 500
        alert('Seleccionaste gancho en punta por 500 pesos')
        break;
    } else {
        alert('Seleccionaste mal, lee bien por favor')
    }
}

let cantidad = 0
while (true) {
    cantidad = parseInt(prompt('Digite el numero de productos en su pedido, minimo 3 productos, maximo 30'))

    if (cantidad >= 3 && cantidad <= 30) {
        precioTotal = precio*cantidad
        alert(`Seleccionaste ${cantidad} productos de tipo ${tipoEscoba}, con adicional de: ` + adicional + ` el total seria: ` + precioTotal + ' pesos')
        break;
    } else {
        alert('Digitaste un valor erroneo')
    }
}
