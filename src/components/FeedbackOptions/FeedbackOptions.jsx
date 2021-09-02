import React, { Component } from "react";

import BtnFeedback from "../BtnFeedback/BtnFeedback";

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <BtnFeedback text="Good" onClick={this.props.onLeaveFeedback} />
        <BtnFeedback text="Neutral" onClick={this.props.onLeaveFeedback} />
        <BtnFeedback text="Bad" onClick={this.props.onLeaveFeedback} />
      </>
    );
  }
}

export default FeedbackOptions;
