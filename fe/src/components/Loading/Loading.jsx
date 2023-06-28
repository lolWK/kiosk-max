import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.Loading}>
      {/* <p>로딩중</p> */}
      <span className={styles.loader} />
      <span className={styles.loader2}>Loading</span>
    </div>
  );
}
