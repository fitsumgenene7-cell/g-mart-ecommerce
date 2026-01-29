import React from "react";
import { ChevronDown, Search, User, Heart, ShoppingBag } from "lucide-react";

const navLinks = [
  { name: "Shop", id: "products", hasDropdown: true },
  { name: "Categories", id: "categories", hasDropdown: true },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  // Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Promo Bar */}
      <div className="bg-black text-white text-center py-2.5 text-sm font-medium">
        All you need in one place, welcome to G-mart
      </div>

      {/* Navbar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-800">
            G-mart
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="text-sm font-semibold text-gray-700 hover:text-blue-500 flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search button */}
            <button
              className="p-2 text-gray-800 hover:bg-gray-100 rounded transition"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* User */}
            <button className="p-2 text-gray-800 hover:bg-gray-100 rounded transition" aria-label="Account">
              <User size={20} />
            </button>

            {/* Wishlist */}
            <button className="p-2 text-gray-800 hover:bg-gray-100 rounded transition" aria-label="Wishlist">
              <Heart size={20} />
            </button>

            {/* Cart */}
            <button className="p-2 text-gray-800 hover:bg-gray-100 rounded transition" aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu (always visible, static) */}
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="text-base font-semibold text-gray-800 py-3 px-2 hover:bg-blue-50 rounded flex items-center justify-between"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;