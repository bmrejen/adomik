import React, { useEffect, useState } from "react"
import { UserList, Navbar } from "./components"
import { getData } from "./utils"
import CssBaseline from "@mui/material/CssBaseline"

function App() {
  // Users
  const [users, setUsers] = useState([])
  useEffect(() => getData("users", setUsers), [])
  useEffect(() => localStorage.setItem("users", JSON.stringify(users)), [users])

  // Products
  const [products, setProducts] = useState([])
  useEffect(() => getData("components", setProducts), [])
  useEffect(() => localStorage.setItem("components", JSON.stringify(products)), [products])

  return (
    <>
      <CssBaseline />
      <Navbar products={products}/>
      <UserList users={users} />
      {/* <ProductList products={products} /> */}
    </>
  )
}

export default App
