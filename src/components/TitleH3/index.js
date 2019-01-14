import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import style from './index.less';

class TitleH3 extends Component {

  static propTypes = {
    outerClass: string,
		text: string,
	}

    render() {
      const { text, outerClass } = this.props;
      const classWrapper = classNames(style.titleh3, outerClass);
        return (
            <h3 className={classWrapper}>
                {text}
            </h3>
    )
  }
}

export default TitleH3;
