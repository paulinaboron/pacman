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

/**
 * @param array - array that contains the image data of every map item
 */
export function updateMap(array: Array<Array<Uint8ClampedArray>>){
  console.log("update", array);
  
  global.map.innerHTML = ""

  array.forEach((e, i) => {
    e.forEach((f, j) => {
      let mapItem = new MapItem(i, j);
      if(f != null){
        let idata = mapItem.context.createImageData(25, 25);
        for(var k = 0; k < idata.data.length; k++) idata.data[k] = f[k];
        mapItem.img = idata
        mapItem.context.putImageData(idata, 0, 0)
      }
      global.map.appendChild(mapItem.canvas);
    })
  })
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
