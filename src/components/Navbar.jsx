import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Spaces",
    link: "/spaces",
  },
  {
    name: "Celebrations",
    link: "/",
  },
  {
    name: "Professionals",
    link: "/professionals",
  },
  {
    name: "Vendors",
    link: "/vendors",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
          <span>
            SET<span className="text-[#DE3163] font-bold">MySpace</span>
          </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Navlinks.map((navlink) => (
              <a
                key={navlink.name}
                href={navlink.link}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {navlink.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/become-professional" className="text-gray-600 hover:text-indigo-600 text-sm font-medium">
              Become a professional
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
          {Navlinks.map((navlink) => (
            <a
              key={navlink.name}
              href={navlink.link}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              {navlink.name}
            </a>
          ))}
          <div className="border-t border-gray-200 my-2"></div>
          <a
            href="/become-professional"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
          >
            Become a professional
          </a>
          <div className="px-3 py-2">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;