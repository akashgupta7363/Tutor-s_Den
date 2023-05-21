import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/education.png";
const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex  justify-center"
      style={{ background: "#F4F6FA" }}
    >
      <div className="flex flex-col items-center mt-10 space-y-32">
        <div className="text-3xl font-semibold bg-blue-500 text-white w-1/3 text-center py-4 bg-opacity-75 rounded-2xl flex p-6 justify-center shadow-2xl shadow-cyan-500 ">
          <Link to="/">
            <img src={logo} className="w-10 mr-6" />
          </Link>
          Tutor's Den
        </div>
        <div className="grid grid-cols-3 gap-28">
          <div className="h-64 w-64 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-gray-300 rounded-xl">
            <h1 className="text-4xl font-extrabold">Admin</h1>

            <Link
              type="button"
              to="/login/adminlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          <div className="h-64 w-64 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-gray-300 rounded-xl">
            <h1 className="text-4xl font-extrabold">Faculty</h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>

          <div className="h-64 w-64 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-gray-300 rounded-xl">
            <h1 className="text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
