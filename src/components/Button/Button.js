import React from "react";

const Button = props => <button {...props} />;

Button.defaultProps = {
  type: "button",
  className: "btn"
};

export default Button;
