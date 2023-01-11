const cafecitos = [
    { id: 1, name: 'Costa Rica Tarrazú',description:'Paquete de café, 250 gr' ,img: '../img/bolsaCostarica.png' },
    { id: 2, name: 'Colombia Los Naranjos',description:'Paquete de café, 250 gr', img: '../img/bolsaColombia.png' },
    { id: 3, name: 'Laos Amanecer',description:'Paquete de café, 250 gr', img: '../img/bolsaLaos.png' },
    { id: 4, name: 'Etiopía Yrgacheff',description:'Paquete de café, 250 gr', img: '../img/bolsaEtiopia.png' },
    { id: 5, name: 'Kenia Ndunduri ',description:'Paquete de café, 250 gr', img: '../img/bolsaKenia.png' },
    { id: 6, name: 'Etiopía Sidamo',description:'Paquete de café, 250 gr', img: '../img/bolsaEtiopiaSidema.png' },
    { id: 7, name: 'Costa Rica Monte Bello',description:'Paquete de café, 250 gr', img: '../img/bolsaCostaRicaMonte.png' },
    { id: 8, name: 'Colombia La Casita',description:'Paquete de café, 250 gr', img: '../img/bolsaColombiaAgotado.png' }
]

const arrowThirdSection = document.querySelectorAll(".tsContainerContent .pregunta .arrowthirdSection");

arrowThirdSection.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle('rotate')
    arrow.parentNode.parentNode.children[1].classList.toggle('showContent')
  });
});


