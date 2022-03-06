import React from "react"
import Card from "../UI/card"
import classes from "./userList.module.css"

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
