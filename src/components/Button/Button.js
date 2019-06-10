import React from "react";

const Button = props => <button {...props} />;

Button.defaultProps = {
  type: "button"
};

export default Button;
