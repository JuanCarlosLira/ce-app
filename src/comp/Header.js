import React from "react";
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return(
      <div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}} className="header">
          <div className="title-box">
            <h2>{this.props.exerciseHeader}</h2>
          </div>
          <img alt="Oops, algo salió mal" style={{width: 330, height: 155, marginTop: 'auto', marginBottom: 'auto', marginRight: '10%'}} src="./img/logo.PNG"/>
        </div>
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 100}}>
          <div className="instruction-box" style={{height: 120}}>
            <p style={{width: '70%', textAlign: 'center'}}>
              {this.props.instructions}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
