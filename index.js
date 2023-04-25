

alert("!Bienvenido a Simucuot tu simulador de cuotas en linea!");



function obtenerMonto() {
    let monto = prompt("Ingresa el monto a calcular ");
    if (isNaN(monto)){
        alert("El valor ingresado debe ser un numero");        
        return obtenerMonto();
    } else {
        return parseInt(monto); 
    }  
} 


function obtenerCuotas() {
    let cuotas = prompt("Numero de cuotas a calcular");
    if (isNaN(cuotas)){
        alert("El valor ingresado debe ser un numero");        
        return obtenerMonto();
    } else {
        return parseInt(cuotas);
    } 
}


function calcularMontoCuotas(monto, cuotas) {
    let montoCuota = monto / cuotas;
    for (let i = 0; i < cuotas; i++) {
        console.log("cuota mes " + (i + 1) + " es de " + montoCuota.toFixed(2));
    }
    return montoCuota.toFixed(2);
}

let monto = obtenerMonto();
let cuotas = obtenerCuotas();
let montoCuota = calcularMontoCuotas(monto, cuotas);

alert("El monto de cada cuota es de " + montoCuota + " Por un periodo de " + cuotas + "meses");