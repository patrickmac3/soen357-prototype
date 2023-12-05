import React, { useState } from "react";
import IncomeList from "./components/IncomeList";
import IncomeForm from "./components/IncomeForm";
import { income } from '../Variables'

const IncomePage = () => {
  const [isFormCollapsed, setFormCollapsed] = useState(true);

  const toggleForm = () => {
    setFormCollapsed(!isFormCollapsed);
  };

  const totalIncome = income.reduce(
    (sum, entry) => sum + entry.amount,
    0
  );


  return (
    <>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-500 text-white">
        <h1 className="text-2xl font-semibold">Total income:  <span className="text-4xl font-semibold">{totalIncome}$</span><i className="text-sm ml-2">so far this month</i></h1>
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
          <IncomeList incomes={income} />
        </div>
      </div>
    </>
  );
};

export default IncomePage;
