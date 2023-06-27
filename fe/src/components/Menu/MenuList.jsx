import React from 'react';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';

export default function MenuList({ menuItems, setShowMode, handleItemSelect }) {
  return (
    <div className={styles.container}>
      {menuItems.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          setShowMode={setShowMode}
          handleItemSelect={handleItemSelect}
        />
      ))}
    </div>
  );
}
