import React, { Component } from "react";
import PropTypes from "prop-types";

class Info extends Component {
  render() {
    // const {
    //   context: { data },
    // } = this;
    const {
      props: { data },
    } = this;

    return (
      <div>
        {data &&
          data.map(({ title, url, author }, index) => {
            const titleBlock = <h5>{title}</h5>;
            const urlBlock = <div>{url} </div>;
            const authorBlock = <div>{author}</div>;
            return (
              <div>
                {titleBlock}
                {urlBlock}
                {authorBlock}
              </div>
            );
          })}
      </div>
    );
  }
}

// Info.contextType = LoadingProvider;

export default Info;
