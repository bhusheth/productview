import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardComponent from './card';
import { getAllProduct } from '../actions/productAction';
import '../App.css';
import ProductModal from './productModal';

class App extends React.Component {
  componentDidMount() {
    this.props.getAllProduct();
  }

  render() {
    return (
      <>
        <CardComponent />
        <ProductModal />
      </>
    );
  }
}

const mapDispatchToProps = {
  getAllProduct
};

App.propTypes = {
  getAllProduct: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(App);
