import React, {useState} from 'react';
import $ from "jquery";

import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Bookshreedham from './pages/bookshreedham/Bookshreedham';
import UnitDetail from './pages/unitDetail/unitDetail';
import FlatEnquiry from './pages/flatEnquiry/flatEnquiry';
import Careers from './pages/careers/careers';
import Services from './pages/services/services';
import Team from './pages/team/team';

const cors = require('cors')

const App = () => {
  
  return (
    <>
    <div className="App">
            
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookshreedham" element={<Bookshreedham />} />
      <Route path="/unitDetail" element={<UnitDetail />} />
      <Route path="/flatEnquiry" element={<FlatEnquiry />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />

    </Routes>
    </>
  )
}

export default App