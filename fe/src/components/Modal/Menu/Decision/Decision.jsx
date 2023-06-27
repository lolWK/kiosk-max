import styles from './Decision.module.css';
import Cancel from '../../Cancel/Cancel';

export default function Decision({ handleModal, cartItem, handleAddCartItem }) {
  const handleClickWrapper = () => {
    handleAddCartItem(cartItem);
    handleModal();
  };

  return (
    <div className={styles.decision}>
      <Cancel className={styles.cancel} handleModal={handleModal} />
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
