import { InvalidHexStringError } from '../src/errors/InvalidHexStringError';
import { HexColor } from '../src/HexColor';
import { RgbColor } from '../src/RgbColor';

describe('HexColor class', () => {
  it('should correctly assign values through the constructor using', () => {
    const color = new HexColor('#5c8a73');

    expect((color as any).hex).toBe('#5c8a73');
  });

  it('should correctly assign values through the constructor using shorthand', () => {
    const color = new HexColor('#03f');

    expect((color as any).hex).toBe('#03f');
  });

  it('should correctly handle upper- and lowercase characters in hex string', () => {
    const uppercase = new HexColor('#ABCDEF');
    const lowercase = new HexColor('#abcdef');

    expect((uppercase as any).hex).toBe('#ABCDEF');
    expect((lowercase as any).hex).toBe('#abcdef');
  });

  it("should throw an InvalidHexStringError for invalid hex string (length)", () => {
    expect(() => new HexColor("#12345")).toThrow(InvalidHexStringError);
  });

  it("should throw an InvalidHexStringError for invalid hex string (non-hex characters)", () => {
      expect(() => new HexColor("#ZZZZZZ")).toThrow(InvalidHexStringError);
  });

  it('should convert correctly to hex', () => {
    const color = new HexColor('#62C718');
    const hexColor = color.toHex();

    expect(hexColor).toBeInstanceOf(HexColor);
    expect(hexColor).toBe(color);
  });

  it('should convert correctly to rgb', () => {
    const color3 = new HexColor('#2D7');
    const rgbColor3 = color3.toRgb();

    expect(rgbColor3).toBeInstanceOf(RgbColor);
    expect((rgbColor3 as any).red).toBe(34);
    expect((rgbColor3 as any).green).toBe(221);
    expect((rgbColor3 as any).blue).toBe(119);

    const color6 = new HexColor('#2D71D7');
    const rgbColor6 = color6.toRgb();

    expect(rgbColor6).toBeInstanceOf(RgbColor);
    expect((rgbColor6 as any).red).toBe(45);
    expect((rgbColor6 as any).green).toBe(113);
    expect((rgbColor6 as any).blue).toBe(215);
  });

  it('toString() should return the correct hex string', () => {
    const color = new HexColor('#7D4118');

    expect(color.toString()).toBe('#7D4118');
  });
});