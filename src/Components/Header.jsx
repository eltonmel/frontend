import React from 'react';

import ToggleMenu from '@/Components/ToggleMenu';
import UserMenu from '@/Components/UserMenu';

import '@/Styles/Header.scss';

export default () => (
  <header className="header">
    <ToggleMenu />
    <h1>Header</h1>
    <UserMenu />
  </header>
);
