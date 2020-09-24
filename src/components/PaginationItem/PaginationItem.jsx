import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./paginationItem.module.scss";

class PaginationItem extends Component {
  render() {
    const {
      props: { name, url },
    } = this;

    return (
      <Link className={styles.item} to={url}>
        {name}
      </Link>
    );
  }
}

export default PaginationItem;
