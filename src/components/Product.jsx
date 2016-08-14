import React from 'react';

import products from '../products.json'

const Product = React.createClass({
  render() {
    console.log(this.props.params);
    return (
      <div className='Product'>
        This is product
      </div>
    );
  }
});

export default Product;
