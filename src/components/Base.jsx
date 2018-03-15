const React = require('react');
const ReactCreateClass = require('create-react-class');
var Base = ReactCreateClass({
  render: function(){
    return(
      <div>
        <h1>Header</h1>
        <h1>Footer</h1>
      </div>
    );
  }
});
module.exports = Base;
