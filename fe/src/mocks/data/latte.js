const latteDrinks = [
  {
    id: 1,
    type: 'latte',
    name: '라떼',
    img: 'https://pngimg.com/uploads/cup/cup_PNG1996.png',
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
    type: 'latte',
    name: '달고나라떼',
    img: 'https://pngimg.com/uploads/cup/cup_PNG1996.png',
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
];

export default latteDrinks;
