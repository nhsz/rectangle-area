# rectangle-area

> Get the **[`area of a rectangle`](https://en.wikipedia.org/wiki/Rectangle#Formulae)**, given the length and width


## Install

```
$ npm install --save rectangle-area
```


## Usage

```js
const rectangleArea = require('rectangle-area')

console.log(rectangleArea(2.5, 4.37))
// => 10.925

console.log(rectangleArea(1, 1))
// => 1

console.log(rectangleArea(3, Math.PI))
// => 9.42477796076938

console.log(rectangleArea(0, 78))
// => Error: Invalid input. Sides of the rectangle must be greater than 0

console.log(rectangleArea(1, -1))
// => Error: Invalid input. Sides of the rectangle must be greater than 0
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
