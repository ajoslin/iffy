# iffy [![Build Status](https://travis-ci.org/ajoslin/iffy.svg?branch=master)](https://travis-ci.org/ajoslin/iffy)

> Ternary in a function, but performant through closure science


## Install

```
$ npm install --save iffy
```

## Usage

```js
var iffy = require('iffy')

iffy(true, onTrue, onFalse) // => onTrue called

iffy(false, onTrue, onFalse) // => onFalse called
```

## API

#### `iffy(condition, onTrue, [onFalse])` -> `value`

##### condition

*Required*
Type: `any`

If condition is truthy, onTrue will be called and its return value returned.

Otherwise, if onFalse is provided, it will be called and its return value returned.

##### onTrue

Type: `function`

##### onFalse

Type: `function`

## Related

These are similar, but are less performant due to lack of closure science.

- [jif](https://github.com/contrahacks/jif)
- [value-when](https://github.com/bendrucker/value-when)

## License

MIT © [Andrew Joslin](http://ajoslin.com)
