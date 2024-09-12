# Colorado

![Tests](https://github.com/AlxndrVgt/colorado/actions/workflows/tests.yml/badge.svg)
![npm](https://img.shields.io/npm/dw/@avolutions%2Fcolorado)
![Version](https://img.shields.io/npm/v/@avolutions%2Fcolorado)
![License](https://img.shields.io/npm/l/@avolutions%2Fcolorado)

## Install

```console
npm install @avolutions/colorado
```

## Usage

Colorado can be used with CommonJS and ES Modules.

### CommonJS
```js
const { Color } = require('@avolutions/colorado');
```

### ES Modules
```js
import { Color } from '@avolutions/colorado';
```

### Create new color
```js
const red = new Color(255, 0, 0); // From RGB
const green = new Color('#00FF00'); // From hex code
const blue = new Color('#00F'); // From hex 3-digit shorthand
```