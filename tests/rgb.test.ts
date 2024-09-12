import { Color } from '../src/Color';

describe('Color class RGB mode', () => {
  it('should correctly assign values through the constructor', () => {
    const color = new Color(255, 100, 50);

    expect((color as any).red).toBe(255);
    expect((color as any).green).toBe(100);
    expect((color as any).blue).toBe(50);
  });

  it('should clamp values less than 0 to 0', () => {
    const color = new Color(-10, -50, -255);

    expect((color as any).red).toBe(0);
    expect((color as any).green).toBe(0);
    expect((color as any).blue).toBe(0);
  });

  it('should clamp values greater than 255 to 255', () => {
    const color = new Color(300, 500, 1000);

    expect((color as any).red).toBe(255);
    expect((color as any).green).toBe(255);
    expect((color as any).blue).toBe(255);
  });

  it('toString() should return the correct rgb string', () => {
    const color = new Color(72, 152, 38);

    expect(color.toString()).toBe('rgb(72, 152, 38)');
  });

  it('toArray() should return the correct array representation', () => {
    const color = new Color(168, 19, 78);

    expect(color.toArray()).toEqual([168, 19, 78]);
  });
});