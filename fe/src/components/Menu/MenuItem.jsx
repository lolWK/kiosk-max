import React from 'react';
import styles from './MenuItem.module.css';

export default function MenuItem({ img, name, price }) {
  return (
    <div className={styles.item}>
      <img src={img} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}
