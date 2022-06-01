import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";

/**
 * Faz uma lixeira ser uma zona de drop.
 * @param {String} trash_id id html da lixeira. Ex: .trashPapel
 */
function trash(trash_id) {
  interact(type).draggable({
    modifiers: [
      interact.modifiers.restrictRect({
        endOnly: true,
      }),
    ],
    listeners: { move: dragMoveListener },
  });
}

/**
 *
 * @param {String} object id html do objeto. Ex: .objPapel
 */
function object(object) {
  interact(object).draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        endOnly: true,
      }),
    ],
    listeners: { move: dragMoveListener },
  });
}
