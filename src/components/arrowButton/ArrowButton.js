import React from "react";
import rightarrow from "../../Assets/Right.svg";

const ArrowButton = (props) => {
  return (
    <div
      className="learn_more"
      style={{ marginTop: props.margin, width: props.width }}
    >
      <p className="learnmore_text" style={{ color: props.Color }}>
        {props.title}
      </p>
      <img src={rightarrow} alt="right_img" />
    </div>
  );
};
export default ArrowButton;
