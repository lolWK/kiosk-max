import { useState } from 'react';
import styles from './MenuModal.module.css';
import Info from './Info/Info';
import Decision from './Decision/Decision';
import Dim from '../Dim/Dim';

const initCartItem = (item) => {
  return {
    listId: Date.now(),
    drinkId: item.id,
    name: item.name,
    img: item.img,
    price: item.price,
    quantity: 1,
    size: item.options.find((option) => option.type === 'size').values[0].id,
    temperature: item.options.find((option) => option.type === 'temperature')
      .values[0].id,
  };
};

export default function MenuModal({
  selectedItem,
  setShowMode,
  handleAddCartItem,
}) {
  const [cartItem, setCartItem] = useState(initCartItem(selectedItem));
  const [itemStatus, setItemStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [dimStatus, setDimStatus] = useState(false);

  return (
    <div>
      <Dim dimStatus={dimStatus} />
      <div
        className={
          modalStatus ? `${styles.wrapper} ${styles.done}` : `${styles.wrapper}`
        }
      >
        <div className={styles.container}>
          <Info
            selectedItem={selectedItem}
            cartItem={cartItem}
            setCartItem={setCartItem}
            itemStatus={itemStatus}
            modalStatus={modalStatus}
          />
          <Decision
            setShowMode={setShowMode}
            cartItem={cartItem}
            setCartItem={setCartItem}
            handleAddCartItem={handleAddCartItem}
            setItemStatus={setItemStatus}
            setModalStatus={setModalStatus}
            setDimStatus={setDimStatus}
          />
        </div>
      </div>
    </div>
  );
}
