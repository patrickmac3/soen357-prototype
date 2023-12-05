// Home page: 
const totalBalance = 10_000;

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

// Expense page 
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

//   Analysis 
const expenses = [
    { amount: 26, category: "Food", description: "McDonalds Fast Food" },
    { amount: 50, category: "Transport", description: "Bus Fare" },
    { amount: 1200, category: "Rent", description: "Monthly Rent" },
    { amount: 30, category: "Personal", description: "Toiletries" },
    { amount: 100, category: "Other", description: "Miscellaneous Expense" },
    { amount: 160, category: "Food", description: "McDonalds Fast Food" },
    { amount: 5, category: "Transport", description: "Bus Fare" },
    { amount: 600, category: "Personal", description: "Toiletries" },
    { amount: 100, category: "Other", description: "Miscellaneous Expense" },
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
    {
      value: calculateCategorySum(expenses, "Food"),
      label: "Food",
      color: "green",
    },
    {
      value: calculateCategorySum(expenses, "Transport"),
      label: "Transport",
      color: "orange",
    },
    {
      value: calculateCategorySum(expenses, "Personal"),
      label: "Personal",
      color: "purple",
    },
    {
      value: calculateCategorySum(expenses, "Other"),
      label: "Other",
      color: "pink",
    },
    {
      value: calculateCategorySum(expenses, "Rent"),
      label: "Rent",
      color: "yellow",
    },
  ];
  const financialData = [
    { income: 4000, expenses: 300, month: "January" },
    { income: 3500, expenses: 400, month: "February" },
    { income: 4500, expenses: 500, month: "March" },
    { income: 4200, expenses: 350, month: "April" },
    { income: 5000, expenses: 600, month: "May" },
    { income: 4800, expenses: 450, month: "June" },
    { income: 5500, expenses: 700, month: "July" },
    { income: 6000, expenses: 800, month: "August" },
    { income: 5300, expenses: 600, month: "September" },
    { income: 4800, expenses: 400, month: "October" },
    { income: 5100, expenses: 550, month: "November" },
    { income: 5800, expenses: 700, month: "December" },
  ];

  const totalIncome = financialData.reduce(
    (sum, entry) => sum + entry.income,
    0
  );
  const averageMonthlyExpenses =
    financialData.reduce((sum, entry) => sum + entry.expenses, 0) /
    financialData.length;
  const averageMonthlyIncome =
    financialData.reduce((sum, entry) => sum + entry.income, 0) /
    financialData.lengt

    // Goal Page 
    const goals = [
        { title: "Trip to south america", saved: 500, goal: 1500 , description: "description with information that could be important to remeber, such as reason, date, ...."},
        { title: "Trip to south america", saved: 1000, goal: 1500 ,  description: "description with information that could be important to remeber, such as reason, date, ...."},
        { title: "Trip to south america", saved: 700, goal: 1500 ,  description: "description with information that could be important to remeber, such as reason, date, ...."},
      ];

    //   income 
    const incomes = [
        { amount: 26, description: "Payroll from job" },
        { amount: 50, description: "Payroll from job" },
        { amount: 1200, description: "Payroll from job" },
        { amount: 30, description: "Payroll from job" },
        { amount: 100,description: "store refund" },
        { amount: 160,description: "cash deposit" },
        { amount: 5, description: "tax return" }
    