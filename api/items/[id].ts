import { VercelRequest, VercelResponse } from '@vercel/node';
import { Item } from '../../src/app/types';
import { Items } from '../../src/app/item-data';

const findItem = (id: string): Item | undefined =>
  Items.find((item) => item.id === id);

export default function fetchProductInfo(
  req: VercelRequest,
  res: VercelResponse
) {
  const id = String(req.query.id);
  const product = findItem(id);
  res.statusCode = 200;
  res.send({
    id: id,
    name: product?.name,
    price: product?.price,
    url: `https://dopelab.com`,
  });
}