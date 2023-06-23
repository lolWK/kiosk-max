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
        type: '사이즈',
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
        type: '온도',
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

export default coffeeDrinks;
