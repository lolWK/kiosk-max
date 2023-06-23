// import { useState } from 'react';
import styles from './MenuModal.module.css';
import Info from './Info/Info';
import Decision from './Decision/Decision';

export default function MenuModal({ selectedItem, handleCloseMenuModal }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Info selectedItem={selectedItem} />
        <Decision handleCloseMenuModal={handleCloseMenuModal} />
      </div>
    </div>
  );
}
