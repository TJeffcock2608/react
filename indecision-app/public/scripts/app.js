'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML 

// var template = <p>This is JSX from App.js</p>;
var template = React.createElement(
  'h1',
  null,
  'Indeceision app'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
