import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import { Card, Icon, Image } from 'semantic-ui-react'

// import classes from './index.less';

class UserCard extends Component {

  static propTypes = {

	}

    render() {

      return (
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
          </Card.Content>
        </Card>
      )}
}

export default UserCard;
