import { useState, useEffect } from 'react';
import styles from './App.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';
import MenuList from './components/Menu/MenuList';
import MenuModal from './components/Modal/Menu/MenuModal';
import Dim from './components/Modal/Dim/Dim';
import Cart from './components/Cart/Cart';

export default function App() {
  const [categoryLists, setCategoryLists] = useState([]);
  const [selectedTab, setSelectedTab] = useState('coffee');
  const [drinksLists, setDrinksLists] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [showMode, setShowMode] = useState('');
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch(`https://example.com/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryLists(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://example.com/api/drinks?category=${selectedTab}`)
      .then((response) => response.json())
      .then((data) => {
        setDrinksLists(data);
      });
  }, [selectedTab]);

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

  return (
    <div className={styles.main}>
      <CategoryTab
        categories={categoryLists}
        onTabSelect={handleTabSelect}
        selectedTab={selectedTab}
      />
      <MenuList
        menuItems={drinksLists}
        selectedTab={selectedTab}
        setShowMode={setShowMode}
        handleItemSelect={handleItemSelect}
      />
      <Cart
        cartList={cartList}
        setCartList={setCartList}
        handleRemoveCartItem={handleRemoveCartItem}
        showMode={showMode}
        setShowMode={setShowMode}
      />
      {showMode === 'menu' && (
        <>
          <Dim />
          <MenuModal
            selectedItem={selectedItem}
            setShowMode={setShowMode}
            handleAddCartItem={handleAddCartItem}
          />
        </>
      )}
      {showMode === 'card' && <Dim />}
      {showMode === 'cash' && <Dim />}
    </div>
  );
}
