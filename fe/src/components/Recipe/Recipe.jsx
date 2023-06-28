// import { useState, useEffect } from 'react';
import styles from './Recipe.module.css';

const recipeData = {
  dailyOrderId: 1,
  payment: 'cash',
  receivedAmount: 14000,
  totalAmount: 13500,
  change: 500,
  drinks: [
    {
      id: 1,
      name: '아메리카노',
      quantity: 2,
    },
    {
      id: 2,
      name: '카페라떼',
      quantity: 1,
    },
  ],
};

export default function Recipe() {
  // const [recipeData, setRecipeData] = useState({});

  // useEffect(() => {
  //   fetch(`https://example.com/api/recipe`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecipeData(data);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.recipe}>
        <h2 className={styles.orderNumber}>
          주문번호
          <span>
            {recipeData.dailyOrderId < 10
              ? `0${recipeData.dailyOrderId}`
              : recipeData.dailyOrderId}
          </span>
        </h2>

        <div className={styles.orderLists}>
          <ul>
            {recipeData.drinks.map((drink) => {
              return (
                <li key={drink.id}>
                  {drink.name} {drink.quantity}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.result}>
          <p>결제방식: {recipeData.payment === 'cash' ? '현금' : '카드'}</p>
          <p>투입금액: {recipeData.receivedAmount}</p>
          <p>총 결제금액: {recipeData.totalAmount}</p>
          <p>잔돈: {recipeData.change}</p>
        </div>
      </div>

      <p className={styles.timeText}>이 화면은 10초뒤에 자동으로 사라집니다</p>
      <div className={styles.time}>6초</div>
    </div>
  );
}
