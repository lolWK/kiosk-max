import { useState } from 'react';
import styles from './Info.module.css';

export default function Info({ selectedItem }) {
  return (
    <div className={styles.info}>
      <Menu selectedItem={selectedItem} />
      <Options options={selectedItem.options} />
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

function Options({ options }) {
  const size = options.find((option) => option.type === 'size');
  const temperature = options.find((option) => option.type === 'temperature');

  return (
    <div className={styles.options}>
      <Size sizeList={size.value} />
      <Temperature TemperatureList={temperature.value} />
      <Count />
    </div>
  );
}

function Size({ sizeList }) {
  const [selectedSize, setselectedSize] = useState(sizeList[0].id);

  const handleSelectedSize = (id) => {
    setselectedSize(id);
  };

  return (
    <div className={styles.size}>
      {sizeList.map((option) => (
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

function Temperature({ TemperatureList }) {
  const [selectedTemperature, setselectedTemperature] = useState(
    TemperatureList[0].id
  );

  const handleSelectedTemperature = (id) => {
    setselectedTemperature(id);
  };

  return (
    <div className={styles.temperature}>
      {TemperatureList.map((option) => (
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

function Count() {
  const [count, setCount] = useState(1);

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
