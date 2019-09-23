const $addChart = document.querySelector(".-second");
let itemCount = 10;

$addChart.addEventListener("click", AddChart);

function AddChart() {
    const $chartQtd = document.querySelector(".-last");
    itemCount++;
    $chartQtd.textContent = `Carrinho (${itemCount})`;
}