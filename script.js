
// create variable to shorten the code/ short hand
let input1 = document.querySelector(".color1");
let input2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let button = document.getElementById("random");
let onPageLoad1 = input1.value;
let onPageLoad2 = input2.value;

function changeBackground() {
	body.style.background = 
	"linear-gradient(to right, " + input1.value + ", " + input2.value +")";

css.textContent = body.style.background + ";";
}
function onPageLoad() {
	body.style.background = "linear-gradient(to right," + onPageLoad1 + ","+ onPageLoad2 +")";
}

function randomBackground() {
  var randomColorNum1 = Math.floor(Math.random() * 255 + 1),
  	randomColorNum2 = Math.floor(Math.random() * 255 + 1),
	randomColorNum3 = Math.floor(Math.random() * 255 + 1),
	randomColorNum4 = Math.floor(Math.random() * 255 + 1),
	randomColorNum5 = Math.floor(Math.random() * 255 + 1),
	randomColorNum6 = Math.floor(Math.random() * 255 + 1);
  body.style.background = `linear-gradient(to right, rgb(${randomColorNum1},
  		${randomColorNum2}, ${randomColorNum3}), rgb(${randomColorNum4},
  		${randomColorNum5}, ${randomColorNum6}))`;
}

onPageLoad();



input1.addEventListener("input", changeBackground);

input2.addEventListener("input", changeBackground);

button.addEventListener("click", randomBackground);
	
