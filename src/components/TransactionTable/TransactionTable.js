import React from 'react';

import { useWindowSize } from 'react-use-size';
import CostItem from './CostItem';

import { incomes } from './income.json';

import style from './TransactionTable.module.scss';

export default function TransactionTable({ costList }) {
  const { width } = useWindowSize();

  return (
    <div>
      <div>
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
        {/* <Scrollbars style={{width: 1, color: "red"}}> */}
        <div className={style.table__body_container}>
          {incomes.map(item => (
            <CostItem
              key={item._id}
              desc={item.description}
              amount={item.amount}
              date={item.date}
              category={item.category}
            ></CostItem>
          ))}
          {
            width > 767 ? (
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
            ) : null
            //   <div>
            //     <div className={style.table__body}></div>
            //     <div className={style.table__body}></div>
            //     <div className={style.table__body}></div>
            //   </div>
          }
        </div>
        {/* </Scrollbars> */}
      </div>
    </div>
  );
}
