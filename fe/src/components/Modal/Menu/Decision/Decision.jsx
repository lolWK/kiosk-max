import styles from './Decision.module.css';
import Cancel from '../../Cancel/Cancel';

export default function Decision({ setShowMode, cartItem, handleAddCartItem }) {
  const handleClickWrapper = () => {
    handleAddCartItem(cartItem);
    setShowMode('');
  };

  return (
    <div className={styles.decision}>
      <Cancel className={styles.cancel} setShowMode={() => setShowMode('')} />
      <button
        className={styles.add}
        type="button"
        onClick={() => handleClickWrapper()}
      >
        담기
      </button>
    </div>
  );
}
