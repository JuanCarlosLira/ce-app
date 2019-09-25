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
    <div style={{backgroundImage:"url(../img/Libros.PNG)"}}>
      <table style={{width:"100%"}}>
        <tr>
          <td>
            <img src="../img/titulob.PNG" height="100" width="300"/>
          </td>
          <td>
            <h1 align="center">Centro de Escritura</h1>
          </td>
          <td>
            <img src="../img/logob.PNG" height="100" width="200"/>
          </td>
        </tr>
      </table>
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
