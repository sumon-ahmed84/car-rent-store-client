import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }
  return (
    <div className="navbar py-0 min-h-0  z-1 shadow-sm rounded-full glass-card max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-models"}>
                <IoLogoModelS /> All Models
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
          <img src="/src/assets/Logo.png" className="h-8 rounded-2xl" /> RentWheels
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all-models"}>
              <IoLogoModelS /> All Models
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add-model"}>
             <ImBoxAdd /> Add model
            </NavLink>
          </li>
{/* 
          <li>
            <NavLink to={"/profile"}>
              <FaUser /> Profile
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>

              <li>
                <Link to={"/my-models"}>
                  My Models
                </Link>
              </li>

              <li >
                <Link to={"/my-downloads"}>
                 My Downloads
                </Link>
              </li>

              <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
              
              <li>
                <a>
                  {" "}
                  <FaGear /> Settings
                </a>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) :
        <div>
            <Link
            to={"/register"}
            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
          >
            {" "}
             Register
          </Link> 
          <Link
            to={"/login"}
            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
          >
            {" "}
            <IoLogIn /> Login
          </Link>
        </div>    
        }
      </div>
    </div>
  );
};

export default Navbar;







// import React, { useContext, useState } from "react";

// import { AuthContext } from "../context/AuthContext";
// import { Link, NavLink } from "react-router";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-base-200 text-green-800 shadow-md">
//       <div className="container mx-auto flex justify-between items-center px-4 py-3">
//         <Link to="/" className="text-2xl font-bold">GreenNest</Link>

//         <div className="hidden md:flex items-center space-x-6">
//           <NavLink to="/" className="hover:text-green-400 hover:underline">Home</NavLink>
//           <NavLink to="/plants" className="hover:text-green-400 hover:underline">Plants</NavLink>
//           {user && <NavLink to="/profile" className="hover:text-green-400 hover:underline">My Profile</NavLink>}
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           {user ? (
//             <div className="relative">
//               <img
//                 src={user.photoURL || "/assets/default-avatar.png"}
//                 alt={user.displayName}
//                 className="w-10 h-10 rounded-full cursor-pointer"
//                 onClick={() => setMenuOpen(!menuOpen)}
//               />
//               {menuOpen && (
                
//                   <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg py-2 z-5">
//                   <p className="px-4 py-2">{user.displayName}</p>
//                   <button className="w-full text-left px-4 py-2 hover:bg-green-400" onClick={logout}>Logout</button>
//                 </div>
              
//               )}
//             </div>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-green-400 border p-1 rounded-md">Login</Link>
//               <Link to="/register" className="hover:text-green-400 border p-1 rounded-md">Register</Link>
//             </>
//           )}
//         </div>

//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-green-600 text-white px-4 py-3 space-y-2">
//           <Link to="/" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link to="/plants" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Plants</Link>
//           {user && <Link to="/profile" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>My Profile</Link>}
//           {user ? (
//             <button onClick={logout} className="w-full text-left hover:text-green-200">Logout</button>
//           ) : (
//             <>
//               <Link to="/login" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Login</Link>
//               <Link to="/signup" className="block hover:text-green-200" onClick={() => setMenuOpen(false)}>Register</Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
