import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use-size';
import { useLocation } from 'react-router';

import style from './BalanceCustom.module.scss';
import BalanceModal from '../BalanceModal/BalanceModal';
import { getUserBalance } from '../../redux/selectors/authSelectors';
import { addBalance } from '../../redux/operations/balanceOperations';

const BalanceCustom = () => {
  const newBalance = useSelector(state =>
    getUserBalance(state) !== undefined ? getUserBalance(state) : null,
  );

  const [currentBalance, setCurrentBalance] = useState(newBalance);
  const [read, setRead] = useState(false);
  const location = useLocation();
  const { width } = useWindowSize();

  useEffect(() => {
    currentBalance !== null ? setRead(true) : setRead(false);
    setCurrentBalance(newBalance);
  }, [currentBalance, newBalance]);

  const dispatch = useDispatch();
  const balanceHandler = ({ target }) => {
    const { name, value } = target;
    setCurrentBalance(value);
  };
  const balanceSubmit = e => {
    e.preventDefault();
    dispatch(addBalance({ newBalance: currentBalance }));
    setRead(true);
  };
  // console.log(currentBalance);
  return (
    <div className={style.balanceWrapper}>
      <form className={style.balanceForm} onSubmit={balanceSubmit}>
        <label htmlFor="balance" className={style.balanceLabel}>
          Баланс:
        </label>
        <input
          readOnly={currentBalance ? read : false}
          maxLength="6"
          id="balance"
          onChange={balanceHandler}
          className={
            location.pathname === '/statistics' && width < 767
              ? style.input
              : style.balanceInput
          }
          type="text"
          name="newBalance"
          placeholder={currentBalance > 0 ? currentBalance : '00.00 UAH'}
          value={currentBalance > 0 ? currentBalance : ''}
        />
        {location.pathname === '/statistics' && width < 767 ? null : (
          <button type="submit" className={style.balanceButton}>
            ПОДТВЕРДИТЬ
          </button>
        )}
        {currentBalance === 0 && location.pathname !== '/statistics' ? (
          <BalanceModal />
        ) : null}
      </form>
    </div>
  );
};

export default BalanceCustom;
