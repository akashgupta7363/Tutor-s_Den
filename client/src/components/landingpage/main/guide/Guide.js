import React from "react";
import "./guide.css";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <>
      <div className="main-div div">
        <h1>
          {" "}
          Here's a Quick Guide to help You<br></br>
          <Link to="/register">
            <span> Get Started</span>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Guide;
