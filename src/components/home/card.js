import React from "react";

import "./card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img className="banner" src={props.banner} alt="banner" />
      <div className="body">
        <div className="hint">{props.hint}</div>
        <div className="title">
          {props.title}
        </div>
        <div className="content">
          {props.content}
        </div>
        <div className="bottom">
          <div>
            <button className="btn">Button Text</button>
          </div>
          <div className="link">Link</div>
        </div>
      </div>
    </div>
  );
};
