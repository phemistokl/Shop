import React from 'react';
import classNames from 'classnames';

const ProductPreview = React.createClass({
  render() {
    const { name, model, status, selected, onClick } = this.props;

    const classes = classNames('ProductPreview', { selected });

    return (
      <div>
      <div className={classes} onClick={onClick}>
          <div className='name'>
            {name}
          </div>

          <div className='model'>
            {`model ${model}`}
            {`status ${status}`}
          </div>
      </div>
      <input type="submit" onClick={this.props.onStatus} value="Cart" />
      </div>
    );
  }
});

export default ProductPreview;
