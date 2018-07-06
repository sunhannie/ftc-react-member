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
    this.state = {pageData:{}};

    // this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    ajax('http://localhost:9000/memberData').then(data => {
        console.log(data);
        return Promise.resolve(data);
    }).then(data => {  
        this.setState({pageData:data});
        console.log(this.state);
    }).catch(e => {
        console.log(e);
        alert(`Error: ${e}`);
    });
  }
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    
  }
  // shouldComponentUpdate(){
  //   return true
  // }
  handleChange(event) {
  // handleChange = (e) => {  //这种写法为什么写错了，难道是必须写在input标签中吗？
    // this.setState({data: event.target.value});
  }
// 为什么会出现2遍数据?因为生命周期中渲染第一次为空，
  render() {
    // 此处一直会先渲染一遍
    const data = this.state.pageData;
    const guide = data.guide;
    let span = 'span';
    let arr = [];
    if(data.index){
       span = (data.index).map(function(value,key){
					console.log(value);	
          arr.push(value);
          return  <span key = {value.title}>会员类型</span>
		  })
    }
    console.log('arr:'+guide);
    // console.log(typeof guide);
    
    // 发现一现象：input中的值aaa，不会根据自己输入的值变化，页面中会一直显示2，因为是最终render的
    let inputVal = '2';
    return (
      <div className="login-container">
        <div className="content-section">
            <div className="inner-section">
                
            <span>怎么从后台fetch到数据？</span>
            <div>{span}</div>
            {/*arr.map((post) =>
            <li key={}>{post.guide}</li>
            )*/}
            {/*<div>{state.guide}</div>*/}
            <input value={inputVal} onChange={this.handleChange}/>
            <input value={inputVal} onChange={(e)=> {console.log('1');}}/>
            {/*<input value="<?=$data?>" onChange={this.handleChange}/>*/}
            <input value={inputVal} onChange={this.handleChange.bind(this)}/>
            
            <div></div>
            </div>
        </div>
    </div>
    );
  }

}

export default Qanda;

