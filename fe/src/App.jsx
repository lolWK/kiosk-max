import { useState, useEffect } from 'react';
import styles from './App.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';
import MenuList from './components/Menu/MenuList';
import MenuModal from './components/Modal/Menu/MenuModal';
import Dim from './components/Modal/Dim/Dim';
// 모달별로 showMenuModal, showPaymentsModal, showLoading, showCashModal 등등 별코딩 useEffect 참고
// useEffect의 cleanUp 잘 활용할것

function App() {
  const [categoryLists, setCategoryLists] = useState([]);
  const [selectedTab, setSelectedTab] = useState('coffee'); // 현재 선택된 탭의 인덱스
  const [drinksLists, setDrinksLists] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [showMenuModal, setShowMenuModal] = useState(false);

  const handleOpenMenuModal = () => {
    setShowMenuModal(true);
  };

  const handleCloseMenuModal = () => {
    setShowMenuModal(false);
  };

  useEffect(() => {
    fetch(`https://example.com/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryLists(data);
      });
  }, []);

  const handleTabSelect = (id) => {
    setSelectedTab(id);
  };

  useEffect(() => {
    console.log(selectedTab);
    fetch(`https://example.com/api/drinks?category=${selectedTab}`)
      .then((response) => response.json())
      .then((data) => {
        setDrinksLists(data);
        console.log(drinksLists); // fetch가 완료된 후에 로그를 출력합니다.
      });
  }, [selectedTab]);

  const handleItemSelect = (key) => {
    const selectedItemObj = drinksLists.find((item) => item.id === key);
    setSelectedItem(selectedItemObj);
  };

  return (
    <div className={styles.main}>
      <CategoryTab
        categories={categoryLists}
        onTabSelect={handleTabSelect}
        selectedTab={selectedTab}
      />
      <MenuList
        menuItems={drinksLists}
        handleOpenMenuModal={handleOpenMenuModal}
        handleItemSelect={handleItemSelect}
      />
      {showMenuModal && (
        <>
          <Dim />
          <MenuModal
            selectedItem={selectedItem}
            handleCloseMenuModal={handleCloseMenuModal}
          />
        </>
      )}
    </div>
  );
}

export default App;
