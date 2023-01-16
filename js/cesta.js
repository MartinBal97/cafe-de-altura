// DECLARACION DE VARIABLES
let carrito = JSON.parse(localStorage.getItem("carrito"));
const prodEnvio = document.querySelector(".prodEnvio");
const quantityProducts = document.querySelectorAll(".quantityProducts");
const subtotal = document.querySelector(".totCestaSubtotal");
const total = document.querySelector(".totCestaTotal");
const ivaTotal = document.querySelector(".ivaTotal")
const chequeado = document.querySelector(".chequeado")
const inputsEnvios = document.querySelectorAll(".inputsEnvio");
const envioPrice = document.querySelector(".envioPrice");
const cantProducts = document.querySelectorAll(".cantProd");

// FUNCION QUE RETORNA LA CANTIDAD DE PRODUCTOS DE LA CESTA
const sumaCantProductos = (carrito) => {
  let cantProducts = carrito.reduce((acc, e) => {
    acc += e.quantity;
    return acc;
  }, 0);
  return cantProducts;
};

// FUNCION QUE RETORNA EL PRECIO DE LA CANTIDAD DE PRODUCTOS DE LA CESTA
const precioTotalSoloProductos = (carrito) => {
  let precioTotalProductos = carrito.reduce((acc, e) => {
    acc += e.quantity * e.price;
    return acc;
  }, 0);
  return precioTotalProductos;
};

// FUNCION PARA ACTUALIZAR EN DOM
const updatePrecios = () => {
  quantityProducts.forEach((quantityProduct) => (quantityProduct.innerText = sumaCantProductos(carrito)));
  subtotal.innerText = `${precioTotalSoloProductos(carrito)},00 €`;
  if (chequeado.checked) {
    total.innerText = `${precioTotalSoloProductos(carrito)},00 €`
    ivaTotal.innerText = `${(precioTotalSoloProductos(carrito) * 0.04).toFixed(2)} €`
    envioPrice.innerText = "GRATIS";
  } else {
    total.innerText = `${precioTotalSoloProductos(carrito) + 9},00 €`
    ivaTotal.innerText = `${((precioTotalSoloProductos(carrito) + 9) * 0.04).toFixed(2)} €`
    envioPrice.innerText = 9 + ",00 €";
  }
}

updatePrecios()

if (carrito.length == []) {
  prodEnvio.innerHTML += `<p style="margin:1rem 0;padding:2rem 2rem; background-color:#f4f4f4">NO HAY PRODUCTOS TODAVIA</p>`;
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
                            <p class="priceResumen negritas"><span class="priceResumenSpan">${e.price * e.quantity},00 €</span></p>
                        </div>
                        <hr>`;
  });
}

const btnContadores = document.querySelectorAll(".btn");
let tipoEnvio = document.querySelector('input[name="demoraEnvio"]:checked');

// CONTADORES
btnContadores.forEach((btnContador, i) => {
  btnContador.addEventListener("click", () => {
    // ESTE CONDICIONAL TOMA LOS BOTONES DE INDICE PAR LOS CUALES SON LOS QUE RESTAN Y EL ELSE LOS QUE SUMAN
    if (i % 2 == 0) {
      btnContador.nextElementSibling.innerText--;
      let nameProd = btnContador.parentNode.nextElementSibling.children[1].children[0].innerText;
      let k = carrito.findIndex((elements) => elements.name === nameProd);
      carrito[k].quantity--;
      btnContador.parentNode.parentNode.parentNode.children[1].children[0].innerText = `${carrito[k].price * carrito[k].quantity},00 €`;
      updatePrecios()
      
      // SI EL CONTADORE LLEGA A 0...
      if (carrito[k].quantity <= 0) {
        btnContador.parentNode.parentNode.parentNode.nextElementSibling.remove();
        btnContador.parentNode.parentNode.parentNode.remove();
        carrito.splice(k, 1);
        if (carrito.length == 0) {prodEnvio.innerHTML += `<p style="margin:1rem 0;padding:2rem 2rem; background-color:#f4f4f4">NO HAY PRODUCTOS TODAVIA</p>`;}
        updatePrecios()
      }
    } else {
      btnContador.previousElementSibling.innerText++;
      let nameProd = btnContador.parentNode.nextElementSibling.children[1].children[0].innerText;
      let k = carrito.findIndex((elements) => elements.name === nameProd);
      carrito[k].quantity++;
      updatePrecios()
      btnContador.parentNode.parentNode.parentNode.children[1].children[0].innerText = `${carrito[k].price * carrito[k].quantity},00 €`;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
  })
})

inputsEnvios.forEach((inputEnvios) => {
  inputEnvios.addEventListener("change", (e) => {
    updatePrecios()
  })
})
