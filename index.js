'use strict';

// syntax is:
// var reactElement = React.createElement(type, properties, children);
// React.render(reactElement, targetDOMNode);

var helloMessage = React.createElement('h1', {className: 'headerStyle'}, 'Hello ReactJS');
React.render(helloMessage, document.body);

// React.createClass(objectSpecification) can be used to create a custom element
