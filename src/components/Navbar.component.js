import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom"
import adomik from "./../assets/adomik.svg"
import React from "react"
import Button from "@mui/material/Button"
import { useLocation, matchPath } from "react-router-dom"

const links = ["users", "products"]

export default function Navbar() {
  let { pathname } = useLocation()
  const buttons = links.map((link, i) => {
    const isActive = !!matchPath(pathname, `/${link}`)
    return (
      <Button
        component={Link}
        to={`/${link}`}
        key={i}
        variant={isActive ? "contained" : "outlined"}
        size="large"
        fullWidth={true}
      >
        {link.toUpperCase()}
      </Button>
    )
  })
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <IconButton sx={{ mr: 2 }}>
            <img src={adomik} height={25} width={25} alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Adomik
          </Typography>
          {buttons}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
