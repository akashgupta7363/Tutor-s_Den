import React, { useState } from "react";
import "./about1234.css";

const datas = [
  {
    product_ID: 1,
    name: "Rohit Rai",
    roll: 26100119033,
    role: "Frontend",
    imageURL: "/images/rohit.jpeg",
  },
  {
    product_ID: 2,
    name: "Subham Thakur",
    roll: 26100119034,
    role: "Frontend",
    imageURL: "/images/subham.jpeg",
  },
  {
    product_ID: 3,
    name: "Akash kr Gupta",
    roll: 26100119029,
    role: "Full Stack",
    imageURL: "/images/Akashnew.png",
  },
  {
    product_ID: 4,
    name: "Karma Sherpa",
    roll: 26100119007,
    role: "Design",
    imageURL: "/images/karma.jpeg",
  },
  {
    product_ID: 5,
    name: "vivek saiba",
    roll: 26100120025,
    role: "Design",
    imageURL: "/images/vivek.jpeg",
  },
];

const About = () => {
  let [data, setData] = useState(datas);

  return (
    <div id="about">
      ,
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          padding: "2rem",
          lineHeight: "1.5",
        }}
      >
        Meet Our <span style={{ color: "rgb(30, 30, 207)" }}>Team</span>
      </h1>
      <div className="cardooo-container">
        {datas.map((data) => {
          return (
            <>
              <div className="cardooo">
                <div className="upper-portion"></div>
                <div className="image-containerooo">
                  <img src={data.imageURL} />
                </div>
                <div className="content-portion">
                  <h4>{data.name}</h4>
                  <div className="infoooo">
                    <p className="roll">
                      <number>{data.roll}</number>
                    </p>
                  </div>
                  <div className="infoooo">
                    <p>
                      <span>Role - </span>
                      {data.role}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default About;
