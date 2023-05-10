import React from "react";
import "./Approach.css";
// import "../../pages/HomePage/HomePage";

const Approach = (props) => {
  console.log(props);

  return (
    <div className="section" style={props.style}>
      <img className="side_image" src={props.image} alt="left_image" />
      <div className="content">
        <h1 style={{ color: props.textColor }} className="section_header">
          {props.title}
        </h1>
        <p style={{ color: props.textColor }} className="section_content">
          {props.text}
        </p>
        {props.exportButton}
      </div>
    </div>
  );
};

export default Approach;
