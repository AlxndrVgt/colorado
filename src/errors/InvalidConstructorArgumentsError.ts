export class InvalidConstructorArgumentsError extends Error {
  constructor() {
    super("Invalid constructor arguments. Provide either (red: number, green: number, blue: number) or (hex: string).");
    this.name = "InvalidConstructorArgumentsError";
  }
}