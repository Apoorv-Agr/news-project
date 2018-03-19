const React = require('react');
const ReactCreateClass = require('create-react-class');
const ReactRouter = require('react-router-dom');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const browserHistory = require('react-router-dom').browserHistory;
const HashRouter = require('react-router-dom').HashRouter;
const Switch = require('react-router-dom').Switch;
const Link = require('react-router-dom').Link;

var Page1 = require('./Page1.jsx');
var Page2 = require('./Page2.jsx');

var Base = ReactCreateClass({
  render: function(){
    console.log(this.props.match);
    return(
      <div>
        <h1>Header</h1>
        <Route exact path='/user' component={Page1} />
        <Route exact path='/secondLink' component={Page2} />
        <h1>Footer</h1>
      </div>
    );
  }
});
module.exports = Base;
