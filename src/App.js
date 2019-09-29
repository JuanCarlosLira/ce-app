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
    <div>
      <table style={{width:"100%"}}>
        <tr>
          <td style={{backgroundImage:"url(../img/titulob.PNG)", backgroundPosition: 'center',backgroundSize: 'contain',backgroundRepeat:"no-repeat"}}>
            <h2>&nbsp;&nbsp;&nbsp;Signos de Puntuación</h2>
          </td>
          {/*<td style={{width:"40%"}}>
            <img src="../img/titulob.PNG" alt="" height="150" width="100%"/>
          </td>*/}
          <td style={{width:"30%"}}>
            &nbsp;
          </td>
          <td style={{width:"30%"}}>
            <img src="../img/logob.PNG" alt="" height="150" width="70%"/>
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
