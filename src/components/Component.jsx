import {HOC} from "./HOC";

import React from "react";

const Component = (props) => {
    const {string} = props
  return <div>{string}</div>;
}

export default HOC(Component);
