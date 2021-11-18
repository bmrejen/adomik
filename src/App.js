import React, { useEffect, useState } from "react"
import { UserList, Navbar, ProductList } from "./components"
import { getData } from "./utils"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  // Users
  const [users, setUsers] = useState([])
  useEffect(() => getData("users", setUsers), [])
  useEffect(() => localStorage.setItem("users", JSON.stringify(users)), [users])

  // Products
  const [products, setProducts] = useState([])
  useEffect(() => getData("components", setProducts), [])
  useEffect(() => localStorage.setItem("components", JSON.stringify(products)), [products])

  if (products.length === 0) return <div>Loading...</div>
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Navbar products={products} />
        <Routes>
          <Route path="products" element={<ProductList products={products} />} />
          <Route path="*" element={<div>404</div>} />
          <Route path="/" element={<UserList users={users} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
