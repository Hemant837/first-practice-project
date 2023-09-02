import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import PopeupCard from "./PopupCard";
import "./Users.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [popup, setPopup] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setPopup({
        title: "Invalid input",
        message: "Please enter a valid name, age and college name",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setPopup({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeNameInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const popupHandler = () => {
    setPopup(null);
  };

  return (
    <React.Fragment>
      {popup && (
        <PopeupCard
          title={popup.title}
          message={popup.message}
          onConfirm={popupHandler}
        />
      )}
      <Card>
        <form className="user-form" onSubmit={addUserHandler}>
          <label htmlFor="username">User</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="college-name">College Name</label>
          <input id="college-name" type="text" ref={collegeNameInputRef} />
          <button type="submit">Add USer</button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
