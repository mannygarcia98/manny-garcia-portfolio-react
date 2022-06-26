import React from "react";
import Nav from "../Navigation";
function Header() {
  return (
    <header classNameName="bg-dark">
      <div className="container">
        <div className="row">
          <h1 className="col-12 d-flex justify-content-center fw-light">MG</h1>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
