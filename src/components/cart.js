import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button, Col } from 'react-bootstrap';
import CardTitleAndText from './cardTitleAndText';
import { removeProductFromCart } from '../actions/productAction';

const CartComponent = props => (
  <CardDeck className="carDeck">
    {props.cartBucket.length !== 0 ? (
      props.cartBucket.map(card => (
        <Col md={4} key={card.id}>
          <Card>
            <Card.Img
              variant="top"
              alt={`${card.name}`}
              src={`${card.media.main.dynamic.url}`}
              height="200px"
              width="160px"
            />
            <Card.Body>
              <CardTitleAndText card={card} />
              <Button
                variant="primary"
                onClick={() => props.removeProductFromCart(card, card.id)}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <h3>Cart is empty.</h3>
    )}
  </CardDeck>
);

const mapStateToProps = state => ({
  cartBucket: state.products.cart
});

const mapDispatchToProps = {
  removeProductFromCart
};

CartComponent.propTypes = {
  cartBucket: PropTypes.array.isRequired,
  removeProductFromCart: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
