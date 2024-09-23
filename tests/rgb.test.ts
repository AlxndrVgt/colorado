import { Color } from '../src/Color';
import { HexColor } from '../src/HexColor';
import { RgbColor } from '../src/RgbColor';

describe('RgbColor class', () => {
  it("should detect rgb strings correctly", () => {
    expect(RgbColor.isValidRgbString('rgb(0,0,0)')).not.toBe(null);
    expect(RgbColor.isValidRgbString('rgb(0, 0,0)')).not.toBe(null);
    expect(RgbColor.isValidRgbString('rgba(0,0,0,0.5)')).not.toBe(null);
    expect(RgbColor.isValidRgbString('rgba(0, 0,0,0.75)')).not.toBe(null);
    expect(RgbColor.isValidRgbString('rgba(0, 0,0,0.75)')).not.toBe(null);

    expect(RgbColor.isValidRgbString('rgb(a,0,0)')).toBe(null);
    expect(RgbColor.isValidRgbString('rgb(0, b,0)')).toBe(null);
    expect(RgbColor.isValidRgbString('rgb (0, 0, c) ')).toBe(null);
    expect(RgbColor.isValidRgbString('rgba(a,0,0,0)')).toBe(null);
    expect(RgbColor.isValidRgbString('rgba(0, b,0,0)')).toBe(null);
    expect(RgbColor.isValidRgbString('rgba (0, 0, c,0) ')).toBe(null);
    expect(RgbColor.isValidRgbString('rgba(0,0,0)')).toBe(null);
  });

  it('should correctly assign values through the constructor without alpha', () => {
    const color = new RgbColor(255, 100, 50);

    expect((color as any).red).toBe(255);
    expect((color as any).green).toBe(100);
    expect((color as any).blue).toBe(50);
    expect((color as any).alpha).toBe(1);
  });

  it('should correctly assign values through the constructor without alpha using string', () => {
    const color = new Color('rgb(255,100 , 50)');

    expect((color as any).color.red).toBe(255);
    expect((color as any).color.green).toBe(100);
    expect((color as any).color.blue).toBe(50);
    expect((color as any).color.alpha).toBe(1);
  });

  it('should correctly assign values through the constructor with alpha using string', () => {
    const color = new Color('rgba(255,100 , 50,  0.6)');

    expect((color as any).color.red).toBe(255);
    expect((color as any).color.green).toBe(100);
    expect((color as any).color.blue).toBe(50);
    expect((color as any).color.alpha).toBe(0.6);
  });

  it('should correctly assign values through the constructor with alpha', () => {
    const color = new RgbColor(255, 100, 50, 0.6);

    expect((color as any).red).toBe(255);
    expect((color as any).green).toBe(100);
    expect((color as any).blue).toBe(50);
    expect((color as any).alpha).toBe(0.6);
  });

  it('should clamp values less than min to min', () => {
    const color = new RgbColor(-10, -50, -255, -0.5);

    expect((color as any).red).toBe(0);
    expect((color as any).green).toBe(0);
    expect((color as any).blue).toBe(0);
    expect((color as any).alpha).toBe(0);
  });

  it('should clamp values greater than max to max', () => {
    const color = new RgbColor(300, 500, 1000, 10);

    expect((color as any).red).toBe(255);
    expect((color as any).green).toBe(255);
    expect((color as any).blue).toBe(255);
    expect((color as any).alpha).toBe(1);
  });

  it('should convert correctly to rgb', () => {
    const color = new RgbColor(157, 54, 221);
    const rgbColor = color.toRgb();

    expect(rgbColor).toBeInstanceOf(RgbColor);
    expect(rgbColor).toBe(color);
  });

  it('should convert correctly to rgb with alpha', () => {
    const color = new RgbColor(157, 54, 221, 0.5);
    const rgbColor = color.toRgb();

    expect(rgbColor).toBeInstanceOf(RgbColor);
    expect(rgbColor).toBe(color);
  });

  it('should convert correctly to hex', () => {
    const color = new RgbColor(10, 146, 203);
    const hexColor = color.toHex();

    expect(hexColor).toBeInstanceOf(HexColor);
    expect((hexColor as any).hex.toLowerCase()).toBe('#0A92CBFF'.toLowerCase());
  });

  it('should convert correctly to hex with alpha', () => {
    const color = new RgbColor(10, 146, 203, 0.4);
    const hexColor = color.toHex();

    expect(hexColor).toBeInstanceOf(HexColor);
    expect((hexColor as any).hex.toLowerCase()).toBe('#0a92cb66');
  });

  it('toString() should return the correct rgb string', () => {
    const color = new RgbColor(72, 152, 38, 0.6);

    expect(color.toString()).toBe('rgb(72, 152, 38)');
    expect(color.toString(false)).toBe('rgb(72, 152, 38)');
    expect(color.toString(true)).toBe('rgba(72, 152, 38, 0.6)');
  });
});