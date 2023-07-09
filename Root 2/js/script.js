const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPorfolio = document.querySelector(".img-modal-js");

$portfolio.addEventListener("click", (e) => {
 /*  console.log(e.target); */
 /* console.log(e.target.classList); */
 if (e.target.classList.contains("img-btn-modal-js")) {
  // SRC
  /* let urlimg = e.target.attributes[0].nodeValue */
let urlImg = e.target.attributes[0].nodeValue
$modalImgPorfolio.src = urlImg;


}

});
