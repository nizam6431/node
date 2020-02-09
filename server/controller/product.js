module.exports = (db) => {
    const objectHelper = require('../utils/objectHelper');

    return {
        list: (req, res) => {
            db.products.findAll()
                .then(products => {
                    res.json(products);
            })
        },

        getById: (req, res) => {
            var id = req.params.productId;
            db.products.findByPk(id)
                .then(product => {
                    res.json(product);
                });
        },

        insert: (req, res) => {
            var product = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            };

            db.products.create(product)
                .then(newProduct => {
                    //TODO: PEGAR ID DO NOVO OBJETO
                    res.json(newProduct);
                });
        },

        update: (req, res) => {
            const id = req.params.productId;

            db.products.findOne({
                where: { id: id }
            }).then(product => {
                 var request = req.body;

                 objectHelper.copyProperties(request, product);

                 product.save().then(updatedProduct => {
                     res.json(updatedProduct);
                 });
            });
        },

        delete: (req,res) => {
            var id = req.params.productId;
            db.products.destroy({
                where: { id: id }
            }).then(deletedProduct => {
                res.json(deletedProduct);
            });
        }
    }
};