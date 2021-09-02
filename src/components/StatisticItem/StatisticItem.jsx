import React from "react";

const StatisticItem = ({ content, data }) => {
  return (
    <p>
      {content}: {data}
      {content === "Positive feedback" ? "%" : ""}
    </p>
  );
};
export default StatisticItem;
