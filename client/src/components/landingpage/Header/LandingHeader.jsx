import "./landingheader.css";

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
            <b>Login</b>
          </div>
        </nav>

        <div className="container" /*style={{ height: "90vh" }}*/>
          <div className="left">
            <div className="main-heading">
              <div>
                <span style={{ fontSize: "4rem" }}>Hey there</span>
                <br />
                Welcome to <br />
                Tuitor's <span className="den">Den</span>
              </div>
              <p>
                An online platform where Teachers and <br />
                students connect...
              </p>
              <button className="register">Register</button>
              <button className="about">About Us</button>
            </div>
          </div>
          <div className="right">
            <img src="/illustration.svg" alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingHeader;
