import React, { useState } from "react"
import Button from "../UI/button"
import Card from "../UI/card"
import classes from "./addUser.module.css"

function AddUser() {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")

  const addUserHandler = (e) => {
    e.preventDefault()
    if (username.length <= 0 && age.length <= 0) {
      return
    }

    if (+age < 1) {
      return
    }

    setUsername("")
    setAge("")
    console.log(username, age)
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={usernameChangeHandler}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input value={age} onChange={ageChangeHandler} id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
