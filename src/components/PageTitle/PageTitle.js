import React from 'react';
import style from './PageTitle.module.scss';

const PageTitle = () => (
  <div className={style.titleContainer}>
    <h1 className={style.title}>Kapusta</h1>
    <h2 className={style.subTitle}>Smart Finance</h2>
  </div>
);

export default PageTitle;
