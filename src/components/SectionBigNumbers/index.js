import React, { Component } from 'react';
import { object, number, func, any, string, array } from "prop-types";
import classNames from 'classnames';

import style from './index.less';

class SectionBigNumbers extends Component {

  static propTypes = {
    outerClass: string,
		index: number,
		headline: array,
		text: string,
	}

    render() {
      const {
        outerClass,
        index,
        headline,
        text, } = this.props;

      const wrapperStyle = classNames(style.bignumbers, outerClass);
      const textWrapperStyle = classNames(style.bignumbersText, {
          [style.bignumbersText0]: index == '0'
        },
        {
          [style.bignumbersText1]: index == '1'
        },
        {
          [style.bignumbersText2]: index == '2'
        },
      );

        return (
            <section className={wrapperStyle}>
              <h2 className={style.bignumbersHeadline}>
                <span className={style.bignumbersHeadlineHead}>
                  {headline[1]}
                </span>
                  {headline[0]}
                <span className={style.bignumbersHeadlineTail}>
                  {headline[2]}
                </span>
              </h2>
              <p className={textWrapperStyle}>{text}</p>
            </section>
    )
  }
}

export default SectionBigNumbers;
