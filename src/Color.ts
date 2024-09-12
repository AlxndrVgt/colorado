export class Color {
  private red: number;
  private green: number;
  private blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = this.clampValue(red);
    this.green = this.clampValue(green);
    this.blue = this.clampValue(blue);
  }

  private clampValue(value: number, min: number = 0, max: number = 255): number {
    return Math.max(min, Math.min(max, value));
  }

  toString() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  toArray() {
    return [this.red, this.green, this.blue];
  }
}