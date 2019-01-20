import React, { Component } from 'react';
import { object, string, func } from "prop-types";
import {
  List,
  Image,
  Content,
  Header,
  Button,
  Container
} from 'semantic-ui-react';

class UserListItem extends Component {

  static propTypes = {
    userData: object,
		index: string,
		onUserClick: func,
    onDeleteClick: func
	}

  onUserItemClick = (index) => (event) => {
		event.stopPropagation();
		this.props.onUserClick(index);
	}

  onDeleteButtonClick = (index) => (event) => {
    event.stopPropagation();
    this.props.onDeleteClick(index); 
  }

    render() {
      const { userData, index } = this.props;

        return (
          <List.Item onClick={this.onUserItemClick(index)}>
            <Image avatar src={userData.avatarUrl} />
            <List.Content>
              <List.Header>{`${userData.firstName} ${userData.lastName}`}</List.Header>
            </List.Content>
            <Button onClick={this.onDeleteButtonClick(index)} floated='right' icon='delete'/>
          </List.Item>
    )
  }
}

export default UserListItem;
