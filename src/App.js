import React from 'react';
import './App.css';

/*function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.title}</h3>
      {props.myText}
    </div>
  );
}*/

class Crucigrama2 extends React.Component {
  state = {
    show: true
  }

  toogleShow = () => {
    this.setState({show:!this.state.show})
  }

  render() {
    if (this.state.show) {
      return(
        <div id="crucigramaWrap">
          <h2 align="center">Ejercicio AUMENTATIVO de las palabras</h2>
          <p>Completa los espacios en blanco, a partir de ensayar el aumentativo de la siguiente lista de palabras:</p>
          <table className="wordBank" align="center">
            <tbody>
              <tr>
                <td>puerta</td>
                <td>mano</td>
                <td>perro</td>
                <td>sable</td>
                <td>argüende</td>
                <td>botella</td>
              </tr>
              <tr>
                <td>golpe</td>
                <td>cabeza</td>
                <td>timbre</td>
                <td>manota</td>
                <td>porra</td>
                <td>cañón</td>
              </tr>
            </tbody>
          </table>

          <ul>
           <li>Completa los espacios con las grafías correspondientes</li>
           <li>Si la palabra lleva acento ortográfico o tilde, debes colocarlo sobre la letra correspondiente</li>
           <li>Debes contestar con minúsculas</li>
           <li>La respuesta se te marcará con rojo, en caso de errar; esto, sí y sólo sí,  hasta completar la palabra</li>
          </ul>

          <table className="crg" align="center">
            <tbody>
              {/*<tr>
                <td id="bckgClass">1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
              </tr>*/}
              <tr>
                <td colSpan="15" > </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td colSpan="2"></td>
                <td id="bckgClass">p</td>
                <td colSpan="3"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">g</td>
                <td></td>
                <td id="bckgClass">p</td>
                <td colSpan="3"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="2"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="2"></td>
                <td id="bckgClass">n</td>
                <td colSpan="4"></td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                 <td id="bckgClass">r</td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="5"></td>
              </tr>
              <tr>
                <td colSpan="5"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="6"></td>
              </tr>
              <tr>
                <td colSpan="6"></td>
                <td colSpan="5" rowSpan="3" id="bckgClass"> a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o</td>
                <td colSpan="7"></td>
              </tr>
              <tr>
                {/*<td colSpan="6"></td>*/}
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">t</td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                {/*<td colSpan="7"></td>*/}
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">ü</td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
              </tr>
              <tr>
                <td colSpan="6"></td>
                <td colSpan="7"></td>
              </tr>
              <tr>
                <td colSpan="5"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="6"></td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                 <td id="bckgClass">a</td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                 <td id="bckgClass">b</td>
                <td></td>
                 <td id="bckgClass">o</td>
                <td colSpan="5"></td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="2"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="2"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="4"></td>
              </tr>
              <tr>
                <td colSpan="2"></td>
                <td id="bckgClass">s</td>
                <td colSpan="5"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="3"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td colSpan="8"></td>
                <td id="bckgClass">c</td>
                <td></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="4"></td>
                <td id="bckgClass">
                  <input type="text" id="textBoxCrg" maxlength="1" />
                </td>
                <td colSpan="2"></td>
              </tr>
            </tbody>
          </table>

          <button onClick={this.toogleShow}>Hide</button>
        </div>
      );
    } else {
      return(
        <div>
          <button onClick={this.toogleShow}>Crucigrama2</button>
        </div>
      );
    }
  }
}

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
      <Crucigrama2/>
      <br/>
      <HelloWorld myText="Hello World !!" title="Title"/>
    </div>
  );
}

export default App;
