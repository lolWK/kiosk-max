import { useState, useEffect } from 'react';
import styles from './App.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';
import MenuList from './components/Menu/MenuList';
import MenuModal from './components/Modal/Menu/MenuModal';
import Dim from './components/Modal/Dim/Dim';
import Cart from './components/Cart/Cart';

export default function App() {
  const [categoryLists, setCategoryLists] = useState([]);
  const [selectedTab, setSelectedTab] = useState('coffee'); // 현재 선택된 탭의 인덱스
  const [drinksLists, setDrinksLists] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch(`https://example.com/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryLists(data);
      });
  }, []);

  useEffect(() => {
    console.log(selectedTab);
    fetch(`https://example.com/api/drinks?category=${selectedTab}`)
      .then((response) => response.json())
      .then((data) => {
        setDrinksLists(data);
        console.log(drinksLists); // fetch가 완료된 후에 로그를 출력합니다.
      });
  }, [selectedTab]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleTabSelect = (id) => {
    setSelectedTab(id);
  };

  const handleItemSelect = (key) => {
    const selectedItemObj = drinksLists.find((item) => item.id === key);
    setSelectedItem(selectedItemObj);
  };

  const handleAddCartItem = (cartItem) => {
    const isSameDrink = cartList.filter(
      (item) =>
        item.drinkId === cartItem.drinkId &&
        item.size === cartItem.size &&
        item.temperature === cartItem.temperature
    ).length;

    if (isSameDrink) {
      const newCartList = cartList.map((item) => {
        return item.drinkId === cartItem.drinkId &&
          item.size === cartItem.size &&
          item.temperature === cartItem.temperature
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item;
      });

      setCartList(newCartList);
      return;
    }

    const newCartList = [cartItem, ...cartList];

    setCartList(newCartList);
  };

  const handleRemoveCartItem = (target) => {
    const newCartList = cartList.filter(
      (item) => item.listId !== target.listId
    );
    setCartList(newCartList);
  };

  const handleRemoveAllCartList = () => {
    setCartList([]);
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
        handleModal={handleModal}
        handleItemSelect={handleItemSelect}
      />
      {showModal && (
        <>
          <Dim />
          <MenuModal
            selectedItem={selectedItem}
            handleModal={handleModal}
            handleAddCartItem={handleAddCartItem}
          />
        </>
      )}
      <Cart
        cartList={cartList}
        handleRemoveCartItem={handleRemoveCartItem}
        handleRemoveAllCartList={handleRemoveAllCartList}
      />
    </div>
  );
}
