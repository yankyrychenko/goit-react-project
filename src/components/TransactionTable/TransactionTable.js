import React from 'react';

import { useWindowSize } from 'react-use-size';
import { Scrollbars } from 'react-custom-scrollbars';
import CostItem from './CostItem';

import style from './TransactionTable.module.scss';

export default function TransactionTable({ costList, fnRemove, styleOption }) {
  const { width } = useWindowSize();

  // ------------------------------------> Настройки Scrollbar:
  const optionScrollGeneral = ({ style, ...props }) => {
    const optionStyle = {
      borderRadius: 2,
      backgroundColor: '#FF751D',
    };
    return <div style={{ ...style, ...optionStyle }} {...props} />;
  };

  // console.dir(test)

  // window.scrollTo({
  //   top: test.scrollHeight,
  //   behavior: 'smooth',
  // });

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
      {/* --------------------------------Затраты-Доходы для Desktop and Tablet------------------------- */}
      {/* <div className={style.table__body_container}> */}
      {width > 767 && (
        <Scrollbars
          renderThumbVertical={optionScrollGeneral}
          autoHide
          autoHideTimeout={700}
          autoHideDuration={500}
          autoHeight={true}
          autoHeightMax={360}
        >
          {costList
            ? costList.map(item => (
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
          {costList && costList.length < 3 ? (
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
          {costList && costList.length >= 3 && costList.length < 6 ? (
            <div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
            </div>
          ) : null}
          {costList && costList.length >= 6 && costList.length < 10 ? (
            <div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
              <div className={style.table__body}></div>
            </div>
          ) : null}
        </Scrollbars>
      )}
      {/* --------------------------------Затраты-Доходы для Mobile------------------------- */}
      {width <= 767 && (
        <Scrollbars
          renderThumbVertical={optionScrollGeneral}
          // renderThumbHorizontal={optionScrollMobile}
          autoHide
          autoHideTimeout={700}
          autoHideDuration={500}
          autoHeight={true}
          autoHeightMax={160}
        >
          {costList
            ? costList.map(item => (
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
        </Scrollbars>
      )}
    </div>
  );
}
