import React, { Component } from "react";

import s from "./App.module.css";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import StatisticsList from "../StatisticsList/StatisticsList";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  HandlerClick = (e) => {
    if (e.target.textContent === "Good") {
      this.setState((prevState) => {
        return {
          good: prevState.good + 1,
        };
      });
    }
    if (e.target.textContent === "Neutral") {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    }
    if (e.target.textContent === "Bad") {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positiv = (total ? (this.state.good / total) * 100 : 0).toFixed(2);
    return positiv;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.HandlerClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <StatisticsList
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
