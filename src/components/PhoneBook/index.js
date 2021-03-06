import React, { Component } from 'react';

import UsersList from './UsersList';
import UserCard from './UserCard';

import { Grid } from 'semantic-ui-react'
import classes from './index.less';

class PhoneBook extends Component {

  state = {
    userCard: false
  }

  toggleUserCard = (id) => {
    this.setState({
      userCard: id === false ? id : true
    });
  }

    render() {
      const { userCard } = this.state;

        return (
          <Grid centered className={classes.phoneBook}>
            <Grid.Column mobile={16}>
              {
                 userCard ?
                 <UserCard toggleUserCard={this.toggleUserCard} />
                 :
                 <UsersList toggleUserCard={this.toggleUserCard} />
              }
            </Grid.Column>
          </Grid>
    )
  }
}

export default PhoneBook;
