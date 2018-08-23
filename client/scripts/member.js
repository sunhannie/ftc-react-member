import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Nav from '../component/nav/nav.js';
import QandA from '../component/QandA/QandA.js';
import Footer from '../component/footer/footer';
import Routes from './router.js';
import AllQA from '../component/QandA/allQA';
import Comment from '../component/comment/comment';
import TabTitle from '../component/QandA/tabTitle';
import Member from '../component/QandA/member';
import Carousel from '../component/carousel/carousel.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }

  render() {
    console.log(this.props.children);
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React1!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64',
        },
    };
    return (
    	<div>
        <Nav name="会员订阅"/>
        {/*<QandA />*/}
        {/*<Comment date={comment.date} text={comment.text} author={comment.author}/>*/}
        <TabTitle />
        <Member />
        <header class="section-header">
            <div class="section-header__text">
                <h2>常见问题</h2>
            </div>
        </header>
        <AllQA />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
