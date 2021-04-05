import React from 'react';

import { useWindowSize } from 'react-use-size';
import { Scrollbars } from 'react-custom-scrollbars';
import CostItem from './CostItem';

import style from './TransactionTable.module.scss';

export default function TransactionTable({ costList, fnRemove, styleOption }) {
  const { width } = useWindowSize();

  // --------------------------------------------------> Настройки Scrollbar:
  const optionScrollGeneral = ({ style, ...props }) => {
    const optionStyle = {
      borderRadius: 2,
      backgroundColor: '#FF751D',
    };
    return <div style={{ ...style, ...optionStyle }} {...props} />;
  };

  // --------------------------------------------------> Сортировка списка:
  let costListNew = [];
  if (costList) {
    const copyList = [...costList];
    const copyListSort = copyList.sort((item1, item2) => {
      if (item1.date < item2.date) {
        return 1;
      }
      if (item1.date > item2.date) {
        return -1;
      }
      return 0;
    });
    costListNew = copyListSort;
  }

  return (
    <div>
      {/* -----------------------------------Заголовок таблицы----------------------------- */}
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
      {/* --------------------------------Затраты-Доходы для Mobile------------------------- */}
      {width <= 767 && (
        <Scrollbars
          renderThumbVertical={optionScrollGeneral}
          autoHide
          autoHideTimeout={700}
          autoHideDuration={500}
          autoHeight={true}
          // // autoHeightMin={160}
          // autoHeightMax={700}
        >
          {costListNew
            ? costListNew.map(item => {
                if (item.category === 'З/П' || item.category === 'Доп. доход') {
                  return (
                    <CostItem
                      key={item._id}
                      desc={item.description}
                      amount={item.amount}
                      date={item.date}
                      category={item.category}
                      id={item._id}
                      fnRemove={fnRemove}
                      styleOption={false}
                    ></CostItem>
                  );
                } else {
                  return (
                    <CostItem
                      key={item._id}
                      desc={item.description}
                      amount={item.amount}
                      date={item.date}
                      category={item.category}
                      id={item._id}
                      fnRemove={fnRemove}
                      styleOption={true}
                    ></CostItem>
                  );
                }
              })
            : null}
        </Scrollbars>
      )}
      {/* -----------------------Затраты-Доходы для Desktop and Tablet------------------ */}
      {width > 767 && (
        <Scrollbars
          renderThumbVertical={optionScrollGeneral}
          autoHide
          autoHideTimeout={700}
          autoHideDuration={500}
          autoHeight={true}
          autoHeightMax={360}
        >
          {costListNew
            ? costListNew.map(item => (
                <CostItem
                  key={item._id}
                  desc={item.description}
                  amount={item.amount}
                  date={item.date}
                  category={item.category}
                  id={item._id}
                  fnRemove={fnRemove}
                  styleOption={styleOption}
                ></CostItem>
              ))
            : null}
          {/* --------------------------------Пустые строки------------------------- */}
          {costListNew && costListNew.length < 3 ? (
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
          {costListNew && costListNew.length >= 3 && costListNew.length < 6 ? (
            <div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
            </div>
          ) : null}
          {costListNew && costListNew.length >= 6 && costListNew.length < 10 ? (
            <div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
            </div>
          ) : null}
        </Scrollbars>
      )}
    </div>
  );
}
