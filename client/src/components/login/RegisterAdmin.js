import React, { useState } from "react";
import education from "../../assets/education.png";
import * as classes from "../../utils/styles";
import FileBase from "react-file-base64";
import { Link } from "react-router-dom";

function RegisterAdmin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [value, setValue] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    Institute: "",
    department: "",
    contactNumber: "",
    avatar: "",
    joiningYear: "",
  });
  const handleSubmit = () => {};
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <div className="flex-[0.05] flex justify-between items-center mx-5 my-2">
          <div className="grid grid-cols-3 gap-80">
            <Link to="/">
              <div className="flex items-center ">
                <img src={education} alt="" className="h-7 mr-2" />
                <h1 className="font-bold  text-blue-600 text-xl">TDen</h1>
              </div>{" "}
            </Link>
            <div>
              <h1 className="font-bold m-auto text-2xl text-black">
                Register Admin
              </h1>
            </div>
            <div>
              <Link to="/login">
                <h1 className="font-bold ml-12 text-2xl hover:drop-shadow-lg hover:scale-110 text-blue-700">
                  Login
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className=" ml-10 mr-10 bg-white flex flex-col rounded-xl ">
          <form className={classes.adminForm0} onSubmit={handleSubmit}>
            <div className={classes.adminForm1}>
              <div className={classes.adminForm2l}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Name :</h1>
                  <input
                    placeholder="Full Name"
                    required
                    className={classes.adminInput}
                    type="text"
                    // value={value.name}
                    // onChange={(e) =>
                    //   setValue({ ...value, name: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Email :</h1>

                  <input
                    placeholder="Email"
                    required
                    className={classes.adminInput}
                    type="email"
                    // value={value.email}
                    // onChange={(e) =>
                    //   setValue({ ...value, email: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>DOB :</h1>

                  <input
                    placeholder="DD/MM/YYYY"
                    className={classes.adminInput}
                    required
                    type="date"
                    // value={value.dob}
                    // onChange={(e) =>
                    //   setValue({ ...value, dob: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Password</h1>

                  <input
                    placeholder="Enter the password"
                    required
                    className={classes.adminInput}
                    type="password"
                    // value={value.email}
                    // onChange={(e) =>
                    //   setValue({ ...value, email: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Renter Password :</h1>

                  <input
                    placeholder="Confirm the password"
                    required
                    className={classes.adminInput}
                    type="password"
                    // value={value.email}
                    // onChange={(e) =>
                    //   setValue({ ...value, email: e.target.value })
                    // }
                  />
                </div>
              </div>
              <div className={classes.adminForm2r}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Institute Name :</h1>

                  <input
                    placeholder="Institute Name"
                    required
                    className={classes.adminInput}
                    type="text"
                    // value={value.email}
                    // onChange={(e) =>
                    //   setValue({ ...value, email: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Department :</h1>
                  <input
                    placeholder="Deptartment"
                    required
                    className={classes.adminInput}
                    type="text"
                    // value={value.email}
                    // onChange={(e) =>
                    //   setValue({ ...value, email: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Joining Year :</h1>

                  <input
                    placeholder="Joining Year"
                    required
                    className={classes.adminInput}
                    type="number"
                    // value={value.email}
                    // onChange={(e) =>
                    //   setValue({ ...value, email: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Contact Number :</h1>

                  <input
                    required
                    placeholder="Contact Number"
                    className={classes.adminInput}
                    type="number"
                    // value={value.contactNumber}
                    // onChange={(e) =>
                    //   setValue({ ...value, contactNumber: e.target.value })
                    // }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Avatar :</h1>

                  <FileBase
                    type="file"
                    multiple={false}
                    // onDone={({ base64 }) =>
                    //   setValue({ ...value, avatar: base64 })
                    // }
                  />
                </div>
              </div>
            </div>
            <div className={classes.adminFormButton}>
              <button className={classes.adminFormSubmitButton} type="submit">
                Submit
              </button>
              <button
                // onClick={() => {
                //   setValue({
                //     name: "",
                //     dob: "",
                //     email: "",
                //     department: "",
                //     contactNumber: "",
                //     avatar: "",
                //     joiningYear: Date().split(" ")[3],
                //     password: "",
                //     username: "",
                //   });
                //   setError({});
                // }}
                className={classes.adminFormClearButton}
                type="button"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterAdmin;
