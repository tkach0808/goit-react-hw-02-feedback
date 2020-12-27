import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function Feedback({ onLeaveFeedback }) {
  return (
    <div className={s.buttonWrp}>
      <button
        type="button"
        name="good"
        className={s.feedbackButton}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={s.feedbackButton}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={s.feedbackButton}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
