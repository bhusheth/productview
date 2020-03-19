import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button, Col, Row } from 'react-bootstrap';
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
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>
                <Col md={12}>
                  <Row>Designer: {card.designer}</Row>
                  <Row>Total Stock: {card.onlyXItemsLeftStockLevel}</Row>
                  <Row>
                    Price:{' '}
                    {`${card.price.currencyCode}${card.price.retailPrice}`}
                  </Row>
                </Col>
              </Card.Text>
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
