const cafecitos = [
  { id: 0, quantity: 1 ,name: 'Costa Rica Tarrazú', description: 'Paquete de café, 250 gr', price: 9.00, img: '../img/bolsaCostarica.png' },
  { id: 1, quantity: 1 ,name: 'Colombia Los Naranjos', description: 'Paquete de café, 250 gr', price: 9.00, img: '../img/bolsaColombia.png' },
  { id: 2, quantity: 1 ,name: 'Laos Amanecer', description: 'Paquete de café, 250 gr', price: 9.00, img: '../img/bolsaLaos.png' },
  { id: 3, quantity: 1 ,name: 'Etiopía Yrgacheff', description: 'Paquete de café, 250 gr', price: 9.0, img: '../img/bolsaEtiopia.png' }
]
// Si hay algo en el local storage se guarda eso en la variable si no un array vacio
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const containerCart = document.querySelector(".ssContainerCart")

//IMPRIMO EN EL DOM LOS PRODUCTOS
cafecitos.forEach((e) => {
  containerCart.innerHTML += `
            <div id="${e.id}" class="ssCart">
                <img src="${e.img}" alt="${e.name}" />
                <h3>${e.name}</h3>
                <p>€ ${e.price},00 €</p>
                <button class="add">Añadir</button>
            </div>`;
});

// SE VA SUMANDO EL CONTADOR DE PRODUCTOS EN EL NAV
const quantityProduct = document.querySelector(".quantityProducts");
const sumaCantProductos = (carrito) => {
  quantityProduct.innerText = carrito.reduce((acc, e) => {
    acc += e.quantity;
    return acc;
  }, 0);
};
sumaCantProductos(carrito);


const botonesAñadir = document.querySelectorAll(".ssContainerCart .ssCart .add");
botonesAñadir.forEach((botonAñadir, i) => {
  botonAñadir.addEventListener("click", () => {
    // SE BUSCA EL INDICE DEL ELEMENTO DEL BOTON PRESIONADO DONDE COINCIDA SU NOMBRE CON EL NOMBRE DEL ALGUNO DE LOS OBJETOS
    let k = carrito.findIndex((elements) => elements.name === cafecitos[i].name);
    //SI COINCIDE QUE LE AÑADA 1 MAS AL QUANTITY DE ESE OBJETO CON EL INDICE K 
    if (carrito.find((element) => element.name === cafecitos[i].name)) {
      carrito[k].quantity++;
    } else {
      // SI NO ENCUENTRA COINCIDENCIAS QUE AÑADA EL NUEVO PRODUCTO AL CARRITO Y LOS ORDENE POR ID
      carrito.push(cafecitos[i]);
      carrito.sort((a, b) => a.id - b.id);
    }
    //SETEAMOS LOCALSTORAGE Y ACTUALIZAMOS LA CANTIDAD EN EL CONTADOR DE LA CESTA
    localStorage.setItem("carrito", JSON.stringify(carrito));
    sumaCantProductos(carrito);
  });
});



const arrowThirdSection = document.querySelectorAll(".tsContainerContent .pregunta .arrowthirdSection");

arrowThirdSection.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle('rotate')
    arrow.parentNode.parentNode.children[1].classList.toggle('showContent')
  });
});

