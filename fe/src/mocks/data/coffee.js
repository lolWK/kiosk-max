const coffeeDrinks = [
  {
    id: 1,
    type: 'coffee',
    name: '아메리카노',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 4000,
    totalQuantity: 50,
    options: [
      {
        type: 'size',
        values: [
          {
            id: 1,
            value: 'S',
          },
          {
            id: 2,
            value: 'M',
          },
          {
            id: 3,
            value: 'L',
          },
        ],
      },
      {
        type: 'temperature',
        values: [
          {
            id: 4,
            value: 'Hot',
          },
          {
            id: 5,
            value: 'Ice',
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
    totalQuantity: 30,
    options: [
      {
        type: 'size',
        values: [
          {
            id: 1,
            value: 'S',
          },
          {
            id: 2,
            value: 'M',
          },
          {
            id: 3,
            value: 'L',
          },
        ],
      },
      {
        type: 'temperature',
        values: [
          {
            id: 5,
            value: 'Ice',
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
        type: 'size',
        values: [
          {
            id: 10,
            value: 'one',
          },
          {
            id: 11,
            value: 'two',
          },
        ],
      },
      {
        type: 'temperature',
        values: [
          {
            id: 4,
            value: 'Hot',
          },
        ],
      },
    ],
  },
];

export default coffeeDrinks;
