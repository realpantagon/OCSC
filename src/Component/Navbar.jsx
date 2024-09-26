import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("ocsctoken");
    localStorage.removeItem("ocscusername");
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("ocscrecordid");
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex justify-center">
            <div>
              <div className="flex space-x-8">
                <Link
                  to="/profile"
                  className={`${
                    isActive("/profile")
                      ? "bg-red-500 text-white rounded-3xl"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  Profile
                </Link>
                <Link
                  to="/manual"
                  className={`${
                    isActive("/manual")
                      ? "bg-red-500 text-white rounded-3xl"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  Manual
                </Link>
                <Link
                  to="/order"
                  className={`${
                    isActive("/order")
                      ? "bg-red-500 text-white rounded-3xl"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  Order form
                </Link>
                <Link
                  to="/faq"
                  className={`${
                    isActive("/faq")
                      ? "bg-red-500 text-white rounded-3xl"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  FAQ
                </Link>
                {/* Hide Matching */}
                {/* <a
                  href="https://in2book.link/wp-login.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-transparent text-blue-500 hover:text-blue-700 hover:border-gray-300 px-3 py-2 rounded-md text-lg font-medium flex items-center space-x-1" // Use flex and items-center for alignment
                >
                  <span>Matching</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-blue-500 hover:text-blue-700" 
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            >
              <span className="sr-only">Logout</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
