import React from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  setModal,
  setProduct,
  addToCart,
  addProductToFav,
  removeProductFromFav
} from '../actions/productAction';
import '../App.css';
import CardTitleAndText from './cardTitleAndText';

const addProductToCart = (props, card) => {
  props.setModal();
  props.setProduct(card);
  props.addToCart(card);
};

class CardComponent extends React.PureComponent {
  render() {
    return (
      <CardDeck className="carDeck">
        {this.props.products !== undefined
          ? this.props.products.map(card => (
              <Col md={3} key={card.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    alt={`${card.name}`}
                    src={`${card.media.main.dynamic.url}`}
                    height="200px"
                    width="160px"
                  />
                  <Card.Body>
                    {/* <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                      <Col md={12}>
                        <Row>Designer: {card.designer}</Row>
                        <Row>Total Stock: {card.onlyXItemsLeftStockLevel}</Row>
                        <Row>
                          Price:{' '}
                          {`${card.price.currencyCode}${card.price.retailPrice}`}
                        </Row>
                      </Col>
                    </Card.Text> */}
                    <CardTitleAndText card={card} />
                    <Button
                      variant="primary"
                      onClick={() => addProductToCart(this.props, card)}
                    >
                      Add to cart
                    </Button>
                    {card.isFavorite ? (
                      <Button
                        className="secondary-button"
                        variant="secondary"
                        onClick={() =>
                          this.props.removeProductFromFav(card, card.id)
                        }
                      >
                        Remove Favorite
                      </Button>
                    ) : (
                      <Button
                        className="secondary-button"
                        variant="secondary"
                        onClick={() =>
                          this.props.addProductToFav(card, card.id)
                        }
                      >
                        Add Favorite
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          : ''}
      </CardDeck>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.allProucts
});

const mapDispatchToProps = {
  setModal,
  setProduct,
  addToCart,
  addProductToFav,
  removeProductFromFav
};

CardComponent.propTypes = {
  products: PropTypes.array.isRequired,
  addProductToFav: PropTypes.func.isRequired,
  removeProductFromFav: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
