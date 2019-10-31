Book = require('../models/books');

// index actions
exports.index = function(req, res) {
    Book.findAll()
        .then(books => {
            res.json({
                status: "success",
                message: "Books retrieved successfully",
                data: Book
            });
        })
        .catch(err => {
            res.json({
                status: "error",
                message: err,
            });
        })
};