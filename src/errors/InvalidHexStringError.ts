export class InvalidHexStringError extends Error {
  constructor() {
    super("Invalid hex string. Must be in the format '#RRGGBB' or '#RGB' and only containing valid values.");
    this.name = "InvalidHexStringError";
  }
}