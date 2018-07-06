import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ajax from '../../../util/ajax.js';
// import  data  from './getData.js';

import QandA from './QandA.scss';
class Qanda extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[]
    }
    
    // this.handleChange = this.handleChange.bind(this);
    // this.getData=this.getData.bind(this)
  }

  getData(){
        ajax('http://localhost:9000/memberData').then(response => {
        console.log(response);
        }).then(response => {
            this.state = {pageData:response};
            console.log(response);
        }).catch(e => {
            console.log(e);
            alert(`Error: ${e}`);
        });
    }

  componentWillMount() {

  }
  componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            console.log(response);
            return Promise.resolve(response);
        }).then(response => {
            let responses = response.index.map((item,index)=>{
                    return <li key={index}>{item.title}</li>
                  })
            this.setState({datas:responses});
            console.log(response);
        })
        
  }

  componentWillReceiveProps(nextProps) {
    
  }
  // shouldComponentUpdate(){
  //   return true
  // }
  handleChange(event) {
    console.log(event);
  }

  render() {
    
    // https://www.cnblogs.com/wdxue/p/8079193.html
    // 发现一现象：input中的值aaa，不会根据自己输入的值变化，页面中会一直显示2，因为是最终render的
    let inputVal = '2';
    return (
      <div className="login-container">
        <div className="content-section">
            <div className="inner-section">
                
            <span>怎么从后台fetch到数据？</span>
    
            <div>
                <button onClick={this.getData.bind(this)}>我是</button>
                {/*<ul>
                  { datas.map((item,index)=>{
                      return <li key={index}>{item.names}</li>
                 })} 
              </ul>*/}
           </div>
           <span>{this.state.datas}</span>
 

            {/*<input value={inputVal} onChange={this.handleChange}/>*/}

            </div>
        </div>
    </div>
    );
  }

}

export default Qanda;

