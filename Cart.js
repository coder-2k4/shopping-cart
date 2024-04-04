import React, { useEffect, useState } from 'react'
import { CartState } from './context/Context';
import { ListGroup, Button, Row, Col, Image } from 'react-bootstrap';
import logo from './img.jpg';
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState()
  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + Number(curr.price), 0));
  }, [cart])
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((product) => (
            <ListGroup.Item>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={logo} alt="Logo" thumbnail />
                </Col>
                <Col>
                  <span>{product.name}</span>
                </Col>
                <Col>
                  <span>₹{product.price}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filters'>
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: "bold", fontSize: "25px" }}>Total: ₹{total}</span>
        <Button variant="primary" style={{ margin: "12px" }} disabled={cart.length === 0}>Proceed to buy</Button>
      </div>
    </div>
  )
}

export default Cart
