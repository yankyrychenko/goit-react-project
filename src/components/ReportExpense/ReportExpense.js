import React, { useEffect } from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import styles from '../ReportExpense/ReportExpense.module.scss';
import expenseSprite from '../../img/expenseSprite.svg';
import CategoriesName from './CategoriesName';
import { getActiveCategory } from '../../redux/selectors/activeCategorySelector';
import categoryActions from '../../redux/actions/activeCategoryActions'
const ReportExpense = () => {
  // const [activeCategory, setActiveCategory] = useState('');
  const activeCategory = useSelector(getActiveCategory);
  const dispatch = useDispatch();
  const setActiveCategory = activeCategory => dispatch(categoryActions.changeActiveCategory(activeCategory));
  const activeCategoryHandler = e => {
    const { name } = e.target;
    if (activeCategory !== name) {
      setActiveCategory(name);
    } else {
      setActiveCategory('');
    }
  };

  const categoryTotalExpenses = useSelector(
    state => state.periodData.expenses.expensesData,
  );

  let allCategoriesArray = [];

  if (categoryTotalExpenses !== undefined) {
    const categoryArr = Object.entries(categoryTotalExpenses);

    categoryArr.forEach(category => {
      if (category[1].total > 0) {
        CategoriesName.forEach(item => {
          if (item.category === category[0]) {
            allCategoriesArray.push([...category, item.name]);
          }
        });
      }
    });
  }

  useEffect(() => {
    if (allCategoriesArray.length > 0) {
      setActiveCategory(allCategoriesArray[0][0]);
    }
  }, [categoryTotalExpenses]);

  return (
    <div>
      <ul className={styles.ReportExpenseList}>
        {allCategoriesArray?.map(category => (
          <li
            name={category[0]}
            key={category[0]}
            className={styles.ReportExpenseItem}
          >
            <p name={category[0]} className={styles.ReportExpenseAmount}>
              {category[1].total}
            </p>

            <button
              type="button"
              name={category[0]}
              onClick={activeCategoryHandler}
              className={
                activeCategory === category[0]
                  ? styles.isActiveBtn
                  : styles.nonActiveBtn
              }
            >
              <svg className={styles.ReportExpenseIcon}>
                <use
                  className={
                    activeCategory === category[0]
                      ? styles.isActiveIcon
                      : styles.nonActiveIcon
                  }
                  href={`${expenseSprite}#${category[2]}`}
                />
              </svg>
            </button>
            <h3 name={category[0]} className={styles.ReportExpenseTitle}>
              {category[0]}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportExpense;
