import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Sticky from 'react-sticky-el';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <Sticky className="Sticky">
          <NavBar />
        </Sticky>
        <About />
        <Projects />
        <Contact />
      </Fragment>
    );
  }
}

export default App;
