import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button, Col, Row } from 'react-bootstrap';
import { removeProductFromCart } from '../actions/productAction'
import logo from '../logo.svg';

const CartComponent = (props) => {
    return (
        <CardDeck className='carDeck'>
        {props.cartBucket.length !== 0  ? props.cartBucket.map((card, index) => {
            return(
                <Col md={4} key={card.id}>
                <Card>
                <Card.Img variant='top' src={logo} height='100px' width='160px'/>
                <Card.Body>
                    <Card.Title>
                        {card.name}
                    </Card.Title>
                    <Card.Text>
                        <Col md={12}>
                            <Row>
                            Designer: {card.designer}
                            </Row>
                            <Row>
                            Total Stock: {card.onlyXItemsLeftStockLevel}
                            </Row>
                        </Col>
                    </Card.Text>
                    <Button variant="primary" onClick={() => props.removeProductFromCart(card, card.id)}>Remove</Button>
                </Card.Body>
                </Card>
                </Col>
            );
        }) : <h3>Cart is empty.</h3>}
        </CardDeck>
    )
}

const mapStateToProps = (state) => ({
    cartBucket: state.products.cart,
})

const mapDispatchToProps = {
    removeProductFromCart
}

CartComponent.propTypes = {
    cartBucket: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
