import React, { Fragment } from "react";

export default () => (
  <Fragment>
    <h3 className="margin-bottom">About</h3>
    <p className="margin-bottom">
      Rainbo allows you to generate variants from base colors. Then, using those
      variants, you can ensure they are accessible when paired together as
      background and foreground colors.
    </p>
    <p>
      Rainbo was created using <a href="https://reactjs.org/">React</a>,{" "}
      <a href="https://github.com/bgrins/TinyColor">tinycolor</a>,{" "}
      <a href="https://www.react-spring.io/">react-spring</a>,{" "}
      <a href="https://casesandberg.github.io/react-color/">react-color</a>, and{" "}
      <a href="https://github.com/reactjs/react-tabs">react-tabs</a>.
    </p>
  </Fragment>
);
