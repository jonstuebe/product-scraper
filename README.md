# Product Scraper
Node.js based scraper for ecommerce sites

## Installation

```bash
$ npm install product-scraper
```

## Features

  * Scrape top ecommerce sites (Amazon, Walmart, Target, BestBuy, Etsy)
  * Return basic product information (title, price, details, images, description)
  * Easy to use API

## API
Simply require the package and initialize with a url and pass a callback function to receive the data.

```js
var scraper = require('product-scraper');

scraper.init('http://www.amazon.com/gp/product/B00X4WHP5E/', function(data){
	console.log(data);
});
```

## Todos

  * Need to add ability to run a test to see if markup has changed, and if so disable the store selectors and fallback to the generic scraper.

## Store Owner?

If you are a store owner and wondering how to make sure your site is being crawled, using the following attributes on your markup:

```html
[itemprop="title"]
[itemprop="brand"]
[itemprop="description"]
[itemprop="image"]
[itemprop="price"]
```

## Contributing
Currently, this plugin supports a few top ecommerce sites based on alexa ratings. If you want to add any stores, or just have an idea or feature, go ahead and fork [this repo](https://github.com/jonstuebe/product-scraper/) and send me a pull request. I'll be happy to take a look when I can and get back to you.

## Issues

For any and all issues/bugs, please post a description and code sample to reproduce the problem on the [issues page](https://github.com/jonstuebe/product-scraper/issues).

## License

  [MIT](LICENSE)