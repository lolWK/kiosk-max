import styles from './Recipe.module.css';

export default function Recipe() {
  return (
    <div className={styles.container}>
      <div className={styles.recipe}>
        <h2 className={styles.orderNumber}>
          주문번호 <span>03</span>
        </h2>

        <div className={styles.orderLists}>
          <ul>
            <li>아메리카노2</li>
            <li>카페라떼1</li>
            <li>카페라떼1</li>
            <li>카페라떼1</li>
            <li>카페라떼1</li>
            <li>카페라떼1</li>
            <li>카페라떼1</li>
            <li>카페라떼1</li>
          </ul>
        </div>

        <div className={styles.result}>
          <p>결제방식: 현금</p>
          <p>투입금액: 14000</p>
          <p>총 결제금액: 13500</p>
          <p>잔돈: 500</p>
        </div>
      </div>

      <p className={styles.timeText}>이 화면은 10초뒤에 자동으로 사라집니다</p>
      <div className={styles.time}>6초</div>
    </div>
  );
}
