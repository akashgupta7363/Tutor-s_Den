import React, { useState } from "react";
import education from "../../assets/education.png";
import * as classes from "../../utils/styles";
import FileBase from "react-file-base64";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../../redux/api";
import Spinner from "../../utils/Spinner";

function RegisterAdmin() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    institute: "",
    department: "",
    contactNumber: "",
    avatar: "",
    joiningYear: "",
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!(value.password === value.confirmPassword)) {
        alert("Password mismatch");
        setLoading(false);
        return;
      }
      const { data } = await api.registerAdmin(value);
      alert("REGISTRATION Successfully");
      console.log(data);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
      setLoading(false);
    }
  };

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
        <div className="overflow-scroll scrollbar-thumb-black ml-10 mr-10 bg-white flex flex-col rounded-xl ">
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
                    value={value.name}
                    onChange={(e) =>
                      setValue({ ...value, name: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Email :</h1>

                  <input
                    placeholder="Email"
                    required
                    className={classes.adminInput}
                    type="email"
                    value={value.email}
                    onChange={(e) =>
                      setValue({ ...value, email: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>DOB :</h1>

                  <input
                    placeholder="DD/MM/YYYY"
                    className={classes.adminInput}
                    required
                    type="date"
                    value={value.dob}
                    onChange={(e) =>
                      setValue({ ...value, dob: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Password</h1>

                  <input
                    placeholder="Enter the password"
                    required
                    className={classes.adminInput}
                    type="password"
                    value={value.password}
                    onChange={(e) =>
                      setValue({ ...value, password: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Renter Password :</h1>

                  <input
                    placeholder="Confirm the password"
                    required
                    className={classes.adminInput}
                    type="password"
                    value={value.confirmPassword}
                    onChange={(e) =>
                      setValue({ ...value, confirmPassword: e.target.value })
                    }
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
                    value={value.institute}
                    onChange={(e) =>
                      setValue({ ...value, institute: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Department :</h1>
                  <input
                    placeholder="Deptartment"
                    required
                    className={classes.adminInput}
                    type="text"
                    value={value.department}
                    onChange={(e) =>
                      setValue({ ...value, department: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Joining Year :</h1>

                  <input
                    placeholder="Joining Year"
                    required
                    className={classes.adminInput}
                    type="number"
                    value={value.joiningYear}
                    onChange={(e) =>
                      setValue({ ...value, joiningYear: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Contact Number :</h1>

                  <input
                    required
                    placeholder="Contact Number"
                    className={classes.adminInput}
                    type="number"
                    value={value.contactNumber}
                    onChange={(e) =>
                      setValue({ ...value, contactNumber: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Avatar :</h1>

                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setValue({ ...value, avatar: base64 })
                    }
                  />
                </div>
              </div>
            </div>
            <div className={classes.adminFormButton}>
              <button className={classes.adminFormSubmitButton} type="submit">
                Submit
              </button>
              <button
                onClick={() => {
                  setValue({
                    name: "",
                    dob: "",
                    email: "",
                    institute: "",
                    department: "",
                    contactNumber: "",
                    avatar: "",
                    joiningYear: "",
                    password: "",
                    confirmPassword: "",
                  });
                }}
                className={classes.adminFormClearButton}
                type="button"
              >
                Clear
              </button>
            </div>
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Adding Admin"
                  height={30}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterAdmin;
