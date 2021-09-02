import React from "react";
import PropTypes from "prop-types";

import StatisticItem from "../StatisticItem/StatisticItem";

export default function StatisticsList({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <StatisticItem content="Good" data={good} />
      <StatisticItem content="Neutral" data={neutral} />
      <StatisticItem content="Bad" data={bad} />
      <StatisticItem content="Total" data={total} />
      <StatisticItem content="Positive feedback" data={positivePercentage} />
    </>
  );
}

StatisticItem.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
