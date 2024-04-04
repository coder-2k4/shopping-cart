import React from 'react'
import "./style.css";
import { CartState } from './context/Context';
import { Button, Card } from 'react-bootstrap'
import logo from './img.jpg';

import { cartReducer } from './context/Reducer';
const Singleproduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState()
  return (
    <div className="products">
      <Card style={{ width: "18rem" }} className="my-3 p-3">
        {/* <Card.Img src={product.image} alt={product.name} /> */}
        <Card.Img src={logo} alt="Logo" />
        <Card.Body>
          <Card.Title title={product.name}></Card.Title>
          <Card.Subtitle>
            <span>₹{product.price.split(".")}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Delivery within 3 days!</div>
            )}
          </Card.Subtitle>
          {
            cart.some(p => p.id === product.id) ? (<Button className='cartbtn' onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product
              });
            }} variant='danger'>Remove from cart</Button>) : (
              <Button className='cartbtn'
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product
                  });
                }} disabled={!product.inStock}>{!product.inStock ? "OUT OF STOCK" : "ADD TO CART"}</Button>)
          }


        </Card.Body>
      </Card>
    </div>
  )
}

export default Singleproduct
