const carrito = JSON.parse(localStorage.getItem('carrito'))
const prodEnvio = document.querySelector(".prodEnvio")
const quantityProducts = document.querySelectorAll(".quantityProducts")
console.log(quantityProducts);

if (localStorage.length == 0) {
    prodEnvio.innerHTML += `<p style="padding:2rem 2rem; background-color:#f4f4f4">NO HAY PRODUCTOS TODAVIA</p>`
} else {
    carrito.forEach((e,i)=>{
      prodEnvio.innerHTML += `
                        <div class="resumenCesta">
                            <div class="joinDivs">
                                <div class="moreLess">
                                    <p class="btn">-</p>
                                    <p class="cantidadCesta">1</p>
                                    <p class="btn">+</p>
                                </div>
    
                                <div class="productDetail">
                                    <img src="${carrito[i].img}" alt="">
                                    <div>
                                        <p class="bagsNames">${carrito[i].name}</p>
                                        <p>${carrito[i].description}</p>
                                    </div>
                                </div>
                            </div>
                            <p class="priceResumen negritas">${carrito[i].price} €</p>
                        </div>
                        <hr>`
    })
    quantityProducts.forEach((quantityProduct)=>quantityProduct.innerText =carrito.length)
    prodEnvio.lastChild.remove();
}
