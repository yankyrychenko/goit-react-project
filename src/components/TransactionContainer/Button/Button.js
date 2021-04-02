import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Button.module.scss';

export default function Button({ title, route }) {
  return (
      <NavLink
        to={route}
        className={style.button__title}
        activeClassName={style.button__title_active}
    >
        {title}
      </NavLink>
  );
}
