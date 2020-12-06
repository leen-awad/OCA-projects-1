import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

function ProfileCard(props) {
  return (
    <div className="cardt">
      <div className="background-img">
        {/* <img src={props.backgroundImg} alt=""/> */}
      </div>
      <div className="personal-img">
        <img src={props.personalImg} alt="" />
      </div>
      <div className="card-body">
        <h3 className="name">{props.name}</h3>

        <p className="title">{props.title}</p>

        {/* <div className="socialMedia-container">
          <a  href={props.github} target="blank">
            {" "}
            <i style={{fontSize:"25px"}} className="fab fa-github"></i>
          </a>
          <a href={props.linkedin} target="blank">
            {" "}
            <i style={{fontSize:"25px"}} className="fab fa-linkedin"></i>
          </a>
          
          <a href={props.facebook} target="blank">
            {" "}
            <i style={{fontSize:"25px"}} className="fab fa-facebook"></i> 
          </a>
        </div> */}

        {/* <a href=""> <i className="fab fa-github"></i></a>
         <i className="fab fa-linkedin"></i>
        <i className="fab fa-facebook"></i> */}
      </div>
    </div>
  );
}
export default ProfileCard;
