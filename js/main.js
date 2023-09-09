function activarPanel() {
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");


    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}

var link = document.getElementById("fileCss");

function azul() {
    link.href="css/style-secundary.css";
}

function verde() {
    link.href="css/style-terciary.css";
}

function principal() {
    link.href="css/style.css";
}