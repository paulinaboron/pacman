import * as global from "./global"
import { MapItem, ImgItem } from "./items";

export function createMap() {
  for (let i = 0; i < 20; i++) {
    let row: Array<MapItem> = [];
    for (let j = 0; j < 30; j++) {
      let mapItem = new MapItem(i, j);
      global.map.appendChild(mapItem.canvas);
      row.push(mapItem);
    }
    global.mapItems.push(row);
  }
}

export function createImgItems() {
  const img = new Image();
  img.src = "./sprites.png";
  img.onload = function () {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 16; j++) {
        let item = new ImgItem();
        item.draw(i, j);
        global.items.appendChild(item.canvas);
      }
    }

    for (let i = 0; i < 20; i++) {
      for (let j = 16; j < 32; j++) {
        let item = new ImgItem();
        item.draw(i, j);
        global.items.appendChild(item.canvas);
      }
    }
  };
}
