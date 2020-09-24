import React from "react";

import Context from "./Context";

const Consumer = (Component) => (props) => {
  return (
    <Context.Consumer>
      {({ data }) => <Component data={data} />}
    </Context.Consumer>
  );
};

export default Consumer;
