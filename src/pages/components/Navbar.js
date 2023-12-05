import { Link } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";

const Navbar = () => {
  const navLinks = [
    { to: "dashbboard", label: "Home" },
    { to: "expense", label: "Expenses" },
    { to: "income", label: "Income" },
    { to: "saving-goals", label: "Savings" },
    { to: "tips", label: "Education" },
    { to: "analysis", label: "Analytsis" },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="dashboard" className="text-white text-2xl font-bold">
          SmartSpend
        </Link>

        {/* Add the responsive dropdown menu */}
        <div className="md:hidden">
          <DropdownMenu links={navLinks} />
        </div>

        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

export default Navbar;
