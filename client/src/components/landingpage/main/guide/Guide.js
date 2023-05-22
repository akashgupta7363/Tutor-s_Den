import React, { useState } from "react";
import "./guide.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Backdrop from "@mui/material/Backdrop";
import AdminModule from "../../../../assets/AdminModule.pdf";
import StudenModule from "./StudenModule";
import FacultyModue from "./FacultyModue";

const styleChild = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Guide = () => {
  const [openChild, setOpenChild] = React.useState(false);
  const handleOpenChild = () => {
    setOpenChild(true);
  };
  const handleCloseChild = () => {
    setOpenChild(false);
  };

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
              <Button
                className="hover:scale-110 transition delay-500"
                onClick={handleOpen}
              >
                View more <ArrowForwardIcon />
              </Button>
              <div className="text-xs">For detailed Guidelines</div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 2000,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={{ ...style, width: 700 }}>
                    <div
                      id="parent-modal-title"
                      className="text-xl flex justify-center mb-4 font-bold -mt-4"
                    >
                      Here are some tutorials and Guidelines
                    </div>
                    <div
                      id="parent-modal-description"
                      className="grid grid-cols-2"
                    >
                      <p>
                        <iframe
                          src={AdminModule}
                          width="640"
                          height="540"
                          allowfullscreen
                          frameborder="0"
                        ></iframe>
                      </p>
                      <div />
                      <Button className="font-bold" onClick={handleClose}>
                        Close
                      </Button>
                      {/* <Button
                        className=" hover:scale-105 hover:text-cyan-800"
                        onClick={handleOpenChild}
                      >
                        {" "}
                        • Registering your institute
                      </Button>
                      <Modal
                        open={openChild}
                        onClose={handleCloseChild}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box sx={{ ...styleChild }}>
                          <div className="mx-52 text-xl" id="child-modal-title">
                            Here are the steps
                          </div>
                          <p id="child-modal-description">
                            <div>
                              <iframe
                                src={regi}
                                width="640"
                                height="540"
                                allowfullscreen
                                frameborder="0"
                              ></iframe>
                            </div>

                            <div>
                              <iframe
                                src={dept}
                                width="640"
                                height="540"
                                allowfullscreen
                                frameborder="0"
                              ></iframe>
                            </div>
                          </p>
                          <Button onClick={handleCloseChild}>Close</Button>
                        </Box>
                      </Modal>
                      
                      <Button
                        className=" hover:scale-105 hover:text-cyan-800"
                        onClick={handleOpenChild}
                      >
                        {" "}
                        • Managing Dept. module
                      </Button>
                      <Modal
                        open={openChild}
                        onClose={handleCloseChild}
                        aria-labelledby="child-modal-title2"
                        aria-describedby="child-modal-description2"
                      >
                        <Box sx={{ ...styleChild }}>
                          <div
                            className="mx-52 text-xl"
                            id="child-modal-title2"
                          >
                            Here are the steps
                          </div>
                          <p id="child-modal-description2">
                            <iframe
                              src={dept}
                              width="640"
                              height="540"
                              allowfullscreen
                              frameborder="0"
                            ></iframe>
                          </p>
                          <Button onClick={handleCloseChild}>Close</Button>
                        </Box>
                      </Modal>
                      <div>
                        <Button
                          className=" hover:scale-105 hover:text-cyan-800"
                          onClick={handleOpenChild}
                        >
                          {" "}
                          • Managing Dept. module
                        </Button>
                        <Modal
                          open={openChild}
                          onClose={handleCloseChild}
                          aria-labelledby="child-modal-title2"
                          aria-describedby="child-modal-description2"
                        >
                          <Box sx={{ ...styleChild }}>
                            <div
                              className="mx-52 text-xl"
                              id="child-modal-title2"
                            >
                              Here are the steps
                            </div>
                            <p id="child-modal-description2">
                              <iframe
                                src={regi}
                                width="640"
                                height="540"
                                allowfullscreen
                                frameborder="0"
                              ></iframe>
                            </p>
                            <Button onClick={handleCloseChild}>Close</Button>
                          </Box>
                        </Modal>
                      </div> */}
                    </div>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
          {/* <div className="bg-white flex flex-col items-center text-2xl justify-center h-64 w-64 rounded-2xl">
            <div>Faculty Tutorial</div>
            <div>
              <Button
                className="hover:scale-110 transition delay-500"
                onClick={handleOpen}
              >
                View more <ArrowForwardIcon />
              </Button>
              <div className="text-xs">For detailed Guidelines</div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 2000,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={{ ...style, width: 700 }}>
                    <div
                      id="parent-modal-title"
                      className="text-xl flex justify-center mb-4 font-bold -mt-4"
                    >
                      Here are some tutorials and Guidelines
                    </div>
                    <div
                      id="parent-modal-description"
                      className="grid grid-cols-2"
                    >
                      <p>
                        <iframe
                          src={re}
                          width="640"
                          height="540"
                          allowfullscreen
                          frameborder="0"
                        ></iframe>
                      </p>
                      <div />
                      <Button className="font-bold" onClick={handleClose}>
                        Close
                      </Button>
                    </div>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div> */}
          <FacultyModue />
          <StudenModule />
        </div>
      </div>
    </>
  );
};

export default Guide;
