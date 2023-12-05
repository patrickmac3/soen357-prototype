import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import { expenses, totalExpenses, calculateCategorySum } from "../Variables";
const ExpensePage = () => {
  const [isFormCollapsed, setFormCollapsed] = useState(true);

  const toggleForm = () => {
    setFormCollapsed(!isFormCollapsed);
  };


  return (
    <>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-500 text-white">
        <h1 className="text-2xl font-semibold">Total Expenses:  <span className="text-4xl font-semibold">{totalExpenses} $</span><i className="text-sm ml-2">so far this month</i></h1>

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
