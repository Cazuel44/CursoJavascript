

alert("!Bienvenido a TusTillas!");



let zapatillas = [{
    marca: "Nike",
    color: "Blanco",
    talla: 41,
    stock: 12,
    valor: 50000,
    id: 1
},{
    marca: "Nike",
    color: "negro",
    talla: 38,
    stock: 15,
    valor: 40000,
    id: 5
}, {
    marca: "Nike",
    color: "rojo",
    talla: 39,
    stock: 4,
    valor: 38000,
    id: 10
}, {
    marca: "Puma",
    color: "negro",
    talla: 40,
    stock: 10,
    valor: 29000,
    id: 4
}, {
    marca: "Puma",
    color: "Blanco",
    talla: 41,
    stock: 2,
    valor: 23000,
    id: 7
}, {
    marca: "Puma",
    color: "pikachu",
    talla: 42,
    stock: 20,
    valor: 36000,
    id: 12

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
    marca: "DC",
    color: "plomo",
    talla: 38,
    stock: 8,
    valor: 35000,
    id: 3
},  {
    marca: "Adidas",
    color: "plomo",
    talla: 41,
    stock: 20,
    valor: 44000,
    id: 11
}, {
    marca: "Adidas",
    color: "Blanco",
    talla: 41,
    stock: 7,
    valor: 37000,
    id: 6
}, {
    marca: "Adidas",
    color: "negro",
    talla: 42,
    stock: 6,
    valor: 40000,
    id: 2
}];

console.log(zapatillas.length);



let carrito = []


function calcularCarrito (){
    let suma = 0

    for (i = 0; i < carrito.length; i++) {
        suma += carrito[i].valor 
    };

    valorTotal = document.createElement("li")
    valorTotal.classList.add("listaSuma") 
    valorTotal.textContent = `El total de tu carrito de compra es $: ${suma}` 
    divHijo.appendChild(valorTotal)
};



const cardbody = document.querySelectorAll(".card-body")

function mostrarProductos() {
    cardbody.forEach((obj, i) => {
        console.log(obj);
        console.log(i);

        const titulo = document.createElement("h5");
        titulo.setAttribute("class", "card-title")
        titulo.textContent = zapatillas[i].marca

        const color = document.createElement("p");
        color.setAttribute("class", "card-text");
        color.textContent = `Color: ${zapatillas[i].color}`;

        const valor = document.createElement("p");
        valor.setAttribute("class", "card-text");
        valor.textContent = `precio$: ${zapatillas[i].valor}`;

        const talla = document.createElement("p");
        talla.setAttribute("class", "card-text");
        talla.textContent = `talla: ${zapatillas[i].talla}`;

        const boton = document.createElement("button");
        boton.classList.add("btn", "btn-primary");
        boton.setAttribute("data-indice", i);
        boton.textContent = `Añadir al carrito`;
        boton.addEventListener("click", agregarZapatilla);

        obj.appendChild(titulo);
        obj.appendChild(color);
        obj.appendChild(talla);
        obj.appendChild(valor);
        obj.appendChild(boton);

       
    });    
}

mostrarProductos()





let cardPadre = document.querySelector(".offcanvas-body");




function agregarZapatilla(event) {
    
    const indice = event.target.getAttribute("data-indice"); 
    const zapatilla = zapatillas[indice]; 

    carrito = [...carritoObjeto] 
    carrito.push(zapatilla); 

    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carritoGuardado", carritoJSON);

    


    mostrarCarrito();

}



function mostrarCarrito() {

    carrito.forEach((zapatilla) => {
        const muestraCarro = document.createElement("li");
        muestraCarro.classList.add("listaZapatilla") // borrar en caso de error
        muestraCarro.textContent = `${zapatilla.marca} Color: ${zapatilla.color} `;

        divHijo.appendChild(muestraCarro);
       
    });


    const lineaDivision = document.createElement("hr");
    lineaDivision.classList.add("lineaEstilo")
    
    divHijo.appendChild(lineaDivision);
    calcularCarrito()
    divHijo.appendChild(lineaDivision);
    

}



const divHijo = document.createElement("div")
divHijo.classList.add("divHijo")
cardPadre.appendChild(divHijo)


const listaz = document.querySelector(".listaZapatilla")
const divlimpiar = document.querySelector(".divHijo")
const listas = document.querySelector(".listaSuma")


const btnEliminar = document.createElement('button');
btnEliminar.classList.add('btn', 'btn-danger', 'mx-5');
btnEliminar.textContent = 'Limpiar carrito';

btnEliminar.addEventListener('click', limpiarCarrito);

cardPadre.appendChild(btnEliminar);

function limpiarCarrito() {

    carrito = [];
    
    
     
    
    /* const lineastile = document.querySelector(".lineaEstilo")
    cardPadre.removeChild(lineastile)  */
    
    divHijo.innerText = "";
    calcularCarrito();
    mostrarCarrito();
    
    
};




const carritoEnLocalstorage = localStorage.getItem("carritoGuardado") 
const carritoObjeto = JSON.parse(carritoEnLocalstorage)
console.log(carritoObjeto)
mostrarCarrito()





// cardPadre.removeChild(listaz)






// interaccion con dom eventos y storage(enviar datos al storage y recuperarlos)aaaaa