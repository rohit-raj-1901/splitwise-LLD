class BalanceService {
    constructor() {
        this.balances = {}; // Stores user balances { userId: balance }
    }

    // Update the balance of a user (positive for receiving money, negative for owing)
    updateBalance(userId, amount) {
        if (!this.balances[userId]) {
            this.balances[userId] = 0;
        }
        this.balances[userId] += amount;
    }

    // Get the balance of a user
    getBalance(userId) {
        return this.balances[userId] || 0;
    }

    // Settle the balance between two users
    settleBalance(fromUserId, toUserId, amount) {
        if (this.getBalance(fromUserId) < amount) {
            throw new Error('Insufficient balance to settle');
        }
        this.updateBalance(fromUserId, -amount);
        this.updateBalance(toUserId, amount);
    }

    // Get all balances
    getAllBalances() {
        return this.balances;
    }
}

module.exports = new BalanceService();
