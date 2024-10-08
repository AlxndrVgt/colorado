import { Color } from '../src/Color';
import { HtmlColors } from '../src/HtmlColors';
import { InvalidConstructorArgumentsError } from '../src/errors/InvalidConstructorArgumentsError';
import { HexColor } from '../src/HexColor';
import { RgbColor } from '../src/RgbColor';

describe('Color class', () => {
  it("should throw an error when mixing hex string and RGB values", () => {
    expect(() => new Color("#00FFFF", 255, 255)).toThrow(InvalidConstructorArgumentsError);
  });

  it("should throw an error providing invalid string", () => {
    expect(() => new Color("foo")).toThrow(InvalidConstructorArgumentsError);
  });


  it("should create a rgb color without alpha", () => {
    const color = new Color(255, 123, 12);

    expect((color as any).color).toBeInstanceOf(RgbColor);

    expect(color.isRgb()).toBe(true);
    expect(color.isHex()).toBe(false);
  });

  it("should create a rgb color with alpha", () => {
    const color = new Color(255, 123, 12, 0.5);

    expect((color as any).color).toBeInstanceOf(RgbColor);

    expect(color.isRgb()).toBe(true);
    expect(color.isHex()).toBe(false);
  });

  it("should create a rgb color from string without alpha", () => {
    const color = new Color('rgb(255, 123,12)');

    expect((color as any).color).toBeInstanceOf(RgbColor);

    expect(color.isRgb()).toBe(true);
    expect(color.isHex()).toBe(false);
  });

  it("should create a rgb color from string with alpha", () => {
    const color = new Color('rgba(255,123, 12, 0.5)');

    expect((color as any).color).toBeInstanceOf(RgbColor);

    expect(color.isRgb()).toBe(true);
    expect(color.isHex()).toBe(false);
  });

  it("should create a hex color from HtmlColors", () => {
    const color = new Color(HtmlColors.AliceBlue);

    expect((color as any).color).toBeInstanceOf(HexColor);

    expect(color.isRgb()).toBe(false);
    expect(color.isHex()).toBe(true);
  });

  it("should create a hex color from html color name", () => {
    const royalBlue = new Color("RoyalBlue");
    const aqua = new Color(" aqua ");
    const slateGray = new Color("sLaTeGrAy");

    expect(() =>  new Color("unknown")).toThrow(InvalidConstructorArgumentsError);

    expect((royalBlue as any).color).toBeInstanceOf(HexColor);
    expect((aqua as any).color).toBeInstanceOf(HexColor);
    expect((slateGray as any).color).toBeInstanceOf(HexColor);

    expect(royalBlue.isRgb()).toBe(false);
    expect(aqua.isRgb()).toBe(false);
    expect(slateGray.isRgb()).toBe(false);
    expect(royalBlue.isHex()).toBe(true);
    expect(aqua.isHex()).toBe(true);
    expect(slateGray.isHex()).toBe(true);
  });

  it("should create a hex color without alpha", () => {
    const color = new Color('#ff0000');

    expect((color as any).color).toBeInstanceOf(HexColor);

    expect(color.isRgb()).toBe(false);
    expect(color.isHex()).toBe(true);
  });

  it("should create a hex color with alpha", () => {
    const color = new Color('#ff0000cc');

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

  it('should convert rgba to rgba', () => {
    const color = new Color(157, 54, 221, 0.6);
    const rgbColor = color.toRgb();

    expect(rgbColor.isRgb()).toBe(true);
    expect(rgbColor.isHex()).toBe(false);

    expect(rgbColor).toBe(color);
  });

  it('should convert rgba to hex', () => {
    const color = new Color(157, 54, 221, 0.1);
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

  it('should convert hex with alpha to hex with alpha', () => {
    const color = new Color('#969243ed');
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

  it('should convert hex with alpha to rgb with alpha', () => {
    const color = new Color('#969243cc');
    const rgbColor = color.toRgb();

    expect(rgbColor.isRgb()).toBe(true);
    expect(rgbColor.isHex()).toBe(false);
  });

  it('should return a string', () => {
    const color = new Color('#969243');

    expect(typeof color.toString()).toBe('string');
  });
});