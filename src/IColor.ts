/**
 * Interface representing a color that can be converted between different formats.
 */
export interface IColor {
  /**
   * Converts the current color to an RGB format.
   *
   * @returns {IColor} An instance of a color in RGB format.
   */
  toRgb(): IColor;

  /**
   * Converts the current color to a Hexadecimal format.
   *
   * @returns {IColor} An instance of a color in Hex format.
   */
  toHex(): IColor;

  /**
   * Returns the string representation of the color.
   *
   * @returns {string} The string representation of the color, typically in Hex or RGB format.
   */
  toString(): string;
}
