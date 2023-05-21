import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq.css";

function Faq() {
  return (
    <div className="main-div">
      <h1>
        Frequently Asked <span>Questions</span>
      </h1>
      {/* <Accordion defaultActiveKey="0" flush >
      <Accordion.Item eventKey="0" className="accordion">
        <Accordion.Header className="header">Accordion Item #1</Accordion.Header>
        <Accordion.Body className="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accordion">
        <Accordion.Header className="header">Accordion Item #2</Accordion.Header>
        <Accordion.Body className="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="2" className="accordion">
        <Accordion.Header className="header">Accordion Item #2</Accordion.Header>
        <Accordion.Body className="accordion-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How do I access these Portal?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To access the portal, you will need to visit our website's admin
              registrataion page link. Click on the link, and you will be
              directed to the signup page. Enter your institute's details and
              click the signup button. And Navigate to login portal of admin and
              enter the credentials (username and password) provided during
              registration of admin to log in.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Can I as a tutor/faculty store my student's grades and academic
              progress on the portal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, and the portal also allows students to view their grades and
              academic progress. You can access this information. Here, you will
              find a summary of your completed courses, grades received, and
              cumulative GPA (Grade Point Average).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>I forgot my password. How can I reset it?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you have forgotten your password, you can click on the "Forgot
              Password" link on the login page. Follow the instructions provided
              to reset your password. In case of any issues, you can contact the
              our team through the contact page for assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Can I update my personal information on this System Portal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can update your personal information through the portal.
              After logging in, navigate to the "Profile" or "Account Settings"
              section, where you will find options to modify your personal
              details such as address, contact number, and email address.
              Remember to save the changes once you have updated the
              information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              What should I do if I encounter technical issues or errors while
              using the portal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you encounter any technical issues or errors while using the
              System Portal, we recommend reaching out to the IT department or
              the portal's support team. They will be able to assist you in
              resolving the problem or provide further guidance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h2
          style={{
            marginTop: "6rem",
            fontWeight: "500",
            fontSize: "1.3rem",
          }}
        >
          If you have any additional questions or need further assistance,
          <br /> feel free to contact our support team.
        </h2>
      </div>
    </div>
  );
}

export default Faq;
