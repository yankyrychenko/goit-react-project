import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import style from './GoToReport.module.scss';
import sprite from '../../img/sprite.svg';

const GoToReport = () => {
  return (
    <div className={style.balanceValue}>
      <NavLink className={style.balanceLink} to={routes.stats}>
        Перейти к отчетам
        <svg className={style.svg} width="24" height="24">
          <use href={sprite + '#icon-bar_chart'}></use>
        </svg>
      </NavLink>
    </div>
  );
};

export default GoToReport;
