import { Box, Button, Fade, Modal } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import re from "../../../../assets/not.pdf";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
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

function FacultyModue() {
  const [openChild, setOpenChild] = useState(false);
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
    <div className="bg-white flex flex-col items-center text-2xl justify-center h-64 w-64 rounded-2xl">
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
              <div id="parent-modal-description" className="grid grid-cols-2">
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
    </div>
  );
}

export default FacultyModue;
