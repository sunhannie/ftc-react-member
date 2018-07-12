import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ajax from '../../../util/ajax.js';


import main from './main.scss';


class TabContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabContent: []
        }

    }

    componentWillMount() {
        // console.log(QandA);
    }
    componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
            console.log(response);
          let tabContent = Object.keys(response).map(key => {   
            if(key.indexOf('ontent')>-1){
              let expand = response[key].map((item,index)=>{
              // console.log(item.answers);
                return <div class="o-expander" id="o-expander" key={index}>
                     <div class="toggle" aria-expanded="false" >
                        <a class="o-expander__toggle" aria-controls="o-expander__one">{item.question}<i></i>
                        </a><span></span>
                    </div>
                    <div class="o-expander__content"  aria-hidden="true">
                      <div class = "o-content_wrap">
                        <div class="o-content">
                                <p class="o-content_body">{item.answers}</p>  
                        </div>
                      </div>
                   </div>
                </div>
              
            })
            return <div class="tabContent" id= {key} key={key}>{expand}</div>

            }
          });




            this.setState((prevState, props) => ({
                tabContent: tabContent

            }));
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
        const { tabContent } = this.state;
        // console.log(this.state);
        return (
            /*<div>
                <div  id= "tabContentContainer">
                  <div class="tabContent" id= "tabContent1">
                    {this.state.tabContent}
                  </div>
                  <div class="tabContent" id= "tabContent2">
                    {this.state.tabContent}
                  </div>
                  <div class="tabContent" id= "tabContent3">
                    {this.state.tabContent}
                  </div>
                </div>  
          </div>*/
            
            <div  id= "tabContentContainer">
                {this.state.tabContent}
            </div> 
        );
    }

}

export default TabContent;

