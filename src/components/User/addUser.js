import React from "react"
import Button from "../UI/button"
import Card from "../UI/card"
import classes from "./addUser.module.css"

function AddUser() {
  const addUserHandler = (e) => {
    e.preventDefault()
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
