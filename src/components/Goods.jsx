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

  handleProductSearch(event) {
    const searchQuery = event.target.value.toLowerCase();
    const displayedContacts = products.filter(function(el) {
      const searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      products: displayedContacts
    });
  },

  render() {
    const { products } = this.state;

    const { productId: selectedProductId } = this.props.params;

    const onListStatus = this.props.onListStatus;

    return (
      <div className='Goods'>
        <div className='products'>
          <ProductSearch onSearch={this.handleProductSearch} />
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
