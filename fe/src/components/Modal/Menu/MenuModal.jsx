import { useState } from 'react';
import styles from './MenuModal.module.css';
import Info from './Info/Info';
import Decision from './Decision/Decision';

const initCartItem = (item) => {
  return {
    listId: Date.now(),
    drinkId: item.id,
    name: item.name,
    img: item.img,
    price: item.price,
    quantity: 1,
    size: item.options.find((option) => option.type === 'size').value[0].id,
    temperature: item.options.find((option) => option.type === 'temperature')
      .value[0].id,
  };
};

export default function MenuModal({
  selectedItem,
  setShowMode,
  handleAddCartItem,
}) {
  const [cartItem, setCartItem] = useState(initCartItem(selectedItem));

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Info
          selectedItem={selectedItem}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
        <Decision
          setShowMode={setShowMode}
          cartItem={cartItem}
          setCartItem={setCartItem}
          handleAddCartItem={handleAddCartItem}
        />
      </div>
    </div>
  );
}
