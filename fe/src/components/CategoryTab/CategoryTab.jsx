import React, { useState, useRef } from 'react';
import styles from './CategoryTab.module.css';

export default function CategoryTab({ categories, onTabSelect, selectedTab }) {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // 슬라이더 값 상태 추가
  const sliderRef = useRef();

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleLeave = () => {
    setIsDown(false);
  };

  const handleUp = () => {
    setIsDown(false);
  };

  const handleMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    setSliderValue(
      Math.round(
        (sliderRef.current.scrollLeft / sliderRef.current.scrollWidth) * 100
      )
    ); // 슬라이더 값 업데이트
  };

  const handleTabClick = (tabIndex) => {
    onTabSelect(tabIndex); // 선택된 탭의 인덱스를 App 컴포넌트에 전달
  };

  return (
    <div
      className={styles.container}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleLeave}
      onMouseUp={handleUp}
      onMouseMove={handleMove}
      role="slider"
      tabIndex="0"
      aria-valuenow={sliderValue} // 현재 슬라이더 값
      aria-valuemin="0" // 최소 슬라이더 값
      aria-valuemax="100" // 최대 슬라이더 값
    >
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              type="button"
              className={selectedTab === category.id ? styles.selectedTab : ''}
              onClick={() => handleTabClick(category.id)} // Pass the category ID to the handleTabClick function
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
