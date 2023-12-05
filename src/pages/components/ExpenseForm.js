import React, { useState } from "react";

const ExpenseForm = () => {
  const categories = ["Transport", "Food", "Rent", "Personal", "Other"];
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount || !description) return;

    setCategory("");
    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="mb-3 p-2">
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-600 font-semibold mb-2 text-xl"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300 "
          >
            <option>Select...</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
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
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
