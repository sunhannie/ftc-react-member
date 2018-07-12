import React from 'react';
// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route,HashRouter,Link } from 'react-router-dom' //应放在顶处，否则会报错

const Tab1 = () => (
  <div>
    <h2>Tab1</h2>
  </div>
)

const Tab2 = () => (
  <div>
    <h2>Tab2</h2>
  </div>
)

const Tab3 = () => (
  <div>
    <h2>Tab3</h2>
  </div>
)
// path="/tab1"对应to="/tab1"
const Routes = browserHistory => (
  <div>
    <HashRouter>    
        <div>
            <Link to="/tab1">Tab1</Link>
            <Link to="/tab2">Tab2</Link>
            <Link to="/tab3">Tab3</Link>
            <Route exact path="/tab1" component={Tab1}/>  
            <Route path="/tab2" component={Tab2}/>
            <Route path="/tab1" component={Tab3}/>   
        </div>
    </HashRouter>
  </div>
);

export default Routes