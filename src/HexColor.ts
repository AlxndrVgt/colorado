import { InvalidHexStringError } from "./errors/InvalidHexStringError";
import { IColor } from "./IColor";
import { RgbColor } from "./RgbColor";

export class HexColor implements IColor {
  public hex: string;

  constructor(hex: string) {
    if (!this.isValidHex(hex)) {
      throw new InvalidHexStringError();
    }
    this.hex = hex;
  }

  toRgb(): RgbColor {
    // Remove leading hashtag
    let hex = this.hex.replace("#", "");

    // Convert to 6 digits
    hex = this.convert3DigitTo6Digit(hex);

    // Convert hex to RGB
    const bigint = parseInt(hex, 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;

    return new RgbColor(red, green, blue);
  }

  toHex(): HexColor {
    return this;
  }

  toString(): string {
    return this.hex;
  }

  private isValidHex(hex: string): boolean {
    const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
    return hexRegex.test(hex);
  }

  private convert3DigitTo6Digit(hex: string): string {
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    return hex;
  }
}