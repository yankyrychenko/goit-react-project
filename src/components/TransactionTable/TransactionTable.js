import React from 'react';
import CostItem from './CostItem';
import { incomes } from './income.json';

import style from './TransactionTable.module.scss';

export default function TransactionTable() {
  console.log(incomes);
  // console.log(expenses);
  // console.log(window.innerWidth);
  // console.log(window.screen.width)
  // console.dir(window.visualViewport.width)

  return (
    <div>
      <div>
        {window.visualViewport.width > 767 ? (
          <div className={style.table__head}>
            <ul className={style.table__box}>
              <li className={style.table__title}>Дата</li>
              <li className={style.table__title}>Описание</li>
              <li className={style.table__title}>Категория</li>
              <li className={style.table__title}>Сумма</li>
            </ul>
          </div>
        ) : null}
        {incomes.map(item => (
          <CostItem
            key={item._id}
            desc={item.description}
            amount={item.amount}
            date={item.date}
            category={item.category}
            // disFnDeleteItem={disFnDeleteItem}
          ></CostItem>
        ))}
        {window.visualViewport.width > 767 ? (
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
        ) : (
          <div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
            <div className={style.table__body}></div>
          </div>
        )}
      </div>
    </div>
  );
}