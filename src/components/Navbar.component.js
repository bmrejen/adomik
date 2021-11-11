import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Link as RouterLink, MemoryRouter as Router } from "react-router-dom"
import adomik from "./../assets/adomik.svg"

export default function Navbar({ products }) {
  console.log(products)

  const buttons = products.map((product, i) => (
    <Button
      key={i}
      color="inherit"
      component={RouterLink}
      to={`/${product.code}`}
      sx={{ flexGrow: 1 }}
    >
      {product.code}
    </Button>
  ))
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <IconButton sx={{ mr: 2 }}>
              <img src={adomik} height={25} width={25} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Adomik
            </Typography>
            {buttons}
          </Toolbar>
        </AppBar>
      </Box>
    </Router>
  )
}
