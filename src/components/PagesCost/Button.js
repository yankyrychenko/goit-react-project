import React from 'react';
import style from './CostPage.module.scss';

export default function Button({title}) {
  return (
          <button
        className={style.button__title}
        type="button">
        {title}
      </button>
  );
}
