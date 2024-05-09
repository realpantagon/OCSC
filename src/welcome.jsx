import React from 'react';
import Navbar from './Component/Navbar';

const WelcomePage = () => {
  return (
    <div>
        <Navbar/>
      <h1>Welcome!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default WelcomePage;