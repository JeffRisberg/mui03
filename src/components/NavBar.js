import React, {Component} from 'react';
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

class NavBar extends Component {

   render() {
      const classes = styles;

      return (
         <div>
            <AppBar position="static">
               <Toolbar>
                  <Button>
                     <NavLink style={classes.navLink} to='/'>
                        Home
                     </NavLink>
                  </Button>
                  <Button>
                     <NavLink style={classes.navLink} to='/catalog'>
                        Catalog
                     </NavLink>
                  </Button>
                  <Button>
                     <NavLink style={classes.navLink} to='/profile'>
                        Profile
                     </NavLink>
                  </Button>
               </Toolbar>
            </AppBar>
         </div>
      )
   }
}

export default NavBar;

