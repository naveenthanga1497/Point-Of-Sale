const express = require('express');
const router = express.Router();
const Product = require('.../models/product');

var csrfProtection = csrf(); 
router.use(csrfProtection);
 
router.get('/product', function(req, res, next) {
  Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('credit/Angular6/src/app/user-profile', { title: 'stackdb', products: productChunks });
  });
});

module.exports = router;