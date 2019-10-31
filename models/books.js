const Sequelize = require('sequelize');
const db = require('../config/database');

const Book = db.define('books', {
    book_id: {
        type: Sequelize.STRING
    },
    book_name: {
        type: Sequelize.STRING
    },
    book_covertype: {
        type: Sequelize.STRING
    },
    book_type: {
        type: Sequelize.STRING
    },
    book_genre: {
        type: Sequelize.STRING
    },
    book_pagesize: {
        type: Sequelize.NUMBER
    },
    book_cost: {
        type: Sequelize.NUMBER
    },
    book_purchase_date: {
        type: Sequelize.DATE
    }
})

module.exports = Book;