import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from '../ReportIncome/ReportIncome.module.scss';
import Container from '../Container/Container';
// import sprite from '../../img/sprite.svg';
import incomeSprite from '../ReportIncome/incomeSprite.svg';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';
import CategoriesName from './CategoriesName';
import { getIncomeTotal } from '../../redux/selectors/periodDataSelectors';

const ReportIncome = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const activeCategoryHandler = e => {
    const { name } = e.target;
    if (activeCategory !== name) {
      setActiveCategory(name);
    } else {
      setActiveCategory('');
    }
  };

  const totalMonthExpenses = useSelector(
    state => state.periodData.incomes.incomesData,
  );

  let categoriesArray = [];

  if (totalMonthExpenses !== undefined) {
    const catArr = Object.entries(totalMonthExpenses);

    catArr.forEach(category => {
      if (category[1].total > 0) {
        CategoriesName.forEach(item => {
          if (item.category === category[0]) {
            categoriesArray.push([...category, item.name]);
          }
        });
      }
    });
  }

  return (
    <>
      <ReportExpenseIncomeToggler />
      {/* <Container> */}
      {/* <h1 style={{ color: 'green', textAlign: 'center' }}>Доходы</h1> */}

      <ul className={styles.ReportIncomeList}>
        {categoriesArray?.map(item => (
          <li name={item[0]} key={item[0]} className={styles.ReportIncomeItem}>
            <p name={item[0]} className={styles.ReportIncomeAmount}>
              {item[1].total}
            </p>
            <button
              type="button"
              name={item[0]}
              onClick={activeCategoryHandler}
              className={
                activeCategory === item[0]
                  ? styles.isActiveBtn
                  : styles.nonActiveBtn
              }
            >
              <svg className={styles.ReportIncomeIcon}>
                <use
                  className={
                    activeCategory === item[0]
                      ? styles.isActiveIcon
                      : styles.nonActiveIcon
                  }
                  href={`${incomeSprite}#${item[2]}`}
                />
              </svg>
            </button>
            <h3 name={item[0]} className={styles.ReportIncomeTitle}>
              {item[0]}
            </h3>
          </li>
        ))}
      </ul>
      {/* </Container> */}
    </>
  );
};

export default ReportIncome;

// const ReportIncome = () => {
//   // const [incomes, setIncomes] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('');

//   const getCurrentCategory = name => {
//     return CategoriesName.find(({ category }) => {
//       return category === name;
//     });
//   };

//   const activeCategoryHandler = e => {
//     const { name } = e.target;
//     if (activeCategory !== name) {
//       setActiveCategory(name);
//     } else {
//       setActiveCategory('');
//     }
//   };

//   const filteredIncome = CategoriesName.filter(({ amount }) => amount > 0);

//   // const periodDataIncome = useSelector(state => state.periodData);
//   // console.log(periodDataIncome);

//   // const totalMonthIncomes = useSelector(
//   //   state => state.periodData.incomes.incomesData,
//   // );
//   // console.log(totalMonthIncomes);

//   return (
//     <>
//       <ReportExpenseIncomeToggler />
//       <Container>
//         {/* <h1 style={{ color: 'green', textAlign: 'center' }}>Доходы</h1> */}

//         <ul className={styles.ReportIncomeList}>
//           {filteredIncome.map(({ category, _id, amount }) => (
//             <li name={category} key={_id} className={styles.ReportIncomeItem}>
//               <p name={category} className={styles.ReportIncomeAmount}>
//                 {amount}
//               </p>
//               <button
//                 type="button"
//                 name={category}
//                 // className={styles.ReportIncomeBtn}
//                 onClick={activeCategoryHandler}
//                 className={
//                   activeCategory === category
//                     ? styles.isActiveBtn
//                     : styles.nonActiveBtn
//                 }
//               >
//                 <svg className={styles.ReportIncomeIcon}>
//                   <use
//                     className={
//                       activeCategory === category
//                         ? styles.isActiveIcon
//                         : styles.nonActiveIcon
//                     }
//                     href={`${incomeSprite}#${
//                       getCurrentCategory(category).name
//                     }`}
//                   />
//                 </svg>
//               </button>
//               <h3 name={category} className={styles.ReportIncomeTitle}>
//                 {category}
//               </h3>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </>
//   );
// };

// export default ReportIncome;
