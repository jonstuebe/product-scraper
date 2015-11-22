var assert = require('assert'),
	scraper = require('../index');

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

describe('stores', function(){

	describe('amazon', function(){
		this.slow(6500);

		it('has not changed markup', function(done){
			this.timeout(10000);

			scraper.init('http://www.amazon.com/gp/product/B00X4WHP5E/', function(data){
				
				if(Object.size(data) != 7) throw err;
				done();

			});

		});

	});

	describe('bestbuy', function(){
		this.slow(6500);

		it('has not changed markup', function(done){
			this.timeout(10000);

			scraper.init('http://www.bestbuy.com/site/apple-macbook-pro-15-4-display-intel-core-i7-16gb-memory-256gb-flash-storage-silver/8532502.p?id=1219343246944&skuId=8532502', function(data){
				
				if(Object.size(data) != 6) throw err;
				done();

			});

		});

	});

	describe('etsy', function(){
		this.slow(6500);

		it('has not changed markup', function(done){
			this.timeout(10000);

			scraper.init('https://www.etsy.com/listing/255992683/iskelter-case-built-for-iphone-66s-and', function(data){
				
				if(Object.size(data) != 6) throw err;
				done();

			});

		});

	});

	describe('target', function(){
		this.slow(6500);

		it('has not changed markup', function(done){
			this.timeout(10000);

			scraper.init('http://www.target.com/p/canon-eos-rebel-sl1-18mp-digital-slr-camera-with-18-55mm-lens/-/A-14537289?lnk=rec|pdp|top_rated|cath770X250', function(data){
				
				if(Object.size(data) != 5) throw err;
				done();

			});

		});

	});

	describe('walmart', function(){
		this.slow(6500);

		it('has not changed markup', function(done){
			this.timeout(10000);

			scraper.init('http://www.walmart.com/ip/40549455', function(data){
				
				if(Object.size(data) != 6) throw err;
				done();

			});

		});

	});

});