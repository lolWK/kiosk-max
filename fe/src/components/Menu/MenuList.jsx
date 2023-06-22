import React from 'react';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';

export default function MenuList({ menuItems }) {
  return (
    <div className={styles.container}>
      {menuItems.map((menu) => (
        <MenuItem
          key={menu.id}
          img={menu.img}
          name={menu.name}
          price={menu.price}
        />
      ))}
    </div>
  );
}
