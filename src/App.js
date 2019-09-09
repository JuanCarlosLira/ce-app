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
    show: true,
    win: false,
    manotazo: false,
    perrazo: false,
    golpazo: false,
    porrazo: false,
    portazo: false,
    botellazo: false,
    arguendazo: false,
    sablazo: false,
    manazo: false,
    cabezazo: false,
    timbrazo: false,
    canonazo: false,
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
    c13: "",
    c14: "",
    c15: "",
    c16: "",
    c17: "",
    c18: "",
    c19: "",
    c20: "",
    c21: "",
    c22: "",
    c23: "",
    c24: "",
    c25: "",
    c26: "",
    c27: "",
    c28: "",
    c29: "",
    c30: "",
    c31: "",
    c32: "",
    c33: "",
    c34: "",
    c35: "",
    c36: "",
    c37: "",
    c38: "",
    c39: "",
    c40: "",
    c41: "",
    c42: "",
    c43: "",
    c44: ""
  }

  checkWin() {
    /*if (this.state.manotazo === true && this.state.perrazo === true
        && this.state.golpazo === true && this.state.porrazo === true
        && this.state.portazo === true && this.state.botellazo === true
        && this.state.arguendazo === true && this.state.sablazo === true
        && this.state.manazo === true && this.state.cabezazo === true
        && this.state.timbrazo === true && this.state.canonazo === true) {*/
      if (this.state.manazo) {
      this.setState({
        win: true
      }, () => {console.log("YOU WIN")});
    } else {
      //console.log("Loose")
    }
  }

  checkManotazo() {
    if (this.state.c1 === "m" && this.state.c3 === "a"
        && this.state.c11 === "o" && this.state.c16 === "t") {
      this.setState({
        manotazo: true
      //}, () => {console.log("manotazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkPerrazo() {
    if (this.state.c7 === "e" && this.state.c10 === "r"
        && this.state.c15 === "r") {
      this.setState({
        perrazo: true
      //}, () => {console.log("perrazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkGolpazo() {
    if (this.state.c6 === "o" && this.state.c9 === "l"
        && this.state.c14 === "p") {
      this.setState({
        golpazo: true
      //}, () => {console.log("golpazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkPorrazo() {
    if (this.state.c2 === "p" && this.state.c5 === "o"
        && this.state.c13 === "r") {
      this.setState({
        porrazo: true
      //}, () => {console.log("porrazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkPortazo() {
    if (this.state.c4 === "o" && this.state.c8 === "r"
        && this.state.c12 === "t") {
      this.setState({
        portazo: true
      //}, () => {console.log("portazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkBotellazo() {
    if (this.state.c17 === "b" && this.state.c18 === "o"
        && this.state.c19 === "e" && this.state.c20 === "l"
        && this.state.c21 === "l") {
      this.setState({
        botellazo: true
      //}, () => {console.log("botellazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkArguendazo() {
    if (this.state.c22 === "d" && this.state.c23 === "n"
        && this.state.c24 === "e" && this.state.c25 === "g"
        && this.state.c26 === "r" && this.state.c27 === "a") {
      this.setState({
        arguendazo: true
      //}, () => {console.log("arguendazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkSablazo() {
    if (this.state.c28 === "l" && this.state.c33 === "b"
        && this.state.c35 === "a") {
      this.setState({
        sablazo: true
      //}, () => {console.log("sablazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkManazo() {
    if (this.state.c29 === "n" && this.state.c36 === "m") {
      this.setState({
        manazo: true
      //}, () => {console.log("manazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkCabezazo() {
    if (this.state.c30 === "z" && this.state.c34 === "e"
        && this.state.c37 === "b" && this.state.c40 === "a") {
      this.setState({
        cabezazo: true
      //}, () => {console.log("cabezazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkTimbrazo() {
    if (this.state.c31 === "r" && this.state.c38 === "m"
        && this.state.c41 === "i" && this.state.c43 === "t") {
      this.setState({
        timbrazo: true
      //}, () => {console.log("timbrazo complete")});
      }, () => this.checkWin());
    } else {
      console.log("Loose")
    }
  }
  checkCanonazo() {
    if (this.state.c32 === "n" && this.state.c39 === "ñ"
        && this.state.c42 === "a" && this.state.c44 === "c") {
      this.setState({
        canonazo: true
      //}, () => {console.log("canonazo complete")});
      }, () => this.checkWin());

    } else {
      console.log("Loose")
    }
  }

  updC1(evt) {
    this.setState({
      c1: evt.target.value
    //}, () => {console.log("C1" + this.state.c2)});
    }, () => this.checkManotazo());
  }
  updC2(evt) {
    this.setState({
      c2: evt.target.value
    //}, () => {console.log("C2" + this.state.c2)});
    }, () => this.checkPorrazo());
  }
  updC3(evt) {
    this.setState({
      c3: evt.target.value
    //}, () => {console.log("C3" + this.state.c3)});
    }, () => this.checkManotazo());
  }
  updC4(evt) {
    this.setState({
      c4: evt.target.value
    //}, () => {console.log("C4" + this.state.c4)});
    }, () => this.checkPortazo());
  }
  updC5(evt) {
    this.setState({
      c5: evt.target.value
    //}, () => {console.log("C5" + this.state.c5)});
    }, () => this.checkPorrazo());
  }
  updC6(evt) {
    this.setState({
      c6: evt.target.value
    //}, () => {console.log("C6" + this.state.c6)});
    }, () => this.checkGolpazo());
  }
  updC7(evt) {
    this.setState({
      c7: evt.target.value
    //}, () => {console.log("C7" + this.state.c7)});
    }, () => this.checkPerrazo());
  }
  updC8(evt) {
    this.setState({
      c8: evt.target.value
    //}, () => {console.log("C8" + this.state.c8)});
    }, () => this.checkPortazo());
  }
  updC9(evt) {
    this.setState({
      c9: evt.target.value
    //}, () => {console.log("C9" + this.state.c9)});
    }, () => this.checkGolpazo());
  }
  updC10(evt) {
    this.setState({
      c10: evt.target.value
    //}, () => {console.log("C10" + this.state.c10)});
  }, () => this.checkPerrazo());
  }
  updC11(evt) {
    this.setState({
      c11: evt.target.value
    //}, () => {console.log("C11" + this.state.c11)});
    }, () => this.checkManotazo());
  }
  updC12(evt) {
    this.setState({
      c12: evt.target.value
    //}, () => {console.log("C12" + this.state.c12)});
    }, () => this.checkPortazo());
  }
  updC13(evt) {
    this.setState({
      c13: evt.target.value
    //}, () => {console.log("C13" + this.state.c13)});
    }, () => this.checkPorrazo());
  }
  updC14(evt) {
    this.setState({
      c14: evt.target.value
    //}, () => {console.log("C14" + this.state.c14)});
    }, () => this.checkGolpazo());
  }
  updC15(evt) {
    this.setState({
      c15: evt.target.value
    //}, () => {console.log("C15" + this.state.c15)});
  }, () => this.checkPerrazo());
  }
  updC16(evt) {
    this.setState({
      c16: evt.target.value
    //}, () => {console.log("C16" + this.state.c16)});
    }, () => this.checkManotazo());
  }
  updC17(evt) {
    this.setState({
      c17: evt.target.value
    //}, () => {console.log("C17" + this.state.c17)});
    }, () => this.checkBotellazo());
  }
  updC18(evt) {
    this.setState({
      c18: evt.target.value
    //}, () => {console.log("C18" + this.state.c18)});
    }, () => this.checkBotellazo());
  }
  updC19(evt) {
    this.setState({
      c19: evt.target.value
    //}, () => {console.log("C19" + this.state.c19)});
    }, () => this.checkBotellazo());
  }
  updC20(evt) {
    this.setState({
      c20: evt.target.value
    //}, () => {console.log("C20" + this.state.c20)});
    }, () => this.checkBotellazo());
  }
  updC21(evt) {
    this.setState({
      c21: evt.target.value
    //}, () => {console.log("C21" + this.state.c21)});
    }, () => this.checkBotellazo());
  }
  updC22(evt) {
    this.setState({
      c22: evt.target.value
    //}, () => {console.log("C22" + this.state.c22)});
    }, () => this.checkArguendazo());
  }
  updC23(evt) {
    this.setState({
      c23: evt.target.value
    //}, () => {console.log("C23" + this.state.c23)});
    }, () => this.checkArguendazo());
  }
  updC24(evt) {
    this.setState({
      c24: evt.target.value
    //}, () => {console.log("C24" + this.state.c24)});
    }, () => this.checkArguendazo());
  }
  updC25(evt) {
    this.setState({
      c25: evt.target.value
    //}, () => {console.log("C25" + this.state.c25)});
    }, () => this.checkArguendazo());
  }
  updC26(evt) {
    this.setState({
      c26: evt.target.value
    //}, () => {console.log("C26" + this.state.c26)});
    }, () => this.checkArguendazo());
  }
  updC27(evt) {
    this.setState({
      c27: evt.target.value
    //}, () => {console.log("C27" + this.state.c27)});
    }, () => this.checkArguendazo());
  }
  updC28(evt) {
    this.setState({
      c28: evt.target.value
    //}, () => {console.log("C28" + this.state.c28)});
    }, () => this.checkSablazo());
  }
  updC29(evt) {
    this.setState({
      c29: evt.target.value
    //}, () => {console.log("C29" + this.state.c29)});
    }, () => this.checkManazo());
  }
  updC30(evt) {
    this.setState({
      c30: evt.target.value
    //}, () => {console.log("C30" + this.state.c30)});
    }, () => this.checkCabezazo());
  }
  updC31(evt) {
    this.setState({
      c31: evt.target.value
    //}, () => {console.log("C31" + this.state.c31)});
    }, () => this.checkTimbrazo());
  }
  updC32(evt) {
    this.setState({
      c32: evt.target.value
    //}, () => {console.log("C32" + this.state.c32)});
    }, () => this.checkCanonazo());
  }
  updC33(evt) {
    this.setState({
      c33: evt.target.value
    //}, () => {console.log("C33" + this.state.c33)});
    }, () => this.checkSablazo());
  }
  updC34(evt) {
    this.setState({
      c34: evt.target.value
    //}, () => {console.log("C34" + this.state.c34)});
    }, () => this.checkCabezazo());
  }
  updC35(evt) {
    this.setState({
      c35: evt.target.value
    //}, () => {console.log("C35" + this.state.c35)});
    }, () => this.checkSablazo());
  }
  updC36(evt) {
    this.setState({
      c36: evt.target.value
    //}, () => {console.log("C36" + this.state.c36)});
    }, () => this.checkManazo());
  }
  updC37(evt) {
    this.setState({
      c37: evt.target.value
    //}, () => {console.log("C37" + this.state.c37)});
    }, () => this.checkCabezazo());
  }
  updC38(evt) {
    this.setState({
      c38: evt.target.value
    //}, () => {console.log("C38" + this.state.c38)});
    }, () => this.checkTimbrazo());
  }
  updC39(evt) {
    this.setState({
      c39: evt.target.value
    //}, () => {console.log("C39" + this.state.c39)});
    }, () => this.checkCanonazo());
  }
  updC40(evt) {
    this.setState({
      c40: evt.target.value
    //}, () => {console.log("C40" + this.state.c40)});
    }, () => this.checkCabezazo());
  }
  updC41(evt) {
    this.setState({
      c41: evt.target.value
    //}, () => {console.log("C41" + this.state.c41)});
    }, () => this.checkTimbrazo());
  }
  updC42(evt) {
    this.setState({
      c42: evt.target.value
    //}, () => {console.log("C42" + this.state.c42)});
    }, () => this.checkCanonazo());
  }
  updC43(evt) {
    this.setState({
      c43: evt.target.value
    //}, () => {console.log("C43" + this.state.c43)});
    }, () => this.checkTimbrazo());
  }
  updC44(evt) {
    this.setState({
      c44: evt.target.value
    //}, () => {console.log("C44" + this.state.c44)});
    }, () => this.checkCanonazo());
  }

  toogleShow = () => {
    this.setState({show:!this.state.show})
  }

  render() {
    if (this.state.show) {
      if (this.state.win) {
        return(
          <div align="center">
            <img src="https://media.giphy.com/media/1GTZA4flUzQI0/giphy.gif" alt="YOU WIN !!!!"/>
            <br/><button onClick={this.toogleShow}>Hide</button>
          </div>
        );
      } else {
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
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC1(evt)}/>
                  </td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td colSpan="2"></td>
                  <td id="bckgClass">p</td>
                  <td colSpan="3"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC2(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">g</td>
                  <td></td>
                  <td id="bckgClass">p</td>
                  <td colSpan="3"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC3(evt)}/>
                  </td>
                  <td colSpan="3"></td>
                </tr>
                <tr>
                  <td colSpan="3"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC4(evt)}/>
                  </td>
                  <td colSpan="2"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC5(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC6(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC7(evt)}/>
                  </td>
                  <td colSpan="2"></td>
                  <td id="bckgClass">n</td>
                  <td colSpan="4"></td>
                </tr>
                <tr>
                  <td colSpan="4"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC8(evt)}/>
                  </td>
                  <td></td>
                   <td id="bckgClass">r</td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC9(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC10(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC11(evt)}/>
                  </td>
                  <td colSpan="5"></td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC12(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC13(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC14(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC15(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC16(evt)}/>
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
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC17(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC18(evt)}/>
                  </td>
                  <td id="bckgClass">t</td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC19(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC20(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC21(evt)}/>
                  </td>
                  {/*<td colSpan="7"></td>*/}
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC22(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC23(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC24(evt)}/>
                  </td>
                  <td id="bckgClass">ü</td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC25(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC26(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC27(evt)}/>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6"></td>
                  <td colSpan="7"></td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC28(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC29(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC30(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC31(evt)}/>
                  </td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC32(evt)}/>
                  </td>
                  <td colSpan="6"></td>
                </tr>
                <tr>
                  <td colSpan="4"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC33(evt)}/>
                  </td>
                  <td></td>
                   <td id="bckgClass">a</td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC34(evt)}/>
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
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC35(evt)}/>
                  </td>
                  <td colSpan="2"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC36(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC37(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC38(evt)}/>
                  </td>
                  <td colSpan="2"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC39(evt)}/>
                  </td>
                  <td colSpan="4"></td>
                </tr>
                <tr>
                  <td colSpan="2"></td>
                  <td id="bckgClass">s</td>
                  <td colSpan="5"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC40(evt)}/>
                  </td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC41(evt)}/>
                  </td>
                  <td colSpan="3"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC42(evt)}/>
                  </td>
                  <td colSpan="3"></td>
                </tr>
                <tr>
                  <td colSpan="8"></td>
                  <td id="bckgClass">c</td>
                  <td></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC43(evt)}/>
                  </td>
                  <td colSpan="4"></td>
                  <td id="bckgClass">
                    <input type="text" id="textBoxCrg" maxLength="1" onChange={evt => this.updC44(evt)}/>
                  </td>
                  <td colSpan="2"></td>
                </tr>
              </tbody>
            </table>

            <br/><button onClick={this.toogleShow}>Hide</button>
          </div>
        );
      }
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
