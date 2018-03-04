const React = require('react');
const ReactCreateClass = require('create-react-class');

var test = ReactCreateClass({
  render: function(){
    return(
      <div>
        <h3>{this.props.heading}</h3>
      </div>
    );
  }
});

module.exports = test;
