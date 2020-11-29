import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Header from './Components/Header';
import Project from './Components/Project';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Project">
              <Project />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
