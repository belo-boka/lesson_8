import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  // componentDidCatch(error, info) {
  //   this.setState({ hasError: true });
  // }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    if (this.state.hasError) {
      return <div>Что-то пошло не так</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
