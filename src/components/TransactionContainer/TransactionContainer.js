import React from 'react';
import { useLocation } from 'react-router';
import Button from './Button/Button';
import route from './../../routes/routes';
import { useWindowSize } from 'react-use-size';

import style from './TransactionContainer.module.scss';

export default function TransactionContainer({ children }) {
  const { width } = useWindowSize();
  const location = useLocation();
  return (
    <div className={style.container}>
      {width <= 767 && location.pathname === route.home && (
        <div className={style.button__flexbox}>
          <Button title="Расход" route={route.expense} />
          <Button title="Доход" route={route.income} />
        </div>
      )}
      {width > 767 && (
        <div className={style.button__flexbox}>
          <Button title="Расход" route={route.expense} />
          <Button title="Доход" route={route.income} />
        </div>
      )}
      <div className={style.section}>{children}</div>
    </div>
  );
}
