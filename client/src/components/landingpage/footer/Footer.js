import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <nav class="navbar">
          <div
            className="flex justify-between mr-6"
            style={{ borderBottom: "2px solid black" }}
          >
            <div className="flex -ml-24">
              <a class="navbar-brand" href="#" style={{ marginLeft: "6rem" }}>
                <img
                  src="/education.png
                         "
                  alt="Logo"
                  width="50px"
                  height="40px"
                />
                <span className="logo-den">Den</span>
              </a>
            </div>
            <div className="mt-6 text-xl font-bold">
              <a href="#">Back to top</a>
            </div>
          </div>
        </nav>
        <p className="copyright">
          &copy; 2023 Tutor's <span>Den</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
