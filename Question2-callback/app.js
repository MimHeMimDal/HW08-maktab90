"use strict";

function elEditor(el) {
  el.style.position = "absolute";
  el.style.left = "50%";
  el.style.top = "50%";
  el.style.transform = "translate(-50%, -50%)";
  el.style.backgroundColor = "red";
  el.style.width = "50%";
  el.style.height = "50%";
  document.body.append(el);
}

function elCreator(elName, callback) {
  let element = document.createElement(elName);
  callback(element);
}

elCreator("div", elEditor);
