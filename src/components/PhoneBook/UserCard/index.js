import React, { Component, Fragment } from 'react';
import { string } from "prop-types";
import { connect } from "react-redux";

import * as userActions from "../../../modules/user/user.actions";

import classNames from "classnames";
import { Card, Image, Segment, Button, Input } from 'semantic-ui-react'

// import classes from './index.less';

class UserCard extends Component {

  state = {
    editToggle: false,
    firstName: '',
    lastName: '',
    avatarUrl: '',
    phoneNum: '',
    email: '',
    company: ''
  }

  static propTypes = {

	}

  onEditButtonClick = () => {
    this.setState({
      editToggle: true
    });
  }

  onCancelButtonClick = () => {
    this.setState({
      editToggle: false,
      firstName: '',
      lastName: '',
      avatarUrl: '',
      phoneNum: '',
      email: '',
      company: ''
    });
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onApplyButtonClick = () => {
    this.props.myAddNewUser({
      firstName: this.state.firstName,
  		lastName: this.state.lastName,
  		avatarUrl: this.state.avatarUrl,
      phoneNum: this.state.phoneNum,
      email: this.state.email,
      company: this.state.company,
    });
    this.onCancelButtonClick();
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
                <Button
                  onClick={this.onEditButtonClick}
                  floated='right'
                  content='Edit'
                  icon='pencil alternate'
                  labelPosition='left'
                  />
              </Fragment>
              :
              <Segment.Group>
                <Segment basic floated='right'>
                  Firstname:
                  <Input onChange={this.onInputChange} name='firstName' />
                </Segment>
                <Segment basic floated='right'>
                  Lastname:
                  <Input onChange={this.onInputChange} name='lastName' />
                </Segment>
                <Segment basic floated='right'>
                  AvatarUrl:
                  <Input onChange={this.onInputChange} name='avatarUrl' />
                </Segment>
                <Segment basic floated='right'>
                  Phone number:
                  <Input onChange={this.onInputChange} name='phoneNum' />
                </Segment>
                <Segment basic floated='right'>
                  Email:
                  <Input onChange={this.onInputChange} name='email' />
                </Segment>
                <Segment basic floated='right'>
                  Company:
                  <Input onChange={this.onInputChange} name='company' />
                </Segment>
                <Segment basic floated='right'>
                  <Button onClick={this.onCancelButtonClick} basic floated='left' content='Cancel' />
                  <Button onClick={this.onApplyButtonClick} content='Apply' color='green' />
                </Segment>
              </Segment.Group>
            }
          </Card.Content>
        </Card>
      )}
}

function mapStateToProps({ user }) {
	return {

	};
}

export default connect(mapStateToProps, { ...userActions })(UserCard);
