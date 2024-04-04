import React from 'react'
import { createContext, useContext } from 'react'
import { useReducer } from 'react';
import faker from "faker";
// import * as faker from '@faker-js/faker';
// import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';

const Cart = createContext();
const Context = ({ children }) => {

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.finance.amount(),
    image: faker.image.url,
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.datatype.array([1, 2, 3, 4, 5]),
  }))
  console.log(products)

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  }
  );
  return (
    <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>

  )
}
export const CartState = () => {
  return useContext(Cart);
};
export default Context
