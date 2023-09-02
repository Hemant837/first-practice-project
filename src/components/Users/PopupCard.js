import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <div>
        <p>{props.message}</p>
      </div>
      <button type="button" onClick={props.onConfirm}>
        Ok
      </button>
    </Card>
  );
};

const PopeupCard = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default PopeupCard;
