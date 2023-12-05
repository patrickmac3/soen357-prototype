import React, { useState } from "react";
import DataPieChart from "./components/DataPieChart";
import BarDataSet from "./components/BarDataSet";
import IncomeExpensesChart from "./components/IncomeExpensesChart";
import AverageComparisonChart from "./components/AverageComparisonChart";
import { income , expenses, totalExpenses, calculateCategorySum } from "../Variables";

const AnalysisPage = () => {


  // const calculateCategorySum = (expenses, category) => {
  //   return expenses.reduce((sum, expense) => {
  //     // Check if the expense belongs to the specified category
  //     if (expense.category === category) {
  //       // Add the amount to the sum
  //       return sum + expense.amount;
  //     }
  //     // If the category doesn't match, return the current sum
  //     return sum;
  //   }, 0); // Start with an initial sum of 0
  // };

  const expenseData = [
    {
      value: calculateCategorySum(expenses, "Food"),
      label: "Food",
      color: "green",
    },
    {
      value: calculateCategorySum(expenses, "Transport"),
      label: "Transport",
      color: "orange",
    },
    {
      value: calculateCategorySum(expenses, "Personal"),
      label: "Personal",
      color: "purple",
    },
    {
      value: calculateCategorySum(expenses, "Other"),
      label: "Other",
      color: "pink",
    },
    {
      value: calculateCategorySum(expenses, "Rent"),
      label: "Rent",
      color: "yellow",
    },
  ];

  const totalIncome = income.reduce(
    (sum, entry) => sum + entry.amount,
    0
  );

  const totalExpenses = expenses.reduce(
    (sum, entry) => sum + entry.amount,
    0
  );


  const financialData = [
    { income: 4000, expenses: 300, month: "January" },
    { income: 3500, expenses: 400, month: "February" },
    { income: 4500, expenses: 500, month: "March" },
    { income: 4200, expenses: 350, month: "April" },
    { income: 5000, expenses: 600, month: "May" },
    { income: 4800, expenses: 450, month: "June" },
    { income: 5500, expenses: 700, month: "July" },
    { income: 6000, expenses: 800, month: "August" },
    { income: 5300, expenses: 600, month: "September" },
    { income: 4800, expenses: 400, month: "October" },
    { income: 5100, expenses: 550, month: "November" },
    { income: totalIncome, expenses: calculateCategorySum(expenses, 'amount' )}

  ];


  const averageMonthlyExpenses =
    financialData.reduce((sum, entry) => sum + entry.expenses, 0) /
    financialData.length;
  const averageMonthlyIncome =
    financialData.reduce((sum, entry) => sum + entry.income, 0) /
    financialData.length;

  return (
    <>
      {/* Header */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-500 text-white">
        <div className="flex justify-between text-2xl">
          <div className="text-left ml-16">
            Income: <span className="text-4xl">{totalIncome}$</span>
          </div>
          <div className="text-right mr-16 ">
            Expenses: <span className="text-4xl mr-16">{totalExpenses}$</span>
          </div>
        </div>
      </div>
      {/* Habits */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white hover:shadow-2xl">
        <h1 className="text-2xl font-semibold">tendencies </h1>
        {/*  */}
        <div className="mt-4">
          <span className="text-md"></span>
          <div className="text-md border round rounded-2xl m-5 p-4">
            {totalExpenses > totalIncome ? (
              <span className="text-red-500">
                Be carful, you seem to be spending more that you are earning
              </span>
            ) : (
              <span className="text-green-500">
                Good job, you seem to be respecting your budget
              </span>
            )}
          </div>
        </div>
        {/* Income vs Expense */}
        <div>
          <h1 className="mx-auto text-lg font-semibold m-4">
            Income to Expense Ratio{" "}
          </h1>

          <div className="mt-5 flex justify-center items-center border rounded-2xl hover:shadow-2xl p-4">
            <div>
              <IncomeExpensesChart income={totalIncome} expenses={totalExpenses} />
            </div>
          </div>
        </div>
        {/* Income vs Average Income */}
        <div>
          <h1 className="mx-auto text-lg font-semibold m-4">
            Income comparison{" "}
          </h1>
          <div className="mt-5 flex justify-center items-center border rounded-2xl hover:shadow-2xl p-4">
            <div>
              <AverageComparisonChart
                current={totalIncome}
                average={averageMonthlyIncome}
              />
            </div>
          </div>
        </div>
        {/* Expenses vs Average Expenses */}
        <div>
          <h1 className="mx-auto text-lg font-semibold m-4">
            Expenses comparison{" "}
          </h1>
          <div className="mt-5 flex justify-center items-center border rounded-2xl hover:shadow-2xl p-4">
            <div>
              <AverageComparisonChart
                current={totalExpenses}
                average={averageMonthlyExpenses}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Spending Profile */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white  hover:shadow-2xl">
        <h1 className="text-2xl font-semibold">Spending profile</h1>
        <div className="mt-5 flex justify-center items-center">
          <DataPieChart data={expenseData} />
        </div>
      </div>
      {/* Expense Ratio */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white  hover:shadow-2xl">
        <h1 className="text-2xl font-semibold">Expense Ratio</h1>
        <div className="mt-5 flex justify-center items-center">
          <BarDataSet data={financialData} />
        </div>
      </div>
    </>
  );
};

export default AnalysisPage;
