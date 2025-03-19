class PaymentNode {
    constructor(from, to, amount) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}

class PaymentGraphService {
    constructor(balanceService) {
        this.balanceService = balanceService;
    }

    // Create the payment graph to minimize transactions
    createPaymentGraph() {
        let balances = this.balanceService.getAllBalances();
        let positiveBalances = [];
        let negativeBalances = [];

        // Separate users into positive and negative balances
        Object.keys(balances).forEach(userId => {
            let balance = balances[userId];
            if (balance > 0) {
                positiveBalances.push({ userId, balance });
            } else if (balance < 0) {
                negativeBalances.push({ userId, balance: -balance });
            }
        });

        positiveBalances.sort((a, b) => b.balance - a.balance); // Sort in descending order
        negativeBalances.sort((a, b) => b.balance - a.balance); // Sort in descending order

        let paymentGraph = [];

        // Balance the payments between users
        while (positiveBalances.length > 0 && negativeBalances.length > 0) {
            let receiver = positiveBalances[0];
            let sender = negativeBalances[0];

            let amountTransferred = Math.min(receiver.balance, sender.balance);

            paymentGraph.push(new PaymentNode(sender.userId, receiver.userId, amountTransferred));

            // Update balances after the transaction
            receiver.balance -= amountTransferred;
            sender.balance -= amountTransferred;

            // Remove users whose balance is settled (0)
            if (receiver.balance === 0) positiveBalances.shift();
            if (sender.balance === 0) negativeBalances.shift();
        }

        return paymentGraph;
    }
}

module.exports = PaymentGraphService;
