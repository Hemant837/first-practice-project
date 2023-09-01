import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} is {user.age} year old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
