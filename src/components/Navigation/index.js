import React from "react";

function Nav(props) {
  const { navLinks = [], selectedNav, setSelectedNav } = props;

  return (
    <nav className="col-12 col-lg-5 fw-light mb-2">
      <div className="container">
        <ul className="list-unstyled list-group list-group-horizontal d-flex justify-content-between pointer">
          {/* <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li> */}
          {navLinks.map((link) => (
            <li className={`${selectedNav === link && `navActive`} user-select-none h5`} key={link}>
              <span
                onClick={() => {
                  setSelectedNav(link);
                }}
              >
                {link}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
