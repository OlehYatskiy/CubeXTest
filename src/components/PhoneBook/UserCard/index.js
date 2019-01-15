import React, { Component, Fragment } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import { Card, Image, Segment, Button, Input } from 'semantic-ui-react'

// import classes from './index.less';

class UserCard extends Component {

  state = {
    editToggle: true
  }

  static propTypes = {

	}

    render() {
      const { editToggle } = this.state;

      return (
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Card.Content>
            {
              editToggle === false ?
              <Fragment>
                <Card.Header>Current Name</Card.Header>
                <Segment.Group>
                  <Segment>current phone number</Segment>
                  <Segment>current email</Segment>
                  <Segment>current company</Segment>
                </Segment.Group>
                <Button floated='right' content='Edit' icon='pencil alternate' labelPosition='left'/>
              </Fragment>
              :
              <Segment.Group>
                <Segment basic floated='right'>
                  Firstname:
                  <Input></Input>
                </Segment>
                <Segment basic floated='right'>
                  Lastname:
                  <Input />
                </Segment>
                <Segment basic floated='right'>
                  Photo:
                  <Input />
                </Segment>
                <Segment basic floated='right'>
                  Phone number:
                  <Input />
                </Segment>
                <Segment basic floated='right'>
                  Email:
                  <Input />
                </Segment>
                <Segment basic floated='right'>
                  Company:
                  <Input />
                </Segment>
                <Segment basic floated='right'>
                  <Button basic floated='left' content='Cancel' />
                  <Button content='Apply' color='green' />
                </Segment>
              </Segment.Group>
            }
          </Card.Content>
        </Card>
      )}
}

export default UserCard;
