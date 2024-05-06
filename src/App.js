import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <main className="text-gray-400 bg-white font-mono body-font">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/home" element={<Home />}/>

            <Route exact path="/about" element={<About />}/>

            <Route exact path="/projects" element={<Projects />}/>

            <Route exact path="/contact" element={<Contact />}/>

          </Routes>
      </Router>
    </main>
    );
  }
}
export default App;