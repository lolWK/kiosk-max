import { useState, useEffect } from 'react';
import styles from './App.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';
import MenuList from './components/Menu/MenuList';

const mock = {
  categories: [
    {
      id: 'coffee',
      name: '커피',
    },
    {
      id: 'latte',
      name: '라떼',
    },
    {
      id: 'tea',
      name: '티',
    },
    {
      id: 'juice',
      name: '주스',
    },
    {
      id: 'decaffein',
      name: '디카페인',
    },
  ],

  drink_list: [
    {
      id: 1,
      type: 'coffee',
      name: '아메리카노',
      img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
      price: 4000,
      options: [
        {
          id: 1,
          type: '사이즈',
          value: [
            {
              id: 1,
              detail: 'big',
            },
            {
              id: 2,
              detail: 'medium',
            },
            {
              id: 3,
              detail: 'small',
            },
          ],
        },
        {
          id: 2,
          type: '온도',
          value: [
            {
              id: 1,
              detail: 'hot',
            },
            {
              id: 2,
              detail: 'cold',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      type: 'latte',
      name: '라떼',
      img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
      price: 5000,
      options: [
        {
          id: 1,
          type: '사이즈',
          value: [
            {
              id: 1,
              detail: 'big',
            },
            {
              id: 2,
              detail: 'medium',
            },
            {
              id: 3,
              detail: 'small',
            },
          ],
        },
        {
          id: 2,
          type: '온도',
          value: [
            {
              id: 1,
              detail: 'hot',
            },
            {
              id: 2,
              detail: 'cold',
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  const [selectedTab, setSelectedTab] = useState('coffee'); // 현재 선택된 탭의 인덱스

  const handleTabSelect = (id) => {
    setSelectedTab(id);
    // console.log(selectedTab);
    // TODO: 선택된 탭의 메뉴 리스트 fetch 로직 구현
    // fetch 함수 등을 사용하여 선택된 탭의 메뉴 데이터를 가져온 후,
    // 해당 데이터를 MenuList 컴포넌트에 전달할 수 있습니다.
  };

  useEffect(() => {
    console.log(selectedTab);
    // This will log the updated value of selectedTab after each state update
  }, [selectedTab]);

  return (
    <div className={styles.main}>
      <CategoryTab categories={mock.categories} onTabSelect={handleTabSelect} />
      <MenuList menuItems={mock.drink_list} />
      {/* menuItems={mock.categories[selectedTab].drink_list} */}
    </div>
  );
}

export default App;
