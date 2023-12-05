import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import IncomeList from "./components/IncomeList";
import IncomeForm from "./components/IncomeForm";

const IncomePage = () => {
  const [isFormCollapsed, setFormCollapsed] = useState(true);

  const toggleForm = () => {
    setFormCollapsed(!isFormCollapsed);
  };

  const incomes = [
    { amount: 26, description: "Payroll from job" },
    { amount: 50, description: "Payroll from job" },
    { amount: 1200, description: "Payroll from job" },
    { amount: 30, description: "Payroll from job" },
    { amount: 100,description: "store refund" },
    { amount: 160,description: "cash deposit" },
    { amount: 5, description: "tax return" }

  ];

  return (
    <>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-200">
        <h1 className="text-2xl font-semibold">Total income:  <span className="text-4xl font-semibold">900$</span><i className="text-sm ml-2">so far this month</i></h1>
      </div>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Income</h1>
          </div>
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={toggleForm}
            >
              {isFormCollapsed ? " Add Income" : "Cancel"}
            </button>
          </div>
        </div>
        {isFormCollapsed ? null : (
          <div className="m-5 p-6  rounded-2xl border">
            <IncomeForm />
          </div>
        )}

        <div className="m-5 p-6  rounded-2xl">
          <IncomeList incomes={incomes} />
        </div>
      </div>
    </>
  );
};

export default IncomePage;
