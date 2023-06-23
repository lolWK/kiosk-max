import { useState, useEffect } from 'react';
import styles from './Info.module.css';

export default function Info({ selectedItem }) {
  const [selectedSize, setselectedSize] = useState(
    selectedItem.options[0].value[0].id
  );
  const [selectedTemperature, setselectedTemperature] = useState(
    selectedItem.options[1].value[0].id
  );

  useEffect(() => {
    console.log(selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    console.log(selectedTemperature);
  }, [selectedTemperature]);

  const handleSelectedSize = (id) => {
    setselectedSize(id);
  };

  const handleSelectedTemperature = (id) => {
    setselectedTemperature(id);
  };

  return (
    <div className={styles.info}>
      <Menu
        img={selectedItem.img}
        name={selectedItem.name}
        price={selectedItem.price}
      />
      <Options
        options={selectedItem.options}
        selectedSize={selectedSize}
        selectedTemperature={selectedTemperature}
        handleSelectedSize={handleSelectedSize}
        handleSelectedTemperature={handleSelectedTemperature}
      />
    </div>
  );
}

function Menu({ img, name, price }) {
  return (
    <div className={styles.menu}>
      <img src={img} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price}</span>
    </div>
  );
}

function Options({
  options,
  selectedSize,
  selectedTemperature,
  handleSelectedSize,
  handleSelectedTemperature,
}) {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.options}>
      <Size
        details={options[0].value}
        selectedSize={selectedSize}
        handleSelectedSize={handleSelectedSize}
      />
      <Temperature
        details={options[1].value}
        selectedTemperature={selectedTemperature}
        handleSelectedTemperature={handleSelectedTemperature}
      />
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Size({ details, selectedSize, handleSelectedSize }) {
  return (
    <div className={styles.size}>
      {details.map((option) => (
        <button
          className={selectedSize === option.id ? styles.selectedSize : ''}
          key={option.id}
          type="button"
          onClick={() => handleSelectedSize(option.id)}
        >
          {option.detail}
        </button>
      ))}
    </div>
  );
}

function Temperature({
  details,
  selectedTemperature,
  handleSelectedTemperature,
}) {
  return (
    <div className={styles.temperature}>
      {details.map((option) => (
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

function Count({ count, setCount }) {
  const handleIncrement = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <div>
        <p className={styles.count}>{count}</p>
      </div>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
