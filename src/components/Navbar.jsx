
import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-200 text-green-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold">GreenNest</Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="hover:text-green-400 hover:underline">Home</NavLink>
          <NavLink to="/plants" className="hover:text-green-400 hover:underline">Plants</NavLink>
          {user && <NavLink to="/profile" className="hover:text-green-400 hover:underline">My Profile</NavLink>}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || "/assets/default-avatar.png"}
                alt={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
              {menuOpen && (
                
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg py-2 z-5">
                  <p className="px-4 py-2">{user.displayName}</p>
                  <button className="w-full text-left px-4 py-2 hover:bg-green-400" onClick={logout}>Logout</button>
                </div>
              
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-400 border p-1 rounded-md">Login</Link>
              <Link to="/signup" className="hover:text-green-400 border p-1 rounded-md">Register</Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-green-600 text-white px-4 py-3 space-y-2">
          <Link to="/" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/plants" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Plants</Link>
          {user && <Link to="/profile" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>My Profile</Link>}
          {user ? (
            <button onClick={logout} className="w-full text-left hover:text-green-200">Logout</button>
          ) : (
            <>
              <Link to="/login" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
