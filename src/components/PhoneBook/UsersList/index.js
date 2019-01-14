import React, { Component } from 'react';
import { string } from "prop-types";
import { List, Image } from 'semantic-ui-react';

import classNames from "classnames";

// import classes from './index.less';

class UsersList extends Component {

  static propTypes = {

	}

    render() {

        return (
          <List selection verticalAlign='middle'>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
              <List.Content>
                <List.Header>Helen</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
              <List.Content>
                <List.Header>Christian</List.Header>
              </List.Content>
            </List.Item>
          </List>
    )
  }
}

export default UsersList;
