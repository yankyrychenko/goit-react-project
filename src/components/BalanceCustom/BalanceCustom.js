import React, { useState } from 'react';
import {useLocation} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import style from './BalanceCustom.module.scss';
import BalanceModal from '../BalanceModal/BalanceModal';
import { getUserBalance } from '../../redux/selectors/authSelectors';
import { addBalance } from '../../redux/operations/balanceOperations';
import { useWindowSize } from 'react-use-size';

const initialState = {
  newBalance: '',
};

const BalanceCustom = () => {
  const [newBalance, setNewBalance] = useState({ ...initialState });
  const [read, setRead] = useState(false)

  const currentBalance = useSelector(state => getUserBalance(state));
  const { width } = useWindowSize();
  const location = useLocation()
  const dispatch = useDispatch();

  const balanceHandler = ({ target }) => {
    const { name, value } = target;
    setNewBalance(state => ({ ...state, [name]: value }));
  };
  const balanceSubmit = e => {
    e.preventDefault();
    console.log(newBalance);
    dispatch(addBalance(newBalance));
  };

  return (
    <div className={style.balanceWrapper}>
      <form className={style.balanceForm} onSubmit={balanceSubmit}>
        <label htmlFor="balance" className={style.balanceLabel}>
          Баланс:
        </label>
        <input
          readOnly={currentBalance ? !read : read}
          maxLength="6"
          min="1"
          max="999999"
          id="balance"
          onChange={balanceHandler}
          className={style.balanceInput}
          type="number"
          name="newBalance"
          placeholder={currentBalance === 0 ? '00.00 UAH' : currentBalance}
          value={newBalance.newBalance}
        />
       {location.pathname === '/statistics' && width < 767 ? null : (
          <button type="submit" className={style.balanceButton}>
            ПОДТВЕРДИТЬ
          </button>
        )}
        { currentBalance == 0 && location.pathname !== '/statistics' ?  <BalanceModal/> : null }
      </form>
    </div>
  );
};

export default BalanceCustom;
