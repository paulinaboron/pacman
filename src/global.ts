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
  setCtrlPressed,
  setAutomat,
  setSelectedItems,
  setSelectedImgItem,
};
