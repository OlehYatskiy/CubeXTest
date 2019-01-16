import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, array, func } from "prop-types";
import {
  List,
  Image,
  Container,
  Input,
  Button
} from 'semantic-ui-react';

import UserListItem from '../UserListItem';

import * as userActions from "../../../modules/user/user.actions";

import classNames from "classnames";

// import classes from './index.less';

class UsersList extends Component {

  state = {
		searchInput: ""
	}

  static propTypes = {
    usersData: array,
    getAllUsers: func,
    selectUser: func,
    toggleUserCard: func,
	}

  componentDidMount() {
    this.props.getAllUsers();
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

    render() {
      const { usersData } = this.props;
      const { searchInput } = this.state;

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
          <Container>
            <Input
              onChange={this.onInputChange}
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...' >
            </Input>
            <List selection divided verticalAlign='middle'>
              {
                filteredValue.map((user) => {
                  return <UserListItem key={user.id}
                      onUserClick={this.onUserClick}
                      index={user.id}
                      userData={user}
                    />
                })
              }
            </List>
          </Container>
    )
  }
}

function mapStateToProps({ user }) {
	return {
		usersData: user.users,
    selectUser: user.selectUser
	};
}

export default connect(mapStateToProps, { ...userActions })(UsersList);
