import React from "react";
import Header from './Header'
import "../css/Punt.css";

class Punt extends React.Component {
  render() {
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
                  <h2>PUNTO</h2>
                  * Alto Total.<br/><br/>
                  * Cambio de sujeto (¿quién?) y de verbo conjugado.
                </div>
              </td>
              <td rowspan='2' style={{width: '50%'}}>
                <img alt="Oops, algo salió mal" style={{width: '95%', height: 500, padding: '0 15px', float: 'left', borderRadius:'50px'}} src="./img/punt/people.jpg"/>
              </td>
              <td style={{width: '25%'}}>
                <div className='speech-bubbleRight'  style={{textAlign: "left"}}>
                  <h2>COMA</h2>
                  * Pausa.<br/><br/>
                  * Dentro de una misma idea (mismo sujeto y mismo verbo o acción) separar aclaraciones y circunstancias del verbo: cómo, cuándo, cuánto, dónde, por qué, para qué, con quién, sobre qué.
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='speech-bubbleLeft2' style={{textAlign: "left"}}>
                  <h2>PUNTO Y COMA</h2>
                  * Alto y sigue...<br/><br/>
                  *Mismo sujeto (¿quién? o de quién se habla), pero cambia el verbo/acción: el mismo sujeto realiza diferentes acciones.
                </div>
              </td>
              <td>
                <div className='speech-bubbleRight2' style={{textAlign: "left"}}>
                  <h2>DOS PUNTOS</h2>
                  =<br/><br/>
                  * o sea, es decir (conjunción explicativa).<br/><br/>
                  * También indican pertenencia, dentro de, para enumerar o enlistar los elementos de una lista o conjunto.
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Punt;
