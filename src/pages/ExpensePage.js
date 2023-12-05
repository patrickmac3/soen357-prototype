import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
const ExpensePage = () => {
  const [isFormCollapsed, setFormCollapsed] = useState(true);

  const toggleForm = () => {
    setFormCollapsed(!isFormCollapsed);
  };

  const expenses = [
    { amount: 26, category: "Food", description: "McDonalds Fast Food" },
    { amount: 50, category: "Transport", description: "Bus Fare" },
    { amount: 1200, category: "Rent", description: "Monthly Rent" },
    { amount: 30, category: "Personal", description: "Toiletries" },
    { amount: 100, category: "Other", description: "Miscellaneous Expense" },
    { amount: 160, category: "Food", description: "McDonalds Fast Food" },
    { amount: 5, category: "Transport", description: "Bus Fare" },
    { amount: 30, category: "Personal", description: "Toiletries" },
    { amount: 100, category: "Other", description: "Miscellaneous Expense" },
  ];

  const calculateCategorySum = (expenses, category) => {
    return expenses.reduce((sum, expense) => {
      // Check if the expense belongs to the specified category
      if (expense.category === category) {
        // Add the amount to the sum
        return sum + expense.amount;
      }
      // If the category doesn't match, return the current sum
      return sum;
    }, 0); // Start with an initial sum of 0
  };
  
  const expenseData = [
    { amount: calculateCategorySum(expenses, 'Food'), category: 'Food', color: 'green'},
    { amount: calculateCategorySum(expenses, 'Transport'), category: 'Transport', color: 'orange'},
    { amount: calculateCategorySum(expenses, 'Personal'), category: 'Personal', color: 'purple'},
    { amount: calculateCategorySum(expenses, 'Other'), category: 'Other', color: 'pink'},
    { amount: calculateCategorySum(expenses, 'Rent'), category: 'Rent', color: 'yellow'}

  ];

  return (
    <>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-200">
        <h1 className="text-2xl font-semibold">Total Expenses:  <span className="text-4xl font-semibold">750 $</span><i className="text-sm ml-2">so far this month</i></h1>

      </div>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Expenses</h1>
          </div>
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={toggleForm}
            >
              {isFormCollapsed ? " Add expense" : "Cancel"}
            </button>
          </div>
        </div>
        {isFormCollapsed ? null : (
          <div className="m-5 p-6  rounded-2xl border">
            <ExpenseForm />
          </div>
        )}

        <div className="m-5 p-6  rounded-2xl">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
};

export default ExpensePage;
