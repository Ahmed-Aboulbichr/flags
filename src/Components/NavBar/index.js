import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>
          <Link exact to="/">
            Home
          </Link>

          <Link to="/About">
              About
          </Link>
      </div>
    </div>
  );
};

export default NavBar;