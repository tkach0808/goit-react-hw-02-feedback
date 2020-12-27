import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.modul.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statisticSection">
    <p className="statistic">Good = {good}</p>
    <p className="statistic">Neutral = {neutral}</p>
    <p className="statistic">Bad = {bad}</p>
    <p className="statistic">Total = {total}</p>
    {positivePercentage === 0 ? null : (
      <p className="statistic">Positiv Feedback = {positivePercentage}%</p>
    )}
  </div>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
