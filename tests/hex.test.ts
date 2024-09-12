import { Color } from '../src/Color';
import { InvalidHexStringError } from '../src/errors/InvalidHexStringError';

describe('Color class HEX mode', () => {
  it('should correctly assign values through the constructor using', () => {
    const color = new Color('#5c8a73');

    expect((color as any).red).toBe(92);
    expect((color as any).green).toBe(138);
    expect((color as any).blue).toBe(115);
  });

  it('should correctly assign values through the constructor using shorthand', () => {
    const color = new Color('#03f');

    expect((color as any).red).toBe(0);
    expect((color as any).green).toBe(51);
    expect((color as any).blue).toBe(255);
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
});