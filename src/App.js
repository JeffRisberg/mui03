import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {NavLink, Route, Router, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Splash from './scenes/Splash'
import Profile from './scenes/Profile';
import NavBar from './components/NavBar'
import './App.css';
import {withStyles} from '@material-ui/core/styles';

const styles = {
   root: {
      textAlign: 'center',
      paddingTop: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 500,
   },
   card: {
      paddingTop: 40,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
   },
};

class App extends Component {
   static propTypes = {
      classes: PropTypes.object,
      history: PropTypes.object.isRequired
   };

   render() {
      const {classes, history} = this.props;

      return (
         <Router history={history}>
            <Paper className={classes.app}>
               <NavBar history={history} />
               <Switch>
                  <Route exact path="/" component={Splash}/>
                  <Route exact path="/profile" component={Profile}/>
               </Switch>
            </Paper>
         </Router>
      )
   }
}

export default withStyles(styles)(App);
