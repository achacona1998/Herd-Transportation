import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { QuickLinksConst } from "../../constants/Footer/items";
import Button from "../UI/Button";
import Logo from "../../../public/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 shadow-black/10">
      <div className="flex justify-between items-center h-16 px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="w-32 h-20" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          {QuickLinksConst.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className={`hover:text-green-700 text-lg transition duration-300 ${
                location.pathname === link.link
                  ? "text-green-700 text-xl font-bold"
                  : "font-semibold"
              }`}>
              {link.name}
            </Link>
          ))}
        </div>
        <Button onClick={() => navigate("/contact")}>Book Now</Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {QuickLinksConst.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
