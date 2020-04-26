import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuAction } from '@/Actions';

import '@/Styles/ToggleMenu.scss';

export default () => {
  const showMenu = useSelector((state) => state.showMenu);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleMenuAction());
  };

  return (
    <div className="toggle-menu">
      <a onClick={toggleMenu}>
        <i className={showMenu ? 'fa fa-angle-down' : 'fa fa-angle-left'}></i>
      </a>
    </div>
  );
};
