import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Nav from '../component/nav/nav.js';
import QandA from '../component/QandA/QandA.js';
import Footer from '../component/footer/footer';
import Routes from './router.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }

  render() {
    return (
    	<div>
        <Nav />
        <QandA />
        <Routes />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
