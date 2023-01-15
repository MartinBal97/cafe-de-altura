const cafecitos = [
    { id: 0, quantity: 1 ,name: 'Costa Rica Tarrazú', description: 'Paquete de café, 250 gr', price: 9.00, img: '../img/bolsaCostarica.png' },
    { id: 1, quantity: 1 ,name: 'Colombia Los Naranjos', description: 'Paquete de café, 250 gr', price: 9.00, img: '../img/bolsaColombia.png' },
    { id: 2, quantity: 1 ,name: 'Laos Amanecer', description: 'Paquete de café, 250 gr', price: 9.00, img: '../img/bolsaLaos.png' },
    { id: 3, quantity: 1 ,name: 'Etiopía Yrgacheff', description: 'Paquete de café, 250 gr', price: 9.0, img: '../img/bolsaEtiopia.png' },
    { id: 4, quantity: 1 ,name: 'Kenia Ndunduri', description: 'Paquete de café, 250 gr', price: 15.00, img: '../img/bolsaKenia.png' },
    { id: 5, quantity: 1 ,name: 'Etiopía Sidamo', description: 'Paquete de café, 250 gr', price: 17.00, img: '../img/bolsaEtiopiaSidema.png' },
    { id: 6, quantity: 1 ,name: 'Costa Rica Monte Bello', description: 'Paquete de café, 250 gr', price: 12.00, img: '../img/bolsaCostaRicaMonte.png' },
    { id: 7, quantity: 1 ,name: 'Colombia La Casita', description: 'Paquete de café, 250 gr', price: 9.00, img: '../img/bolsaColombiaAgotado.png', isDisabled: 'disabled' }
]

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const quantityProduct = document.querySelector(".quantityProducts");

const sumaCantProductos = (carrito) => {
  quantityProduct.innerText = carrito.reduce((acc, e) => {
    acc += e.quantity;
    return acc;
  }, 0);
};

sumaCantProductos(carrito);

const containerCart = document.querySelector(".ssContainerCart");

cafecitos.forEach((e) => {
  containerCart.innerHTML += `
            <div id="${e.id}" class="ssCart">
                <img src="${e.img}" alt="${e.name}" />
                <h3>${e.name}</h3>
                <p>€ ${e.price},00 €</p>
                <button ${e.isDisabled} class="add">Añadir</button>
            </div>`;
});

const botonesAñadir = document.querySelectorAll(".ssContainerCart .ssCart .add");

botonesAñadir.forEach((botonAñadir, i) => {
  botonAñadir.addEventListener("click", () => {
    
    let k = carrito.findIndex((elements) => elements.name === cafecitos[i].name);

    if (carrito.find((element) => element.name === cafecitos[i].name)) {
      carrito[k].quantity++;
    } else {
      carrito.push(cafecitos[i]);
      carrito.sort((a, b) => a.id - b.id);
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    sumaCantProductos(carrito);
  });
});
