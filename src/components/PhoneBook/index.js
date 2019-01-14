import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import UsersList from './UsersList';
import UserCard from './UserCard';

import classes from './index.less';

class PhoneBook extends Component {

  static propTypes = {

	}

    render() {

        return (
          <div className={classes.phoneBook}>
            <UsersList />
            <UserCard />
          </div>
    )
  }
}

export default PhoneBook;
