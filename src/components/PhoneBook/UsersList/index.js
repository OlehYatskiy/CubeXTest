import React, { Component } from 'react';
import { string } from "prop-types";
import {
  List,
  Image,
  Container,
  Input,
  Button
} from 'semantic-ui-react';

import classNames from "classnames";

// import classes from './index.less';

class UsersList extends Component {

  static propTypes = {

	}

    render() {

        return (
          <Container>
            <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...' >
              {/*Search input value*/}
            </Input>
            <List selection verticalAlign='middle'>
              <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <List.Content>
                  <List.Header>Helen</List.Header>
                </List.Content>
                <Button floated='right' icon='delete'/>
              </List.Item>
              <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                <List.Content>
                  <List.Header>Christian</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Container>
    )
  }
}

export default UsersList;
