

alert("!Bienvenido a TusTillas!");

let carrito = []


const saludar = function() {
    let nombre = prompt("Ingresa tu nombre y apellido:")
    if (!isNaN(nombre)) { 
        alert("Debes ingresar tu nombre sin numeros")
        saludar()    
    } else {
        return alert(`¡Bienvenido ${nombre}! Estás en tu tienda de zapatillas online.`);    
    }
 
}
saludar() 



// objetos (zapatillas) de la tienda
// array de objetos (zapatillas)

let zapatillas = [{
    marca: "Nike",
    color: "Blanco",
    talla: 41,
    stock: 12,
    valor: 50000,
    id: 1
}, {
    marca: "Adidas",
    color: "negro",
    talla: 42,
    stock: 6,
    valor: 40000,
    id: 2
}, {
    marca: "DC",
    color: "plomo",
    talla: 38,
    stock: 8,
    valor: 35000,
    id: 3
}, {
    marca: "Puma",
    color: "negro",
    talla: 40,
    stock: 10,
    valor: 29000,
    id: 4
}, {
    marca: "Nike",
    color: "negro",
    talla: 38,
    stock: 15,
    valor: 40000,
    id: 5
}, {
    marca: "Adidas",
    color: "Blanco",
    talla: 41,
    stock: 7,
    valor: 37000,
    id: 6
}, {
    marca: "Puma",
    color: "Blanco",
    talla: 41,
    stock: 2,
    valor: 23000,
    id: 7
}, {
    marca: "DC",
    color: "blanco",
    talla: 41,
    stock: 9,
    valor: 34000,
    id: 8
}, {
    marca: "DC",
    color: "negro",
    talla: 42,
    stock: 14,
    valor: 26000,
    id: 9
}, {
    marca: "Nike",
    color: "rojo",
    talla: 39,
    stock: 4,
    valor: 38000,
    id: 10
}, {
    marca: "Adidas",
    color: "plomo",
    talla: 41,
    stock: 20,
    valor: 44000,
    id: 11
}, {
    marca: "Puma",
    color: "Blanco",
    talla: 42,
    stock: 20,
    valor: 36000,
    id: 12

}];





console.log(zapatillas.length);



// bucle que muestra en alert el listado de zapatillas disponibles  
let marcaZapatilla = "";

for (let i = 0; i < zapatillas.length; i++) {
    marcaZapatilla += `Marca: ${zapatillas[i].marca}, Color: ${zapatillas[i].color}, Talla: ${zapatillas[i].talla}\n`;
}

alert(`las zapatillas que tenemos son: \n${marcaZapatilla} `);


// esta funcion se ejecuta automaticamente despues de mostrar las zapatillas disponibles
function verZapatillas() {
    let consultaMarca = prompt("De las zapatillas vistas anteriormente... que marca te interesa??")
    let zapatillasEncontradas = [];  
   

    // bucle para traer desde el array de objetos la zapatilla segun la marca que le interese al cliente
    for (let i = 0; i < zapatillas.length; i++) {
        if (zapatillas[i].marca.toLowerCase() == consultaMarca.toLowerCase()) { // se le asigna tolowercase para facilitar la busqueda de caracteres iguales
           zapatillasEncontradas.push(zapatillas[i]);  //usando el metodo push se agregan todas las coincidencias al array vacio
        } 
    };

    
    // se crea condicion si el nuevo array de zapatillas es mayor a 0 se recorre con un bucle para enlistar en un alert los modelos encontrados
    if (zapatillasEncontradas.length > 0) {
        let resultado = `Zapatillas encontradas: \n`;
        for (let i = 0; i < zapatillasEncontradas.length; i++) {
            resultado += `Indice: ${zapatillasEncontradas[i].id} Marca: ${zapatillasEncontradas[i].marca} Color: ${zapatillasEncontradas[i].color} Talla: ${zapatillasEncontradas[i].talla} Stock: ${zapatillasEncontradas[i].stock} Valor$: ${zapatillasEncontradas[i].valor} \n`
        };

        let respuesta = confirm(`${resultado}Quieres buscar otros modelos?`); // se agrega confirm para preguntar si el cliente quiere consultar otro modelo
        console.log(152,respuesta);

        
        if (respuesta) {
            verZapatillas()
        } else {
            console.log("paso por aqui")
            cotizaZapatillas() // no funciona la condicion false!!!!!!!!!!
        }
    } else {
        alert(`No se encontro el modelo indicado`);
        verZapatillas();
    }

    
}
verZapatillas(); 

function calcularCarrito (){
    let suma = 0

    for (i = 0; i < carrito.length; i++) {
        suma += carrito[i].valor 
    };
    alert(`El total de tu carrito de compra es $: ${suma}`)
}

function cotizaZapatillas() {

    let consultaIndice = parseInt(prompt(`Indica el indice de la zapatilla que te interesa`));
    

    if (consultaIndice <= 12) {

        for (i = 0; i < zapatillas.length; i ++) {
            if (consultaIndice == zapatillas[i].id) {
                carrito.push(zapatillas[i])
                console.table(carrito)
            }
        }
        let continuar = confirm("Desea seguir agregando zapatillas al carrito??")
        console.log(continuar)
        if (continuar) {
            console.log("miga de pan")
            cotizaZapatillas()   
        } else {
            calcularCarrito()
        }

    } else {
        alert("El id ingresado es invalido")
        cotizaZapatillas()
    };
}




// crear  funcion para sumar objetos en variable tienda
// enumerar zapatillas mediante indice