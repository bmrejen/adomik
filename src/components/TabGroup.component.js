import Box from "@mui/material/Box"
import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

export default function TabGroup({ products, selectedMenu, setSelectedMenu }) {
  if (products.length === 0) return null

  const tabs = products.map((product, i) => (
    <Tab label={product.code} key={i} onClick={() => setSelectedMenu(product.code)} />
  ))

  const activeTab = products.find((product) => product.code === selectedMenu)
  return (
    <Box sx={{ width: "100%", height: 50, bgcolor: "background.paper" }}>
      <Tabs value={products.indexOf(activeTab)} centered>
        {tabs}
      </Tabs>
    </Box>
  )
}
