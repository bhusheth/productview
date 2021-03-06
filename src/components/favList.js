import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button, Col } from 'react-bootstrap';
import { removeProductFromFav } from '../actions/productAction';
import CardTitleAndText from './cardTitleAndText';

const FavList = props => (
  <CardDeck className="carDeck">
    {props.favList.length !== 0 ? (
      props.favList.map(card => (
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
                variant="secondary"
                onClick={() => props.removeProductFromFav(card, card.id)}
              >
                Remove from list
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <h3>Favorite list is empty.</h3>
    )}
  </CardDeck>
);

const mapStateToProps = state => ({
  favList: state.products.favList
});

const mapDispatchToProps = {
  removeProductFromFav
};

FavList.propTypes = {
  favList: PropTypes.array.isRequired,
  removeProductFromFav: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
