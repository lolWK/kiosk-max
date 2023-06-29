import { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import CartLists from './CartLists';
import Dim from '../Modal/Dim/Dim';
import PaymentModal from '../Modal/Payment/PaymentModal';
import Loading from '../Loading/Loading';
import CashModal from '../Modal/Payment/CashModal';
import Recipe from '../Recipe/Recipe';
import Timer from './Timer';

export default function Cart({
  cartList,
  setCartList,
  handleRemoveCartItem,
  showMode,
  setShowMode,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [tempList, setTempList] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    if (cartList.length > 0) {
      setIsCartOpen(true);
    } else {
      setIsCartOpen(false);
    }
  }, [cartList]);

  useEffect(() => {
    setResetTimer((prevResetTimer) => prevResetTimer + 1);
  }, [cartList]);

  const drinkList = cartList.map((cartItem) => {
    return {
      drinkId: cartItem.drinkId,
      quantity: cartItem.quantity,
      orderPrice: cartItem.price * cartItem.quantity,
      options: [cartItem.size, cartItem.temperature],
    };
  });

  const postData = {
    totalAmount: orderPrice,
    payment: 'CARD',
    drinks: [...drinkList],
  };

  useEffect(() => {
    const price = cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setOrderPrice(price);
  }, [cartList]);

  const handlePaymentButton = () => {
    setShowMode('payment');
    setTempList(cartList);
    setCartList([]);
  };

  const handleCloseButton = () => {
    setCartList(tempList);
    setTempList([]);
    setShowMode('');
  };

  const handleCashButton = () => {
    setShowMode('cash');
    setCartList(tempList);
  };

  return (
    <div>
      {isCartOpen && (
        <div className={styles.cart}>
          <CartLists
            cartList={cartList}
            handleRemoveCartItem={handleRemoveCartItem}
          />
          <Timer
            initialCount={120}
            onTimeOut={() => setCartList([])}
            resetKey={resetTimer}
          />

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
            handleCloseButton={handleCloseButton}
            handleCashButton={handleCashButton}
          />
        </>
      )}
      {showMode === 'card' && (
        <>
          <Dim />
          <Loading />
        </>
      )}
      {showMode === 'cash' && (
        <>
          <Dim />
          <CashModal
            setShowMode={setShowMode}
            orderPrice={orderPrice}
            postData={postData}
          />
        </>
      )}
      {showMode === 'recipe' && <Recipe setShowMode={setShowMode} />}
    </div>
  );
}
