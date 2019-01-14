import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import classes from './index.less';

class PhoneBook extends Component {

  static propTypes = {

	}

    render() {

        return (
          <div className={classes.phoneBook}>
            InnerText
          </div>
    )
  }
}

export default PhoneBook;
