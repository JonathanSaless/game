import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";
// import interact from "interactjs";

/**
 * A partir de um id cria uma zona de drop.
 * @param {String} trash_id id html da lixeira. Ex: #trashPapel
 */
function dropzone(trash_id, acceptable_id) {
  interact(trash_id).dropzone({
    accept: acceptable_id,
    ondrop: (event) => {
      var draggableElement = event.relatedTarget;
      draggableElement.style.visibility = "hidden";
    },
  });
}

/**
 *  Torna um objeto arrastável
 * @param {String} obj_id id html do lixo. Ex: #objPapel
 */
function draggable(obj_id) {
  interact(obj_id).draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "#main",
      }),
    ],
    listeners: { move: dragMoveListener },
  });
}

function dragMoveListener(event) {
  let target = event.target;
  // calcula a positção final do objeto
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // realiza a mudança visual do objeto, através de uma transformação
  target.style.transform = `translate(${x}px, ${y}px)`;

  // atualiza a posição do objeto
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

export { dropzone, draggable };
