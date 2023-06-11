

Swal.fire('!Bienvenido a TusTillas!')



let zapatillas = [{
    marca: "Nike",
    color: "Blanco",
    talla: 41,
    stock: 12,
    valor: 50000,
    id: 1,
    cantidad: 1
},{
    marca: "Nike",
    color: "negro",
    talla: 38,
    stock: 15,
    valor: 40000,
    id: 5,
    cantidad: 1
}, {
    marca: "Nike",
    color: "rojo",
    talla: 39,
    stock: 4,
    valor: 38000,
    id: 10,
    cantidad: 1
}, {
    marca: "Puma",
    color: "negro",
    talla: 40,
    stock: 10,
    valor: 29000,
    id: 4,
    cantidad: 1
}, {
    marca: "Puma",
    color: "Blanco",
    talla: 41,
    stock: 2,
    valor: 23000,
    id: 7,
    cantidad: 1
}, {
    marca: "Puma",
    color: "pikachu",
    talla: 42,
    stock: 20,
    valor: 36000,
    id: 12,
    cantidad: 1

}, {
    marca: "DC",
    color: "blanco",
    talla: 41,
    stock: 9,
    valor: 34000,
    id: 8,
    cantidad: 1
}, {
    marca: "DC",
    color: "negro",
    talla: 42,
    stock: 14,
    valor: 26000,
    id: 9,
    cantidad: 1
}, {
    marca: "DC",
    color: "plomo",
    talla: 38,
    stock: 8,
    valor: 35000,
    id: 3,
    cantidad: 1
},  {
    marca: "Adidas",
    color: "plomo",
    talla: 41,
    stock: 20,
    valor: 44000,
    id: 11,
    cantidad: 1
}, {
    marca: "Adidas",
    color: "Blanco",
    talla: 41,
    stock: 7,
    valor: 37000,
    id: 6,
    cantidad: 1
}, {
    marca: "Adidas",
    color: "negro",
    talla: 42,
    stock: 6,
    valor: 40000,
    id: 2,
    cantidad: 1
}];

console.log(zapatillas.length);


let btnSearch = document.querySelector(".btn", " btn-outline-success");
btnSearch.addEventListener("click", buscarMarca)

let consultaMarca = document.querySelector(".form-control", "me-2");
consultaMarca.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      buscarMarca();
    }
});

function buscarMarca() {
    let consultaMarca = document.querySelector(".form-control", "me-2").value;
    let zapatillasEncontradas = [];
    

    for (let i = 0; i < zapatillas.length; i++) {
        if (zapatillas[i].marca.toLowerCase() == consultaMarca.toLowerCase()) {
            zapatillasEncontradas.push(zapatillas[i]);
        }
    }

    if (zapatillasEncontradas.length > 0) {
        Swal.fire('Si tenemos modelos de la marca que buscas, sigue navegando para agregar al carro');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos esa marca!'
        });
    }

    
}

 
let carrito = []

function calcularCarrito (){
    let suma = 0

    for (i = 0; i < carrito.length; i++) {
        suma += carrito[i].valor * carrito[i].cantidad
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


    
    const zapatillaExistente = carrito.find((item) => item.id === zapatilla.id);

    if (zapatillaExistente) {
        zapatillaExistente.cantidad += 1;
        console.log('Se ha sumado una zapatilla al carrito');
    } else {
        zapatilla.cantidad = 1;
        carrito.push(zapatilla);
        console.log('Zapatilla agregada al carrito');
    }
    

    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carritoGuardado", carritoJSON);

    let timerInterval
    Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        /* html: 'I will close in <b></b> milliseconds.', */
        timer: 1000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval)
        }
    }).then((result) => {
        
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
    })

    
    mostrarCarrito();

}

const carritoEnLocalstorage = localStorage.getItem("carritoGuardado") 
const carritoObjeto = JSON.parse(carritoEnLocalstorage)





