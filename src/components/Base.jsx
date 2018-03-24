const React = require('react');
const ReactCreateClass = require('create-react-class');
const ReactRouter = require('react-router-dom');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const browserHistory = require('react-router-dom').browserHistory;
const HashRouter = require('react-router-dom').HashRouter;
const Switch = require('react-router-dom').Switch;
const Link = require('react-router-dom').Link;

var News = require('./News.jsx');
var Photos = require('./Photos.jsx');

var Base = ReactCreateClass({
  render: function(){
    console.log(this.props.match);
    var lastBoxTextFont = {
        color : '#ffffff'
    };
    return(
      <div style={lastBoxTextFont}>
        <header>Country News</header>
        <h3>Top Stories in my country</h3>
        <span><Link to="news" style={lastBoxTextFont}>NEWS</Link></span>&nbsp;
        <span><Link to="photos" style={lastBoxTextFont}>PHOTOS</Link></span>
        <Route exact path='/news' component={News} />
        <Route exact path='/photos' component={Photos} />
      </div>
    );
  }
});
module.exports = Base;
