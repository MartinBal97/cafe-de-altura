let carrito = JSON.parse(localStorage.getItem('carrito'))
const prodEnvio = document.querySelector(".prodEnvio")
const quantityProducts = document.querySelectorAll(".quantityProducts")

const sumaCantProductos = carrito => {
   let cantProducts = carrito.reduce((acc,e) => {
        acc += e.quantity
        return acc;
    } ,0)

    return cantProducts
}
console.log(sumaCantProductos(carrito));
if (carrito.length == 0) {
    prodEnvio.innerHTML += `<p style="margin:1rem 0;padding:2rem 2rem; background-color:#f4f4f4">NO HAY PRODUCTOS TODAVIA</p>`
} else {
    carrito.forEach((e) => {
        prodEnvio.innerHTML += `
                        <div class="resumenCesta">
                            <div class="joinDivs">
                                <div id="${e.id}" class="moreLess">
                                    <p class="btn">-</p>
                                    <p class="cantProd">${e.quantity}</p>
                                    <p class="btn">+</p>
                                </div>

                                <div class="productDetail">
                                    <img src="${e.img}" alt="">
                                    <div>
                                        <p class="bagsNames">${e.name}</p>
                                        <p>${e.description}</p>
                                    </div>
                                </div>
                            </div>
                            <p class="priceResumen negritas"><span class="${e.id}">${e.price * e.quantity}</span> €</p>
                        </div>
                        <hr>`
    })
    changeQuantity(sumaCantProductos(carrito))
    //prodEnvio.lastChild.remove();
}



function changeQuantity(funcCantProd) {
    quantityProducts.forEach((quantityProduct) => {
        quantityProduct.innerText = funcCantProd
        //JSON.parse(localStorage.getItem('carrito')).length
    })
    if (JSON.parse(localStorage.getItem('carrito')).length == 0) {
        prodEnvio.innerHTML += `<p style="margin:1rem 0;padding:2rem 2rem; background-color:#f4f4f4">NO HAY PRODUCTOS TODAVIA</p>`

    }
}

const subtotal = document.querySelector('.totCestaSubtotal')
const total = document.querySelector('.totCestaTotal')
const btnContadores = document.querySelectorAll('.btn')
let tipoEnvio = document.querySelector('input[name="demoraEnvio"]:checked');

let cont = 0;
btnContadores.forEach((btnContador, i) => {
    btnContador.addEventListener('click', () => {
        if (i % 2 == 0) {
            btnContador.nextElementSibling.innerText--
            if (btnContador.nextElementSibling.innerText === '0') {
                btnContador.parentNode.parentNode.parentNode.nextElementSibling.remove()
                btnContador.parentNode.parentNode.parentNode.remove();
                const filterCarrito = carrito.filter(n => n.id != btnContador.parentNode.id)
                carrito = filterCarrito
                localStorage.setItem('carrito', JSON.stringify(carrito))
                subtotal.innerText = precioTotalSoloProductos(carrito);
                changeQuantity()
            }
        } else {
            btnContador.previousElementSibling.innerText++
            console.log(Number(btnContador.parentNode.parentNode.nextElementSibling.children[0].innerText));

        }
    })
})

const inputsEnvios = document.querySelectorAll('.change')
const envioPrice = document.querySelector('.envioPrice')
const cantProducts = document.querySelectorAll('.cantProd')

inputsEnvios.forEach((inputEnvios, i) => {
    inputEnvios.addEventListener('change', (e) => {
        if (e.target.value == "9") {
            envioPrice.innerText = 9 + ' €'
        } else {
            envioPrice.innerText = "GRATIS"
        }

        // console.log();
        // cantProducts.reduce((acc, e))

    })
})

const calculoTotal = (carrito) => {
    subtotal.innerText = carrito.reduce((acc, e) => {
        acc += e.quantity * e.price
        return acc
    }, 0) + ',00$'
}

// const precioTotalSoloProductos = (carrito) => {
//     if (carrito == []) {
//         return 0
//     } else {
//         carrito.reduce((acc, e) => {
//             acc += e.quantity * e.price
//             return acc
//         }, 0) + ',00$'
//     }

//     console.log(acc);
// }


