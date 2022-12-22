const color1 = document.querySelectorAll("input")[0];
const color2 = document.querySelectorAll("input")[1];
const css = document.querySelector("h3");
const body = document.getElementById("gradient");

function addGradient() {
  body.style.background =
    "linear-gradient(to right , " + color1.value + "," + color2.value + ")";
  css.innerText = body.style.background;
}

color1.addEventListener("input", addGradient);

color2.addEventListener("input", addGradient);
