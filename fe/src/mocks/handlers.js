import { rest } from 'msw';

import catagoryLists from './data/catagories';
import coffeeDrinks from './data/coffee';
import teaDrinks from './data/tea';
import juiceDrinks from './data/juice';
import latteDrinks from './data/latte';
import decaffein from './data/decaffein';
import recipe from './data/recipe';

const handlers = [
  rest.get('http://localhost:8080/drinks', (req, res, ctx) => {
    const type = req.url.searchParams.get('type');

    let drinks;
    switch (type) {
      case 'coffee':
        drinks = coffeeDrinks;
        break;
      case 'latte':
        drinks = latteDrinks;
        break;
      case 'tea':
        drinks = teaDrinks;
        break;
      case 'juice':
        drinks = juiceDrinks;
        break;
      case 'decaffein':
        drinks = decaffein;
        break;
      default:
        return res(ctx.status(400), ctx.json({ message: 'Invalid category' }));
    }

    return res(ctx.status(200), ctx.json(drinks));
  }),

  rest.get('http://localhost:8080/drinks/categories', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(catagoryLists));
  }),

  rest.get('http://localhost:8080/recipe', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(recipe));
  }),
];

export default handlers;
