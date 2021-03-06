import React, { Component, Fragment } from 'react';
import { string, array, func, any } from "prop-types";
import { connect } from "react-redux";

import EditUserForm from './EditUserForm';
import * as userActions from "../../../modules/user/user.actions";

import { Card, Image, Segment, Button, Input } from 'semantic-ui-react'
import defaultAv from '../../../img/default_av.png';


class UserCard extends Component {

  state = {
    showEditUserForm: this.props.selectUserID === null ? true : false
  }

  static propTypes = {
    selectUserID: any,
    usersData: array,
    unselectUser: func,
    toggleUserCard: func
	}

  componentWillUnmount() {
    this.props.unselectUser();
  }

  onShowEditUserForm = () => {
    if (this.props.selectUserID === null) {this.onHideUserCard()};
    this.setState({
      showEditUserForm: !this.state.showEditUserForm
    });
  }

  onHideUserCard = () => {
    this.props.toggleUserCard(false);
  }

    render() {
      const { selectUserID, usersData } = this.props;
      const { showEditUserForm } = this.state;

      const selectedUserDataIndex = usersData.findIndex((user) => {
  			return user.id === selectUserID;
  		});
      const avatar = selectedUserDataIndex === -1 ?
       defaultAv : usersData[selectedUserDataIndex].avatarUrl;

      return (
        <Card centered>
          <Image fluid src={avatar} />
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
              <EditUserForm renderEditUserForm={this.onShowEditUserForm}
                currentUser={usersData[selectedUserDataIndex]}
                 />
            }
          </Card.Content>
        </Card>
      )}
}

function mapStateToProps({ user, customUser }) {
	return {
    selectUserID: user.selectUser,
    usersData: customUser.users
	};
}

export default connect(mapStateToProps, { ...userActions })(UserCard);
