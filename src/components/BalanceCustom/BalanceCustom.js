import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use-size';
import { useLocation } from 'react-router';

import style from './BalanceCustom.module.scss';
import BalanceModal from '../BalanceModal/BalanceModal';
import { getUserBalance } from '../../redux/selectors/authSelectors';
import { addBalance } from '../../redux/operations/balanceOperations';

const BalanceCustom = () => {
  const [currentBalance, setCurrentBalance] = useState();
  // const [read, setRead] = useState(false);
  const location = useLocation();
  const { width } = useWindowSize();

  const newBalance = useSelector(state => getUserBalance(state));

  useEffect(() => setCurrentBalance(newBalance), [newBalance]);

  const dispatch = useDispatch();
  const balanceHandler = ({ target }) => {
    const { name, value } = target;
    setCurrentBalance(value);
  };
  const balanceSubmit = e => {
    e.preventDefault();
    dispatch(addBalance({ newBalance: currentBalance }));
  };
  return (
    <div className={style.balanceWrapper}>
      <form className={style.balanceForm} onSubmit={balanceSubmit}>
        <label htmlFor="balance" className={style.balanceLabel}>
          Баланс:
        </label>
        <input
          // readOnly={currentBalance ? !read : read}
          maxLength="6"
          // min={1}
          // max={12}
          id="balance"
          onChange={balanceHandler}
          className={style.balanceInput}
          type="text"
          name="newBalance"
          placeholder={currentBalance > 1 ? currentBalance : '00.00 UAH'}
          // value={currentBalance}
        />
        {location.pathname === '/statistics' && width < 767 ? null : (
          <button type="submit" className={style.balanceButton}>
            ПОДТВЕРДИТЬ
          </button>
        )}
        {currentBalance == 0 && location.pathname !== '/statistics' ? (
          <BalanceModal />
        ) : null}
      </form>
    </div>
  );
};

export default BalanceCustom;
