import {MapItemArray, Square, SquareMap} from "./interfaces"
import {selectedItems, ctrlPressed, setSelectedItems, automat, mapItems, setSelectedImgItem, setSelectionStart, setSelectionEnd, updateSelection, previousMapItems, setPreviousMapItems} from "./global"

export class MapItem implements SquareMap {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public x: number;
    public y: number;
    public img: ImageData = null
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.canvas = document.createElement("canvas");
      this.canvas.width = 25;
      this.canvas.height = 25;
      this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
      this.canvas.addEventListener("mousedown", (e) => this.click(this.canvas, e));
      this.canvas.addEventListener("mouseup", ()=>this.unClick(this.canvas));
    }
  
    click(canvas: HTMLCanvasElement, e: MouseEvent): void {
      console.log(mapItems);
      
      console.log(selectedItems, e.button);
      console.log(this.canvas);
      
      if(e.button == 2){
        return
      }
      setSelectionStart(this)
      setSelectionEnd(null)
      
      if (!ctrlPressed) {
        setSelectedItems([this])
      }
      else{
        if (this.canvas.style.borderColor == "red") {
          let temp = selectedItems.filter((obj) => {
            return obj !== this;
          });
          setSelectedItems(temp)
        } else {
          selectedItems.push(this);
        }
      }
      console.log(this.x, this.y, ctrlPressed);

      updateSelection()
    }

    unClick(canvas: HTMLCanvasElement): void{
      console.log("unclick");
      selectedItems.push(this)
      setSelectionEnd(this)
      updateSelection()
    }
  
    setBgImage(img: ImageData): void {
      this.img = img
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
      let prevMapItems: Array<MapItemArray> = []
      
      for (let i = 0; i < 20; i++) {
        let row: MapItemArray = mapItems[i];
        prevMapItems.push(row)
      }

      setPreviousMapItems(prevMapItems)

      setSelectedImgItem(this)
      selectedItems.forEach((e) => {
        e.setBgImage(this.context.getImageData(0, 0, 25, 25));
      });
  
      if (automat) {
        console.log(automat);
        
        let x = selectedItems[selectedItems.length - 1].x;
        let y = selectedItems[selectedItems.length - 1].y;
        let selected: MapItem;
        if (y == 29) {
          selected = mapItems[x + 1][0];
        } else {
          selected = mapItems[x][y + 1];
        }
        setSelectedItems([selected])
      } else {
        setSelectedItems([])
      }

      updateSelection()     
    }
  }