
import React from "react";
import { Link } from "react-router";


const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-50">
      <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page not found</p>
      <Link to="/" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Go Home</Link>
    </div>
  );
};

export default NotFound;
