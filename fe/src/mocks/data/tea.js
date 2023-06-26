const teaDrinks = [
  {
    id: 1,
    type: 'tea',
    name: '녹차',
    img: 'https://pngimg.com/uploads/cup/small/cup_PNG1987.png',
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
    type: 'tea',
    name: '레몬차',
    img: 'https://pngimg.com/uploads/tea/small/tea_PNG98908.png',
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

export default teaDrinks;
