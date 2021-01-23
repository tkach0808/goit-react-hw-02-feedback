import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonWrp}>
      {options.map((button) => {
        return (
          <button
            key={button}
            type="button"
            name={button}
            className={s.feedbackButton}
            onClick={onLeaveFeedback}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
