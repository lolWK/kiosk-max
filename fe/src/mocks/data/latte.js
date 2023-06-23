const latteDrinks = [
  {
    id: 1,
    type: 'latte',
    name: '라떼',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 4000,
    options: [
      {
        id: 1,
        type: '사이즈',
        value: [
          {
            id: 1,
            detail: 'big',
          },
          {
            id: 2,
            detail: 'medium',
          },
          {
            id: 3,
            detail: 'small',
          },
        ],
      },
      {
        id: 2,
        type: '온도',
        value: [
          {
            id: 1,
            detail: 'hot',
          },
          {
            id: 2,
            detail: 'cold',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'latte',
    name: '달고나라떼',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 5000,
    options: [
      {
        id: 1,
        type: '사이즈',
        value: [
          {
            id: 1,
            detail: 'big',
          },
          {
            id: 2,
            detail: 'medium',
          },
          {
            id: 3,
            detail: 'small',
          },
        ],
      },
      {
        id: 2,
        type: '온도',
        value: [
          {
            id: 1,
            detail: 'hot',
          },
          {
            id: 2,
            detail: 'cold',
          },
        ],
      },
    ],
  },
];

export default latteDrinks;
