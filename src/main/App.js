import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { parse } from "query-string";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
// import LoadingProvider from "./LoadingProvider";
import Info from "../components/Info/Info";
import LoadingHOC from "../components/LoadingHOC/LoadingHOC";
// import ComponentWithLoad from "./ComponentWithLoad";

const getData = async (url) => {
  const response = await axios.get(url);
  return response.data.hits;
};

class App extends React.Component {
  state = { page: 1 };
  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location: currentLocation } = this.props;
    const { page: prevPage } = parse(prevLocation.search);
    const { page: currentPage } = parse(currentLocation.search);
    if (prevPage !== currentPage) {
      this.setState({ page: currentPage });
    }
  }
  render() {
    const { page } = this.state;
    return (
      <ErrorBoundary>
        <LoadingHOC
          getData={getData}
          component={Info}
          url={`https://hn.algolia.com/api/v1/search?query=react&page=${page}`}
        />
      </ErrorBoundary>
    );
  }
}

export default App;
