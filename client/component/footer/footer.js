import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import footer from '../layout/footer.scss';

class Footer extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="footer-container">
          <div class="footer-inner">
            <div>
              <a href="http://www.ftchinese.com/m/corp/aboutus.html">关于我们</a>
              <a href="https://ft.wd3.myworkdayjobs.com/FT_Chinese_External_Careers" target="_blank">加入我们</a>
              <a href="http://www.ftchinese.com/m/corp/faq.html">问题回馈</a>
              <a href="http://www.ftchinese.com/m/corp/contact.html">联系方式</a>
              <a href="http://www.ftchinese.com/m/corp/partner.html">合作伙伴</a>
              <a href="http://www.ftchinese.com/m/corp/service.html">服务条款</a>
              <a href="http://www.ftchinese.com/m/corp/sales.html">广告业务 </a>
              <a href="http://www.ftchinese.com/m/corp/copyright.html">版权声明</a>
              <a href="http://www.ftchinese.com/m/marketing/ftc.html">最新动态</a>
            </div>
            <p>
              <span class="copyright"><b>© The Financial Times Ltd 2018</b></span>
              <span><acronym title="Financial Times">FT</acronym> and
      'Financial Times' are trademarks of The Financial Times
      Ltd.</span>
            </p>
          </div>
        </div>
    );
  }

}

export default Footer;