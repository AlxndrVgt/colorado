import { Color } from '../src/Color';
import { InvalidConstructorArgumentsError } from '../src/errors/InvalidConstructorArgumentsError';

describe('Color class constructor', () => {
  it("should throw an error when mixing hex string and RGB values", () => {
    expect(() => new Color("#00FFFF", 255, 255)).toThrow(InvalidConstructorArgumentsError);
  });
});