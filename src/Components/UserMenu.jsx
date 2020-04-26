import React from 'react';

import '@/Styles/UserMenu.scss';

export default () => {
  const showUserMenu = (event) => {
    const container = event.target.nextElementSibling;
    container.classList.toggle('hidden');
  };

  return (
    <div className="user-menu">
      <div className="user-button" onClick={showUserMenu}>
        User Menu Dropdown
      </div>
      <div className="user-menu-content hidden">
        <a href="/profile">
          <i className="fa fa-cogs"></i> Profile
        </a>
        <a href="/logout">
          <i className="fa fa-sign-out-alt"></i> Exit
        </a>
      </div>
    </div>
  );
};
