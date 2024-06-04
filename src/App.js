import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Paper} from "@mui/material";
import {Splash} from "./scenes/Splash";
import Catalog from './scenes/Catalog';
import Profile from './scenes/Profile';
import NavBar from './components/NavBar'
import {Footer} from "./components/Footer";
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

export function App(props) {

  const {history} = props;

  return (
    <BrowserRouter history={history}>
      <Paper>
        <NavBar history={history}/>
        <Routes>
          <Route path="/" element={<Splash/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Footer/>
      </Paper>
    </BrowserRouter>
  )
}
