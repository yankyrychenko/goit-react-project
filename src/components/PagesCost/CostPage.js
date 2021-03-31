import React from 'react';
import Button from './Button';
import Template from './Template';
import Template2 from './Template2';
import CostList from './CostList';

import style from './CostPage.module.scss';

export default function Cost() {
  return (
    <div className={style.container}>
      <div className={style.button__flexbox}>
        <Button title="Расход" />
        <Button title="Доход" />
      </div>
      <div className={style.section}>
        <Template />
        <CostList />
        {window.visualViewport.width > 767 && <Template2 />}
      </div>
    </div>
  );
}
