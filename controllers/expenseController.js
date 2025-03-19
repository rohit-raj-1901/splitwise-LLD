const Expense = require('../models/expenseModel');
let expenses = {}; // In-memory expenses

const BalanceService = require('../services/balanceService');
const PaymentGraphService = new (require('../services/paymentGraphService'))(BalanceService);

exports.createExpense = (req, res) => {
    const { id, title, amount, currency, usersBalances, groupId } = req.body;

    // Update balances for each user
    Object.keys(usersBalances).forEach(userId => {
        BalanceService.updateBalance(userId, usersBalances[userId]);
    });

    const newExpense = new Expense(id, title, amount, currency, usersBalances, groupId);
    expenses[id] = newExpense;

    res.status(201).json(newExpense);
};

exports.getPaymentGraph = (req, res) => {
    const graph = PaymentGraphService.createPaymentGraph();
    res.status(200).json(graph);
};


exports.editExpense = (req, res) => {
    const { id } = req.params;
    const { amount, usersBalances } = req.body;
    const expense = expenses[id];
    if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
    }
    expense.amount = amount;
    expense.usersBalances = usersBalances;
    res.status(200).json(expense);
};

exports.settleExpense = (req, res) => {
    const { id } = req.params;
    const expense = expenses[id];
    if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
    }
    expense.settleExpense();
    res.status(200).json(expense);
};
