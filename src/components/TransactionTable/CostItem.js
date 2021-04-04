import React from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use-size';
import PropTypes from 'prop-types';
import sprite from '../../img/sprite.svg';
import style from './TransactionTable.module.scss';

function CostItem({ desc, amount, date, category, id, fnRemove, styleOption }) {
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  const fnDeleteItem = id => {
    dispatch(fnRemove(id));
  };

  // --------------------------------> Преобразование даты в формат 00.00.000 из 0000-00-00
  const parseDate = new Date(date);
  const day = parseDate.getDate().toString().padStart(2, "0");
  const month = parseDate.getMonth().toString().padStart(2, "0");
  const year = parseDate.getFullYear().toString();
  const newDate = `${day}.${1 + month}.${year}`

  return (
    <div className={style.table__body}>
      <ul className={style.table__box}>
        <li className={style.table__text}>{newDate}</li>
        <li className={style.table__text}>{desc}</li>
        <li className={style.table__text}>{category}</li>
        <li className={style.table__text}>
          {styleOption && width > 767 && (
            <div className={style.item__minus}>- {amount} грн.</div>
          )}
          {!styleOption && width > 767 && (
            <div className={style.item__plus}>+ {amount} грн.</div>
          )}
          {width <= 767 && <div className={style.item}> {amount} грн.</div>}
          {/* {styleOption ? (
            <div className={style.item__minus}>- {amount} грн.</div>
          ) : (
            <div className={style.item__plus}>+ {amount} грн.</div>
          )} */}
        </li>
      </ul>
      <span className={style.item__remove} onClick={() => fnDeleteItem(id)}>
        <svg width="16" height="16">
          <use href={sprite + '#icon-delete'}></use>
        </svg>
      </span>
    </div>
  );
}

CostItem.propTypes = {
  desc: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};

export default CostItem;
