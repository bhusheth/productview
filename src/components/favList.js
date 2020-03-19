import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button, Col, Row } from 'react-bootstrap';
import { removeProductFromFav } from '../actions/productAction'
import logo from '../logo.svg';

const FavList = (props) => {
    return (
        <CardDeck className='carDeck'>
        {props.favList.length !== 0  ? props.favList.map((card, index) => {
            return(
                <Col md={4} key={card.id}>
                <Card>
                <Card.Img variant='top' src={logo} height='200px' width='160px'/>
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
                    <Button variant="secondary" onClick={() => props.removeProductFromFav(card, card.id)}>Remove from list</Button>
                </Card.Body>
                </Card>
                </Col>
            );
        }) : <h3>Favorite list is empty.</h3>}
        </CardDeck>
    )
}

const mapStateToProps = (state) => ({
    favList: state.products.favList,
})

const mapDispatchToProps = {
    removeProductFromFav
}

FavList.propTypes = {
    favList: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
