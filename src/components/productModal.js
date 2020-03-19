import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Modal, Button, Card, Col, Row} from 'react-bootstrap';
import { clearModal } from '../actions/productAction';
import history from '../store/history'
import logo from '../logo.svg';

const handleCheckout = (props) => {
    props.clearModal();
    history.push('/cart');
}

const ProductModal = (props) =>{
    return (
        <div>
            <Modal show={props.isModalOpen} onHide={() => props.clearModal()}>
                <Modal.Header closeButton>
                <Modal.Title>Added to cart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card>
                        <Card.Img variant='top' src={logo} height='100px' width='160px'/>
                        <Card.Body>
                            <Card.Title>
                                {props.selectedProduct && props.selectedProduct.name}
                            </Card.Title>
                            <Card.Text>
                                <Col md={12}>
                                <Row>
                                Designer: {props.selectedProduct && props.selectedProduct.designer}
                                </Row>
                                <Row>
                                Total Stock: {props.selectedProduct && props.selectedProduct.onlyXItemsLeftStockLevel}
                                </Row>
                            </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.clearModal()}>Continue Shopping</Button>
                    <Button variant="primary" onClick={() => handleCheckout(props)}>Go to Checkout</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isModalOpen: state.products.isModalOpen,
    isModalClose: state.products.isModalClose,
    selectedProduct: state.products.selectedProduct
})

const mapDispatchToProps = {
    clearModal
}

ProductModal.propTypes = {
    selectedProduct: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
