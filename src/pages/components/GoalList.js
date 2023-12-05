import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

// TODO: figure out how to expand only one card at a time
const GoalList = ({ goals, numOfGoals = goals.length }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!Array.isArray(goals)) {
    return null;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const goalsToShow = goals.slice(0, numOfGoals);

  return (
    <>
      <ul>
        {goalsToShow.map((item) => {
          return (
            <li
              className="hover:bg-slate-100 m-5 border-inherit p-6 border rounded-2xl border-slate-200"
              onClick={toggleExpand}
            >
              <div className="mb-6">
                <span className="text-xl">{item.title}</span>
              </div>

              <ProgressBar budget={item.goal} spent={item.saved} />
              <span className="text-sm">
                you have saved{" "}
                <span className="text-lg font-semibold">{item.saved}</span> out
                of {item.goal}
              </span>
              {isExpanded || item.description == null ? null : (
                <div className="mt-4">
                  <span className="text-md">Description</span>
                  <div className="text-md border round rounded-2xl m-5 p-4">
                    {item.description}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GoalList;
