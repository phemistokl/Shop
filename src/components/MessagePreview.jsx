import React from 'react';
import classNames from 'classnames';

const MessagePreview = React.createClass({
  render() {
    const { title, senderName, onClick } = this.props;

    const classes = classNames('MessagePreview', { selected });

    return (
      <div className={classes} onClick={onClick}>
          <div className='title'>
            {title}
          </div>

          <div className='from'>
            {`from ${senderName}`}
          </div>
      </div>
    );
  }
});

export default MessagePreview;
