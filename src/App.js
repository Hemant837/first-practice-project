import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/Users";
import UserList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newName, newAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), username: newName, age: newAge },
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
