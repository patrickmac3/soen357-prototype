import React from "react";
import { Link } from "react-router-dom";

const ExpenseList = ({ expenses, numOfExpense = expenses.length }) => {
  if (!Array.isArray(expenses)) {
    return null;
  }

  const expensesToShow = expenses.slice(0, numOfExpense);

  return (
    <>
      <table className="w-full table-auto ">
        <thead>
          <tr>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {expensesToShow.map((expense) => (
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2">${expense.amount}</td>
              <td className="border px-4 py-2">{expense.category}</td>
              <td className="border px-4 py-2">{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border px-4 py-2 text-center"> ...</div>
    </>
  );
};

export default ExpenseList;
