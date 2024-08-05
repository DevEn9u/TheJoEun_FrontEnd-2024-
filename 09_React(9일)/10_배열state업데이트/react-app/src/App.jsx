import { useState } from 'react';
import './App.css';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export default function ShoppingCare() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncrease(id) {
    const prevProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    });
    setProducts(prevProducts);
  }

  function handleDecrease(id) {
    const nextProducts = products.map((product) => {
      if (id === product.id && product.count > 0) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    setProducts(nextProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            type="button"
            className="btn"
            onClick={() => {
              handleIncrease(product.id);
            }}
          >
            +
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              handleDecrease(product.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
