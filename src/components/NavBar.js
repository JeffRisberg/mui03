import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/core/AppBar'
import Toolbar from '@maui/core/Toolbar'
import Button from '@m-ui/core/Button';
import {NavLink} from 'react-router-dom';

const styles = {
   root: {
      textAlign: 'center'
   },
   navLink: {
      color: 'white'
   }
};

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
                     <NavLink className={classes.navLink} to='/catalog'>
                        Catalog
                     </NavLink>
                  </Button>
                  <Button>
                     <NavLink className={classes.navLink} to='/profile'>
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

