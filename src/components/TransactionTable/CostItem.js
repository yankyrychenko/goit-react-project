import React from 'react';
// import PropTypes from 'prop-types';
import style from './TransactionTable.module.scss';

function CostItem({ desc, amount, date, category, disFnDeleteItem }) {
  // const dateUpdate =
  return (
    <div className={style.table__body}>
      <ul className={style.table__box}>
        <li className={style.table__text}>{date}</li>
        <li className={style.table__text}>{desc}</li>
        <li className={style.table__text}>{category}</li>
        <li className={style.table__text}>{amount}</li>
      </ul>
      <span className={style.item__remove}>X</span>

      {/* lassName={style.item__remove} */}
      {/* <div className={style.flex}>
        //     <p className={style.item__name}>{name}</p>
        //     <p className={style.item__priority}>{number}</p>
        //   </div>
        //   <span
        //     onClick={() => disFnDeleteItem(id)}
        //     className={style.item__remove}
        //   >
        //     X
        //   </span> */}
      {/* </div> */}
    </div>
  );
}

// ContactItem.propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,
//     id: PropTypes.string,
// };

export default CostItem;

// <tr className={style.table__item}>
//     <td>{date}</td>
//     <td>{desc}</td>
//     <td>{category}</td>
//     <td>{amount}</td>
//     <td>X</td>
//     </tr>
