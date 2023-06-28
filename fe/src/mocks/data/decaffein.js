const decaffein = [
  {
    id: 11,
    type: 'decaffein',
    name: '아메리카노',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 4500,
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
            value: 'ICE',
          },
        ],
      },
    ],
  },
];

export default decaffein;
