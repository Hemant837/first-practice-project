import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/Users";
import UserList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newName, newAge, college) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), username: newName, age: newAge , collegeName: college},
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
};

export default App;
