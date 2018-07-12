import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ajax from '../../../util/ajax.js';
import Fetch  from './fetchData.js';

import main from './main.scss';
class TabTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[],
        response:[]
    }
    
  }

  componentWillMount() {
    console.log(QandA);
  }
  componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
            let responses = response.index.map((item,index)=>{
              return <div key={index}><span class="index-title">{item.title}</span><span>{item.price}</span><span>{item.type}</span></div>
            })

            let response1 = (()=>{
              return <div><li>{response.index[0].title}</li></div>
            })

            this.setState({
              datas:responses,
              response:response1()
            });

            // this.setState((prevState, props) => ({
            //   datas:responses,
            //   response: response1()
            // }));
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
    // 不能在此处map，因为第一次state为默认值
    const {datas,response} = this.state;  
    console.log(this.state);
    return (
      <div className="login-container">
        <div className="content-section">
            <div className="inner-section">
                
            <span>怎么从后台fetch到数据？</span>
    
           <div>{this.state.datas}</div>
           <div>{this.state.response}</div>
            </div>
        </div>
    </div>
    );
  }

}

export default TabTitle;

