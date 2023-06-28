const latteDrinks = [
  {
    id: 4,
    type: 'latte',
    name: '라떼',
    img: 'https://pngimg.com/uploads/cup/cup_PNG1996.png',
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
    id: 5,
    type: 'latte',
    name: '달고나라떼',
    img: 'https://pngimg.com/uploads/cup/cup_PNG1996.png',
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

export default latteDrinks;
