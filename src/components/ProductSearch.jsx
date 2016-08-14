import React from 'react';

const ProductSearch = React.createClass({
  render() {
    return (
      <div className="searchBox">
        <input type="text" className="search-field" placeholder="Search..." onChange={this.props.onSearch} />
      </div>
    );
  }
});

export default ProductSearch;
