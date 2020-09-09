import React, { Component } from 'react';import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Experience from './Components/Experience'
import Contact from './Components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Education/> 
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
