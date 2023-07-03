import React from "react";
import annu from '../images/annu.jpg'
import "./about.css";

const About = () => {
  
  const members = [
    {
      id:1,
      member: "Annu Joshi",
      role: "Receptionist",
      image: annu,
      description:"lorem ipsum dolor sit amet, consectet ipus lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor"
    },
    {
      id:2,
      member: "Jonathan",
      role: "Software Engineer",
      image: "",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing el"
    },
    {
      id:3,
      member: "Jonathan",
      role: "Software Engineer",
      image: "",
      description:"lorem ips amet, consectetur adipiscing elit"
    },
    {
      id:4,
      member: "Jonathan",
      role: "Software Engineer",
      image: "",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing el"
    },
  ];
  return (
    <div className="container about">
      <h1 className="about_text">
        <u>Meet Our Service Providers:</u>
      </h1>
      <div className="row mb-2">
      {members.map(({id,member,role,image,description}) => (
        <div className="col-md-6" key={id}>
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">
              {role}
              </strong>
              <h3 className="mb-0">{member}</h3>
              <p className="card-text mb-auto">
                {description}
              </p>
            </div>
            <div className="col-auto  d-lg-block">
              <img src={image} className="member_image" alt="image"/>
            </div>
          </div>
        </div>
      ))};
       
        </div>
      </div>
  );
};

export default About;
