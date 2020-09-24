import React from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
// import Image from './Image';

const LazyImage = React.lazy(() => import("./Image"));

class AnotherPage extends React.Component {
  state = { showImage: false };

  handleShowImage = () => {
    this.setState({ showImage: !this.state.showImage });
  };

  render() {
    const { showImage } = this.state;
    return (
      <ErrorBoundary>
        <h3>AnotherPage</h3>
        {showImage && <LazyImage />}
        <button onClick={this.handleShowImage}>
          {showImage ? "Hide image" : "Show image"}
        </button>
      </ErrorBoundary>
    );
  }
}

export default AnotherPage;
