import React from 'react';
import style from './Container.module.scss';

const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);
  
export default Container;
