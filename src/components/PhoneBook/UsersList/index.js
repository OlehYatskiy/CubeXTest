import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, array, func } from "prop-types";
import _ from "lodash";
import {
  List,
  Container,
  Input,
  Button,
  Grid,
  Segment,
  Loader
} from 'semantic-ui-react';

import UserListItem from '../UserListItem';

import * as userActions from "../../../modules/user/user.actions";


class UsersList extends Component {

  state = {
		searchInput: "",
    loader: false
	}

  static propTypes = {
    usersData: array,
    fetchUsers: func,
    selectUser: func,
    toggleUserCard: func,
    removeUser: func,
	}

  componentDidMount() {
    this.props.fetchUsers();
  }

  onInputChange = (event) => {
		this.setState({
			searchInput: event.target.value
		})
	}

  onUserClick = (index) => {
    this.props.selectUser(index);
    this.props.toggleUserCard(index);
  }

  onDeleteClick = (index) => {
    this.props.removeUser(index);
    this.props.fetchUsers();
  }

    render() {
      const { usersData } = this.props;
      const { searchInput, loader } = this.state;

      const regSearchInput = new RegExp(searchInput, 'i');
      const filteredValue = searchInput === "" ?
        usersData
        :
        usersData.filter(element =>
          (element.firstName.search(regSearchInput) !== -1) ||
          (element.lastName.search(regSearchInput) !== -1) ||
          (element.phone.search(regSearchInput) !== -1)
        );

        return (
          <Grid centered>
            <Grid.Row stretched>
              <Grid.Column widescreen={8} mobile={12} computer={8}>
                <Grid centered>
                  <Grid.Column widescreen={8} mobile={16} computer={8}>
                    <Input
                      onChange={this.onInputChange}
                      icon={{ name: 'search', circular: true, link: true }}
                      placeholder='Search...'
                      fluid
                       >
                    </Input>
                  </Grid.Column>
                </Grid>
                <List selection divided verticalAlign='middle'>
                  <Loader active={loader} />
                  {
                    filteredValue.map((user) => {
                      return <UserListItem key={user.id}
                          onUserClick={this.onUserClick}
                          onDeleteClick={this.onDeleteClick}
                          index={user.id}
                          userData={user}
                        />
                    })
                  }
                </List>
                <Container textAlign='center'>
                  <Button onClick={this.props.toggleUserCard}
                    circular
                    basic
                    icon='plus'
                    />
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
    )
  }
}

function mapStateToProps({ user, customUser }) {
	return {
    selectUser: user.selectUser,
    usersData: customUser.users
	};
}

export default connect(mapStateToProps, { ...userActions })(UsersList);
