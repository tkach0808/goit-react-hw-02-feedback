import React from "react";
import PropTypes from "prop-types";

export default Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
