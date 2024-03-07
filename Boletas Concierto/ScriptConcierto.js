let localidad = ""
let valor = 0

while (true) {
    localidad = prompt("Digite la localidad que desea, general (50.000 pesos), preferencial (150.000 pesos) o VIP, no aplican descuentos y promociones (300.000), el cargo por servicio por boleta es de 5000 pesos, el impuesto es el 10% del valor total")

    if (localidad == "general") {
        valor = 50000
        alert(`Elegiste localidad ${localidad} con precio: ${valor}`)
        break;
    } else if (localidad == "preferencial"){
        valor = 150000
        alert (`Elegiste localidad ${localidad} con precio: ${valor}`)
        break;
    } else if (localidad == "VIP"){
        valor = 300000
        alert (`Elegiste localidad ${localidad} con precio: ${valor}`)
        break;
    } else{
        alert("Digitaste mal el valor, recuerda mayusculas")
    }
}

let cantidadBoletas = 0

while (true) {
    cantidadBoletas = parseInt(prompt(`Digite la cantidad de boletas deseada, en numeros, minimo 1 y maximo 5 boletas`))

    if (cantidadBoletas >= 1 && cantidadBoletas <= 5) {
        alert(`Seleccionaste ${cantidadBoletas} boletas para la localidad ${localidad}`)
        break;
    } else {
        alert(`No seleccionaste un valor correcto, reinicia`)
    }
}

let precioTotal = 0
let metodo = 0

while (true) {
    if (localidad == "preferencial" || localidad == "general") {
        valor += 5000
        precioTotal = cantidadBoletas * valor
        precioTotal *= 1.1
        metodo = parseInt(prompt(`La compra seria en total de ${cantidadBoletas} boletas en la localidad ${localidad}, el total a pagar es ${precioTotal} pesos por el cobro de servicio y los impuestos, digite 1 si desea pagar con tarjeta y 2 si paga en efectivo`))
        break;
    } else if (localidad == "VIP"){
        precioTotal = cantidadBoletas * valor
        metodo = parseInt(prompt(`La compra seria en total de ${cantidadBoletas} boletas en la localidad ${localidad}, el total a pagar es ${precioTotal} pesos, te ahorras los impuestos y costo de servicio, digite 1 si desea pagar con tarjeta y 2 si paga en efectivo`))
        break;
    }
}

while (true) {
    if (metodo == 1) {
        alert(`Pagas con tarjeta`)
        break;
    } else if  (metodo == 2){
        alert(`Pagas en efectivo`)
        break;
    } else {
        alert(`Digitaste mal un valor, reinicia`)
    }
}