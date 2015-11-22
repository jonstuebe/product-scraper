var scraper = require('product-scraper');

scraper.init('http://www.amazon.com/gp/product/B00X4WHP5E/', function(data){
	console.log(data);
});