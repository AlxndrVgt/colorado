/**
 * Custom error class for invalid hex string format in the HexColor class.
 * This error is thrown when the hex string does not follow the expected format:
 * - Must be '#RRGGBB' or '#RGB'
 * - Can only contain valid hexadecimal characters (0-9, A-F).
 */
export class InvalidHexStringError extends Error {
  /**
   * Creates an instance of InvalidHexStringError.
   * The error message informs the user about the valid hex string formats.
   */
  constructor() {
    super("Invalid hex string. Must be in the format '#RRGGBB', '#RGB' or '#RRGGBBAA' and only containing valid values.");
    this.name = "InvalidHexStringError";
  }
}
