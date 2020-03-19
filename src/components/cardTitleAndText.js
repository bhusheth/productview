import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

const CardTitleAndText = props => {
  const { card } = props;
  const { name, designer, onlyXItemsLeftStockLevel, price } = card;
  const { currencyCode, retailPrice } = price;
  return (
    <>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <Col md={12}>
          <Row>Designer: {designer}</Row>
          <Row>Total Stock: {onlyXItemsLeftStockLevel}</Row>
          <Row>Price: {`${currencyCode}${retailPrice}`}</Row>
        </Col>
      </Card.Text>
    </>
  );
};

CardTitleAndText.propTypes = {
  card: PropTypes.object.isRequired
};

export default CardTitleAndText;
