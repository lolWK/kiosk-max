const juiceDrinks = [
  {
    id: 6,
    type: 'juice',
    name: '오렌지쥬스',
    img: 'https://pngimg.com/uploads/juice/small/juice_PNG7161.png',
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
        id: 2,
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
    id: 7,
    type: 'juice',
    name: '망고쥬스',
    img: 'https://pngimg.com/uploads/juice/small/juice_PNG7181.png',
    price: 5000,
    totalQuantity: 20,
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
    id: 8,
    type: 'juice',
    name: '딸기쥬스',
    img: 'https://pngimg.com/uploads/juice/small/juice_PNG7173.png',
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
            id: 5,
            value: 'Ice',
          },
        ],
      },
    ],
  },
];

export default juiceDrinks;
