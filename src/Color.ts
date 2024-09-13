import { InvalidConstructorArgumentsError } from './errors/InvalidConstructorArgumentsError.js';
import { IColor } from './IColor.js';
import { HexColor } from './HexColor.js';
import { RgbColor } from './RgbColor.js';

export class Color implements IColor {
  private color: IColor;

  constructor(arg1: number | string, arg2?: number, arg3?: number) {
    if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "number") {
      // RGB values provided
      this.color = new RgbColor(arg1, arg2, arg3);
    } else if (typeof arg1 === "string" && arg2 === undefined && arg3 === undefined) {
      // HEX value provided
      this.color = new HexColor(arg1);
    } else {
        // Invalid constructor arguments
        throw new InvalidConstructorArgumentsError();
    }
  }

  isRgb(): boolean {
    return this.color instanceof RgbColor;
  }

  isHex(): boolean {
    return this.color instanceof HexColor;
  }

  toRgb(): Color {
    this.color = this.color.toRgb();
    return this;
  }

  toHex(): Color {
    this.color = this.color.toHex();
    return this;
  }

  toString(): string {
    return this.color.toString();
  }
}