import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";
// import interact from "interactjs";

var infoPontos = document.getElementById("score");
var pontos = 0;

function iniciarJogo() {
  var goFS = document.getElementById("goFS");
  goFS.addEventListener(
    "click",
    function () {
      var videoElement = document.getElementById("main").requestFullscreen();
      videoElement.requestFullscreen();
    },
    false
  );
}
function pontuou() {
  pontos += 1000;
  infoPontos.innerHTML = pontos;
}
function acertou() {}
