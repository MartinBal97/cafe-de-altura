const cafecitos = [
    { id: 1, name: 'Costa Rica Tarrazú',description:'Paquete de café, 250 gr',price:9.00,img: '../img/bolsaCostarica.png' },
    { id: 2, name: 'Colombia Los Naranjos',description:'Paquete de café, 250 gr',price:9.00, img: '../img/bolsaColombia.png' },
    { id: 3, name: 'Laos Amanecer',description:'Paquete de café, 250 gr',price:9.00, img: '../img/bolsaLaos.png' },
    { id: 4, name: 'Etiopía Yrgacheff',description:'Paquete de café, 250 gr',price:9.0, img: '../img/bolsaEtiopia.png' },
    { id: 5, name: 'Kenia Ndunduri ',description:'Paquete de café, 250 gr',price:9.00, img: '../img/bolsaKenia.png' },
    { id: 6, name: 'Etiopía Sidamo',description:'Paquete de café, 250 gr',price:9.00, img: '../img/bolsaEtiopiaSidema.png' },
    { id: 7, name: 'Costa Rica Monte Bello',description:'Paquete de café, 250 gr',price:9.00, img: '../img/bolsaCostaRicaMonte.png' },
    { id: 8, name: 'Colombia La Casita',description:'Paquete de café, 250 gr',price:9.00, img: '../img/bolsaColombiaAgotado.png',isDisabled:'disabled' }
]

const containerCart = document.querySelector(".ssContainerCart")

cafecitos.forEach((e,i)=>{
    containerCart.innerHTML += `
            <div id="${cafecitos[i].id}" class="ssCart">
                <img src="${cafecitos[i].img}" alt="${cafecitos[i].name}" />
                <h3>${cafecitos[i].name}</h3>
                <p>€ ${cafecitos[i].price}</p>
                <button ${cafecitos[i].isDisabled} class="add">Añadir</button>
            </div>`
})

const botonesAñadir = document.querySelectorAll(".ssContainerCart .ssCart .add")
const quantityProduct = document.querySelector(".quantityProducts")
const carrito = []

botonesAñadir.forEach((botonAñadir, i) => {
    botonAñadir.addEventListener('click', () => {
        // sacas de LocalStorage
        // pusheas
        // metes en LocalStorage
        carrito.push(cafecitos[i])

        const newCarrito = carrito.reduce((acc, e) => {
            if (!acc.includes(e)) {
              acc.push(e);
            }
            return acc;
          }, []);
        quantityProduct.innerText =newCarrito.length
        localStorage.setItem('carrito', JSON.stringify(newCarrito))
    })
})
