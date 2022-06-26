import React from "react";

function Footer() {
  return (
    <footer className="footer bg-red border-corner mt-auto">
      <div className="container">
        <div className="row justify-content-around">
          <span className="col-6">2022 Manny Garcia</span>
          <div className="col-6 fs-3 text-end">
            <a className="text-white px-2" target="_blank" href="https://www.linkedin.com/in/manuel-garcia-ba346a15a/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-white px-2" target="_blank" href="https://github.com/mannygarcia98">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
