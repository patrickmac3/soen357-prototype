import React, { useState } from "react";

const IncomeForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="mb-3 p-2">
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-600 font-semibold mb-2 text-xl"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none
focus:ring focus:border-blue-300 text-xl"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-600 font-semibold mb-2 text-xl"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none
focus:ring focus:border-blue-300 text-xl"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded
hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Income
      </button>
    </form>
  );
};

export default IncomeForm;
