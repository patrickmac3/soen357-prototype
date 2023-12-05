import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          My Website
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
          <NavLink to="/savings">Savings</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/goals">Goals</NavLink>
          <NavLink to="/analytics">Analytics</NavLink>
        </div>
        {/* Add a responsive menu for smaller screens */}
        <div className="md:hidden">
          {/* Add your responsive menu icon/button here */}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md
text-sm font-medium"
  >
    {children}
  </Link>
);

export default Navbar;
