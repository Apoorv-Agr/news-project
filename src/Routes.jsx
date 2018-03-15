var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
const browserHistory = require('react-router-dom').browserHistory;
var Switch = require('react-router-dom').Switch;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
  <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Page1}/>
        <Route path="/Page1" component={Base}/>
      </Switch>
  </Router>
);
module.exports = Routes;
