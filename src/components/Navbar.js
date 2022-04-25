import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/LogoMass.png";
import { styled } from "@mui/material/styles";
import "./style.css";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@mui/material";

export default function Navbar() {
  return (
    <div
      //sx={{ flexGrow: 1 }}
      className="root"
    >
      <AppBar position="fixed" className="appBar">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <img src={logo} alt="logo" className="image" />
          </IconButton>
          <div className="grow">
            <Typography variant="h6" color="textPrimary" component="p">
              Hello user
            </Typography>
            <div className="button">
              <Button variant="outlined">
                <strong>Sing In</strong>
              </Button>
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
