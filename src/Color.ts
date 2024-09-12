import { InvalidConstructorArgumentsError } from './errors/InvalidConstructorArgumentsError';
import { InvalidHexStringError } from './errors/InvalidHexStringError';

export class Color {
  private red: number;
  private green: number;
  private blue: number;

  constructor(arg1: number | string, arg2?: number, arg3?: number) {
    if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "number") {
      // RGB values provided
      this.red = this.clampValue(arg1);
      this.green = this.clampValue(arg2);
      this.blue = this.clampValue(arg3);
    } else if (typeof arg1 === "string" && arg2 === undefined && arg3 === undefined) {

      // Check if the string is a valid hex code
      if (!this.isValidHex(arg1)) {
        throw new InvalidHexStringError();
      }

      // Remove leading hashtag
      let hex = arg1;
      hex = hex.replace("#", "");

      // Convert 3-digit hex to 6-digit hex if needed
      if (hex.length === 3) {
        hex = `${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
      }

      // Convert hex to RGB
      const bigint = parseInt(hex, 16);
      this.red = (bigint >> 16) & 255;
      this.green = (bigint >> 8) & 255;
      this.blue = bigint & 255;
    } else {
        // Invalid constructor arguments
        throw new InvalidConstructorArgumentsError();
    }
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
}