import { createMap, createImgItems } from "./start";

import {
  selectedItems,
  autoCheckbox,
  setCtrlPressed,
  setAutomat,
  setSelectedItems,
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

document.onmousedown = function(e){
  if(e.button == 2){
    showMenu()
  }
}

function showMenu(){
  
}

function deletePressed() {
  console.log("ddd");

  selectedItems.forEach((e) => {
    e.canvas.style.borderColor = "white";
    e.context.clearRect(0, 0, 25, 25);
  });
  setSelectedItems([]);
}

createMap();
createImgItems();
