import { useEffect, useState } from "react"
import UserList from "./components/UserList"
import { getData } from "./utils"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => getData("users", setUsers), [])
  useEffect(() => localStorage.setItem("users", JSON.stringify(users)), [users])

  return <UserList users={users} />
}

export default App
