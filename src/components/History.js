import React from 'react';

const transactions = [
  { id: 1, vendor: 'Tuckshop A', amount: 15, date: '2025-06-04' },
  { id: 2, vendor: 'Tuckshop B', amount: 10, date: '2025-06-02' }
];

function History() {
  return (
    <div>
      <h2>Payment History</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.date} - {tx.vendor} - K{tx.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;