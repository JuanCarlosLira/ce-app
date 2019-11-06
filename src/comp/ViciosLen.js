import React from "react";
import Header from './Header'
import Scores from './Scores'
//import Scores from './Scores'
import "../css/ViciosLen.css";

class ViciosLen extends React.Component {
  score1 = 0;
  state = {
    compare: false,
    f0: false,
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false
  }

  updateComparar() {
    this.setState({compare: !this.state.compare});
  }

  _handleChange0 = (event) => {
    //this.setState({ value: event.target.value })
    if (event.target.value === "4"){
      this.setState({f0: true});
      this.score1++;
    } else {
      this.setState({f0: false});
      this.score1--;
    }
    //console.log(event.target.value);
    //console.log(this.state.f0);
  }
  _handleChange1 = (event) => {
    if (event.target.value === "6"){
      this.setState({f1: true});
      this.score1++;
    } else {
      this.setState({f1: false});
      this.score1--;
    }
  }
  _handleChange2 = (event) => {
    if (event.target.value === "7"){
      this.setState({f2: true});
      this.score1++;
    } else {
      this.setState({f2: false});
      this.score1--;
    }
  }
  _handleChange3 = (event) => {
    if (event.target.value === "1"){
      this.setState({f3: true});
      this.score1++;
    } else {
      this.setState({f3: false});
      this.score1--;
    }
  }
  _handleChange4 = (event) => {
    if (event.target.value === "8"){
      this.setState({f4: true});
      this.score1++;
    } else {
      this.setState({f4: false});
      this.score1--;
    }
  }
  _handleChange5 = (event) => {
    if (event.target.value === "2"){
      this.setState({f5: true});
      this.score1++;
    } else {
      this.setState({f5: false});
      this.score1--;
    }
  }
  _handleChange6 = (event) => {
    if (event.target.value === "5"){
      this.setState({f6: true});
      this.score1++;
    } else {
      this.setState({f6: false});
      this.score1--;
    }
  }
  _handleChange7 = (event) => {
    if (event.target.value === "3"){
      this.setState({f7: true});
      this.score1++;
    } else {
      this.setState({f7: false});
      this.score1--;
    }
  }

  render() {
    return(
      <div style={{width: '100%', textAlign: 'center'}}>
        <Header exerciseHeader="Vicios de la Lengua" instructions="Relaciona correctamente las columnas, a partir de la definición y el ejemplo del vicio correspondiente. Debes anotar el número de respuesta dentro del recuadro."/>

        <div>
          <table cellPadding="10px" style={{tableLayout: "fixed", textAlign: "left", width: '90%', borderCollapse: "collapse", display: "inline-block"}}>
            <tr class="lightBlueBg">
              <td style={{width: '20%', backgroundColor: this.state.compare && !this.state.f0  ? "salmon":"powderblue"}}>
                <select onChange={this._handleChange0}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option disabled selected value></option>
                </select>
                &nbsp;&nbsp;Anfibología
              </td>
              <td>
                <strong>1.</strong> Palabra fuera de uso, de acuerdo con el contexto, los usos y costumbres actuales de la población.
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td style={{backgroundColor: this.state.compare && !this.state.f1  ? "salmon":"seashell"}}>
                <select onChange={this._handleChange1}>
                  <option disabled selected value></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                &nbsp;&nbsp;Barbarismo
              </td>
              <td>
                <strong>2.</strong> Trasgresión semántica: dar a la palabra un significado o sintaxis (uso, función) que no le corresponde: Hemos visto muchos pescados en la playa (peces). Usar “bien” (adverbio), en vez de “bueno” adj.
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td style={{backgroundColor: this.state.compare && !this.state.f2  ? "salmon":"powderblue"}}>
                <select onChange={this._handleChange2}>
                  <option disabled selected value></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                &nbsp;&nbsp;Extranjerismo
              </td>
              <td>
                <strong>3.</strong> Decir por duplicado, o con doble expresión, e innecesariamente, lo que con un solo vocablo o término puede expresarse: “Salte para afuera”. Con “salir” es suficiente. “Salir hacia adentro” es erróneo; en ese caso, puede decirse  “adentrarse”.
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td style={{backgroundColor: this.state.compare && !this.state.f3  ? "salmon":"seashell"}}>
                <select onChange={this._handleChange3}>
                  <option disabled selected value></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                &nbsp;&nbsp;Arcaísmo
              </td>
              <td>
                <strong>4.</strong> Expresión con doble significado o doble sentido; generalmente sucede por poner una palabra (adjetivo) o un sintagma preposicional (frase adjetiva) fuera de lugar, o sea, lejos del sustantivo al que modifica: Se venden pelotas para niñas de goma.
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td style={{backgroundColor: this.state.compare && !this.state.f4  ? "salmon":"powderblue"}}>
                <select onChange={this._handleChange4}>
                  <option disabled selected value></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                &nbsp;&nbsp;Solecismo
              </td>
              <td>
                <strong>5.</strong> Error de género o número en la palabra, sobretodo sucede con sustantivos colectivos, los cuales implican, con una sola palabra en singular, al grupo o conjunto: bancos de peces/ banco de peces.
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td style={{backgroundColor: this.state.compare && !this.state.f5  ? "salmon":"seashell"}}>
                <select onChange={this._handleChange5}>
                  <option disabled selected value></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                &nbsp;&nbsp;Impropiedad
              </td>
              <td>
                <strong>6.</strong> Modificar arbitrariamente el lexema, raíz o parte fija de la palabra: Moustro = incorrecto/ Monstruo = correcto.
                <br/>Mostrocidad = incorrecto/ Monstruosidad = corredto
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td style={{backgroundColor: this.state.compare && !this.state.f6  ? "salmon":"powderblue"}}>
                <select onChange={this._handleChange6}>
                  <option disabled selected value></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                &nbsp;&nbsp;Concordancia
              </td>
              <td>
                <strong>7.</strong> Palabras de origen foráneo o extranjero. Cuando son en inglés se las llama específicamente anglicismos; cuando son en francés se las llama galicismos.
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td style={{backgroundColor: this.state.compare && !this.state.f7  ? "salmon":"seashell"}}>
                <select onChange={this._handleChange7}>
                  <option disabled selected value></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                &nbsp;&nbsp;Pleonasmo
              </td>
              <td>
                <strong>8.</strong> Alterar el orden sintáctico correcto de los elementos de una oración; poner palabras de más, al conjugar verbos (debes/ debes de); también corresponde al uso erróneo de preposiciones y conjunciones:
                <br/>En base a = incorrecto/ Con base en = correcto
                <br/>Bajo el pretexto = incorrecto/ Con el pretexto = correcto
                <br/>No me recuerdo = incorrecto/ No me acuerdo = correcto
              </td>
            </tr>
          </table>
          <br/>
          {this.state.compare &&
            <Scores score={this.score1} maxScore="8"/>
          }
          <button onClick={this.updateComparar.bind(this)}>Comparar</button>
          <button>Salir</button>
        </div>
      </div>
    );
  }
}

export default ViciosLen;
