import React from 'react';
import classNames from 'classnames';

const ProductPreview = React.createClass({
  render() {
    const { name, model, selected, onClick } = this.props;

    const classes = classNames('ProductPreview', { selected });

    return (
      <div className={classes} onClick={onClick}>
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
