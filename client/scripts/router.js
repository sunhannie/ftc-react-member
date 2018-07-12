import React from 'react';
import { BrowserRouter as Router, Route,HashRouter,Link } from 'react-router-dom' //应放在顶处，否则会报错

const Tab1 = () => (
  <div>
    <h2>Tab11</h2>
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
            <div><Link to="/tabContent1">tabContent1</Link></div>
            <Link to="/tabContent2">tabContent2</Link>
            <Link to="/tabContent3">tabContent3</Link>
            <Route exact path="/tabContent1" component={Tab1}/>  
            <Route path="/tabContent2" component={Tab2}/>
            <Route path="/tabContent3" component={Tab3}/>   
        </div>
    </HashRouter>
  </div>
);

export default Routes