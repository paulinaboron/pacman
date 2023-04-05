import * as global from "./global"
import { MapItem, ImgItem } from "./items";
import type { MapItemArray } from "./interfaces";

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

export function updateMap(array: Array<Uint8ClampedArray>){
  console.log("update", array);
  
  global.map.innerHTML = ""

  for (let i = 0; i < 600; i++) {
    let row: Uint8ClampedArray = array[i];
      let mapItem = new MapItem(i, 1);

      if(row != null){
         var idata = mapItem.context.createImageData(25, 25);
     for(var j = 0; j < idata.data.length; j++) idata.data[j] = row[i];
      console.log(row);



      mapItem.img = idata
      mapItem.context.putImageData(idata, 0, 0)
      }
     
      global.map.appendChild(mapItem.canvas);
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
