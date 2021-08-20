import React from 'react';
import logo from './logo1.png';
import rigveda from './rigveda.jpg';
import  Search  from './features/search/Search.js';
import Favourites from './features/search/Favourites';
import { Button, Navbar,Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function App(){
	return(
      
        <Router>
          <Navbar bg="dark" variant="dark">
          
        <Container>
        <Nav className="me-auto">
          <NavLink to="/picture" activeStyle={{fontWeight:"Bold",color:'green'}}>Home</NavLink>
          <NavLink to="/" activeStyle={{fontWeight:"Bold",color:'green'}}>Search Page </NavLink>
           
          <NavLink to="/favourites" activeStyle={{fontWeight:"bold", color:'green'}}> Favourites</NavLink>
        </Nav>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route exact path ="/">
            <Page1 />
          </Route>
          <Route path="/favourites">
            <Page2 />
          </Route>
          <Route path="/picture">
            <Page3 />
          </Route>
        </Switch>
      </div>
    </Router>		
	);
}
// Page 1 routes to search section
function Page1(){
  return(
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" /> 
        <p>Welcome to Rig-veda search!!!</p>
        <Search />
      </header>
    </div>
  );
}
// Page 2 routes to favourites section
function Page2(){
  return(
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" /> 
        <p>Welcome to fav section.</p>
        <Favourites />
      </header>
    </div>
  );
}
// Page 3 routes to an image with vedic description
function Page3(){
  return(
    <div className="App">
      <header className="App-header">
      <p>Oldest, sacred veda...</p>
      <img src={rigveda} className="App-logo" alt="logo" /> 
      <p>The Rig Veda is the earliest of the four Vedas and one of the most important texts of the Hindu tradition. </p>
       <p> It is a large collection of hymns in praise of the gods, which are chanted in various rituals.</p>
       <p>They were composed in an archaic language named Vedic that gradually evolved into classical Sanskrit</p>
       <p>It consists of 1028 hymns, organised into ten books known as maṇḍalas.</p>
      </header>
    </div>
  );
}

export default App;
