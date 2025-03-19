# Splitwise-LLD

This project is a simplified implementation of Splitwise, designed to manage expenses and settle payments between users and groups. The system allows users to:

- Add and edit expenses.
- Settle expenses.
- Create groups to manage shared expenses.
- Simplify payments using a graph-based balancing algorithm.

## Features

- **Add Expenses**: Users can add expenses and allocate the amounts to multiple users.
- **Edit Expenses**: Modify any expense details.
- **Settle Expenses**: Mark expenses as settled.
- **Group Functionality**: Create groups, add users to groups, and settle group expenses.
- **Simplified Transitive Payments**: Use a graph-based algorithm to reduce the number of transactions.

## Tech Stack

- **Backend**: Node.js, Express
- **In-memory DB**: Hashmaps for storing data
- **Testing**: APIs are tested via Postman

## API Endpoints

### Expense Routes

- `POST /expenses`: Add an expense
- `PUT /expenses/:id`: Edit an expense
- `PUT /expenses/:id/settle`: Settle an expense

### Group Routes

- `POST /groups`: Create a group
- `POST /groups/addUser`: Add a user to a group
- `GET /groups/:id`: Get group details

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/rohit-raj-1901/splitwise-LLD.git
Install dependencies:

npm install
Run the server:

npm start
Test APIs on Postman