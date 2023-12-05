import React, { useState, useEffect } from "react";

const ProgressBar = ({ budget, spent }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (budget) {
      setPercentage(Math.round((spent / budget) * 100));
    }
  }, [budget, spent]);

  return (
    <div className="relative pt-1">
      <div
        className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
      >
        <div
          style={{ width: `${percentage}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
            percentage > 50 ? "bg-green-500" : "bg-orange-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
