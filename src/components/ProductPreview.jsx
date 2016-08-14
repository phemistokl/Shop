import React from 'react';
import classNames from 'classnames';

const ProductPreview = React.createClass({
  render() {
    const { name, model, onClick } = this.props;


    return (
      <div className="ProductPreview" onClick={onClick}>
          <div className='name'>
            {name}
          </div>

          <div className='model'>
            {`model ${model}`}
          </div>
      </div>
    );
  }
});

export default ProductPreview;
