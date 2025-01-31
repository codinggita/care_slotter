const express = require('express');
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a payment intent
router.post('/create-payment-intent', auth, paymentController.createPaymentIntent);

module.exports = router;