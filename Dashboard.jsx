import { useState } from "react";

const mockData = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" }
];

export default function Dashboard() {
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(mockData);

  const income = transactions.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>

      <select value={role} onChange={(e)=>setRole(e.target.value)} className="mb-4 border p-2">
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-100">Balance: ₹{income-expense}</div>
        <div className="p-4 bg-blue-100">Income: ₹{income}</div>
        <div className="p-4 bg-red-100">Expense: ₹{expense}</div>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
              {role === "admin" && <td>Edit</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
