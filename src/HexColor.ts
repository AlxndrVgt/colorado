import { InvalidHexStringError } from "./errors/InvalidHexStringError";
import { IColor } from "./IColor";
import { RgbColor } from "./RgbColor";

/**
 * Class representing a Hexadecimal color.
 * Implements the IColor interface.
 */
export class HexColor implements IColor {
  /**
   * The hex color string, always in the format of a valid hex code.
   * Example: '#FF5733' or '#F53'.
   * @type {string}
   */
  public hex: string;

  /**
   * Creates an instance of HexColor.
   *
   * @param {string} hex - The hex color code.
   * @throws {InvalidHexStringError} If the provided hex string is invalid.
   */
  constructor(hex: string) {
    if (!this.isValidHex(hex)) {
      throw new InvalidHexStringError();
    }
    this.hex = hex;
  }

  /**
   * Converts the Hexadecimal color to an RGB color.
   *
   * @returns {RgbColor} An instance of RgbColor representing the same color in RGB format.
   */
  toRgb(): RgbColor {
    // Remove leading hashtag if present
    let hex = this.hex.replace("#", "");

    // Convert 3-digit hex to 6-digit hex if necessary
    hex = this.convert3DigitTo6Digit(hex);

    // Convert hex string to RGB values
    const bigint = parseInt(hex, 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;

    return new RgbColor(red, green, blue);
  }

  /**
   * Returns this instance in Hex format.
   *
   * @returns {RgbColor} This hex color instance.
   */
  toHex(): HexColor {
    return this;
  }

  /**
   * Returns the hex color string.
   *
   * @returns {string} The hex color string, e.g., '#FF5733'.
   */
  toString(): string {
    return this.hex;
  }

  /**
   * Validates if a given string is a valid hex color code.
   *
   * @param {string} hex - The hex color string to validate.
   * @returns {boolean} True if the hex string is valid, otherwise false.
   */
  private isValidHex(hex: string): boolean {
    // Regex to check if hex is 3 or 6 digits
    const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;

    return hexRegex.test(hex);
  }

  /**
   * Converts a 3-digit hex string to a 6-digit hex string.
   *
   * @param {string} hex - The 3-digit or 6-digit hex string.
   * @returns {string} The expanded 6-digit hex string.
   */
  private convert3DigitTo6Digit(hex: string): string {
    // If the hex string is 3 digits, expand to 6 digits
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    return hex;
  }
}
