import React from 'react';

import UserMenu from '@/Components/UserMenu';

import '@/Styles/Header.scss';

export default () => (
  <header className="header">
    <span>Link Menu Dropdown</span>
    <h1>Header</h1>
    <UserMenu />
  </header>
);
