import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import operation from '../../redux/operations/transactionsDeleteOperations';
import style from './TransactionTable.module.scss';

function CostItem({ desc, amount, date, category, id }) {
  const dispatch = useDispatch();
  
  const fnDelete = (id) => {
    dispatch(operation.handleTransactionDelete(id))
    console.log('удалили')
    console.log(`удалили ${id}`)
  }
  
  // const dateUpdate =
  return (
    <div className={style.table__body}>
      <ul className={style.table__box}>
        <li className={style.table__text}>{date}</li>
        <li className={style.table__text}>{desc}</li>
        <li className={style.table__text}>{category}</li>
        <li className={style.table__text}>{amount}</li>
      </ul>
      <span
        className={style.item__remove}
        onClick={() => fnDelete(id)}
      >
        X
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
