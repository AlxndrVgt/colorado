import { Color } from '../src/Color';
import { InvalidHexStringError } from '../src/errors/InvalidHexStringError';

describe('Color class HEX mode', () => {
  it('should correctly assign values through the constructor using', () => {
    const color = new Color('#5c8a73');

    expect(color.isHex()).toBe(true);
    expect(color.isRgb()).toBe(false);

    expect((color as any).hex).toBe('#5c8a73');
    expect((color as any).red).toBe(null);
    expect((color as any).green).toBe(null);
    expect((color as any).blue).toBe(null);
  });

  it('should correctly assign values through the constructor using shorthand', () => {
    const color = new Color('#03f');

    expect(color.isHex()).toBe(true);
    expect(color.isRgb()).toBe(false);

    expect((color as any).hex).toBe('#03f');
    expect((color as any).red).toBe(null);
    expect((color as any).green).toBe(null);
    expect((color as any).blue).toBe(null);
  });

  it('should correctly handle upper- and lowercase characters in hex string', () => {
    const uppercase = new Color('#ABCDEF');
    const lowercase = new Color('#abcdef');

    expect((uppercase as any).red).toBe((lowercase as any).red);
    expect((uppercase as any).green).toBe((lowercase as any).green);
    expect((uppercase as any).blue).toBe((lowercase as any).blue);
  });

  it("should throw an InvalidHexStringError for invalid hex string (length)", () => {
    expect(() => new Color("#12345")).toThrow(InvalidHexStringError);
  });

  // Test invalid hex string (non-hex characters)
  it("should throw an InvalidHexStringError for invalid hex string (non-hex characters)", () => {
      expect(() => new Color("#ZZZZZZ")).toThrow(InvalidHexStringError);
  });

  it('toString() should return the correct rgb string', () => {
    const color = new Color('#acd46e');

    expect(color.toString()).toBe('#acd46e');
  });

  it('toArray() should return the correct array representation', () => {
    const color = new Color('#acd46e');

    expect(color.toArray()).toEqual(['ac', 'd4', '6e']);
  });

  it('toObject() should return the correct object representation', () => {
    const color = new Color('#acd46e');
    const object = { red: 'ac', green: 'd4', blue: '6e' };

    expect(color.toObject()).toEqual(object);
  });
});