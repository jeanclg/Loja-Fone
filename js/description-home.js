const $heart = document.querySelector(".heart");

$heart.addEventListener("click", HandleClick);

function HandleClick() {
    $heart.classList.toggle("-active");
}