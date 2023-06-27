import { useState, useEffect } from 'react';
import styles from './Info.module.css';

export default function Info({ selectedItem, cartItem, setCartItem }) {
  return (
    <div className={styles.info}>
      <Menu selectedItem={selectedItem} />
      <Options
        selectedItem={selectedItem}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
    </div>
  );
}

function Menu({ selectedItem }) {
  const { img, name, price } = selectedItem;

  return (
    <div className={styles.menu}>
      <img src={img} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price}</span>
    </div>
  );
}

function Options({ selectedItem, cartItem, setCartItem }) {
  const { options } = selectedItem;
  const sizeList = options.find((option) => option.type === 'size');
  const temperatureList = options.find(
    (option) => option.type === 'temperature'
  );

  return (
    <div className={styles.options}>
      <Size
        sizeList={sizeList.value}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      <Temperature
        temperatureList={temperatureList.value}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      <Count cartItem={cartItem} setCartItem={setCartItem} />
    </div>
  );
}

function Size({ sizeList, cartItem, setCartItem }) {
  const [selectedSizeId, setselectedSizeId] = useState(sizeList[0].id);

  useEffect(() => {
    setCartItem({
      ...cartItem,
      size: sizeList[selectedSizeId - 1].id,
    });
  }, [selectedSizeId]);

  const handleSelectedSizeId = (id) => {
    setselectedSizeId(id);
  };

  return (
    <div className={styles.size}>
      {sizeList.map((option) => (
        <button
          className={selectedSizeId === option.id ? styles.selectedSize : ''}
          key={option.id}
          type="button"
          onClick={() => handleSelectedSizeId(option.id)}
        >
          {option.detail}
        </button>
      ))}
    </div>
  );
}

function Temperature({ temperatureList, cartItem, setCartItem }) {
  const [selectedTemperature, setselectedTemperature] = useState(
    temperatureList[0].id
  );

  useEffect(() => {
    setCartItem({
      ...cartItem,
      temperature: temperatureList[selectedTemperature - 1].id,
    });
  }, [selectedTemperature]);

  const handleSelectedTemperature = (id) => {
    setselectedTemperature(id);
  };

  return (
    <div className={styles.temperature}>
      {temperatureList.map((option) => (
        <button
          className={
            selectedTemperature === option.id ? styles.selectedTemperature : ''
          }
          key={option.id}
          type="button"
          onClick={() => handleSelectedTemperature(option.id)}
        >
          {option.detail}
        </button>
      ))}
    </div>
  );
}

function Count({ cartItem, setCartItem }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCartItem({
      ...cartItem,
      quantity: count,
    });
  }, [count]);

  const handleCountIncrement = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  };

  const handleCountDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <button type="button" onClick={handleCountDecrement}>
        -
      </button>
      <div>
        <p className={styles.count}>{count}</p>
      </div>
      <button type="button" onClick={handleCountIncrement}>
        +
      </button>
    </div>
  );
}
