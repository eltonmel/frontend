import React from 'react';

import '@/Styles/PageTitle.scss';

export default (props) => (
  <div className="page-title">
    <div className="page-title-content">
      <i className={`fa ${props.pageIcon}`}></i>
      <h2>{props.pageTitle}</h2>
    </div>
    <hr />
  </div>
);
