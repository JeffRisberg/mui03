import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Catalog from './scenes/Catalog';
import Profile from './scenes/Profile';
import Splash from './scenes/Splash'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Paper} from "@mui/material";
import './App.css';

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

    render() {
        const {classes, history} = this.props;

        return (
            <BrowserRouter history={history}>
                <Paper>
                    <NavBar history={history}/>
                    <Routes>
                        <Route exact path="/" component={Splash}/>
                        <Route exact path="/catalog" component={Catalog}/>
                        <Route exact path="/profile" component={Profile}/>
                    </Routes>
                </Paper>
            </BrowserRouter>
        )
    }
}

export default App;
