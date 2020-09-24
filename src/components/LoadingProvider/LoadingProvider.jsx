import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Context from "../LoadingConsumer/Context";

class Loading extends Component {
  state = { data: null, isLoading: true };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      this.setState({ data: response.data.hits, isLoading: false });
    } catch (err) {
      this.setState({ error: err });
    }
  }

  render() {
    const {
      props: { children },
      state: { data, isLoading },
    } = this;

    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    console.log(children);

    return <Context.Provider value={{ data }}>{children}</Context.Provider>;
  }
}

export default Loading;
