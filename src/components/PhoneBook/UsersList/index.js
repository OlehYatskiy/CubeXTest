import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, array, func } from "prop-types";
import {
  List,
  Image,
  Container,
  Input,
  Button
} from 'semantic-ui-react';

import * as userActions from "../../../modules/user/user.actions";

import classNames from "classnames";

// import classes from './index.less';

class UsersList extends Component {

  static propTypes = {
    usersData: array,
    getAllUsers: func
	}

  componentDidMount() {
    this.props.getAllUsers();
    console.log(this.props);
  }

    render() {
      const { usersData } = this.props;

        return (
          <Container>
            <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...' >
              {/*Search input value*/}
            </Input>
            <List selection divided verticalAlign='middle'>
              {
                usersData.map((user) => {
                  return <List.Item>
                    <Image avatar src={user.photo} />
                    <List.Content>
                      <List.Header>{`${user.firstName} ${user.lastName}`}</List.Header>
                    </List.Content>
                    <Button floated='right' icon='delete'/>
                  </List.Item>
                })
              }
            </List>
          </Container>
    )
  }
}

function mapStateToProps({ user }) {
	return {
		usersData: user.users
	};
}

export default connect(mapStateToProps, { ...userActions })(UsersList);
