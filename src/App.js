import React from 'react';
import './App.css';
import Migala from './Migala'
import Crucigrama2 from './Crucigrama2'

/*function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.title}</h3>
      {props.myText}
    </div>
  );
}*/

class HelloWorld extends React.Component {
  state = {
    show: true
  }

  toogleShow = () => {
    this.setState({show:!this.state.show})
  }

  render() {
    if (this.state.show) {
      return(
        <div id="hello">
          <h3>{this.props.title}</h3>
          {this.props.myText}
          <button onClick={this.toogleShow}>Hide</button>
        </div>
      );
    } else {
      return(
        <div>
          <h1>Empty Component</h1>
          <button onClick={this.toogleShow}>Show</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div >
      <h1 align="center">Centro de Escritura</h1>
      <br/>
      {/*<p>This is my component</p>*/}
      <Migala/>
      <br/>
      <br/>
      <Crucigrama2/>
      <br/>
      <br/>
      <HelloWorld myText="Hello World !!" title="Title"/>
    </div>
  );
}

export default App;
