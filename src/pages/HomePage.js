import React from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./components/ExpenseList";
import GoalList from "./components/GoalList";
import ProgressBar from "./components/ProgressBar";
import { expenses, totalBalance, goals, income } from "../Variables";
import IncomeList from "./components/IncomeList";

const HomePage = () => {

  return (
    <>
      {/* Head */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-500 text-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Account</h1>
          </div>
          <div className="text-right">
            total balance: <span className="text-2xl m-5">{totalBalance}$</span>
          </div>
        </div>
        {/* <div className="mt-3 text-xl ml-3 ">
          <span>This month: </span>
          <div className="text-lg ml-4">
            total income: <span className="ml-3"> 500$</span>
            <br />
            total expenses: <span className="ml-3"> 200$</span>
            <br />
          </div>
        </div> */}
      </div>
      {/* Budget Progress */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold mb-4">Budget</h1>
          </div>
          <div className="text-left">
            <i> 4 days remaining</i>
          </div>
        </div>

        <h2 className="text-xl font-semibold">
          250$ <span className="text-sm">left this month</span>
        </h2>
        <ProgressBar budget={1000} spent={750} />
        <span>
          <i>you have spent 750$ out of 1000$</i>
        </span>
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Expenses</h1>
          </div>
          <div className="text-right">
            <Link to="/analysis">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                monthly analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Incomee */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Income</h1>
          </div>
          <div className="text-right">
            <Link to="/income">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                view income
              </button>
            </Link>
          </div>
        </div>
        <div className="m-5 p-6  rounded-2xl">
          <IncomeList incomes={income} numOfIncomes={3}/>
        </div>
      </div>
      {/* Expenses */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Expenses</h1>
          </div>
          <div className="text-right">
            <Link to="/expense">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                view expenses
              </button>
            </Link>
          </div>
        </div>
        <div className="m-5 p-6  rounded-2xl">
          <ExpenseList expenses={expenses} numOfExpense={3} />
        </div>
      </div>

      {/* Goals */}
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Saving Goals</h1>
          </div>
          <div className="text-right">
            <Link to="/saving-goals">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                view saving goals
              </button>
            </Link>
          </div>
        </div>
        <div className="m-5 p-6  rounded-2xl">
          <GoalList goals={goals} numOfGoals={3} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
