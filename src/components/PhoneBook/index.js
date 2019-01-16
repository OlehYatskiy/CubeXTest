import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import UsersList from './UsersList';
import UserCard from './UserCard';

import classes from './index.less';

class PhoneBook extends Component {

  state = {
    userCard: false
  }

  static propTypes = {

	}

  toggleUserCard = (id) => {
    this.setState({
      userCard: !!id
    });
    // if (id) {
    //   this.setState({
    //     userCard: true
    //   });
    // } else {
    //
    // }
  }

    render() {
      const { userCard } = this.state;

        return (
          <div className={classes.phoneBook}>
            <UsersList toggleUserCard={this.toggleUserCard} />
              {
                userCard &&
                <UserCard toggleUserCard={this.toggleUserCard} />
              }
          </div>
    )
  }
}

export default PhoneBook;
