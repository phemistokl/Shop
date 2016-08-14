import React from 'react';

import ProductPreview from './ProductPreview.jsx';

import products from '../products.json';

const Goods = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      products
    };
  },

  handlePreviewClick(productId) {
    this.context.router.push(`/goods/products/${productId}`);
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

        <div className="product-container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Goods;
