import { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import CartLists from './CartLists';

export default function Cart({
  cartList,
  handleRemoveCartItem,
  handleRemoveAllCartList,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [countDownTime, setCountDownTime] = useState(10);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (cartList.length > 0) {
      setIsCartOpen(true);
      setCountDownTime(10);
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
      setCountDownTime(10);
      handleRemoveAllCartList();
    }
  }, [countDownTime]);

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
              onClick={handleRemoveAllCartList}
            >
              취소
            </button>
            <button type="button" className={styles.payment}>
              결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
