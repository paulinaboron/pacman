import { createMap, createImgItems, updateMap } from "./start";

import {
  map,
  mapItems,
  selectedItems,
  autoCheckbox,
  setCtrlPressed,
  setAutomat,
  setSelectedItems,
  selectionDiv,
  selectionStart,
  selectionEnd,
  updateSelection,
  previousMapItems,
  setMapItems,
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

let startX = 0;
let startY = 0;
let mouseDown = false;

map.addEventListener("mousedown", function (e) {
  console.log("downnnncdddd");

  e.preventDefault();
  if (e.button == 2) {
    showMenu();
  } else {
    mouseDown = true;
    selectionDiv.style.display = "block";
    selectionDiv.style.top = e.pageY + "px";
    selectionDiv.style.left = e.clientX + "px";
    startX = e.clientX;
    startY = e.pageY;
  }
});

document
  .getElementById("menu-container")
  .addEventListener("mousedown", function (e) {
    console.log('hide');
    hideMenu();
  });

document.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    selectionDiv.style.width = Math.abs(startX - e.clientX) - 3 + "px";
    selectionDiv.style.height = Math.abs(startY - e.pageY) - 3 + "px";
  }
});

document.addEventListener("mouseup", (e) => {
  console.log("upp");

  mouseDown = false;
  selectionDiv.style.width = "0px";
  selectionDiv.style.height = "0px";
  selectionDiv.style.display = "none";

  if (selectionEnd != null) {
    for (let i = selectionStart.x; i <= selectionEnd.x; i++) {
      for (let j = selectionStart.y; j <= selectionEnd.y; j++) {
        selectedItems.push(mapItems[i][j]);
      }
    }
  }
  updateSelection();
});

function showMenu() {
  document.getElementById("menu-container").style.display = "block";
}

function hideMenu() {
  document.getElementById("menu-container").style.display = "none";
}

function deletePressed() {
  console.log("ddd");

  selectedItems.forEach((e) => {
    e.context.clearRect(0, 0, 25, 25);
    e.img = null
  });
  setSelectedItems([]);
  updateSelection();
}

function undo() {
  console.log("undoo");

  // setMapItems(previousMapItems)
  updateMap(previousMapItems)

}

function save(data: string, filename: string, type: string) {
  const blob = new Blob([data], { type: type });
  console.log(blob);

  const url = URL.createObjectURL(blob);
  console.log(url);

  const link = document.createElement("a");
  link.innerText = "save";
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 0)
}

function uploadFile(event: Event) {
  console.log("load");

  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;
  if (fileList) {
    console.log("FileUpload -> files", fileList);
  }

}



document.getElementById("delete").addEventListener("mousedown", function () {
  deletePressed();
});

document.getElementById("undo").addEventListener("mousedown", function () {
  undo()
})

document.getElementById("save").addEventListener("mousedown", function () {
  let data = JSON.stringify(mapItems);
  save(data, "data.json", "application/json")
})

createMap();
createImgItems();
