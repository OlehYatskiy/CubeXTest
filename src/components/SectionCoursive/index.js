import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import style from './index.less';

class SectionCursive extends Component {

  static propTypes = {
    outerClass: string,
		text: string,
	}

    render() {
      const { text, outerClass } = this.props;
      const classWrapper = classNames(style.sectionCursive, outerClass);
      
        return (
            <section className={classWrapper}>
                {text}
            </section>
    )
  }
}

export default SectionCursive;
