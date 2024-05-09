import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import WelcomePage from './welcome';
import Manual from './manual.jsx';
import Profile from './profile.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/manual" element={<Manual/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};

export default App;