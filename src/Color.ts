import { InvalidConstructorArgumentsError } from './errors/InvalidConstructorArgumentsError.js';
import { InvalidHexStringError } from './errors/InvalidHexStringError.js';

enum ColorType {
  RGB,
  HEX,
}

export class Color {
  private type: ColorType;
  private red: number | null = null;
  private green: number | null = null;
  private blue: number | null = null;
  private hex: string | null = null;

  constructor(arg1: number | string, arg2?: number, arg3?: number) {
    if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "number") {
      // RGB values provided
      this.type = ColorType.RGB;
      this.red = this.clampValue(arg1);
      this.green = this.clampValue(arg2);
      this.blue = this.clampValue(arg3);
    } else if (typeof arg1 === "string" && arg2 === undefined && arg3 === undefined) {
      // Check if the string is a valid hex code
      if (!this.isValidHex(arg1)) {
        throw new InvalidHexStringError();
      }

      // HEX value provided
      this.type = ColorType.HEX;
      this.hex = arg1;
    } else {
        // Invalid constructor arguments
        throw new InvalidConstructorArgumentsError();
    }
  }

  public isRgb(): boolean {
    return this.type === ColorType.RGB;
  }

  public isHex(): boolean {
    return this.type === ColorType.HEX;
  }

  private isValidHex(hex: string): boolean {
    const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
    return hexRegex.test(hex);
  }

  private clampValue(value: number, min: number = 0, max: number = 255): number {
    return Math.max(min, Math.min(max, value));
  }

  public toString() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  public toArray() {
    return [this.red, this.green, this.blue];
  }

  public toObject() {
    return {
      red: this.red,
      green: this.green,
      blue: this.blue
    };
  }
}