'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product.find({}, 'brand model price sizes sold description slug active image');
}

exports.getCount = query => {
    return Product.countDocuments(query).exec();
}

exports.getPage = (query, limit, startIndex) => {
    return Product.find(query).limit(limit).skip(startIndex).exec();
}

exports.getBySlug = slug => {
    return Product.findOne({
        slug: slug,
        active: true
     }, 'brand model price sizes sold description slug image');
}

exports.getByTag = tag => {
    return Product.find({
        tags: tag,
        active: true
     }, 'brand model price sizes sold description slug image');
}

exports.getByID = id => {
    return Product.findById(id, 'brand model price sizes sold description slug image');
}

exports.create = data => {
    const product = new Product(data);
    return product.save();
}

exports.update = (id, data) => {
    return Product.findByIdAndUpdate(id, {
        $set: {
           brand: data.brand,
           model: data.model,
           slug: data.slug,
           sizes: data.sizes,
           description: data.description,
           price: data.price,
           active: data.active,
           sold: data.sold
        }
     });
}

exports.delete = id => {
    return Product.findByIdAndDelete(id);
}

// exports.paginatedResults = (model) => {
//     return async (req, res, next) => {
//       const page = parseInt(req.query.page)
//       const limit = parseInt(req.query.limit)
  
//       const startIndex = (page - 1) * limit
//       const endIndex = page * limit
  
//       const results = {}
  
//       if (endIndex < await model.countDocuments().exec()) {
//         results.next = {
//           page: page + 1,
//           limit: limit
//         }
//       }
      
//       if (startIndex > 0) {
//         results.previous = {
//           page: page - 1,
//           limit: limit
//         }
//       }
//       try {
//         results.results = await model.find().limit(limit).skip(startIndex).exec()
//         res.paginatedResults = results
//         next()
//       } catch (e) {
//         res.status(500).json({ message: e.message })
//       }
//     }
//   }