import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById('root'));
});
