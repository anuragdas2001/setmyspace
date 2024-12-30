import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col md:flex-row py-8">
          {/* Brand and Address */}
          <div className="w-64 pl-0">
            <div className="text-xl font-semibold text-white mb-3">
              SET<span className="text-[#DE3163]">MySpace</span>
            </div>
            <div className="text-gray-400 text-sm">
              <p>A Unit of UrbanBorrow Pvt. Ltd.</p>
              <p>Whitefield, Bangalore</p>
              <p>Karnataka, India 560066</p>
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-wrap text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors px-6 border-r border-[#DE3163]">
                Help & Support
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors px-6 border-r border-[#DE3163]">
                Signup As Partner
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors px-6 border-r border-[#DE3163]">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors px-6">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="border-t border-gray-800">
          <div className="py-6 text-center text-gray-400 text-sm">
            All Rights Reserved {new Date().getFullYear()} setmyspace
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;