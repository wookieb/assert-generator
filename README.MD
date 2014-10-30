#assert-generator

Very simple helper to generate assert functions for arguments checking, tests etc.

## Install
```
npm install assert-generator
```

## Examples

```js
var generateAssert = require('assert-generator');

var assertIsDefined = generateAssert(function(value) { return typeof value !== 'undefined'; }, 'Value cannot be empty');

assertIsDefined(1);
assertIsDefined(undefined); // Error: Value cannot be empty
```

Works fantastic with http://landau.github.io/is/

```js
var Planet = function() {};

var assertPlanet = generateAssert(is.instance(Planet), 'Value must be an instance of Planet');

assertPlanet(new Planet());
assertPlanet({}); // Error: Value must be an instance of Planet

var assertArrayOfPlanets = generateAssert(function(arr) {
    return is.array(arr) && arr.every(is.instance(Planet));
}, 'Array must contain planets only');

assertArrayOfPlanets([new Planet(), new Planet()]);
assertArrayOfPlanets([new Planet(), {}]); // Array must contain planets only
```
