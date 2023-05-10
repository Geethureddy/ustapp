import React from "react";
import "./ExpertiseCard.css";
import Arrow from "../../Assets/Right.svg";

const Card = (props) => {
  return (
    <div className="expertise_card" style={{ backgroundColor: props.bgColor }}>
      <div className="card_title">{props.title}</div>
      <div className="count_part">
        <div className="count">
          <p className="card_text">{props.expertise}</p>
          <p className="card_text">{props.projects}</p>
        </div>
        <div className="learnmore">
          <p className="learnmore_text">{props.learnmore}</p>
          <img className="arrow_image" src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Card;
