/**
 * Custom error class for invalid constructor arguments in the Color class.
 * This error is thrown when the constructor arguments do not match the expected formats:
 * - Either (red: number, green: number, blue: number)
 * - Or (hex: string)
 */
export class InvalidConstructorArgumentsError extends Error {
  /**
   * Creates an instance of InvalidConstructorArgumentsError.
   * The error message informs the user about the valid constructor argument formats.
   */
  constructor() {
    super("Invalid constructor arguments. Provide either (red: number, green: number, blue: number) or (hex: string).");
    this.name = "InvalidConstructorArgumentsError";
  }
}
