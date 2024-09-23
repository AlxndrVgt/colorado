import { InvalidConstructorArgumentsError } from './errors/InvalidConstructorArgumentsError.js';
import { IColor } from './IColor.js';
import { HexColor } from './HexColor.js';
import { RgbColor } from './RgbColor.js';

/**
 * Class representing a color that can dynamically switch between RGB and Hex formats.
 * Implements the IColor interface and can be initialized with either RGB or Hex values.
 */
export class Color implements IColor {
  /**
   * The internal color instance, which will be either an RgbColor or HexColor.
   * @type {IColor}
   */
  private color: IColor;

  /**
   * Creates an instance of Color, which can be initialized with either:
   * - RGB values (three numbers)
   * - A Hex color string
   *
   * @param {number|string} arg1 - The red component or hex color string.
   * @param {number} [arg2] - The green component (if using RGB).
   * @param {number} [arg3] - The blue component (if using RGB).
   * @param {number} [arg4] - The alpha channel (if using RGB).
   * @throws {InvalidConstructorArgumentsError} If the arguments do not match the expected types.
   */
  constructor(arg1: number | string, arg2?: number, arg3?: number, arg4?: number) {
    if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "number") {
      // RGB values provided
      this.color = new RgbColor(arg1, arg2, arg3, arg4);
    } else if (typeof arg1 === "string" && arg2 === undefined && arg3 === undefined) {
      // Hex value provided
      this.color = new HexColor(arg1);
    } else {
      // Invalid constructor arguments
      throw new InvalidConstructorArgumentsError();
    }
  }

  /**
   * Checks if the current color is in RGB format.
   *
   * @returns {boolean} True if the color is RGB, otherwise false.
   */
  isRgb(): boolean {
    return this.color instanceof RgbColor;
  }

  /**
   * Checks if the current color is in Hex format.
   *
   * @returns {boolean} True if the color is Hex, otherwise false.
   */
  isHex(): boolean {
    return this.color instanceof HexColor;
  }

  /**
   * Converts the current color to RGB format.
   *
   * @returns {Color} This instance with the color converted to RGB.
   */
  toRgb(): Color {
    this.color = this.color.toRgb();
    return this;
  }

  /**
   * Converts the current color to Hex format.
   *
   * @returns {Color} This instance with the color converted to Hex.
   */
  toHex(): Color {
    this.color = this.color.toHex();
    return this;
  }

  /**
   * Returns the string representation of the current color (either in Hex or RGB format).
   *
   * @param {boolean} withAlpha - Wether to include alpha channel in output string or not.
   *
   * @returns {string} The string representation of the color.
   */
  toString(withAlpha: boolean = false): string {
    return this.color.toString(withAlpha);
  }
}
