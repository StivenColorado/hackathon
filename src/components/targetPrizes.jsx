import React from "react";
const TargetPrizes = (props) => {
  //img,title,description
  return (
    <div className="target-prize-content">
      <img src={props.imagen} className="img-target-prize" />
      <p className="title-target-prize">{props.title}</p>
      <p className="description-target-prize">{props.description}</p>
    </div>
  );
};
export default TargetPrizes;
