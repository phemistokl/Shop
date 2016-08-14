import React from 'react';

import products from '../products.json';

const Product = React.createClass({
  getInitialState() {
    const { productId } = this.props.params;

    return {
      product: products.find(product => product.id === productId)
    };
  },

  componentWillReceiveProps(nextProps) {
    const { productId: prevId } = this.props.params;
    const { productId: nextId } = nextProps.params;

    if (prevId !== nextId) {
      this.setState({
        product: products.find(product => product.id === nextId)
      });
    }
  },

  render() {
    const { product } = this.state;

    return (
      <div className='Product'>
        <p>From: {product.name}</p>
        <p>Model: {product.model}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  }
});

export default Product;
