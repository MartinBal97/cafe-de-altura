

const arrowThirdSection = document.querySelectorAll(".tsContainerContent .pregunta .arrowthirdSection");

arrowThirdSection.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle('rotate')
    arrow.parentNode.parentNode.children[1].classList.toggle('showContent')
  });
});


