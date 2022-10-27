import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Header.css";
import logo from "../../assets/images/logo3.png";
import profile from "../../assets/images/profile.jpg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [colorMode, setColoreMode] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick = () => {
    setColoreMode((current) => !current);
  };

  return (
    <div
      className="bg-slate-900"
      style={{
        backgroundColor: colorMode ? "#1B4F72" : "",
        color: colorMode ? "white" : "",
      }}
    >
      <div className="navbar  text-base-100 w-10/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown text-slate-900">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/cources">Cources</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <Link to="/">
            <div className="loggo flex  justify-center items-center">
              <img src={logo} alt="" className=" " />
              <small className="logo-text text-[#ff4500] font-medium hidden lg:block">
                {" "}
                <span className="text-lg">Education</span> <br /> with <br />{" "}
                Excellence
              </small>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/cources">Cources</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL ? (
            <>
              {user?.photoURL ? (
                <Link
                  to="/profile"
                  className="tooltip tooltip-left"
                  data-tip={user?.displayName}
                >
                  <img
                    className="profile-pic border border-emerald-500 p-0.5 rounded-full"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                </Link>
              ) : (
                <Link className="profile-pic" to="/profile">
                  <img className="rounded-full" src={profile} alt="" />
                </Link>
              )}
            </>
          ) : (
            <Link to="/profile">
              <p>{user?.email}</p>
            </Link>
          )}

          {user?.email ? (
            <>
              <button onClick={handleLogOut} className=" ml-2 btn btn-xs">
                {" "}
                Log Out{" "}
              </button>
            </>
          ) : (
            <>
              <button onClick={handleLogOut} className=" ml-2 mr-2 btn btn-xs">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
        <input
          onClick={handleClick}
          type="checkbox"
          className="toggle toggle-sm lg:hidden ml-2"
          checked
        />
        <button
          style={{
            backgroundColor: colorMode ? "dark" : "",
            color: colorMode ? "white" : "",
          }}
          onClick={handleClick}
          className="ml-2 btn btn-xs hidden lg:block"
        >
          {" "}
          Change Color{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
