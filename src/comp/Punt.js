import React from "react";
import Header from './Header'
import Scores from './Scores'
import "../css/Punt.css";

class Punt extends React.Component {
  score = 0;
  state = {
    compare: false,
    f0: false,
    f1: false,
    f2: false,
    f3: false
  }

  updateComparar() {
    this.setState({compare: !this.state.compare});
  }

  _handleChange0 = (event) => {
    if (event.target.value === "2"){
      this.setState({f0: true});
    } else {
      this.setState({f0: false});
    }
  }
  _handleChange1 = (event) => {
    if (event.target.value === "4"){
      this.setState({f1: true});
    } else {
      this.setState({f1: false});
    }
  }
  _handleChange2 = (event) => {
    if (event.target.value === "3"){
      this.setState({f2: true});
    } else {
      this.setState({f2: false});
    }
  }
  _handleChange3 = (event) => {
    if (event.target.value === "1"){
      this.setState({f3: true});
    } else {
      this.setState({f3: false});
    }
  }

  render() {
    this.score = 0;
    if (this.state.f0) {this.score++;}
    if (this.state.f1) {this.score++;}
    if (this.state.f2) {this.score++;}
    if (this.state.f3) {this.score++;}

    return(
      <div style={{width: '100%', textAlign: 'center'}}>
        <div>
          <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}} className="header">
            <div className="title-box">
              <h2>Signos de Puntuación</h2>
            </div>
            <img alt="Oops, algo salió mal" style={{width: 330, height: 155, marginTop: 'auto', marginBottom: 'auto', marginRight: '10%'}} src="./img/logo.PNG"/>
          </div>
        </div>

        <table cellPadding="10px" style={{tableLayout: "fixed", textAlign: "center", width: '90%', borderCollapse: "collapse", display: "inline-block"}}>
          <tbody>
            <tr>
              <td style={{width: '25%'}}>
                <div className='speech-bubbleLeft' style={{textAlign: "left"}}>
                  <div className='bubble-title'>
                    PUNTO
                  </div>
                  <br/>
                  * Alto Total.<br/><br/>
                  * Cambio de sujeto (¿quién?) y de verbo conjugado.
                  <br/><br/>
                  <div style={{textAlign:'center', width:'100%'}}>
                    <select style={{backgroundColor: this.state.compare && !this.state.f0  ? "salmon":"#eee0b1"}} onChange={this._handleChange0}>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                      <option value="4">D</option>
                      <option disabled selected value></option>
                    </select>
                  </div>
                </div>
              </td>
              <td rowspan='2' style={{width: '50%'}}>
                <img alt="Oops, algo salió mal" style={{width: '95%', height: 500, padding: '0 15px', borderRadius:'50px'}} src="./img/punt/people.jpg"/>
              </td>
              <td style={{width: '25%'}}>
                <div className='speech-bubbleRight'  style={{textAlign: "left"}}>
                  <div className='bubble-title'>
                    COMA
                  </div>
                  <br/>
                  * Pausa.<br/><br/>
                  * Dentro de una misma idea (mismo sujeto y mismo verbo o acción) separar aclaraciones y circunstancias del verbo: cómo, cuándo, cuánto, dónde, por qué, para qué, con quién, sobre qué.
                  <br/><br/>
                  <div style={{textAlign:'center', width:'100%'}}>
                    <select style={{backgroundColor: this.state.compare && !this.state.f1  ? "salmon":"#eee0b1"}} onChange={this._handleChange1}>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                      <option value="4">D</option>
                      <option disabled selected value></option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='speech-bubbleLeft2' style={{textAlign: "left"}}>
                  <div className='bubble-title'>
                    PUNTO Y COMA
                  </div>
                  <br/>
                  * Alto y sigue...<br/><br/>
                  *Mismo sujeto (¿quién? o de quién se habla), pero cambia el verbo/acción: el mismo sujeto realiza diferentes acciones.
                  <br/><br/>
                  <div style={{textAlign:'center', width:'100%'}}>
                    <select style={{backgroundColor: this.state.compare && !this.state.f2  ? "salmon":"#eee0b1"}} onChange={this._handleChange2}>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                      <option value="4">D</option>
                      <option disabled selected value></option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div className='speech-bubbleRight2' style={{textAlign: "left"}}>
                  <div className='bubble-title'>
                    DOS PUNTOS
                  </div>
                  <br/>
                  =<br/><br/>
                  * o sea, es decir (conjunción explicativa).<br/><br/>
                  * También indican pertenencia, dentro de, para enumerar o enlistar los elementos de una lista o conjunto.
                  <br/><br/>
                  <div style={{textAlign:'center', width:'100%'}}>
                    <select style={{backgroundColor: this.state.compare && !this.state.f3  ? "salmon":"#eee0b1"}} onChange={this._handleChange3}>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                      <option value="4">D</option>
                      <option disabled selected value></option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan='3'>
                <img alt="Oops, algo salió mal" style={{width: '50%', height: 500, padding: '0 15px', borderRadius:'30px'}} src="./img/punt/coma2.jpg"/>
              </td>
            </tr>
          </tbody>
        </table>

        <br/>

        <div style={{width:'100%', textAlign: "center"}}>
          <img alt="Oops, algo salió mal" style={{width: '60%'}} src="./img/punt/coma.png"/>
        </div>

        {this.state.compare &&
          <Scores score={this.score} maxScore="4"/>
        }

        <button onClick={this.updateComparar.bind(this)}>Comparar</button>
        <button>Salir</button>

      </div>
    );
  }
}

export default Punt;
