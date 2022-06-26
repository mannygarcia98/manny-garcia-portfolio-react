import React from "react";

function Nav() {
  return (
    <nav className="col-12 fw-light mb-2">
      <div className="container">
        <ul className="list-unstyled list-group list-group-horizontal d-flex justify-content-between">
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
