# binarify

Transform an integer into its binary form with the desire number of bits. 

## Usage
The function receives two arguments:  `number` and `bits`. The former is the number you want to transform while the latter is the number of bits you want.

If the `bits` parameter is not specified, the transform will return the default number of bits.

```js
const binarifyit = require('binaryfyit')

console.log(binarifyit(5)) // 101
console.log(binarifyit(5,6)) // 000101
``` 