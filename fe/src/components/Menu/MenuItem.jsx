import React from 'react';
import styles from './MenuItem.module.css';

export default function MenuItem({ menu, handleOpenModal, handleItemSelect }) {
  const handleClickWrapper = (key) => {
    handleOpenModal();
    handleItemSelect(key);
  };

  return (
    <div className={styles.item} onClick={() => handleClickWrapper(menu.id)}>
      <img src={menu.img} alt={menu.name} />
      <p className={styles.name}>{menu.name}</p>
      <p className={styles.price}>{menu.price}</p>
    </div>
  );
}
