import { MapItemArray } from "./interfaces";
import type { MapItem } from "./items";
import { ImgItem } from "./items";

const map: HTMLDivElement = document.getElementById("map") as HTMLDivElement;
const items: HTMLDivElement = document.getElementById("items") as HTMLDivElement;
const autoCheckbox: HTMLInputElement = document.getElementById(
  "automat"
) as HTMLInputElement;
const selectionDiv: HTMLDivElement = document.getElementById("selection") as HTMLDivElement;

let mapItems: Array<MapItemArray> = [];
let selectedItems: Array<MapItem> = [];
let selectedImgItem = new ImgItem();
let automat: boolean = autoCheckbox.checked;
let ctrlPressed: boolean = false;

let selectionStart: MapItem = null
let selectionEnd: MapItem = null

function setCtrlPressed(b: boolean) {
  ctrlPressed = b;
}

function setAutomat(b: boolean) {
  automat = b;
}

function setSelectedItems(a: Array<MapItem>) {
  selectedItems = a;
}

function setSelectedImgItem(i: ImgItem) {
  selectedImgItem = i;
}

function setSelectionStart(i: MapItem) {
  selectionStart = i;
}

function setSelectionEnd(i: MapItem) {
  selectionEnd = i;
}

function updateSelection(){
  mapItems.forEach(e=>{
    for(let i = 0; i<30; i++){
      e[i].canvas.style.borderColor = "white"
    }
  })

  selectedItems.forEach(e=>{
    e.canvas.style.borderColor = "red"
  })
}

export {
  map,
  items,
  autoCheckbox,
  selectionDiv,
  mapItems,
  selectedItems,
  selectedImgItem,
  automat,
  ctrlPressed,
  selectionStart,
  selectionEnd,
  setCtrlPressed,
  setAutomat,
  setSelectedItems,
  setSelectedImgItem,
  setSelectionStart,
  setSelectionEnd,
  updateSelection
};
