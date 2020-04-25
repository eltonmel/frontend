import React from 'react';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Footer from './Components/Footer';

import './App.css';

export default () => (
  <div className="app">
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  </div>
);
