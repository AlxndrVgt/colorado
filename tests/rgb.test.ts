import { HexColor } from '../src/HexColor';
import { RgbColor } from '../src/RgbColor';

describe('RgbColor class', () => {
  it('should correctly assign values through the constructor', () => {
    const color = new RgbColor(255, 100, 50);

    expect((color as any).red).toBe(255);
    expect((color as any).green).toBe(100);
    expect((color as any).blue).toBe(50);
  });

  it('should clamp values less than 0 to 0', () => {
    const color = new RgbColor(-10, -50, -255);

    expect((color as any).red).toBe(0);
    expect((color as any).green).toBe(0);
    expect((color as any).blue).toBe(0);
  });

  it('should clamp values greater than 255 to 255', () => {
    const color = new RgbColor(300, 500, 1000);

    expect((color as any).red).toBe(255);
    expect((color as any).green).toBe(255);
    expect((color as any).blue).toBe(255);
  });

  it('should convert correctly to rgb', () => {
    const color = new RgbColor(157, 54, 221);
    const rgbColor = color.toRgb();

    expect(rgbColor).toBeInstanceOf(RgbColor);
    expect(rgbColor).toBe(color);
  });

  it('should convert correctly to hex', () => {
    const color = new RgbColor(10, 146, 203);
    const hexColor = color.toHex();

    expect(hexColor).toBeInstanceOf(HexColor);
    expect((hexColor as any).hex.toLowerCase()).toBe('#0A92CB'.toLowerCase());
  });

  it('toString() should return the correct rgb string', () => {
    const color = new RgbColor(72, 152, 38);

    expect(color.toString()).toBe('rgb(72, 152, 38)');
  });
});