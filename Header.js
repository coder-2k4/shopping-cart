import React from 'react'
import { Navbar, FormControl, Dropdown, Badge, Container, Button }
    from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from './context/Context';
import logo from './img.jpg';
import Cart from './Cart';
function Header() {
    const {
        state: { cart },
        dispatch,
        productDispatch,

    } = CartState()
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand href="#home">Brisk</Navbar.Brand>
                <FormControl type="text" style={{ width: "380px" }} placeholder="Search" className='search' align={'right'} />
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle className='dropdown' variant='success'>
                        <FaShoppingCart variant='success'></FaShoppingCart>
                        <Badge bg="success">{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown' >
                        {cart.length > 0 ? (
                            <>
                                {cart.map((product) => (
                                    <span className="cartitem" key={product.id}>
                                        <img
                                            src={logo} alt="Logo"
                                            className="cartItemImg"
                                        // alt={product.name}
                                        />
                                        <div className="cartItemDetail">
                                            <span>{product.name}</span>
                                            <span>₹ {product.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                            fontSize="20px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: product,
                                                })
                                            }
                                        />
                                    </span>
                                ))}
                                {/* THE CART BUTTON IN THE DROPDOWN LIST WILL REDIRECT THE USER TO CART PAGE */}
                                <Link to="/cart">
                                    <Button style={{ width: "95%", margin: "0 10px" }}>
                                        Go To Cart
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

            </Container>
        </Navbar>
    )
}
export default Header

