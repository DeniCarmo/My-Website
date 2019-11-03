import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Divider from './components/Divider';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { continueStatement } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Tools />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
