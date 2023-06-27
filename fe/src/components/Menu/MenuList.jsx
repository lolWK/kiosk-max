import React from 'react';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';

export default function MenuList({ menuItems, handleModal, handleItemSelect }) {
  return (
    <div className={styles.container}>
      {menuItems.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          handleModal={handleModal}
          handleItemSelect={handleItemSelect}
        />
      ))}
    </div>
  );
}
