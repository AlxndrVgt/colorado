import { InvalidHexStringError } from "./errors/InvalidHexStringError.js";
import { IColor } from "./IColor.js";
import { RgbColor } from "./RgbColor.js";

/**
 * Class representing a Hexadecimal color.
 * Implements the IColor interface.
 */
export class HexColor implements IColor {
  /**
   * The hex color string, always in the format of a valid hex code.
   * Example: '#FF5733', '#F53' or #FF5733cc.
   * @type {string}
   */
  private hex: string;

  /**
   * Creates an instance of HexColor.
   *
   * @param {string} hex - The hex color code.
   * @throws {InvalidHexStringError} If the provided hex string is invalid.
   */
  constructor(hex: string) {
    if (!HexColor.isValidHexString(hex)) {
      throw new InvalidHexStringError();
    }
    this.hex = this.convertTo8Digit(hex);
  }

  /**
   * Converts the Hexadecimal color to an RGB color.
   *
   * @returns {RgbColor} An instance of RgbColor representing the same color in RGB format.
   */
  toRgb(): RgbColor {
    // Extract hex string without the "#" for parsing
    const hex = this.hex.slice(1);

    // Convert hex string to integer
    const bigint = parseInt(hex, 16);

    // Extract RGB values
    const red = (bigint >> 24) & 255;
    const green = (bigint >> 16) & 255;
    const blue = (bigint >> 8 ) & 255;

    // Extract alpha
    const alpha = (bigint & 255) / 255;

    return new RgbColor(red, green, blue, alpha);
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
   * @param {boolean} withAlpha - Wether to include alpha channel in output string or not.
   *
   * @returns {string} The hex color string, e.g., '#FF5733'.
   */
  toString(withAlpha: boolean = false): string {
    if(!withAlpha) {
      // Return 6-digit hex
      return this.hex.slice(0,7);
    }

    return this.hex;
  }

  /**
   * Validates if a given string is a valid hex color code.
   *
   * @param {string} hex - The hex color string to validate.
   * @returns {boolean} True if the hex string is valid, otherwise false.
   */
  public static isValidHexString(hex: string): boolean {
    // Regex to check if hex is 3, 6, or 8 digits (with optional alpha channel)
    const hexRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;

    return hexRegex.test(hex);
  }

  /**
   * Converts a 3-digit or 6-digit hex string to a 8-digit hex string including alpha.
   *
   * @param {string} hex - The 3-digit or 6-digit hex string.
   * @returns {string} The expanded 8-digit hex string.
   */
  private convertTo8Digit(hex: string): string {
    // Remove leading hashtag
    hex = hex.slice(1);

    // If the hex string is 3 digits, expand to 6 digits
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    if (hex.length === 6) {
      hex = hex + 'FF';
    }

    return '#' + hex;
  }
}
