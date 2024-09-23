# Colorado

![Tests](https://github.com/AlxndrVgt/colorado/actions/workflows/tests.yml/badge.svg)
![npm](https://img.shields.io/npm/dw/@avolutions%2Fcolorado)
![Version](https://img.shields.io/npm/v/@avolutions%2Fcolorado)
![License](https://img.shields.io/npm/l/@avolutions%2Fcolorado)

## About

**Colorado** is a lightweight, intuitive JavaScript library for handling and converting color values. Seamlessly switch between RGB and Hex formats with simple methods and generate clean string outputs for your web projects. Perfect for developers looking for an easy and dynamic color management solution.

## Installation

To install the **Colorado** package, run the following command via [npm](https://npmjs.com/package/@avolutions/colorado):

```bash
npm install @avolutions/colorado
```

**Colorado** is designed to be flexible and works with both CommonJS and ES Modules. You can include it in your project using either of these systems based on your environment.

For **CommonJS**:
```js
const Color = require('@avolutions/colorado');
```

For **ES Modules**:
```js
import { Color } from '@avolutions/colorado';
```

## Usage

**Colorado** provides a straightforward API for managing and converting colors in JavaScript. Whether you're working with Hex codes or RGB values, you can easily create and convert between formats with just a few methods. Below are some common use cases and examples to help you get started.

### Create colors

Creating new color objects with **Colorado** is simple using the `Color` constructor. You can initialize a new color by passing either RGB values or a Hex code as an argument.

#### Using RGB values

You can create a color by passing three integer values for the red, green, and blue components. Each value should be an integer between 0 and 255, representing the intensity of each color channel.

```js
const red = new Color(255, 0, 0);
```

You can also create a RGB color with transparency by passing a alpha value between 0 and 1 as optional fourth parameter.

```js
const red = new Color(255, 0, 0, 0.5);
```

#### Using a Hex code

You can create a color by passing a 6-digit or 3-digit Hex code. It accepts both upper and lowercase letters.

```js
const red = new Color('#FF0000'); // same as #ff0000
const green = new Color('#0f0'); // same as #00ff00
```

You can also create a Hex color with transparency by passing a 8-digit Hex code including alpha value.

```js
const red = new Color('#FF0000CC'); // same as #ff0000
```

### Checking Color Format

**Colorado** provides simple methods to check whether a color is in RGB or Hex format using the `isRgb()` and `isHex()` methods. These methods are useful when you need to validate the format of the color or ensure you're working with the right type before performing conversions or operations.

#### Checking if the Color is RGB

The `isRgb()` method returns `true` if the color is in RGB format, otherwise it returns `false`.

```js
const red = new Color(255, 0, 0).isRgb(); // true
const green = new Color('#00FF00').isRgb(); // false
```

#### Checking if the Color is Hex

Similarly, the `isHex()` method checks if the color is in Hex format and returns `true` if it is, otherwise `false`.

```js
const red = new Color('#FF0000').isHex(); // true
const green = new Color(0, 255, 0).isHex(); // false
```

### Converting Colors

**Colorado** makes it simple to convert between RGB and Hex formats using the built-in methods `toRgb()` and `toHex()`. These methods allow you to easily switch between the two color representations as needed for your project.

#### Converting RGB to Hex

If you have a color in RGB format, you can use the `toHex()` method to convert it to a Hex color.

```js
const red = new Color(255, 0, 0).toHex(); // #FF0000
const red = new Color(255, 0, 0, 0.25).toHex(); // #FF000040
```

#### Converting Hex to RGB

Similarly, you can convert a Hex color to a RGB color using the `toRgb()` method. This works whether the Hex code is in 6-digit or 3-digit format, and regardless of case.

```js
const red = new Color('#FF0000').toRgb(); // 255, 0, 0
const green = new Color('#0f0').toRgb(); // 0, 255, 0
const red = new Color('#FF000040').toRgb(); // 255, 0, 0, 0.25
```

#### No Conversion Needed

If you attempt to convert a color from RGB to RGB or from Hex to Hex, nothing will happen. The methods `toRgb()` and `toHex()` will simply return the color in the same format if it’s already in the desired form.

```js
const red = new Color('255, 0, 0').toRgb(); // 255, 0, 0
const green = new Color('#00ff00').toHex(); // #00ff00
```

### Outputting Colors as Strings

The `toString()` method in **Colorado** provides an easy way to output a color in string format. Depending on whether the color is in RGB or Hex format, the `toString()` method will return the appropriate representation.

#### RGB Colors

If the color is in RGB format, `toString()` will return a string in the format `rgb(r, g, b)`, where `r`, `g`, and `b` are the integer values for the red, green, and blue channels.

```js
const red = new Color(255, 0, 0).toString(); // 'rgb(255, 0, 0)'
const green = new Color('#00ff00').toRgb().toString(); // 'rgb(0, 255, 0)'
```

If you pass `true` as a parameter to `toString()`, it will return a string in the format `rgba(r, g, b, a)`,  where `r`, `g` and `b` are the integer values for the red, green, and blue channels and `a` is the decimal value for alpha channel.

```js
const red = new Color(255, 0, 0).toString(true); // 'rgba(255, 0, 0, 1)'
const red = new Color(255, 0, 0, 0.75).toString(true); // 'rgba(255, 0, 0, 0.75)'
```

#### Hex Colors

If the color is in Hex format, `toString()` will return the Hex code as a string, including the # symbol. The output will be in 6-digit and match the original case (upper- or lowercase).

```js
const red = new Color('#F00').toString(); // '#FF0000'
const blue = new Color('#0000FF').toString(); // '#0000FF'
const green = new Color(0, 255, 0).toHex().toString(); // '#00FF00'
```

By passing `true` as a parameter to `toString()` you will receive a 8-digit Hex string including the alpha channel.

```js
const red = new Color('#FF0000').toString(true); // '#FF0000FF'
const red = new Color('#FF0000CC').toString(true); // '#FF0000CC'
const green = new Color(0, 255, 0, 0.68).toHex().toString(true); // '#00FF00AD'
```

## License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](https://github.com/avolutions/colorado/blob/main/LICENSE) file included in the repository.