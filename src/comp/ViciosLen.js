import React from "react";
import Header from './Header'
import Scores from './Scores'
//import Scores from './Scores'
import "../css/ViciosLen.css";

class ViciosLen extends React.Component {
  score1 = 0;
  score2 = 0;
  state = {
    compare: false,
    compare2: false,
    f0: false,
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    g0: 0,
    g1: 0,
    g2: 0,
    g3: 0,
    g4: 0,
    g5: 0,
    g6: 0,
    g7: 0,
    g8: 0,
    g9: 0,
    g10: 0,
    g11: 0,
    g12: 0,
    g13: 0,
    g14: 0,
  }

  updateComparar() {
    this.setState({compare: !this.state.compare});
  }
  updateComparar2() {
    this.setState({compare2: !this.state.compare2});
  }

  g00 = (event) => {
    if (event.target.value === "1") {
      this.setState({g0: 1});
    }
    if (event.target.value === "2") {
      this.setState({g0: 2});
    }
    if (event.target.value === "3") {
      this.setState({g0: 3});
    }
    //console.log(this.state.g0);
  }
  g01 = (event) => {
    if (event.target.value === "1") {
      this.setState({g1: 1});
    }
    if (event.target.value === "2") {
      this.setState({g1: 2});
    }
    if (event.target.value === "3") {
      this.setState({g1: 3});
    }
  }
  g02 = (event) => {
    if (event.target.value === "1") {
      this.setState({g2: 1});
    }
    if (event.target.value === "2") {
      this.setState({g2: 2});
    }
    if (event.target.value === "3") {
      this.setState({g2: 3});
    }
  }
  g03 = (event) => {
    if (event.target.value === "1") {
      this.setState({g3: 1});
    }
    if (event.target.value === "2") {
      this.setState({g3: 2});
    }
    if (event.target.value === "3") {
      this.setState({g3: 3});
    }
  }
  g04 = (event) => {
    if (event.target.value === "1") {
      this.setState({g4: 1});
    }
    if (event.target.value === "2") {
      this.setState({g4: 2});
    }
    if (event.target.value === "3") {
      this.setState({g4: 3});
    }
  }
  g05 = (event) => {
    if (event.target.value === "1") {
      this.setState({g5: 1});
    }
    if (event.target.value === "2") {
      this.setState({g5: 2});
    }
    if (event.target.value === "3") {
      this.setState({g5: 3});
    }
  }
  g06 = (event) => {
    if (event.target.value === "1") {
      this.setState({g6: 1});
    }
    if (event.target.value === "2") {
      this.setState({g6: 2});
    }
    if (event.target.value === "3") {
      this.setState({g6: 3});
    }
  }
  g07 = (event) => {
    if (event.target.value === "1") {
      this.setState({g7: 1});
    }
    if (event.target.value === "2") {
      this.setState({g7: 2});
    }
    if (event.target.value === "3") {
      this.setState({g7: 3});
    }
  }
  g08 = (event) => {
    if (event.target.value === "1") {
      this.setState({g8: 1});
    }
    if (event.target.value === "2") {
      this.setState({g8: 2});
    }
    if (event.target.value === "3") {
      this.setState({g8: 3});
    }
  }
  g09 = (event) => {
    if (event.target.value === "1") {
      this.setState({g9: 1});
    }
    if (event.target.value === "2") {
      this.setState({g9: 2});
    }
    if (event.target.value === "3") {
      this.setState({g9: 3});
    }
  }
  g10 = (event) => {
    if (event.target.value === "1") {
      this.setState({g10: 1});
    }
    if (event.target.value === "2") {
      this.setState({g10: 2});
    }
    if (event.target.value === "3") {
      this.setState({g10: 3});
    }
  }
  g11 = (event) => {
    if (event.target.value === "1") {
      this.setState({g11: 1});
    }
    if (event.target.value === "2") {
      this.setState({g11: 2});
    }
    if (event.target.value === "3") {
      this.setState({g11: 3});
    }
  }
  g12 = (event) => {
    if (event.target.value === "1") {
      this.setState({g12: 1});
    }
    if (event.target.value === "2") {
      this.setState({g12: 2});
    }
    if (event.target.value === "3") {
      this.setState({g12: 3});
    }
  }
  g13 = (event) => {
    if (event.target.value === "1") {
      this.setState({g13: 1});
    }
    if (event.target.value === "2") {
      this.setState({g13: 2});
    }
    if (event.target.value === "3") {
      this.setState({g13: 3});
    }
  }
  g14 = (event) => {
    if (event.target.value === "1") {
      this.setState({g14: 1});
    }
    if (event.target.value === "2") {
      this.setState({g14: 2});
    }
    if (event.target.value === "3") {
      this.setState({g14: 3});
    }
  }

