import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import WelcomePage from "./welcome";
import Manual from "./manual.jsx";
import Profile from "./profile.jsx";
import ProtectedRoute from "./Component/ProtectedRoute.jsx";
import Order from "./Order.jsx";
import FFaq from "./FFaq.jsx";
import matching from "./matching.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/welcome"
        element={<ProtectedRoute element={WelcomePage} />}
      />
      <Route path="/manual" element={<ProtectedRoute element={Manual} />} />
      <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
      <Route path="/order" element={<ProtectedRoute element={Order} />} />
      <Route path="/faq" element={<ProtectedRoute element={FFaq} />} />
    </Routes>
  );
};

export default App;
