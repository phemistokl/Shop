import React from 'react';

import ProductPreview from './ProductPreview.jsx';

import products from '../products.json';

const Goods = React.createClass({
  getInitialState() {
    return {
      products
    };
  },

  handlePreviewClick(productId) {
    alert(productId);
  },

  render() {
    const { products } = this.state;

    return (
      <div className='Goods'>
        <div className='products'>
          {
            products.map(product =>
              <ProductPreview
                key={product.id}
                onClick={this.handlePreviewClick.bind(null, product.id)}
                name={product.name}
                model={product.model}
              />
            )
          }
        </div>
      </div>
    );
  }
});

export default Goods;
