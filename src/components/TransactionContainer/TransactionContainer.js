import React from 'react';
import Button from './Button';

import style from './TransactionContainer.module.scss';

export default function TransactionContainer({children}) {
  return (
    <div className={style.container}>
      <div className={style.button__flexbox}>
        <Button title="Расход" />
        <Button title="Доход" />
      </div>
          <div className={style.section}>
              {children}
      </div>
    </div>
  );
}