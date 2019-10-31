const router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'Hi this SalLy',
        message: 'Lets build your library',
    });
});

// Import controller
const bookController = require('../controllers/books');

// routes
router.route('/books')
    .get(bookController.index);

// Export API routes
module.exports = router;