function mostrarCarrito() {

    divHijo.innerHTML = "";

    

    carrito.forEach((zapatilla) => {
        const muestraCarro = document.createElement("li");
        muestraCarro.classList.add("listaZapatilla") // borrar en caso de error
        muestraCarro.textContent = `${zapatilla.marca} Color: ${zapatilla.color} Cantidad: ${zapatilla.cantidad}`;

        function sumarZapatilla(id) {
            const zapatillaExistente = carrito.find((item) => item.id === id);
          
            if (zapatillaExistente) {
              zapatillaExistente.cantidad += 1;
              console.log("Se ha sumado una zapatilla al carrito");
            }
          
            const carritoJSON = JSON.stringify(carrito);
            localStorage.setItem("carritoGuardado", carritoJSON);
          
            mostrarCarrito();
        }

        function restarZapatilla(id) {
            const zapatillaExistente = carrito.find((item) => item.id === id);
          
            if (zapatillaExistente) {
                if (zapatillaExistente.cantidad > 0) {
                    zapatillaExistente.cantidad -= 1;
                    console.log("Se resta una zapatilla del carrito");
                } else {
                    console.log("Tienes la cantidad minima de zapatillas");
                }
            }
          
            const carritoJSON = JSON.stringify(carrito);
            localStorage.setItem("carritoGuardado", carritoJSON);
          
            mostrarCarrito();
        }

        const botonSumar = document.createElement("button");
        botonSumar.classList.add("btn-suma")
        botonSumar.textContent = "+";
        botonSumar.addEventListener("click", () => {
            sumarZapatilla(zapatilla.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn-resta")
        botonEliminar.textContent = "-";
        botonEliminar.addEventListener("click", () => {
            restarZapatilla(zapatilla.id);
        });

        muestraCarro.appendChild(botonSumar);
        muestraCarro.appendChild(botonEliminar);
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
    localStorage.clear()
    Swal.fire(
        'Carrito limpiado exitosamente!',
        '',
        'success'
    )
    
     
    
    /* const lineastile = document.querySelector(".lineaEstilo")
    cardPadre.removeChild(lineastile)  */
    
    divHijo.innerText = "";
    calcularCarrito();
    mostrarCarrito();
    
    
};




console.log(carritoObjeto)

const url = "https://fakestoreapi.com/products"

fetch(url)
    .then(respuesta=>respuesta.json())
    .then((datos) => {
        console.log(datos)
        mostrarProximosProductos(datos)
    })
    .catch(error => console.log("andamos valiendo merga", error))

const contenedorNuevosProductos = document.querySelector(".containerProximosProductos")

function mostrarProximosProductos(datos) {
    datos.forEach(ropa => {
        const targetaNuevosProductos = document.createElement("div")
        targetaNuevosProductos.classList.add("cardNueva")

        const tituloElemento = document.createElement("h3");
        tituloElemento.classList.add("tituloNuevosProductos")
        tituloElemento.textContent = ropa.title;

        const lineaTitulo = document.createElement("hr")
        lineaTitulo.classList.add("lineaTituloDecoracion")

        
        const descripcionRopa = document.createElement("p");
        descripcionRopa.classList.add("descripcionNuevosproductos")
        descripcionRopa.textContent = ropa.description;

        const imagenRopa = document.createElement("img");
        imagenRopa.classList.add("fotosNuevas")
        imagenRopa.src = ropa.image;


        tituloElemento.appendChild(lineaTitulo)
        targetaNuevosProductos.appendChild(tituloElemento)
        targetaNuevosProductos.appendChild(descripcionRopa)
        targetaNuevosProductos.appendChild(imagenRopa)

        contenedorNuevosProductos.appendChild(targetaNuevosProductos)
    })
}


let carritoString = localStorage.getItem("carritoGuardado");
if(carritoString) {
    carrito = JSON.parse(carritoString)
    console.log(carrito)
    mostrarCarrito()
}





// interaccion con dom eventos y storage(enviar datos al storage y recuperarlos)aaaaa