import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';

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

export default withStyles(styles)(NavBar);

