console.log('App.js is running!');

// JSX - JavaScript XML 

// var template = <p>This is JSX from App.js</p>;
var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from App.js"); //Convert JSX to Babel 
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
