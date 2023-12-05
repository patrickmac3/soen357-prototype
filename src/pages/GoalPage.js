import React, { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
const ExpensePage = () => {
  const [isFormCollapsed, setFormCollapsed] = useState(true);

  const toggleForm = () => {
    setFormCollapsed(!isFormCollapsed);
  };

  const goals = [
    { title: "Trip to south america", saved: 500, goal: 1500 , description: "description with information that could be important to remeber, such as reason, date, ...."},
    { title: "Trip to south america", saved: 1000, goal: 1500 ,  description: "description with information that could be important to remeber, such as reason, date, ...."},
    { title: "Trip to south america", saved: 700, goal: 1500 ,  description: "description with information that could be important to remeber, such as reason, date, ...."},
  ];


  return (
    <>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-sky-200">
        <h1 className="text-2xl font-semibold">Savings: <span className="text-4xl ml-3 font-semibold">750 $ / 2000$ </span><i className="text-sm ml-2">in total </i></h1>
      </div>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div className="flex justify-between">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Goals</h1>
          </div>
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={toggleForm}
            >
              {isFormCollapsed ? " Add Goal" : "Cancel"}
            </button>
          </div>
        </div>
        {isFormCollapsed ? null : (
          <div className="m-5 p-6  rounded-2xl border">
            <GoalForm />
          </div>
        )}

        <div className="m-5 p-6  rounded-2xl">
          <GoalList goals={goals} />
        </div>
      </div>
    </>
  );
};

export default ExpensePage;
