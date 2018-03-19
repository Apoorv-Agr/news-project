var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
const browserHistory = require('react-router-dom').browserHistory;
const HashRouter = require('react-router-dom').HashRouter;
var Switch = require('react-router-dom').Switch;

var Base = require('./components/Base.jsx');


// Some Working Code
// var Routes = (
//   <HashRouter>
//     <Switch>
//       <Route exact path="/" component={Base}/>
//       <Route path="/about" component={Page1}/>
//       <Route path="/user" component={Page2}/>
//     </Switch>
//   </HashRouter>
// );

var Routes = (
  <HashRouter>
      <Route exact path="" component={Base}/>
  </HashRouter>
);


module.exports = Routes;