  _handleChange0 = (event) => {
    //this.setState({ value: event.target.value })
    if (event.target.value === "4"){
      this.setState({f0: true});
    } else {
      this.setState({f0: false});
    }
    //console.log(event.target.value);
    //console.log(this.state.f0);
  }
  _handleChange1 = (event) => {
    if (event.target.value === "6"){
      this.setState({f1: true});
    } else {
      this.setState({f1: false});
    }
  }
  _handleChange2 = (event) => {
    if (event.target.value === "7"){
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
  _handleChange4 = (event) => {
    if (event.target.value === "8"){
      this.setState({f4: true});
    } else {
      this.setState({f4: false});
    }
  }
  _handleChange5 = (event) => {
    if (event.target.value === "2"){
      this.setState({f5: true});
    } else {
      this.setState({f5: false});
    }
  }
  _handleChange6 = (event) => {
    if (event.target.value === "5"){
      this.setState({f6: true});
    } else {
      this.setState({f6: false});
    }
  }
  _handleChange7 = (event) => {
    if (event.target.value === "3"){
      this.setState({f7: true});
    } else {
      this.setState({f7: false});
    }
  }

  render() {
    this.score1 = 0;
    if (this.state.f0) {this.score1++;}
    if (this.state.f1) {this.score1++;}
    if (this.state.f2) {this.score1++;}
    if (this.state.f3) {this.score1++;}
    if (this.state.f4) {this.score1++;}
    if (this.state.f5) {this.score1++;}
    if (this.state.f6) {this.score1++;}
    if (this.state.f7) {this.score1++;}

    this.score2 = 0;
    if (this.state.g0  === 1 ) {this.score2++;}
    if (this.state.g1  === 3 ) {this.score2++;}
    if (this.state.g2  === 2 ) {this.score2++;}
    if (this.state.g3  === 3 ) {this.score2++;}
    if (this.state.g4  === 1 ) {this.score2++;}
    if (this.state.g5  === 2 ) {this.score2++;}
    if (this.state.g6  === 2 ) {this.score2++;}
    if (this.state.g7  === 1 ) {this.score2++;}
    if (this.state.g8  === 2 ) {this.score2++;}
    if (this.state.g9  === 3 ) {this.score2++;}
    if (this.state.g10 === 2 ) {this.score2++;}
    if (this.state.g11 === 3 ) {this.score2++;}
    if (this.state.g12 === 3 ) {this.score2++;}
    if (this.state.g13 === 3 ) {this.score2++;}
    if (this.state.g14 === 1 ) {this.score2++;}
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

        <br/>

        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
          <div className="instruction-box" style={{height: 120}}>
            <p style={{width: '70%', textAlign: 'center'}}>
              Lee cuidadosamente cada ejemplo e identifica el VICIO DE LA LENGUA. Identifica de qué tipo de error se trata; ilumina con el mouse la casilla correspondiente. Se marcará con rojo, si la respuesta es incorrecta y con verde cuando tu respuesta sea la correcta (15 aciertos).
            </p>
          </div>
        </div>

        <div>
          <table cellPadding="10px" style={{tableLayout: "fixed", textAlign: "left", width: '70%', borderCollapse: "collapse", display: "inline-block"}}>
            <tr class="lightBlueBg">
              <td style={{width: '45%'}}>Se venden bolsas para damas de cuero.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g00.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g0 === 1 ? "lightgreen":"LightGray"):(this.state.g0 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g00.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g0 === 2 ? "salmon":"LightGray"):(this.state.g0 === 2 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButRight' value="3" onClick={this.g00.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g0 === 3 ? "salmon":"LightGray"):(this.state.g0 === 3 ? "Gray":"LightGray")}}>Extranjerismo</button>
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td>El vestido de Regina estaba muy <i>nice</i>.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g01.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g1 === 1 ? "salmon":"LightGray"):(this.state.g1 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g01.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g1 === 2 ? "salmon":"LightGray"):(this.state.g1 === 2 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButRight' value="3" onClick={this.g01.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g1 === 3 ? "lightgreen":"LightGray"):(this.state.g1 === 3 ? "Gray":"LightGray")}}>Extranjerismo</button>
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td>El hijo de la vecina <ins>se recibió</ins> de doctor hace un año.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g02.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g2 === 1 ? "salmon":"LightGray"):(this.state.g2 === 1 ? "Gray":"LightGray")}}>Solecismo</button>
                <button class='selButCenter' value="2" onClick={this.g02.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g2 === 2 ? "lightgreen":"LightGray"):(this.state.g2 === 2 ? "Gray":"LightGray")}}>Arcaísmo</button>
                <button class='selButRight' value="3" onClick={this.g02.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g2 === 3 ? "salmon":"LightGray"):(this.state.g2 === 3 ? "Gray":"LightGray")}}>Barbarismo</button>
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td>¡Ay, tu amigo estaba <ins>bien</ins> guapo!</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g03.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g3 === 1 ? "salmon":"LightGray"):(this.state.g3 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g03.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g3 === 2 ? "salmon":"LightGray"):(this.state.g3 === 2 ? "Gray":"LightGray")}}>Extranjerismo</button>
                <button class='selButRight' value="3" onClick={this.g03.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g3 === 3 ? "lightgreen":"LightGray"):(this.state.g3 === 3 ? "Gray":"LightGray")}}>Impropiedad</button>
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td>Ojalá que no <ins>haiga</ins> problemas a la hora de la entrada.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g04.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g4 === 1 ? "lightgreen":"LightGray"):(this.state.g4 === 1 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButCenter' value="2" onClick={this.g04.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g4 === 2 ? "salmon":"LightGray"):(this.state.g4 === 2 ? "Gray":"LightGray")}}>Extranjerismo</button>
                <button class='selButRight' value="3" onClick={this.g04.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g4 === 3 ? "salmon":"LightGray"):(this.state.g4 === 3 ? "Gray":"LightGray")}}>Impropiedad</button>
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td><ins>Habemos</ins> muchos interesados en el torneo de fútbol rápido.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g05.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g5 === 1 ? "salmon":"LightGray"):(this.state.g5 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g05.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g5 === 2 ? "lightgreen":"LightGray"):(this.state.g5 === 2 ? "Gray":"LightGray")}}>Solecismo</button>
                <button class='selButRight' value="3" onClick={this.g05.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g5 === 3 ? "salmon":"LightGray"):(this.state.g5 === 3 ? "Gray":"LightGray")}}>Extranjerismo</button>
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td>¡<ins>Dizque</ins> me estaban guardando un lugar! Nadie les cree, ¡eh!</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g06.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g6 === 1 ? "salmon":"LightGray"):(this.state.g6 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g06.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g6 === 2 ? "lightgreen":"LightGray"):(this.state.g6 === 2 ? "Gray":"LightGray")}}>Arcaísmo</button>
                <button class='selButRight' value="3" onClick={this.g06.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g6 === 3 ? "salmon":"LightGray"):(this.state.g6 === 3 ? "Gray":"LightGray")}}>Extranjerismo</button>
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td>Aquí armamos paquetes de niños útiles.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g07.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g7 === 1 ? "lightgreen":"LightGray"):(this.state.g7 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g07.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g7 === 2 ? "salmon":"LightGray"):(this.state.g7 === 2 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButRight' value="3" onClick={this.g07.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g7 === 3 ? "salmon":"LightGray"):(this.state.g7 === 3 ? "Gray":"LightGray")}}>Extranjerismo</button>
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td>Estuvimos asando la carne y ¡se hizo una <ins>humadera</ins>!</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g08.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g8 === 1 ? "salmon":"LightGray"):(this.state.g8 === 1 ? "Gray":"LightGray")}}>Arcaísmo</button>
                <button class='selButCenter' value="2" onClick={this.g08.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g8 === 2 ? "lightgreen":"LightGray"):(this.state.g8 === 2 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButRight' value="3" onClick={this.g08.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g8 === 3 ? "salmon":"LightGray"):(this.state.g8 === 3 ? "Gray":"LightGray")}}>Pleonasmo</button>
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td>¡Ay ya, <i>my sweetest heart</i>, no te enojes conmigo!</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g09.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g9 === 1 ? "salmon":"LightGray"):(this.state.g9 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g09.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g9 === 2 ? "salmon":"LightGray"):(this.state.g9 === 2 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButRight' value="3" onClick={this.g09.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g9 === 3 ? "lightgreen":"LightGray"):(this.state.g9 === 3 ? "Gray":"LightGray")}}>Extranjerismo</button>
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td>Espero que llegue hasta acá la luz iluminada, para que podamos ver el camino.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g10.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g10 === 1 ? "salmon":"LightGray"):(this.state.g10 === 1 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButCenter' value="2" onClick={this.g10.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g10 === 2 ? "lightgreen":"LightGray"):(this.state.g10 === 2 ? "Gray":"LightGray")}}>Pleonasmo</button>
                <button class='selButRight' value="3" onClick={this.g10.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g10 === 3 ? "salmon":"LightGray"):(this.state.g10 === 3 ? "Gray":"LightGray")}}>Arcaísmo</button>
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td>Híjole, es que después de que fuiste se puso <ins>bien</ins> triste.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g11.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g11 === 1 ? "salmon":"LightGray"):(this.state.g11 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g11.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g11 === 2 ? "salmon":"LightGray"):(this.state.g11 === 2 ? "Gray":"LightGray")}}>Extranjerismo</button>
                <button class='selButRight' value="3" onClick={this.g11.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g11 === 3 ? "lightgreen":"LightGray"):(this.state.g11 === 3 ? "Gray":"LightGray")}}>Impropiedad</button>
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td>La mera verdad es que <ins>naiden</ins> me avisó del paseo.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g12.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g12 === 1 ? "salmon":"LightGray"):(this.state.g12 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g12.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g12 === 2 ? "salmon":"LightGray"):(this.state.g12 === 2 ? "Gray":"LightGray")}}>Pleonasmo </button>
                <button class='selButRight' value="3" onClick={this.g12.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g12 === 3 ? "lightgreen":"LightGray"):(this.state.g12 === 3 ? "Gray":"LightGray")}}>Barbarismo</button>
              </td>
            </tr>
            <tr class="lightWhiteBg">
              <td>La<ins>s</ins> gente<ins>s</ins> andaban bien extraviadas.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g13.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g13 === 1 ? "salmon":"LightGray"):(this.state.g13 === 1 ? "Gray":"LightGray")}}>Anfibología</button>
                <button class='selButCenter' value="2" onClick={this.g13.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g13 === 2 ? "salmon":"LightGray"):(this.state.g13 === 2 ? "Gray":"LightGray")}}>Impropiedad</button>
                <button class='selButRight' value="3" onClick={this.g13.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g13 === 3 ? "lightgreen":"LightGray"):(this.state.g13 === 3 ? "Gray":"LightGray")}}>Concordancia</button>
              </td>
            </tr>
            <tr class="lightBlueBg">
              <td>¡Ya deja de <ins>influenciar</ins> a tus amigos! Que ellos solitos tomen sus decisiones.</td>
              <td>
                <button class='selButLeft' value="1" onClick={this.g14.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g14 === 1 ? "lightgreen":"LightGray"):(this.state.g14 === 1 ? "Gray":"LightGray")}}>Barbarismo</button>
                <button class='selButCenter' value="2" onClick={this.g14.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g14 === 2 ? "salmon":"LightGray"):(this.state.g14 === 2 ? "Gray":"LightGray")}}>Impropiedad</button>
                <button class='selButRight' value="3" onClick={this.g14.bind(this)} style={{backgroundColor: this.state.compare2 ? (this.state.g14 === 3 ? "salmon":"LightGray"):(this.state.g14 === 3 ? "Gray":"LightGray")}}>Arcaísmo</button>
              </td>
            </tr>
          </table>
          <br/>
          {this.state.compare2 &&
            <Scores score={this.score2} maxScore="15"/>
          }
          <button onClick={this.updateComparar2.bind(this)}>Comparar</button>
          <button>Salir</button>
        </div>
      </div>
    );
  }
}

export default ViciosLen;
