import React, { useState } from "react"
import Button from "../UI/button"
import Card from "../UI/card"
import ErrorModal from "../UI/errorModal"
import classes from "./addUser.module.css"

function AddUser(props) {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()
    if (username.length <= 0 && age.length <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      })
      return
    }

    if (+age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age.",
      })
      return
    }
    props.onAddUser(username, age)
    setUsername("")
    setAge("")
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />
      )}
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
          <input
            value={age}
            onChange={ageChangeHandler}
            id="age"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
