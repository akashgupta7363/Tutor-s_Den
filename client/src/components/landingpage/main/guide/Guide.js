import React, { useState } from "react";
import "./guide.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Guide = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
        <div className="m-11   gap-4 flex justify-between">
          <div className="bg-white flex flex-col items-center text-2xl justify-center h-64 w-64 rounded-2xl">
            <div>Admin Tutorial</div>
            <div>
              <Button onClick={handleOpen}>View more</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: 400 }}>
                  <h2 id="parent-modal-title">Text in a modal</h2>
                  <p id="parent-modal-description">
                    <div>• Registering your Institute</div>
                    <div>• Adding Dept</div>
                    <div>• Adding Subjects</div>
                    <div>• Adding Faculty </div>
                    <div>• Adding Students</div>
                    <div>• Attendance System</div>
                    <div>• Creating Notice</div>
                    <div>• </div>

                    {/* <iframe
                      src={Re}
                      width="640"
                      height="480"
                      allow="autoplay"
                    ></iframe> */}
                  </p>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="bg-white flex items-center text-2xl justify-center  h-64 w-64 rounded-2xl">
            Faculty Tutorial
          </div>
          <div className="bg-white flex items-center text-2xl justify-center  h-64 w-64 rounded-2xl">
            Student Tutorial
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
