import React from 'react';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';

export default function MenuList({
  menuItems,
  handleOpenMenuModal,
  handleItemSelect,
}) {
  return (
    <div className={styles.container}>
      {menuItems.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          handleOpenModal={handleOpenMenuModal}
          handleItemSelect={handleItemSelect}
        />
      ))}
    </div>
  );
}
