import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          STORES
        </a>
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#/list">
              List
            </a>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
