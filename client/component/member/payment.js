import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Payment extends React.Component {
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

  handleChange(event) {
    console.log(event);
  }
  hideSelf(event){
    //   let payment = document.getElementById('payment-page');
    //   payment.style.display = 'none';
    //   event.target.style.display = 'none';
    //   console.log(event.target)
    this.props.hideSelf();
  }

  render() {
    const props = this.props;

    return (

   
  
    <div id="payment-page" className={`${this.props.isShow ? 'show' : 'hide'} `} >
        <div id="payment-shadow" class="o-overlay-shadow fadeIn" onClick={this.hideSelf.bind(this)}></div>
        <div id="payment-box" class="rightanswer show o-overlay__arrow-top fadeInRight">
        <div class="payment-title">欢迎订阅FT会员服务</div>
        <div class="payment-way">
            <div class="payment-name"><span>会员类型：</span><span class="payment-type"><strong id="memberType">{props.memberType}</strong></span></div>
            <div class="payment-method"><span>支付方式：</span><label class="mode"><input name="pay" type="radio" value="ali" checked onChange={this.handleChange.bind(this)}/><span id="pay-ali" ></span> </label>
            <label
                class="wxpay-mode" style={{display:'inline-block'}}><input name="pay" type="radio" value="wxpay" onChange={this.handleChange.bind(this)} /><span id="pay-wxpay"></span></label>
            </div>
        </div>
        <div class="pay-action"><label>支付金额：<label id="price"> {props.price}</label><label></label></label><button class="to-pay" id="to-pay">确定支付</button></div>
        </div>
    </div>
    
       
    );
  }

}

export default Payment;

