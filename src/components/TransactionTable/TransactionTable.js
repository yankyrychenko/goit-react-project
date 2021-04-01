import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useWindowSize } from 'react-use-size';
import CostItem from './CostItem';
// import {} from './../../redux/selectors/transactionsSelectors'

import { incomes } from './income.json';

import style from './TransactionTable.module.scss';

export default function TransactionTable() {
    const { width } = useWindowSize();
    // const listCost = useSelector(selRenderFilter); 
    const dispatch = useDispatch();

// const selIncomes = state => state.transactions.incomes
// const selExpenses = state => state.transactions.expenses


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
        {width > 767 ? (
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
                      null
        //   <div>
        //     <div className={style.table__body}></div>
        //     <div className={style.table__body}></div>
        //     <div className={style.table__body}></div>
        //   </div>
        )}
      </div>
    </div>
  );
}