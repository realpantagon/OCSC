import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const [token, expirationTime] = storedToken.split(":");
      const currentTime = Date.now();
      if (currentTime < parseInt(expirationTime)) {
        // Token is still valid, automatically log in the user
        navigate("/welcome");
      } else {
        // Token has expired, remove it from local storage
        localStorage.removeItem("token");
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        "https://api.airtable.com/v0/appVADkxTuwcN78c6/Approve%20Exhibitors",
        {
          headers: {
            Authorization: "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
          params: {
            filterByFormula: `AND({Username} = '${username}', {Password} = '${password}')`,
            fields: ["Username", "Password"],
          },
        }
      );

      const records = response.data.records;

      if (records.length > 0) {
        const token = generateToken();
        localStorage.setItem("token", token); // Store the token
        localStorage.setItem("username", username); // Store the username

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberMe");
        }

        navigate("/welcome");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while logging in. Please try again later.");
    }

    setLoading(false);
  };

  const handleInputChange = () => {
    if (error) {
      setError("");
    }
  };

  const generateToken = () => {
    const token = Math.random().toString(36).substr(2);
    const expirationTime = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 days from now
    return `${token}:${expirationTime}`;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen pb-[300px] flex flex-col items-center justify-center">
      <img src="/OCSC_pose PopHead.png" className="w-40 relative top-10" alt="Logo" />
      <div className="bg-yellow-300 p-8 rounded-lg shadow-md relative w-96">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleInputChange();
              }}
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleInputChange();
              }}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Loading...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;