import React, { useState } from "react";
import DataPieChart from "./components/DataPieChart";

const AnalysisPage = () => {

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
    { value: calculateCategorySum(expenses, 'Food'), label: 'Food', color: 'green'},
    { value: calculateCategorySum(expenses, 'Transport'), label: 'Transport', color: 'orange'},
    { value: calculateCategorySum(expenses, 'Personal'), label: 'Personal', color: 'purple'},
    { value: calculateCategorySum(expenses, 'Other'), label: 'Other', color: 'pink'},
    { value: calculateCategorySum(expenses, 'Rent'), label: 'Rent', color: 'yellow'}

  ];

  return (
    <>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-500 text-white">
        <div className="flex justify-between text-2xl">
          <div className="text-left ml-16">
            Income: <span className="text-4xl">750$</span>
          </div>
          <div className="text-right mr-16 ">
            Expenses: <span className="text-4xl mr-16">900$</span>
          </div>
        </div>
      </div>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
      <div className="mt-5 flex justify-center items-center">
        <DataPieChart data={expenseData}/>
      </div>
      </div>
    </>
  );
};

export default AnalysisPage;
