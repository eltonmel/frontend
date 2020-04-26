import React from 'react';
import { useSelector } from 'react-redux';

import Header from '@/Components/Header';
import Sidebar from '@/Components/Sidebar';
import Content from '@/Components/Content';
import Footer from '@/Components/Footer';

import './App.scss';

export default () => {
  const showMenu = useSelector((state) => state.showMenu);
  const hideMenu = !showMenu ? 'hide-menu' : '';

  return (
    <div className={`app ${hideMenu}`}>
      <Header />
      {!hideMenu ? <Sidebar /> : null}
      <Content />
      <Footer />
    </div>
  );
};
