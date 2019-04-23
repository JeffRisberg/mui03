import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
   static propTypes = {
      classes: PropTypes.object.isRequired
   };

   render() {
      const {classes} = this.props;

      return (
         <div>
            <AppBar position="static">
               <Toolbar>
                  <Button>
                     <NavLink className={classes.navLink} to='/'>
                        Home
                     </NavLink>
                  </Button>
                  <Button>
                     <NavLink className={classes.navLink} to='/items'>
                        Items
                     </NavLink>
                  </Button>
                  <Button>
                     <NavLink className={classes.navLink} to='/events'>
                        Events
                     </NavLink>
                  </Button>
               </Toolbar>
            </AppBar>
         </div>
      )
   }
}

export default NavBar;
