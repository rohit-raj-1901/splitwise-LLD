class Expense {
    constructor(id, title, amount, currency, usersBalances, groupId) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.currency = currency;
        this.usersBalances = usersBalances;
        this.groupId = groupId;
        this.isSettled = false;
    }

    settleExpense() {
        this.isSettled = true;
    }
}

module.exports = Expense;
