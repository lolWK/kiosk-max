import { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import CartLists from './CartLists';
import Dim from '../Modal/Dim/Dim';
import PaymentModal from '../Modal/Payment/PaymentModal';

export default function Cart({
  cartList,
  setCartList,
  handleRemoveCartItem,
  showMode,
  setShowMode,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [countDownTime, setCountDownTime] = useState(120);
  const [timerId, setTimerId] = useState(null);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    if (cartList.length > 0) {
      setIsCartOpen(true);
      setCountDownTime(120);
    } else {
      setIsCartOpen(false);
    }
  }, [cartList]);

  useEffect(() => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    if (isCartOpen && countDownTime > 0) {
      setTimerId(
        setTimeout(() => {
          setCountDownTime((prevCount) => prevCount - 1);
        }, 1000)
      );
    }
  }, [isCartOpen, countDownTime]);

  useEffect(() => {
    if (countDownTime === 0) {
      setCountDownTime(120);
      setCartList([]);
    }
  }, [countDownTime]);

  const handlePaymentButton = () => {
    setShowMode('payment');
    setTempList(cartList);
    setCartList([]);
  };

  return (
    <div>
      {isCartOpen && (
        <div className={styles.cart}>
          <CartLists
            cartList={cartList}
            handleRemoveCartItem={handleRemoveCartItem}
          />
          <p className={styles.timer}>{countDownTime}초 남음</p>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.cancel}
              onClick={() => setCartList([])}
            >
              취소
            </button>
            <button
              type="button"
              className={styles.payment}
              onClick={handlePaymentButton}
            >
              결제하기
            </button>
          </div>
        </div>
      )}
      {showMode === 'payment' && (
        <>
          <Dim />
          <PaymentModal
            setShowMode={setShowMode}
            setCartList={setCartList}
            tempList={tempList}
            setTempList={setTempList}
          />
        </>
      )}
      {showMode === 'card' && <Dim />}
      {showMode === 'cash' && <Dim />}
    </div>
  );
}
