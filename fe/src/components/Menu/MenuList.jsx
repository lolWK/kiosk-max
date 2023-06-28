import { useState, useEffect, useRef } from 'react';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';

export function useTabAnimation(currentTab) {
  const previousTab = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (currentTab !== previousTab.current) {
      setAnimate(true);
      previousTab.current = currentTab;

      const timer = setTimeout(() => setAnimate(false), 300);

      return () => clearTimeout(timer);
    }
  }, [currentTab]);

  return animate;
}

export default function MenuList({
  menuItems,
  setShowMode,
  handleItemSelect,
  selectedTab,
}) {
  const animate = useTabAnimation(selectedTab);
  return (
    <div
      className={`${styles.container} ${animate ? styles.fadeInFromTop : ''}`}
    >
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
