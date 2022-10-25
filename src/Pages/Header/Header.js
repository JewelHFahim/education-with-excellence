import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className="bg-slate-900">
      <div className="navbar  text-base-100 w-10/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown text-slate-900">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              <Link to="/" >Home</Link>
              </li>
              <li>
              <Link to="/cource">Cources</Link>
              </li>
              <li>
              <Link to="/cource">Blog</Link>
              </li>
              <li>
              <Link to="/cource">Contact</Link>
              </li>
            </ul>
          </div>
          <Link className="text-xl text-center text-[#FF5349]">
            {" "}
            Education <br />{" "}
            <span className="text-white font-light text-lg">with excellence</span>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/cources">Cources</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <p>{user?.name}</p>
          <Link className="btn ml-2">Get started</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
