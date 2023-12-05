import React from "react";
import { Link } from "react-router-dom";

const IncomeList = ({ incomes, numOfIncomes = incomes.length }) => {
  if (!Array.isArray(incomes)) {
    return null;
  }

  const incomesToShow = incomes.slice(0, numOfIncomes);

  return (
    <>
      <table className="w-full table-auto ">
        <thead>
          <tr>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {incomesToShow.map((income) => (
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2">${income.amount}</td>
              <td className="border px-4 py-2">{income.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border px-4 py-2 text-center"> ...</div>
    </>
  );
};

export default IncomeList;
