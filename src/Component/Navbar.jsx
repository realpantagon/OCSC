import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ocsctoken');
    localStorage.removeItem('rememberMe');
    navigate('/');
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
                    isActive('/profile')
                      ? 'bg-red-500 text-white rounded-3xl'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  Profile
                </Link>
                <Link
                  to="/manual"
                  className={`${
                    isActive('/manual')
                      ? 'bg-red-500 text-white rounded-3xl'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  Manual
                </Link>
                <Link
                  to="/order"
                  className={`${
                    isActive('/order')
                      ? 'bg-red-500 text-white rounded-3xl'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  Order
                </Link>
                <Link
                  to="/faq"
                  className={`${
                    isActive('/faq')
                      ? 'bg-red-500 text-white rounded-3xl'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } px-3 py-2 rounded-md text-lg font-medium`}
                >
                  FAQ
                </Link>
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