'use strict';

module.exports = (app, db) => {
    var router = require('express').Router();
    
    var controller = require('../../controller/product')(db);

    router.route('/products')
        .get(controller.list)
        .post(controller.insert);

    router.route('/products/:productId')
        .get(controller.getById)
        .put(controller.update)
        .delete(controller.delete);

    app.use(router);
};