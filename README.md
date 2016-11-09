# Helprs

> Helprs help reduce some monotony particularly while writing automated tests or anywhere else you need anything in a Node environment.

This single library can generate random numbers, characters, strings, names, addresses,
dice, and pretty much anything else.

It includes the basic building blocks for all these items and is built on top
of a Mersenne Twister so it can generate these things with repeatability, if
desired.

## Packages

### npm

```shell
npm install helprs
```

## Usage

### Node.js

And it can be used in Node.js.

```js
var Helprs = require('helprs'),
    helprs = new Helprs();

// Get a random zip code
helprs.zip();
```