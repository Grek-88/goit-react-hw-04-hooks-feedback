import React, { useState } from "react";

import s from "./App.module.css";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import StatisticsList from "../StatisticsList/StatisticsList";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function HandlerClick(e) {
    if (e.target.textContent === "Good") {
      setGood((prevGood) => prevGood + 1);
    }
    if (e.target.textContent === "Neutral") {
      setNeutral((prevNesetNeutral) => prevNesetNeutral + 1);
    }
    if (e.target.textContent === "Bad") {
      setBad((prevBsetBad) => prevBsetBad + 1);
    }
  }

  function countTotalFeedback() {
    const total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const positiv = (total ? (good / total) * 100 : 0).toFixed(2);
    return positiv;
  }

  return (
    <div className={s.App}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={HandlerClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <StatisticsList
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
