import React from 'react';

import '@/Styles/Nav.scss';

export default () => (
  <nav className="nav">
    <ul>
      <li>
        <a>
          <i className="fas fa-bars"></i>Menu 1
        </a>
        <ul className="nav-flyout">
          <li>
            <a>
              <i className="fas fa-bars"></i>SubMenu 1
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-bars"></i>SubMenu 2
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a>
          <i className="fas fa-bars"></i>Menu 2
        </a>
        <ul className="nav-flyout">
          <li>
            <a>
              <i className="fas fa-bars"></i>SubMenu 1
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-bars"></i>SubMenu 2
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-bars"></i>SubMenu 3
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);
