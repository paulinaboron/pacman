import { createMap, createImgItems } from "./start";

import {
  map,
  selectedItems,
  autoCheckbox,
  setCtrlPressed,
  setAutomat,
  setSelectedItems,
  selectionDiv,
} from "./global";

autoCheckbox.onchange = function () {
  setAutomat(autoCheckbox.checked);
};

document.onkeydown = function (e) {
  console.log(e.key);
  switch (e.key) {
    case "Control":
      setCtrlPressed(true);
      break;
    case "Meta":
      setCtrlPressed(true);
      break;
    case "Delete":
      deletePressed();
      break;
    default:
      break;
  }
};

document.onkeyup = function (e) {
  console.log(e.key);

  switch (e.key) {
    case "Control":
      setCtrlPressed(false);
      break;
    case "Meta":
      setCtrlPressed(false);
      break;
    default:
      break;
  }
};

let startX = 0
let startY = 0
let mouseDown = false

document.onmousedown = function (e) {
  console.log("downnnn");
  
  e.preventDefault()
  if (e.button == 2) {
    showMenu()
  } else {
    if (document.getElementById("menu-container").style.display == "block")
      hideMenu()
    else {
      mouseDown = true
      selectionDiv.style.display = "block"
      selectionDiv.style.top = e.clientY + "px"
      selectionDiv.style.left = e.clientX + "px"
      startX = e.clientX
      startY = e.clientY
    }
  }
}

document.onmousemove = function (e) {
  if (mouseDown) {
    selectionDiv.style.width = Math.abs(startX - e.clientX) + "px"
    selectionDiv.style.height = Math.abs(startY - e.clientY) + "px"
  }
}

document.onmouseup = function (e) {
  mouseDown = false
  selectionDiv.style.width = "0px"
  selectionDiv.style.height = "0px"
  selectionDiv.style.display = "none"
}

function showMenu() {
  document.getElementById("menu-container").style.display = "block"
}

function hideMenu() {
  document.getElementById("menu-container").style.display = "none"
}

function deletePressed() {
  console.log("ddd");

  selectedItems.forEach((e) => {
    e.canvas.style.borderColor = "white";
    e.context.clearRect(0, 0, 25, 25);
  });
  setSelectedItems([]);
}

// document.getElementById("delete").onclick = function(){
//   deletePressed()
// }

createMap();
createImgItems();
