import React from 'react';
import { Link } from 'react-router';

import './App.css';

const App = React.createClass({
      render: function() {
        return (
          <div className="app">
            <div className="menu-bar">
              <div className="menu-item">
                <Link className="menu-item-link" to='/home'>Home</Link>
              </div>

              <div className="menu-item">
                <Link className="menu-item-link" to='/goods'>Goods</Link>
              </div>

              <div className="menu-item">
                <Link className="menu-item-link" to='/cart'>Cart</Link>
              </div>
            </div>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        );
      }
});

export default App;
