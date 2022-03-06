import { useState } from "react"
import "./App.css"
import AddUser from "./components/User/addUser"
import UserList from "./components/User/userList"

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  )
}

export default App
