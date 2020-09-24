import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./index.css";
// import App from "./main/App";
// import AnotherPage from "./anotherPage/AnotherPage";
import loadable from "@loadable/component";
import PaginationItem from "./components/PaginationItem/PaginationItem";

import * as serviceWorker from "./serviceWorker";

const paginationLength = 4;

const LazyComponent = (path) =>
  lazy(async () => {
    return import(/* webpackChunkName: "[request]" */ `./${path}`);
  });

const AnotherLazyComponent = LazyComponent("anotherPage/AnotherPage");
const MainLazyComponent = LazyComponent("main/App");

// const AsyncPage = async (path) => {
//   const asyncModule = await import(`./${path}`);
//   console.log(asyncModule);
// };

// const LoadablePage = loadable((props) => {
//   // console.log(props);
//   return import(/* webpackChunkName: "[request]" */ `./${props.page}`);
// });

class Index extends React.Component {
  state = { page: 0 };

  handleOnChangePage = () => {
    // window.location = "http://fecore.net.ua/books/rq7s2k-react/lesson-07/";
    // window.history.pushState({}, "", this.state.page ? "/" : "/pseudoPage");
    // window.history.replaceState();
    this.setState({ page: this.state.page ? 0 : 1 });
  };

  render() {
    const { page } = this.state;
    const array = new Array(paginationLength).fill(0);

    return (
      <BrowserRouter>
        {/* <button onClick={() => AsyncPage("anotherPage/AnotherPage")}>
          Another Page async load
        </button>
        <button onClick={() => AsyncPage("main/App")}>
          Main page async load
        </button> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              {({ location }) => <MainLazyComponent location={location} />}
            </Route>
            <Route path="/another-page">
              {({ location }) => <AnotherLazyComponent location={location} />}
            </Route>
            {/* <Route exact path="/">
              {({ location }) => (
                <LoadablePage
                  key="main/App"
                  page="main/App"
                  location={location}
                />
              )}
            </Route>
            <Route path="/another-page">
              {({ location }) => (
                <LoadablePage
                  key="anotherPage/AnotherPage"
                  page="anotherPage/AnotherPage"
                  location={location}
                />
              )}
            </Route> */}
          </Switch>
        </Suspense>
        {array.map((_, index) => (
          <PaginationItem url={`/?page=${index + 1}`} name={index + 1} />
        ))}
        <Link style={{ marginRight: 20 }} to="/">
          to Main
        </Link>
        <Link to="/another-page">to Another page</Link>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
