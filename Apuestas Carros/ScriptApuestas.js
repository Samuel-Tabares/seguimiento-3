let edad = 0

while (true){
    edad = parseInt(prompt('Digite su edad'))

    if(edad <18){
        alert('Eres menor de edad, no puedes participar')
    } else {
        alert('Eres mayor de edad, puedes participar')
        break;
    }
}

let numeroCarrera = 0
let piloto = 0
let cuota = 0

while (true){
    numeroCarrera = parseInt(prompt('A continuacion debe seleccionar el numero de carrera en la cual desea apostar: Carrera 1: (Piloto A (1.5), Piloto B (2.3), Piloto C(1.8)) ; Carrera 2: (Piloto A (3.8), Piloto B (2.3), Piloto C (1.2)'))

    if (numeroCarrera == 1) {
        while (true){
            piloto = parseInt(prompt(`Elegiste la carrera 1, digite el numero del piloto por el cual desea apostar: 1 piloto A (1.5) ; 2 piloto B (2.3) ; 3 piloto C (1.8)`))
            
            if (piloto == 1) {
                cuota = 1.5
                alert(`Digitaste el piloto ${piloto} con su cuota ${cuota}`)
                break;
            } else if (piloto == 2){
                cuota = 2.3
                alert(`Digitaste el piloto ${piloto} con su cuota ${cuota}`)
                break;
            } else if(piloto == 3){
                cuota = 1.8
                alert(`Digitaste el piloto ${piloto} con su cuota ${cuota}`)
                break;
            } else{
                alert(`Digitaste mal el numero, reinicia`)
            }
        }
    break;
    } else if(numeroCarrera == 2){
        while (true){
            piloto = parseInt(prompt(`Elegiste la carrera 2, digite el numero del piloto por el cual desea apostar: 1 piloto A (3.8) ; 2 piloto B (2.3) ; 3 piloto C (1.2)`))
            
            if (piloto == 1) {
                cuota = 3.8
                alert(`Digitaste el piloto ${piloto} con su cuota ${cuota}`)
                break;
            } else if (piloto == 2){
                cuota = 2.3
                alert(`Digitaste el piloto ${piloto} con su cuota ${cuota}`)
                break;
            } else if(piloto == 3){
                cuota = 1.2
                alert(`Digitaste el piloto ${piloto} con su cuota ${cuota}`)
                break;
            } else{
                alert(`Digitaste mal el numero, reinicia`)
            }
        }
        break;
    } else{
        alert(`No digitaste bien el numero, reinicia`)
    }
}

let tipoApuesta = 0

let primerPuesto = 0
let segundoPuesto = 0

while (true){
    tipoApuesta = parseInt(prompt(`Digite 1 si desea apostar el ganador de la carrera, digite 2 si desea apostar las posiciones exactas, primero y segundo pueso`))

    if (tipoApuesta == 1) {
        break;
    } else if (numeroCarrera == 1 && tipoApuesta == 2) {
        while(true){
            primerPuesto = parseInt(prompt(`Que piloto quedara de primer puesto? digite su numero, 1 para piloto A (1.5), 2 para B (2.3), 3 para C (1.8)`))
            segundoPuesto = parseInt(prompt(`Que piloto quedara de segundo puesto? digite su numero, 1 para piloto A (1.5), 2 para B (2.3), 3 para C (1.8)`))
        
            if (primerPuesto == 1 && segundoPuesto == 2) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`) 
                cuota = 1.5 * 2.3
                break;
            } else if (primerPuesto == 1 && segundoPuesto == 3){
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 1.5 * 1.8
                break;
            } else if(primerPuesto == 2 && segundoPuesto == 1){
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 2.3 * 1.5
                break;
            } else if (primerPuesto == 2 && segundoPuesto == 3) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 2.3 * 1.8
                break;
            } else if (primerPuesto == 3 && segundoPuesto == 1) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 1.8 * 1.5
                break;
            } else if (primerPuesto == 3 && segundoPuesto == 2) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 1.8 * 2.3
                break;
            } else {
                alert(`Digitaste un valor incorrecto o repetido`)
            }
        }
        break;
    } else if(numeroCarrera == 2 && tipoApuesta == 2){
        while(true){
            primerPuesto = parseInt(prompt(`Que piloto quedara de primer puesto? digite su numero, 1 para piloto A (3.8), 2 para B (2.3), 3 para C (1.2)`))
            segundoPuesto = parseInt(prompt(`Que piloto quedara de segundo puesto? digite su numero, 1 para piloto A (3.8), 2 para B (2.3), 3 para C (1.2)`))
        
            if (primerPuesto == 1 && segundoPuesto == 2) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`) 
                cuota = 3.8 * 2.3
                break;
            } else if (primerPuesto == 1 && segundoPuesto == 3){
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 3.8 * 1.2
                break;
            } else if(primerPuesto == 2 && segundoPuesto == 1){
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 2.3 * 3.8
                break;
            } else if (primerPuesto == 2 && segundoPuesto == 3) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 2.3 * 1.2
                break;
            } else if (primerPuesto == 3 && segundoPuesto == 1) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 1.2 * 3.8
                break;
            } else if (primerPuesto == 3 && segundoPuesto == 2) {
                alert(`Elegiste que el piloto ${primerPuesto} quedara de primero, y el piloto ${segundoPuesto} quedara de segundo`)
                cuota = 1.2 * 2.3
                break;
            } else {
                alert(`Digitaste un valor incorrecto o repetido`)
            }
        }
        break;
    } else {
        alert(`Digitaste mal el numero, reinicia`)
    }
}

let monto = 0

while (true){
    monto = parseInt(prompt(`Digite el valor del monto a apostar, minimo 10.000 pesos, maximo 1.000.000`))

    if (monto >= 10000 && monto <= 1000000 && tipoApuesta == 1) {
        alert(`Digitaste tu apuesta de ${monto} pesos, apostaste que el piloto ${piloto} con cuota ${cuota} gana la carrera ${numeroCarrera}`)
        alert(`Si aciertas tu prediccion, te llevas ` + cuota*monto + ` pesos, si pierdes, te quedas con 0 pesos`)
        break;
    } else if (monto >= 10000 && monto <= 1000000 && tipoApuesta == 2){
        alert(`Digitaste tu apuesta de ${monto} pesos, apostaste que el primer puesto se lo lleva el piloto ${primerPuesto} y que el segundo puesto se lo lleva el piloto ${segundoPuesto} en la carrera ${numeroCarrera}, tu cuota es de ${cuota}`)
        alert(`Si aciertas tu prediccion, te llevas ` + cuota*monto + ` pesos, si pierdes, te quedas con 0 pesos`)
        break;
    } else {
        alert(`Digitaste un valor diferente al permitido, reinicia`)
    }
}

let pilotoPrimerPuesto = 2
let pilotoSegundoPuesto = 3

if (tipoApuesta == 1 && piloto == pilotoPrimerPuesto) {
    alert(`Ganaste ` + cuota*monto + ` pesos, felicitaciones`)
} else if(tipoApuesta == 2 && primerPuesto == pilotoPrimerPuesto && segundoPuesto == pilotoSegundoPuesto) {
    alert(`Ganaste ` + cuota*monto + ` pesos, felicitaciones`)
} else {
    alert(`Perdiste, lo siento, intenta mejor la proxima...`)
}
