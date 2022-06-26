import React from "react";
import Nav from "../Navigation";
function Header(props) {
  const { navLinks = [], selectedNav, setSelectedNav } = props;

  return (
    <header className="bg-dark mt-1">
      <div className="container">
        <div className="row align-items-end">
          <h1 className="col-12 col-lg-7 fw-light text-center text-lg-start">MG</h1>
          <Nav navLinks={navLinks} selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        </div>
      </div>
    </header>
  );
}

export default Header;
