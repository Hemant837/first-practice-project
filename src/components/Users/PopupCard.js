import React from "react";

import Card from "../UI/Card";

const PopeupCard = (props) => {
  return (
    <div>
      <div onClick={props.onConfirm} />
      <Card>
        <h2>{props.title}</h2>
        <div>
          <p>{props.message}</p>
        </div>
        <button type="button" onClick={props.onConfirm}>
          Ok
        </button>
      </Card>
    </div>
  );
};

export default PopeupCard;
