import React, { Component, Fragment } from 'react';
import { string } from "prop-types";
import { connect } from "react-redux";

import EditUserForm from './EditUserForm';

import * as userActions from "../../../modules/user/user.actions";

import classNames from "classnames";
import { Card, Image, Segment, Button, Input } from 'semantic-ui-react'

// import classes from './index.less';

class UserCard extends Component {

  state = {
    showEditUserForm: false,
    firstName: '',
    lastName: '',
    avatarUrl: '',
    phoneNum: '',
    email: '',
    company: ''
  }

  static propTypes = {

	}

  onShowEditUserForm = () => {
    this.setState({
      showEditUserForm: !this.state.showEditUserForm
    });
  }

    render() {
      const { showEditUserForm } = this.state;

      return (
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Card.Content>
            {
              showEditUserForm === false ?
              <Fragment>
                <Card.Header>Current Name</Card.Header>
                <Segment.Group>
                  <Segment>current phone number</Segment>
                  <Segment>current email</Segment>
                  <Segment>current company</Segment>
                </Segment.Group>
                <Button
                  onClick={this.onShowEditUserForm}
                  floated='right'
                  content='Edit'
                  icon='pencil alternate'
                  labelPosition='left'
                  />
              </Fragment>
              :
              <EditUserForm renderEditUserForm={this.onShowEditUserForm} />
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
