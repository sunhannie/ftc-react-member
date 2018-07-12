import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Nav from '../component/nav/nav.js';
import QandA from '../component/QandA/QandA.js';
import Footer from '../component/footer/footer';
import Routes from './router.js';
import AllQA from '../component/QandA/allQA';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }

  render() {
    return (
    	<div>
        <Nav />
        {/*<QandA />*/}
        {/*<Routes />*/}

        <header class="section-header">
            <div class="section-header__text">
                <h2>常见问题</h2>
            </div>
        </header>
        <AllQA />

        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
