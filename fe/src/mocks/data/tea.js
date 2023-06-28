const teaDrinks = [
  {
    id: 9,
    type: 'tea',
    name: '녹차',
    img: 'https://pngimg.com/uploads/cup/small/cup_PNG1987.png',
    price: 4000,
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
    id: 10,
    type: 'tea',
    name: '레몬차',
    img: 'https://pngimg.com/uploads/tea/small/tea_PNG98908.png',
    price: 5000,
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
];

export default teaDrinks;
