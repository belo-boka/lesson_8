import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import styles from "./loadingHoc.module.scss";

class LoadingHOC extends Component {
  state = { data: null, isLoading: true };

  async fetchData() {
    try {
      const data = await this.props.getData(this.props.url);
      this.setState({ data: data, isLoading: false });
    } catch (err) {
      this.setState({ error: err });
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps) {
    const { url: prevUrl } = prevProps;
    const { url: currentUrl } = this.props;
    if (currentUrl !== prevUrl) {
      this.fetchData();
    }
  }

  render() {
    const {
      props: { component: Component, ...rest },
      state: { data, isLoading },
    } = this;

    return (
      <div>
        {isLoading && <p>Загрузка...</p>}
        <div className={isLoading ? styles.hidden : ""}>
          <Component data={data} {...rest} />
        </div>
      </div>
    );
  }
}

export default LoadingHOC;
