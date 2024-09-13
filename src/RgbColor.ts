import { HexColor } from "./HexColor";
import { IColor } from "./IColor";

export class RgbColor implements IColor {
  private red: number;
  private green: number;
  private blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = this.clampValue(red);
    this.green = this.clampValue(green);
    this.blue = this.clampValue(blue);
  }

  toRgb(): RgbColor {
    return this;
  }

  toHex(): HexColor {
    const hex = "#" + (1 << 24 | this.red << 16 | this.green << 8 | this.blue).toString(16).slice(1);

    return new HexColor(hex);
  }

  toString(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  private clampValue(value: number, min: number = 0, max: number = 255): number {
    return Math.max(min, Math.min(max, value));
  }
}