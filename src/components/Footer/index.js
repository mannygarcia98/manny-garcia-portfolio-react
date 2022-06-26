import React from "react";

function Footer() {
  return (
    <footer className="footer bg-red border-corner mt-auto">
      <div className="container">
        <div className="row justify-content-around">
          <span className="col-5">2022 Manny Garcia</span>
          <div className="col-5 fs-3 text-end">
            <a className="text-white px-2" href="#!">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-white px-2" href="#!">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
