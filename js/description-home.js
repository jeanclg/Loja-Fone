const $heart = document.querySelector(".heart");

$heart.addEventListener("click", HandleClick);

function HandleClick() {
    console.log("clicou no " + $heart.className);
}