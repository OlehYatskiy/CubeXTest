import React, { Component } from 'react';
import { object, string, func } from "prop-types";
import {
  List,
  Image,
  Content,
  Header,
  Button
} from 'semantic-ui-react';

class UserListItem extends Component {

  static propTypes = {
    userData: object,
		index: string,
		onUserClick: func,
	}

  onUserItemClick = (index) => (event) => {
		event.stopPropagation();
		this.props.onUserClick(index);
	}

    render() {
      const { userData, index } = this.props;

        return (
          <List.Item onClick={this.onUserItemClick(index)}>
            <Image avatar src={userData.avatarUrl} />
            <List.Content>
              <List.Header>{`${userData.firstName} ${userData.lastName}`}</List.Header>
            </List.Content>
            <Button floated='right' icon='delete'/>
          </List.Item>
    )
  }
}

export default UserListItem;
