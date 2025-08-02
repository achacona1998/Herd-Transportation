import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { QuickLinksConst } from "../../constants/Footer/items";
import Button from "../UI/Button";
import { Logo } from "../../assets/icons/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] text-white shadow-md fixed w-full z-50 shadow-black/10">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="w-24 h-16 sm:w-32 sm:h-20" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2 lg:gap-4">
          {QuickLinksConst.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className={`text-base lg:text-lg transition duration-300 hover:text-[#0F3D2E] inline-block hover:scale-110 ${
                location.pathname === link.link
                  ? "text-[#0F3D2E] text-lg lg:text-xl font-bold scale-110"
                  : "font-semibold"
              }`}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => navigate("/contact")} className="text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4">Book Now</Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="h-6 w-6 text-white"
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#CFB53B]/30 bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] absolute w-full">
          <div className="px-4 py-3 space-y-2">
            {QuickLinksConst.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-[#0F3D2E]/30 ${location.pathname === link.link ? "bg-[#0F3D2E]/20 text-[#CFB53B]" : "text-white"}`}
                onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Button onClick={() => navigate("/contact")} className="w-full justify-center">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
