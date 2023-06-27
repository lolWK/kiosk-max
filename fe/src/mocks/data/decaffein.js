const decaffein = [
  {
    id: 11,
    type: 'decaffein',
    name: '아메리카노',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 4500,
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
            detail: 'ICE',
          },
        ],
      },
    ],
  },
];

export default decaffein;
