const coffeeDrinks = [
  {
    id: 1,
    type: 'coffee',
    name: '아메리카노',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 4000,
    options: [
      {
        id: 1,
        type: 'size',
        value: [
          {
            id: 1,
            detail: 'S',
          },
          {
            id: 2,
            detail: 'M',
          },
          {
            id: 3,
            detail: 'L',
          },
        ],
      },
      {
        id: 2,
        type: 'temperature',
        value: [
          {
            id: 1,
            detail: 'Hot',
          },
          {
            id: 2,
            detail: 'Ice',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'coffee',
    name: '콜드브루',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 5000,
    options: [
      {
        id: 1,
        type: 'size',
        value: [
          {
            id: 1,
            detail: 'S',
          },
          {
            id: 2,
            detail: 'M',
          },
          {
            id: 3,
            detail: 'L',
          },
        ],
      },
      {
        id: 2,
        type: 'temperature',
        value: [
          {
            id: 1,
            detail: 'Ice',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'coffee',
    name: '에스프레소',
    img: 'https://pngimg.com/uploads/coffee_beans/small/coffee_beans_PNG97301.png',
    price: 3000,
    options: [
      {
        id: 1,
        type: 'size',
        value: [
          {
            id: 1,
            detail: 'one',
          },
          {
            id: 2,
            detail: 'two',
          },
        ],
      },
      {
        id: 2,
        type: 'temperature',
        value: [
          {
            id: 1,
            detail: 'Hot',
          },
        ],
      },
    ],
  },
];

export default coffeeDrinks;
