import React from 'react';
import './App.css';
import 'animate.css'

import Navbar from './components/Layouts/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
