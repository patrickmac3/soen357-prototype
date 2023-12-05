


const expenses = [
  { amount: 26, category: "Food", description: "McDonalds Fast Food" },
  { amount: 50, category: "Transport", description: "Bus Fare" },
  { amount: 1200, category: "Rent", description: "Monthly Rent" },
  { amount: 30, category: "Personal", description: "Toiletries" },
  { amount: 100, category: "Other", description: "Miscellaneous Expense" },
  { amount: 160, category: "Food", description: "McDonalds Fast Food" },
  { amount: 5, category: "Transport", description: "Bus Fare" },
  { amount: 30, category: "Personal", description: "Toiletries" },
  { amount: 100, category: "Other", description: "Miscellaneous Expense" },
];

const goals = [
  { title: "Trip to south america", saved: 500, goal: 1500 },
  { title: "Trip to south america", saved: 1000, goal: 1500 },
  { title: "Trip to south america", saved: 700, goal: 1500 },
];

const totalBalance = 10_000;


const income = [
  { amount: 26, description: "Payroll from job" },
  { amount: 50, description: "Payroll from job" },
  { amount: 1200, description: "Payroll from job" },
  { amount: 30, description: "Payroll from job" },
  { amount: 100,description: "store refund" },
  { amount: 160,description: "cash deposit" },
  { amount: 5, description: "tax return" }

];

const calculateCategorySum = (expenses, category) => {
  return expenses.reduce((sum, expense) => {
    // Check if the expense belongs to the specified category
    if (expense.category === category) {
      // Add the amount to the sum
      return sum + expense.amount;
    }
    // If the category doesn't match, return the current sum
    return sum;
  }, 0); // Start with an initial sum of 0
};

const totalExpenses =
  calculateCategorySum(expenses, "Food") +
  calculateCategorySum(expenses, "Transport") +
  calculateCategorySum(expenses, "Personal") +
  calculateCategorySum(expenses, "Rent") +
  calculateCategorySum(expenses, "Other");

const expenseData = [
    { amount: calculateCategorySum(expenses, 'Food'), category: 'Food', color: 'green'},
    { amount: calculateCategorySum(expenses, 'Transport'), category: 'Transport', color: 'orange'},
    { amount: calculateCategorySum(expenses, 'Personal'), category: 'Personal', color: 'purple'},
    { amount: calculateCategorySum(expenses, 'Other'), category: 'Other', color: 'pink'},
    { amount: calculateCategorySum(expenses, 'Rent'), category: 'Rent', color: 'yellow'}

  ];



module.exports = { expenses, goals, totalBalance, income, totalExpenses, calculateCategorySum, expenseData };