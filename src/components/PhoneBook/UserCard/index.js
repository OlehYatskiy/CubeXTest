import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import { Card, Image, Segment, Button } from 'semantic-ui-react'

// import classes from './index.less';

class UserCard extends Component {

  static propTypes = {

	}

    render() {

      return (
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>Current Name</Card.Header>
            <Segment.Group>
              <Segment>current phone number</Segment>
              <Segment>current email</Segment>
              <Segment>current company</Segment>
            </Segment.Group>
            <Button floated='right' content='Edit' icon='pencil alternate' labelPosition='left'/>
          </Card.Content>
        </Card>
      )}
}

export default UserCard;
