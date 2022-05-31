import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";

var infoPontos = document.getElementById("score");
var pontos = 0;

interact(".trashPlastico").dropzone({
  accept: ".objPlastico, .objMetal, .objPapel, .objOrganico",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
    console.log(draggableElement.className == "objPlastico notSelected");
    if (draggableElement.className == "objPlastico notSelected") {
      console.log("Dropado");
      pontuou();
    } else {
      console.log("Dropado errado");
    }
  },
});

interact(".objPlastico").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

interact(".trashMetal").dropzone({
  accept: ".objMetal",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
    console.log("Dropado");
    pontuou();
  },
});

interact(".objMetal").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

interact(".trashPapel").dropzone({
  accept: ".objPapel",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
    console.log("Dropado");
    pontuou();
  },
});

interact(".objPapel").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

interact(".trashOrganico").dropzone({
  accept: ".objOrganico",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
    console.log("Dropado");
    pontuou();
  },
});

interact(".objOrganico").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

function iniciarJogo() {
  var goFS = document.getElementById("goFS");
  goFS.addEventListener(
    "click",
    () => {
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
