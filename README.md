# typographic-quotes

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Always use curly quotes][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```sh
npm install --save typographic-quotes
```


## Usage

Use typographic quotes for your text with respect to your locale, basically for
proper primary and secondary quotes. Pass locale as second parameter, default
value is `en-us`. This module relies on [`typographic-quotes-l10n-db`][quotesDB] in choosing proper
quotes for every language.

> In American English, double quotes are used normally (the “primary” style).
> If quote marks are used inside another pair of quote marks, then single quotes
> are used as the “secondary” style. For example: “Didn't she say ‘I like red
> best’ when asked her favorite wine?” he wondered to himself.  
— from the Wikipedia

```js
var quotes = require('typographic-quotes');
// for american english (en-us) primary quotes are “”, and secondary are ‘’.
// for danish (da) primary quotes are »«, and secondary are ›‹.

quotes('foo \'foo\' bar');       // foo “foo” bar
quotes('foo \'foo\' bar', 'da'); // foo »foo« bar
quotes('foo "foo \'inside\' bar" bar');       // foo “foo ‘inside’ bar” bar
quotes('foo \'foo "inside" bar\' bar', 'da'); // foo »foo ›inside‹ bar« bar
```



[quotesDB]: https://www.npmjs.com/package/typographic-quotes-l10n-db

## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: http://practicaltypography.com/straight-and-curly-quotes.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-quotes
[npm-image]: http://img.shields.io/npm/v/typographic-quotes.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-quotes
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-quotes.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-quotes
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-quotes.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-quotes
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-quotes.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-quotes
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-quotes/dev-status.svg
