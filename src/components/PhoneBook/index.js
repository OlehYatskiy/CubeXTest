import React, { Component } from 'react';

import UsersList from './UsersList';
import UserCard from './UserCard';

import { Grid, Visibility } from 'semantic-ui-react'
import classes from './index.less';

class PhoneBook extends Component {

  state = {
    userCard: false,
    width: 768
  }

  toggleUserCard = (id) => {
    this.setState({
      userCard: id === false ? id : true
    });
  }

  handleUpdate = (e, { calculations }) => this.setState({ width: calculations.width });

    render() {
      const { userCard, width } = this.state;

        return (
          <Visibility onUpdate={this.handleUpdate}>
            <Grid stretched columns="equal" className={classes.phoneBook}>
              <Grid.Column stretched mobile={16} tablet={6} computer={5}>
                {
                  userCard && (width < 768 ) ?
                  <UserCard toggleUserCard={this.toggleUserCard} />
                  :
                  <UsersList toggleUserCard={this.toggleUserCard} />
                }
              </Grid.Column>
              <Grid.Column stretched only="tablet computer">
                {
                  userCard && <UserCard toggleUserCard={this.toggleUserCard} />
                }
              </Grid.Column>
            </Grid>
          </Visibility>
    )
  }
}

export default PhoneBook;
