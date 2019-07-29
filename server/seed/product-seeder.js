var Product = require('../models/product');

var mongoose = require('mongoose');

//mongoose.connect('localhost:27017/shopping');

mongoose.connect('mongodb://localhost:27017/stackdb', { useNewUrlParser: true });
var products = [
    new Product({
        imagePath:'https://ak7.picdn.net/shutterstock/videos/14843827/thumb/1.jpg',
        title:'Fresh Vegetables',
        description:'All kinds of vegetables are available here.'
    }),
    new Product({
        imagePath:'https://i.pinimg.com/originals/b8/d1/66/b8d166511de2bd451dce04293111e9a0.jpg',
        title:'Fresh Friuts',
        description:'Apple'
    }),
    new Product({
        imagePath:'https://previews.123rf.com/images/insemar/insemar1704/insemar170400038/77035936-collection-of-seasonal-fruits-and-vegetables-spring-time-collection-vector-eps10-illustration-.jpg',
        title:'Seasonal Fruits',
        description:'Based on our climate vegetables and fruits are available here'
    }),
    new Product({
        imagePath:'http://pluspng.com/img-png/grocery-items-png-supermarket-coupons-png-image-12852-366.png',
        title:'Milk shakes',
        description:'Buy one get one free'
    }),
    new Product({
        imagePath:'http://thesource.com/wp-content/uploads/2015/07/fresh-juices-without-a-juicer.jpg',
        title:'Fresh Juice',
        description:'1+1 Offer'
    }),
    new Product({
        imagePath:'https://cdnus.melaleuca.com/Images/about/home-page/desktop/products--large.png',
        title:'Skin and Hair care',
        description:'Shampoo'
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}

