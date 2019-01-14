import React, { Component, Fragment } from 'react';
import { string, number } from "prop-types";
import classNames from "classnames";

import style from './index.less';

class ContactElement extends Component {

  static propTypes = {
    outerClass: string,
    index: number,
		text: string,
    sub: string,
	}

    render() {
      const { outerIcoUrl, outerClass, text, sub } = this.props;
      const classWrapper = classNames(style.block, outerClass);
      const classIcoWrapper = classNames(style.ico, outerIcoUrl);

        return (
          <Fragment>
            <div className={classWrapper}>
              <div className={classIcoWrapper}></div>
                {text}
              <div className={style.blockSub}>
                {sub}
              </div>
            </div>
          </Fragment>
    )
  }
}

export default ContactElement;
