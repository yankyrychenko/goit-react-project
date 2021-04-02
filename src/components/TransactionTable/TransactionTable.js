import React from 'react';

import { useWindowSize } from 'react-use-size';
import CostItem from './CostItem';

import style from './TransactionTable.module.scss';

export default function TransactionTable({ costList }) {
  const { width } = useWindowSize();

  return (
    <div>
      {/* --------------------------------Заголовок таблицы------------------------- */}
      {width > 767 ? (
        <div className={style.table__head}>
          <ul className={style.table__box}>
            <li className={style.table__title}>Дата</li>
            <li className={style.table__title}>Описание</li>
            <li className={style.table__title}>Категория</li>
            <li className={style.table__title}>Сумма</li>
          </ul>
        </div>
      ) : null}
      {/* --------------------------------Затраты-Доходы------------------------- */}
      <div className={style.table__body_container}>
        {costList
          ? costList.map(item => (
              <CostItem
              key={item._id}
              desc={item.description}
              amount={item.amount}
              date={item.date}
              category={item.category}
              id={item._id}
              ></CostItem>
            ))
          : null}
        {/* --------------------------------Пустые строки------------------------- */}
                {costList && costList.length < 3 && width > 767 ? (
          <div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
          </div>
        ) : null}
          {costList && costList.length >=3 && costList.length < 6 && width > 767 ? (
          <div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
          </div>
        ) : null}
        {/* {costList && costList.length < 4 && width > 767 ? (
          <div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
          </div>
        ) : null}
        {costList && costList.length >= 4 && width > 767 ? (
          <div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}
