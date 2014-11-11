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

Works fantastic with https://github.com/wookieb/predicates

```js
var is = require('predicates');
var Planet = function() {};

var assertPlanet = generateAssert(is.instanceOf(Planet), 'Value must be an instance of Planet');

assertPlanet(new Planet());
assertPlanet({}); // Error: Value must be an instance of Planet

var assertArrayOfPlanets = generateAssert(
    is.arrayOf(is.instance(Planet)), 
    'Array must contain planets only'
);

assertArrayOfPlanets([new Planet(), new Planet()]);
assertArrayOfPlanets([new Planet(), {}]); // Array must contain planets only
```
