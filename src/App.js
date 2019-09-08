import React from 'react';
import './App.css';

function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.title}</h3>
      {props.myText}
    </div>
  );
}

function App() {
  return (
    <div >
      This is my component
      <HelloWorld myText="Hello World !!" title="Title"/>
      <HelloWorld myText="Hello 1 !!"/>
      <HelloWorld myText="Hello 2 !!"/>
    </div>
  );
}

export default App;
