import React from 'react';

import ProductPreview from './ProductPreview.jsx';

import ProductSearch from './ProductSearch.jsx';

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

    const { productId: selectedProductId } = this.props.params;

    return (
      <div className='Goods'>
        <ProductSearch onSearch={this.handleProductSearch} />
        <div className='products'>
          {
            products.map(product =>
              <ProductPreview
                key={product.id}
                selected={product.id === selectedProductId}
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
