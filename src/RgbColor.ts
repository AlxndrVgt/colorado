import { HexColor } from "./HexColor.js";
import { IColor } from "./IColor.js";

/**
 * Class representing an RGB color.
 * Implements the IColor interface.
 */
export class RgbColor implements IColor {
  /**
   * The red component of the RGB color.
   * @type {number}
   */
  private red: number;

  /**
   * The green component of the RGB color.
   * @type {number}
   */
  private green: number;

  /**
   * The blue component of the RGB color.
   * @type {number}
   */
  private blue: number;

  /**
   * The alpha channel of the RGB color.
   * @type {number}
   */
  private alpha: number;

  /**
   * Creates an instance of RgbColor.
   *
   * @param {number} red - The red component (0-255).
   * @param {number} green - The green component (0-255).
   * @param {number} blue - The blue component (0-255).
   * @param {number} alpha - The alpha channel (0-255).
   */
  constructor(red: number, green: number, blue: number, alpha: number = 1) {
    // Ensure RGB values are clamped between 0 and 255
    this.red = this.clampValue(red);
    this.green = this.clampValue(green);
    this.blue = this.clampValue(blue);
    this.alpha = this.clampValue(alpha, 0, 1);
  }

  /**
   * Returns this instance in RGB format.
   *
   * @returns {RgbColor} This RGB color instance.
   */
  toRgb(): RgbColor {
    return this;
  }

  /**
   * Converts the RGB color to a Hexadecimal color.
   *
   * @returns {HexColor} An instance of HexColor representing the same  color in Hex format.
   */
  toHex(): HexColor {
    // Convert RGB to Hex format
    const hex = "#" +
      (1 << 24 | this.red << 16 | this.green << 8 | this.blue).toString(16).slice(1) +
      Math.round(this.alpha * 255).toString(16).padStart(2, '0'); // Convert alpha (0-1 scale) to 2-digit hex

    return new HexColor(hex);
  }

  /**
   * Returns the string representation of the RGB color.
   *
   * @param {boolean} withAlpha - Wether to include alpha channel in output string or not.
   *
   * @returns {string} The RGB color string, e.g., 'rgb(255, 0, 0)'.
   */
  toString(withAlpha: boolean = false): string {
    if (withAlpha) {
      return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  /**
   * Clamps the RGB value to ensure it stays within the valid range (0-255).
   *
   * @param {number} value - The RGB component value.
   * @param {number} [min=0] - The minimum allowed value (default 0).
   * @param {number} [max=255] - The maximum allowed value (default 255).
   * @returns {number} The clamped value.
   */
  private clampValue(value: number, min: number = 0, max: number = 255): number {
    // Clamp the value between the min and max range
    return Math.max(min, Math.min(max, value));
  }
}
