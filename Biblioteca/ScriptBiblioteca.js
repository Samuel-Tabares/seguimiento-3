let categoria = ''
let precioDia = 0
let cantidad = 0

while (true) {
    while (true){
        cantidad = parseInt(prompt(`Seleccione la cantidad de libros a separar, maximo 5`))

        if (cantidad >=1 && cantidad <= 5) {
            break;
        } else {
            alert(`Seleccionaste mal, reinicia`)
        }
    }
    categoria = prompt('Ingrese la categoria del libro, novedades, literatura o academicos')

    if (categoria == 'novedades') {
        precioDia = 500
        break;
    } else if (categoria == 'literatura'){
        precioDia = 100
        break;
    } else if (categoria == 'academicos'){
        precioDia = 0
        break;
    } else {
        alert(`Digitaste mal algun valor, reinicia`)
    }
}
alert(`Seleccionaste ${cantidad} libros de ${categoria}`)

let dias = 0
let descuento = 5

while (true) {
    dias = parseInt(prompt(`Cuantos dias desea este libro? maximo 30 dias, novedades cuesta 500 x dia, literatura 100 x dia, academicos gratis ; para prestamos mayores a 10 dias se aplican 10% de descuento`))

    if (dias > 0 && dias <= 30) {
        alert(`Seleccionaste ${dias} dias`)
        break;
    } else if (dias >= 10 && dias <= 30){
        alert(`Seleccionaste ${dias} dias con 10 % de descuento`)
        break;
    } else {
        alert(`Seleccionaste mal, reinicia`)
    }
}

if (dias >= 10 && dias <= 30) {
    descuento = 0.9
}

let precioTotal = (precioDia * dias)* descuento

alert(`El costo total para ${cantidad} libros de tipo ${categoria} con precio diario de ${precioDia} para ${dias} dias seria el total de ${precioTotal} pesos`)


