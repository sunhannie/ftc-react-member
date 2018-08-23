import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ajax from '../../../util/ajax.js';
import Fetch  from './fetchData.js';

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[],
        guide:[]
    }
    
  }

  componentWillMount() {
    
  }
  componentDidMount() {

       
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
    const {datas,guide} = this.state;  
    // console.log(this.state);
    return (

   
         <div id="site-content" class="o-member-container">
            <div class="o-member__heading">
              <p>请选择您的订阅方式</p>
            </div>

            <div class="o-member-row" >
              <div class="o-member o-member__standard" >
                <div class="o-member_content" >
                  <h2 class="o-member__title">标准会员</h2>
                  <div class="o-member__border"></div>
                  <ul class="o-member__benefits">
                    
                      <li> 精选深度分析</li>
                    
                      <li> 中英双语内容</li>
                    
                      <li> 金融英语速读训练</li>
                    
                      <li> 英语原声电台</li>
                    
                      <li> 无限浏览7日前所有历史文章（近8万篇）</li>
                    
                  </ul>
                   
                  <div class="o-member__subscribe">
                    <button  class="openSub" id="standard-btn">立即订阅</button>
                    <p id="standard_price"> ¥198.00/年</p>
                  </div>

                </div>    
              </div>  {/*o-member o-member__standard*/}

              <div class="o-member o-member__premium" >
                <div class="o-member_content" >
                  <h2 class="o-member__title">高端会员</h2>
                  <div class="o-member__border"></div>
                  <ul class="o-member__benefits">
                    
                      <li> 享受“标准会员”所有权益</li>
                    
                      <li> 编辑精选，总编/各版块主编每周五为您推荐本周必读资讯，分享他们的思考与观点</li>
                    
                      <li> FT中文网2018年度论坛门票2张，价值3999元/张 （不含差旅与食宿）</li>
                    
          
                  </ul> 
                  <div class="o-member__subscribe">
                    
                    <button class="openSub" id="premium-btn">立即订阅</button>
                    <p id="premium_price">¥1,998.00/年</p>
                    {/*<input type="text" value="¥1,998.00/年" hidden>*/}
                  </div>  
                </div>  

              </div>
           </div>  {/*o-member o-member__premium*/}
        </div>
       
    );
  }

}

export default Member;

