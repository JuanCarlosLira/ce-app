import React from "react";
import Score0 from './Score0'
import Score1 from './Score1'
import Score2 from './Score2'

class Scores extends React.Component {
  render() {
    var my_ret = <Score1 score={this.props.score} maxScore={this.props.maxScore}/>

    if (this.props.score >= this.props.maxScore) {
       my_ret = <Score0 score={this.props.score} maxScore={this.props.maxScore}/>
    }
    else if (this.props.score/this.props.maxScore <= 0.4) {
       my_ret = <Score2 score={this.props.score} maxScore={this.props.maxScore}/>
    }
    return(
      <div>
        {my_ret}
      </div>
    )
  }
}

export default Scores;
