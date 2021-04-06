import React from 'react';
import Button from './Button/Button';
import route from './../../routes/routes';

import style from './TransactionContainer.module.scss';

export default function TransactionContainer({ children }) {
  return (
    <div className={style.container}>
      <div className={style.button__flexbox}>
        <Button title="Расход" route={route.expense} />
        <Button title="Доход" route={route.income} />
      </div>
      <div className={style.section}>{children}</div>
    </div>
  );
}
