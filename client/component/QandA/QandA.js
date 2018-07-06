import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ajax from '../../../util/ajax.js';
// import { data } from './data';

import QandA from './QandA.scss';
class Qanda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    let newData = {};

    ajax('http://localhost:9000/memberData').then(data => {
        return Promise.resolve(data);
    }).then(data => {
        newData = Object.assign({}, data);
        this.setState(data);
    }).catch(e => {
        console.log(e);
        alert(`Error: ${e}`);
    });
  }
  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {
    
  }
//   handleChange = (e) => {
//     console.log('e');
//   }
// 为什么会出现2遍数据
  render() {
    const data = this.state;
    const guide = data.guide;
    console.log('index:'+(data.index));
    if(data.index){
      (data.index).map(function(data){
						console.log(data);	
		  })
    }
    
    console.log(typeof guide);
    
    
    let aaa = '2';
    return (
      <div className="login-container">
        <div className="content-section">
            <div className="inner-section">
                
            <span>传变量，再循环。怎么传变量</span>
    
            {/*state.map((post, i) =>
            <li key={i}>{post.guide}</li>
            )*/}
            {/*<div>{state.guide}</div>*/}
            {/*<input value={this.state.data} onChange={this.handleChange}/>*/}
            <div>{aaa}</div>
            </div>
        </div>
    </div>
    );
  }

}

export default Qanda;

