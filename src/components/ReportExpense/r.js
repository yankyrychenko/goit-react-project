// const ReportExpense = () => {
//   const [activeCategory, setActiveCategory] = useState('');

//   const activeCategoryHandler = e => {
//     const { name } = e.target;
//     if (activeCategory !== name) {
//       setActiveCategory(name);
//     } else {
//       setActiveCategory('');
//     }
//   };

//   const totalMonthExpenses = useSelector(
//     state => state.periodData.expenses.expensesData,
//   );

//   let categoriesArray = [];

//   if (totalMonthExpenses !== undefined) {
//     const catArr = Object.entries(totalMonthExpenses);

//     catArr.forEach(category => {
//       if (category[1].total > 0) {
//         CategoriesName.forEach(item => {
//           if (item.category === category[0]) {
//             categoriesArray.push([...category, item.name]);
//           }
//         });
//       }
//     });
//   }
//   return (
//     <>
//       <ReportExpenseIncomeToggler />
//       <Container>
//         <ul className={styles.ReportExpenseList}>
//           {categoriesArray?.map(item => (
//             <li
//               name={item[0]}
//               key={item[0]}
//               className={styles.ReportExpenseItem}
//             >
//               <p name={item[0]} className={styles.ReportExpenseAmount}>
//                 {item[1].total}
//               </p>

//               <button
//                 type="button"
//                 name={item[0]}
//                 onClick={activeCategoryHandler}
//                 className={
//                   activeCategory === item[0]
//                     ? styles.isActiveBtn
//                     : styles.nonActiveBtn
//                 }
//               >
//                 <svg className={styles.ReportExpenseIcon}>
//                   <use
//                     className={
//                       activeCategory === item[0]
//                         ? styles.isActiveIcon
//                         : styles.nonActiveIcon
//                     }
//                     href={`${expenseSprite}#${item[2]}`}
//                   />
//                 </svg>
//               </button>
//               <h3 name={item[0]} className={styles.ReportExpenseTitle}>
//                 {item[0]}
//               </h3>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </>
//   );
// };
