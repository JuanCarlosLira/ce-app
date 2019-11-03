import React from "react";
import "../css/Score0.css";

class Score2 extends React.Component {
  render() {
    return(
      <div style={{width: '100%', textAlign: 'center'}}>
        <div className="imageCard2">
          <div className="textCard">
            <h2>{this.props.score}/{this.props.maxScore}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Score2;
