const $heart = document.querySelector(".heart");
const $star1 = document.querySelector(".-star1");
const $star2 = document.querySelector(".-star2");
const $star3 = document.querySelector(".-star3");
const $star4 = document.querySelector(".-star4");
const $star5 = document.querySelector(".-star5");

let starClick = 0;

$heart.addEventListener("click", HandleClick);
$star1.addEventListener("click", StarsClick1);
$star2.addEventListener("click", StarsClick2);
$star3.addEventListener("click", StarsClick3);
$star4.addEventListener("click", StarsClick4);
$star5.addEventListener("click", StarsClick5);

function HandleClick() {
    $heart.classList.toggle("-active");
}

function StarsClick1() {
    $star1.classList.toggle("-active");
}

function StarsClick2() {
    null;
}

function StarsClick3() {
    null;
}

function StarsClick4() {
    null;
}

function StarsClick5() {
    null;
}