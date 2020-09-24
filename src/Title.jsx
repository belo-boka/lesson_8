import React, { Component } from "react";
import PropTypes from "prop-types";

class Title extends Component {
  render() {
    const { title } = this.props;
    return <h5>{title}</h5>;
  }
}

export default Title;
