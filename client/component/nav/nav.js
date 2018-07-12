import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import nav from './nav.scss';
// @CSSModules(nav, {allowMultiple: false})

class Nav extends React.Component {
  // static propTypes = {
  //   postUrl: PropTypes.string,
  //   findPasswordUrl: PropTypes.string,
  //   registerUrl: PropTypes.string
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="header-container">
        <div class="header-inner">
        <div class="header-title">会员订阅</div>
        <div class="header-side header-left" >
            <div class="header-brand">
            <figure class="loading" data-url="http://static.ftchinese.com/images/masthead36.png"></figure>
            </div>
        </div>

        </div>
    </div>
    );
  }

}

export default Nav;