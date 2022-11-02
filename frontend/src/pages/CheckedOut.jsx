import React from "react";
import { Link } from "react-router-dom";

const CheckedOut = () => {
  return (
    <div className="bg-green-500 h-screen w-full flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-4xl text-center">Thank you for your purchase!</h1>
        <p className="text-center">
          You will receive an email confirmation shortly.
        </p>
        <Link to="/" className="block text-center mt-4">
          <button className="bg-slate-800 text-white px-4 py-2 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckedOut;
