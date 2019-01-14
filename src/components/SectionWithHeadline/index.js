import React, { Component } from 'react';
import { object, number, func, any, string } from "prop-types";
import classNames from 'classnames';

import style from './index.less';

class SectionWithHeadline extends Component {

  static propTypes = {
    outerClass: string,
    bottomargin: string,
		index: number,
		headline: string,
		text: string,
	}

    render() {
      const { outerClass, bottomargin, index, headline, text } = this.props;
      const wrapperStyle = classNames(style.sectwithdhead, outerClass, bottomargin);
      const iconWrapperStyle = classNames({
          [style.sectwithdheadIcon0]: index == '0'
        },
        {
          [style.sectwithdheadIcon1]: index == '1'
        },
        {
          [style.sectwithdheadIcon2]: index == '2'
        },
        {
          [style.sectwithdheadIcon3]: index == '3'
        },
        {
          [style.sectwithdheadIcon4]: index == '4'
        },
      );

        return (
            <section className={wrapperStyle}>
              <div className={iconWrapperStyle}></div>
              <h4 className={style.sectwithdheadHeadline}>{headline}</h4>
              <p className={style.sectwithdheadText}>{text}</p>
            </section>
    )
  }
}

export default SectionWithHeadline;
