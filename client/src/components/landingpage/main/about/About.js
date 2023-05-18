import React, { useState } from 'react';
import "./about.css";

const datas = [
  {
    product_ID:1,
    name:"Rohit Rai",
    roll:26100119033,
    role:"Frontend ",
    imageURL:"/images/rohit.jpeg"

  },
   {
    product_ID:2,
    name:"Subham Thakur",
    roll:26100119034,
    role:"Frontend ",
    imageURL:"/images/subham.jpeg"

  },
   {
    product_ID:3,
    name:"Akash kr Gupta",
    roll:26100119029,
    role:"Backend ",
    imageURL:"/images/Akashnew.png"

  },
   {
    product_ID:4,
    name:"Karma Sherpa",
    roll:26100119007,
    role:"Design ",
    imageURL:"/images/karma.jpeg"

  },
   {
    product_ID:5,
    name:"vivek saiba",
    roll:26100120025,
    role:"Design ",
    imageURL:"/images/vivek.jpeg"

  }
]

const About = () => {

let [data ,setData]= useState(datas)

  return (
    <>
    ,<h1>Meet Our <span>Team</span></h1>
      <div className="card-container">
        {datas.map((data)=>{
          return <>
          <div className="card">
            <div className="upper-portion">

            </div>
            <div className="image-container">
              <img src={data.imageURL}/>
            </div>
            <div className="content-portion">
               <h4>{data.name}</h4>
                <div className="info">
                <p className="roll"><number>{data.roll}</number></p>
               </div>
               <div className="info">
                  <p><span>Role - </span>{data.role} </p>
               </div>
            </div>
        </div>
</>
        })}
        
          
      </div>
    </>
  )
}

export default About