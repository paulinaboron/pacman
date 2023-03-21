import type { MapItem } from "./items";

export interface Square {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export interface SquareMap extends Square {
  x: number;
  y: number;
}

export interface MapItemArray {
  [index: number]: MapItem;
}
