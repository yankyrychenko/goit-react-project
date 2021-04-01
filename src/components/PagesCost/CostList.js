import React from 'react';
import CostItem from './CostItem';
import { incomes } from './income.json';
// import { expenses } from './expense.json';

import style from './CostPage.module.scss';

export default function CostList() {
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

// // selRenderFilter ---> Для правильного рендера фильтрованного и не фильтрованого списка
//   const contacts = useSelector(selRenderFilter);
//   const loading = useSelector(selLoadingStatus);
//   const dispatch = useDispatch();

//   const disFnDeleteItem = (id) => {
//     dispatch(deleteContact(id))
//   }

//   // ---> Условие что бы не было рендера при пустом массиве когда запущен филтр поиска
//   if (contacts.length === 0) {
//     return null;
//   } else {

//   <div style={{ position: 'relative' }}>
//     {/* ----------------------------Loader------------------------------- */}
//     {loading && (
//       <Loader
//         type="ThreeDots"
//         color="rgba(255, 255, 255, 0.2)"
//         height={75}
//         width={75}
//         style={{
//           position: 'absolute',
//           top: '-45px',
//           left: '50%',
//           transform: 'translate(-50%)',
//         }}
//       />
//     )}
//     {/* ----------------------------List------------------------------- */}
//     {contacts.map(contact => (

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   fnRemove: PropTypes.func,
// };

// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';

// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// import { deleteContact } from '../../../api/operations-get';
// import {
//   selRenderFilter,
//   selLoadingStatus,
// } from '../../../redux/phonebook/selectors';

// <table className={style.table__box}>
// <thead>
//   <th>Дата</th>
//   <th>Описание</th>
//   <th>Категория</th>
//   <th>Сумма</th>
//   <th></th>
// </thead>
// <tbody></tbody>
