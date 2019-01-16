import React, { Component, Fragment } from 'react';
import { string, array, func } from "prop-types";
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
    selectUserID: string,
    usersData: array,
    unselectUser: func,
    toggleUserCard: func
	}

  componentWillUnmount() {
    this.props.unselectUser();
    console.log(this.props.selectUserID);
  }

  onShowEditUserForm = () => {
    this.setState({
      showEditUserForm: !this.state.showEditUserForm
    });
  }

  onHideUserCard = () => {
    //this.props.unselectUser();
    this.props.toggleUserCard();
  }

    render() {
      const { usersData, selectUserID } = this.props;
      const { showEditUserForm } = this.state;
      const selectedUserDataIndex = usersData.findIndex((user) => {
  			return user.id === selectUserID;
  		});

      return (
        <Card>
          <Image fluid src={usersData[selectedUserDataIndex].avatarUrl} />
          <Card.Content>
            {
              showEditUserForm === false ?
              <Fragment>
                <Card.Header>
                  {
                    `${usersData[selectedUserDataIndex].firstName}
                     ${usersData[selectedUserDataIndex].lastName}`
                  }
                </Card.Header>
                <Segment.Group>
                  <Segment>{usersData[selectedUserDataIndex].phone}</Segment>
                  <Segment>{usersData[selectedUserDataIndex].email}</Segment>
                  <Segment>{usersData[selectedUserDataIndex].company}</Segment>
                </Segment.Group>
                <Button onClick={this.onHideUserCard}
                  floated='left'
                  icon='arrow left'
                  />
                <Button onClick={this.onShowEditUserForm}
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
    selectUserID: user.selectUser,
    usersData: user.users
	};
}

export default connect(mapStateToProps, { ...userActions })(UserCard);
