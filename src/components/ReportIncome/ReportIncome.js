import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import styles from '../ReportIncome/ReportIncome.module.scss';
import incomeSprite from '../../img/incomeSprite.svg';
import CategoriesName from './CategoriesName';
import { getActiveCategory } from '../../redux/selectors/activeCategorySelector';
import categoryActions from '../../redux/actions/activeCategoryActions'
const ReportIncome = () => {
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

  const categoryTotalIncomes = useSelector(
    state => state.periodData.incomes.incomesData,
  );

  let allCategoriesArray = [];

  if (categoryTotalIncomes !== undefined) {
    const categoryArr = Object.entries(categoryTotalIncomes);

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
  }, [categoryTotalIncomes]);

  return (
    <>
      <ul className={styles.ReportIncomeList}>
        {allCategoriesArray?.map(category => (
          <li
            name={category[0]}
            key={category[0]}
            className={styles.ReportIncomeItem}
          >
            <p name={category[0]} className={styles.ReportIncomeAmount}>
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
              <svg className={styles.ReportIncomeIcon}>
                <use
                  className={
                    activeCategory === category[0]
                      ? styles.isActiveIcon
                      : styles.nonActiveIcon
                  }
                  href={`${incomeSprite}#${category[2]}`}
                />
              </svg>
            </button>
            <h3 name={category[0]} className={styles.ReportIncomeTitle}>
              {category[0]}
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReportIncome;
