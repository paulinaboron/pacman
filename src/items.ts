import {Square, SquareMap} from "./interfaces"
import {selectedItems, ctrlPressed, setSelectedItems, automat, mapItems, setSelectedImgItem} from "./global"

export class MapItem implements SquareMap {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public x: number;
    public y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.canvas = document.createElement("canvas");
      this.canvas.width = 25;
      this.canvas.height = 25;
      this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
      this.canvas.addEventListener("mousedown", () => this.click(this.canvas));
      this.canvas.addEventListener("mouseup", ()=>this.unClick(this.canvas));
    }
  
    click(canvas: HTMLCanvasElement): void {
      if (selectedItems.length > 0 && ctrlPressed == false) {
        selectedItems.forEach((e) => {
          e.canvas.style.borderColor = "white";
        });
      }
      if (ctrlPressed) {
        if (this.canvas.style.borderColor == "red") {
          let temp = selectedItems.filter((obj) => {
            return obj !== this;
          });
          setSelectedItems(temp)
          this.canvas.style.borderColor = "white";
        } else {
          selectedItems.push(this);
          canvas.style.borderColor = "red";
        }
      } else {
        selectedItems[0] = this;
        canvas.style.borderColor = "red";
      }
      console.log(this.x, this.y, ctrlPressed);
    }

    unClick(canvas: HTMLCanvasElement): void{
      canvas.style.borderColor = "red"
      console.log("unclick");
      
    }
  
    setBgImage(img: ImageData): void {
      this.context.putImageData(img, 0, 0);
    }
  }

  const img = new Image();
  img.src = "./sprites.png";
  img.crossOrigin = "Anonymous";

  export class ImgItem implements Square {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
  
    constructor() {
      this.canvas = document.createElement("canvas");
      this.canvas.width = 25;
      this.canvas.height = 25;
      this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
      this.canvas.addEventListener("click", () => this.click());
    }
  
    draw(i: number, j: number): void {
      this.context.drawImage(img, 1 + 48 * j, 1 + 48 * i, 47, 47, 0, 0, 25, 25);
    }
  
    click(): void {
      setSelectedImgItem(this)
      selectedItems.forEach((e) => {
        e.canvas.style.borderColor = "white";
        e.setBgImage(this.context.getImageData(0, 0, 25, 25));
      });
  
      if (automat) {
        let x = selectedItems[selectedItems.length - 1].x;
        let y = selectedItems[selectedItems.length - 1].y;
        let selected: MapItem;
        if (y == 29) {
          selected = mapItems[x + 1][0];
        } else {
          selected = mapItems[x][y + 1];
        }
        setSelectedItems([selected])
        selected.canvas.style.borderColor = "red";
      } else {
        setSelectedItems([])
      }
    }
  }