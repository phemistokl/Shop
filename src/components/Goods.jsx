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

  handleProdStatus(newProd) {
        const newProds = this.state.products.slice();
        newProds.forEach(el => {
          if(el.id === newProd.id) {
            el.status = !newProd.status
          }
        });
        this.setState({ products: newProds});
  },

  render() {
    const { products } = this.state;

    const { productId: selectedProductId } = this.props.params;

    return (
      <div className='Goods'>
        <div className='products'>
          <ProductSearch onSearch={this.handleProductSearch} />
          {
            products.map(product =>
              <ProductPreview
                key={product.id}
                status={product.status}
                selected={product.id === selectedProductId}
                onClick={this.handlePreviewClick.bind(null, product.id)}
                onStatus={this.handleProdStatus}
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
