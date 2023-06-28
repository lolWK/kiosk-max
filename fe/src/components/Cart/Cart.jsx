import { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import CartLists from './CartLists';
import Dim from '../Modal/Dim/Dim';
import PaymentModal from '../Modal/Payment/PaymentModal';
import Loading from '../Loading/Loading';
import CashModal from '../Modal/Payment/CashModal';
import Recipe from '../Recipe/Recipe';
import Timer from './Timer';

// async function postRequest(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postRequest("https://example.com/answer", { answer: 42 })

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
  const [postData, setPostData] = useState({
    totalAmount: orderPrice,
  });

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

  useEffect(() => {
    const drinkList = cartList.map((cartItem) => {
      return {
        drinkId: cartItem.drinkId,
        quantity: cartItem.quantity,
        orderPrice: cartItem.price * cartItem.quantity,
        options: [cartItem.size, cartItem.temperature],
      };
    });

    setPostData({
      ...postData,
      payment: 'CARD',
      drinks: [...drinkList],
    });
  }, []);

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
            setCartList={setCartList}
            tempList={tempList}
            setTempList={setTempList}
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
            setPostData={setPostData}
          />
        </>
      )}
      {showMode === 'recipe' && <Recipe />}
    </div>
  );
}
