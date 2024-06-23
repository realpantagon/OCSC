import React from "react";
import Navbar from "./Component/Navbar";

function FFaq() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <img className="w-[30%] h-auto" src="FAQ.png" alt="FAQ" />
        <h1 className="text-4xl font-bold mt-64 ml-[-64px]">Loading...</h1>
      </div>
    </div>
  );
}

export default FFaq;
