import styles from './Decision.module.css';

export default function Decision({ handleCloseMenuModal }) {
  return (
    <div className={styles.decision}>
      <button
        className={styles.cancel}
        type="button"
        onClick={handleCloseMenuModal}
      >
        취소
      </button>

      <button className={styles.add} type="button">
        담기
      </button>
    </div>
  );
}
