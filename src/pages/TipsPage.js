const TipsPage = () => {
  return (
    <>
      <div className="mx-auto p-6 m-10 border rounded-2xl border-gray-300 lg:w-3/4 shadow-lg bg-white">
        <div>
          <h1 className="text-2xl font-semibold">
            Improve your financial literacy
          </h1>
        </div>
        <ul>
          <a href="https://college.harvard.edu/guides/financial-literacy">
            <li className="hover:bg-slate-100 m-5 border-inherit p-6 border rounded-2xl border-slate-200">
              Financial literacy - Harvard College
            </li>
          </a>
          <a href="https://college.harvard.edu/guides/financial-literacy">
            <li className="hover:bg-slate-100 m-5 border-inherit p-6 border rounded-2xl border-slate-200">
              How to spend money smartly
            </li>
          </a>
          <a href="https://college.harvard.edu/guides/financial-literacy">
            <li className="hover:bg-slate-100 m-5 border-inherit p-6 border rounded-2xl border-slate-200">
              Advantages of Tax free saving accounts
            </li>
          </a>
          <a href="https://college.harvard.edu/guides/financial-literacy">
            <li className="hover:bg-slate-100 m-5 border-inherit p-6 border rounded-2xl border-slate-200">
              Stock Market
            </li>
          </a>
          <a href="https://college.harvard.edu/guides/financial-literacy">
            <li className="hover:bg-slate-100 m-5 border-inherit p-6 border rounded-2xl border-slate-200">
              How to make a budget
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default TipsPage;
