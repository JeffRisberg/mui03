import React from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

const styles = {
  root: {
    textAlign: 'center'
  },
  navLink: {
    color: 'white'
  }
};

export function NavBar(props) {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <NavLink style={styles.navLink} to='/'>
              Home
            </NavLink>
          </Button>
          <Button>
            <NavLink style={styles.navLink} to='/catalog'>
              Catalog
            </NavLink>
          </Button>
          <Button>
            <NavLink style={styles.navLink} to='/profile'>
              Profile
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
