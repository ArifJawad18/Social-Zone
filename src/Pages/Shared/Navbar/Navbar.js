import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-slate-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-blue-700">
          Social-Zone
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/media">Media</Link></li>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
