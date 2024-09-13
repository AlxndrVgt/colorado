import { Color } from '../src/Color';
import { InvalidConstructorArgumentsError } from '../src/errors/InvalidConstructorArgumentsError';
import { HexColor } from '../src/HexColor';
import { RgbColor } from '../src/RgbColor';

describe('Color class', () => {
  it("should throw an error when mixing hex string and RGB values", () => {
    expect(() => new Color("#00FFFF", 255, 255)).toThrow(InvalidConstructorArgumentsError);
  });

  it("should create a rgb color", () => {
    const color = new Color(255, 123, 12);

    expect((color as any).color).toBeInstanceOf(RgbColor);

    expect(color.isRgb()).toBe(true);
    expect(color.isHex()).toBe(false);

  });

  it("should create a hex color", () => {
    const color = new Color('#ff0000');

    expect((color as any).color).toBeInstanceOf(HexColor);

    expect(color.isRgb()).toBe(false);
    expect(color.isHex()).toBe(true);
  });

  it('should convert rgb to rgb', () => {
    const color = new Color(157, 54, 221);
    const rgbColor = color.toRgb();

    expect(rgbColor.isRgb()).toBe(true);
    expect(rgbColor.isHex()).toBe(false);

    expect(rgbColor).toBe(color);
  });

  it('should convert rgb to hex', () => {
    const color = new Color(157, 54, 221);
    const hexColor = color.toHex();

    expect(hexColor.isHex()).toBe(true);
    expect(hexColor.isRgb()).toBe(false);
  });

  it('should convert hex to hex', () => {
    const color = new Color('#969243');
    const hexColor = color.toHex();

    expect(hexColor.isHex()).toBe(true);
    expect(hexColor.isRgb()).toBe(false);

    expect(hexColor).toBe(color);
  });

  it('should convert hex to rgb', () => {
    const color = new Color('#969243');
    const rgbColor = color.toRgb();

    expect(rgbColor.isRgb()).toBe(true);
    expect(rgbColor.isHex()).toBe(false);
  });

  it('should return a string', () => {
    const color = new Color('#969243');

    expect(typeof color.toString()).toBe('string');
  });
});