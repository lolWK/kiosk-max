// TO 아티 메뉴(이미지 + 이름 + 가격)는 따로 컴포넌트화 시켜서 쓰면 좋을듯
// 상세정보는 어떻게 처리할건지?
// 상세정보에 따라 금액이 변할거고, 그럼 백엔드한테도 상세정보까지 보내줘야하나??
// 옵션들의 default값을 설정해야하나? 수량도 0으로 하는게 좋을까?
// 옵션을 선택해야만 담기 버튼이 활성화 되게 할까?

import { useState } from 'react';
import styles from './Menu.module.css';

export default function MenuModal({ handleCloseModal }) {
  const menu = {
    id: 1,
    name: '아메리카노',
    img: 'https://private-user-images.githubusercontent.com/101464713/247221166-5497bd59-6c56-49ee-ab91-c5b3223a880c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg3Mzc2Njk3LCJuYmYiOjE2ODczNzYzOTcsInBhdGgiOiIvMTAxNDY0NzEzLzI0NzIyMTE2Ni01NDk3YmQ1OS02YzU2LTQ5ZWUtYWI5MS1jNWIzMjIzYTg4MGMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDYyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA2MjFUMTkzOTU3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjNlODM5MGViYTA0YWQwNGRhOTQzOWM4ZGNlMzRhNDczNjVhYWVhYWRhYzU5ZDk5ZWIwMzIwODYzZmZiMWMyMiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.V78CGbczVQNgdwxaRddJAChaXVMdRhKO43OmASusUag',
    price: 4000,
    option: {
      size: ['M', 'L'],
      temperature: ['Hot', 'Ice'],
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Info
          img={menu.img}
          name={menu.name}
          price={menu.price}
          option={menu.option}
        />
        <Decision handler={handleCloseModal} />
      </div>
    </div>
  );
}

function Info({ img, name, price, option }) {
  return (
    <div className={styles.info}>
      <Menu img={img} name={name} price={price} />
      <Options option={option} />
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

function Options({ option }) {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.options}>
      <Size id={option.id} size={option.size} />
      <Temperature id={option.id} temperature={option.temperature} />
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Size({ id, size }) {
  return (
    <div className={styles.size}>
      {size.map((option) => (
        <button key={id} type="button">
          {option}
        </button>
      ))}
    </div>
  );
}

function Temperature({ id, temperature }) {
  return (
    <div className={styles.temperature}>
      {temperature.map((option) => (
        <button key={id} type="button">
          {option}
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

function Decision({ handler }) {
  return (
    <div className={styles.decision}>
      <Cancel handleCloseModal={handler} />
      <Add />
    </div>
  );
}

function Cancel({ handleCloseModal }) {
  return (
    <button className={styles.cancel} type="button" onClick={handleCloseModal}>
      취소
    </button>
  );
}

function Add() {
  return (
    <button className={styles.add} type="button">
      담기
    </button>
  );
}
