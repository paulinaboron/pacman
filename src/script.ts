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


document.getElementById("selectFile").onchange = async function (e) {
  hideMenu()
  console.log("load ddddddd");
  console.log(e, e.target);
  let fileList: FileList | null = (e.target as HTMLInputElement).files;
  let file: File | null = fileList?.item(0);
  console.log(fileList);
  let text = await file.text();
  let json: Array<Array<Uint8ClampedArray>> = JSON.parse(text) as Array<Array<Uint8ClampedArray>>;
  console.log(json);
  console.log(mapItems);

  updateMap(json);
  hideMenu()
}

document
  .getElementById("menu-container")
  .addEventListener("mousedown", function (e) {
    let target: HTMLElement = e.target as HTMLElement;
    console.log("hide", e.target, target.id);

    switch (target.id) {
      case "menu-container":
        hideMenu();
        break;
      case "undo":
        undo();
        hideMenu();
        break;
      case "redo":
        hideMenu();
        break;
      case "copy":
        hideMenu();
        break;
      case "paste":
        hideMenu();
        break;
      case "delete":
        deletePressed();
        hideMenu();
        break;
      case "save":
        save("data.json", "application/json");
        hideMenu();
        break;
      default:
        break;
    }

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
    e.img = null;
  });
  setSelectedItems([]);
  updateSelection();
}

function undo() {
  console.log("undoo");
}

function save(filename: string, type: string) {
  let imgDataArray = [] as Array<Array<Uint8ClampedArray>>

  mapItems.forEach(e => {
    let array = [] as Array<Uint8ClampedArray>
    for (let i = 0; i < 30; i++) {
      if (e[i].img == null) array.push(null)
      else array.push(e[i].img.data)
    }
    imgDataArray.push(array)
  })
  console.log(imgDataArray);
  let data = JSON.stringify(imgDataArray)
  const blob = new Blob([data], { type: type });
  console.log(blob);

  const url = URL.createObjectURL(blob);
  console.log(url);

  const link = document.createElement("a");
  link.innerText = "save";
  link.download = filename;

  let reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = function () {
    link.href = reader.result as string;
    link.click();
  };
}

createMap();
createImgItems();

