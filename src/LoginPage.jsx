import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Airtable from './API/Airtable';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const [token, expirationTime] = storedToken.split(':');
      const currentTime = Date.now();
      if (currentTime < parseInt(expirationTime)) {
        // Token is still valid, automatically log in the user
        navigate('/welcome');
      } else {
        // Token has expired, remove it from local storage
        localStorage.removeItem('token');
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const credentials = await fetchCredentials();
      // <Airtable/>
      const isValidCredential = credentials.some(
        (cred) => cred.username === username && cred.password === password
      );
      if (isValidCredential) {
        const token = generateToken();
        localStorage.setItem('token', token); // Store the token
        localStorage.setItem('username', username); // Store the username
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }
        navigate('/welcome');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while logging in');
    }
    setLoading(false);
  };

  const handleInputChange = () => {
    if (error) {
      setError('');
    }
  };

  const fetchCredentials = async () => {
    const response = await axios.get(
      'https://api.airtable.com/v0/appuJ44jDsA3MjkPx/Approved%20Exhibitors',
      {
        headers: {
          Authorization: 'Bearer pat0OBMDNs4sQDmvL.46e6a60992296cd058398c5407b91169e9764861003a751a45e2e37c2fa4cc83',
        },
      }
    );
    const records = response.data.records;
    console.log(response.data);
    return records.map(record => ({
      username: record.fields.Username,
      password: record.fields.Password,
    }));
  };

  const generateToken = () => {
    const token = Math.random().toString(36).substr(2);
    const expirationTime = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 days from now
    return `${token}:${expirationTime}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleInputChange();
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleInputChange();
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;