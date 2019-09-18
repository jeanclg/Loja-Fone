const $heart = window.document.querySelector(".heart");
const $addChart = window.document.querySelector(".-second");
const $chartQtd = window.document.querySelector(".-last");

$heart.addEventListener("click", HandleClick);
$addChart.addEventListener("click", AddChart);

function HandleClick() {
    console.log("clicou no " + $heart.className);
}

function AddChart() {
    console.log("Funcionou!");

    $chartQtd.innerHTML = "Carrinho(11)";
}