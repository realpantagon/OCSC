import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";

function Matching() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-blue-600 text-white text-center">
            <h2 className="text-2xl font-bold">WordPress Login</h2>
          </div>
          <iframe
            src="https://in2book.link/wp-login.php"
            title="WordPress Login"
            className="w-full h-[600px] border-0"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Matching;
