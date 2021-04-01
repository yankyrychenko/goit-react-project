import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './GoToReport.module.scss';
import sprite from '../../img/sprite.svg';

const GoToReport = () => {
  return (
    <div className={style.balanceValue}>
      <NavLink className={style.balanceLink} to="/balance">
        {' '}
        Перейти к отчетам
        <svg className={style.svg}>
          <use href={sprite + '#icon-bar_chart'}></use>
        </svg>
      </NavLink>
    </div>
  );
};

export default GoToReport;
