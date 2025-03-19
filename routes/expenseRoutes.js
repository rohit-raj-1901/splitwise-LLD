const express = require('express');
const { createExpense, editExpense, settleExpense } = require('../controllers/expenseController');
const router = express.Router();

router.post('/', createExpense);
router.put('/:id', editExpense);
router.put('/:id/settle', settleExpense);

module.exports = router;
