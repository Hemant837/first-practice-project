import React, { useState } from "react";
import Card from "../UI/Card";
import PopeupCard from "./PopupCard";
import "./Users.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [popup, setPopup] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setPopup({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (enteredAge < 1) {
      setPopup({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const popupHandler = () => {
    setPopup(null);
  };

  return (
    <div>
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
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <button type="submit">Add USer</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
