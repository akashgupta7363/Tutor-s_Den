import { Link } from "react-router-dom";
import "./landingheader.css";
import Lottie from "lottie-react";
import cls from "../../../assets/90714-online-learning.json";

function LandingHeader() {
  return (
    <>
      <div>
        <nav class="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="/education.png
                         "
                alt="Logo"
                width="50px"
                height="40px"
              />
              <span className="logo-den">Den</span>
            </a>
            <Link className="b" to="/login">
              Login
            </Link>
          </div>
        </nav>

        <div className="container" /*style={{ height: "90vh" }}*/>
          <div className="left">
            <div className="main-heading">
              <div>
                <span style={{ fontSize: "4rem" }}>Hey there</span>
                <br />
                Welcome to <br />
                Tutor's <span className="den">Den</span>
              </div>
              <p>
                An online platform where Teachers and <br />
                students connect...
              </p>
              <Link to="/register" className="register">
                Register
              </Link>
              <a href="#about" className="aboutpage">
                About Us
              </a>
            </div>
          </div>
          <div className="right">
            <Lottie animationData={cls} />
            {/* <img src="/illustration.svg" alt="Logo" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingHeader;
