import React, { Component } from 'react';
import classNames from "classnames";

import SectionWithHeadline from '../SectionWithHeadline';
import SectionCoursive from '../SectionCoursive';
import SectionBigNumbers from '../SectionBigNumbers';
import TitleH3 from '../TitleH3';
import ImgWrapper from './ImgWrapper';

import ru from '../../data/ru';

import style from './index.less';
import logo from '../../img/logo/logo_white.png';

const letterImgs = require.context('../../img/letters', true, /\.jpg$/);
const partnerImgs = require.context('../../img/partners', false, /\.(jpg|png)$/);


class Content extends Component {

  render() {
    const {
      worthSections,
      numberSections,
      meritsSections,
      meritsHeader,
      lettersSummary,
      partnersTitle,
    } = ru.worth;

    const letterKeys = letterImgs.keys();
    const partnerKeys = partnerImgs.keys();
    const letters = letterKeys.map(key => letterImgs(key));
    const partners = partnerKeys.map(key => partnerImgs(key));

    const factsSectionCoursiveClass = classNames(style.contentWrapperFacts, [style.summaryPaddingTop]);

    return (
      <div className={style.content}>
        <img className={style.contentLogo} src={logo} alt='Company_logo'/>
        <h1 className={style.contentHeadline}>ЦЕННОСТИ КОМПАНИИ</h1>
        <div className={style.contentWrapper}>
          <SectionCoursive
            outerClass={factsSectionCoursiveClass}
            text={'Мы ценим крепкие и долгосрочные отношения с клиентами и партнерами, поэтому придерживаемся четких принципов, которые сформулировали за годы работы.'}
            />
            {[
                worthSections.map((el, index) => {
                  return <SectionWithHeadline
                    key={index}
                    index={index}
                    outerClass={style.contentWrapperFacts}
                    bottomargin={
                      index+1 === worthSections.length ? style.contentWrapperFactsBottomargin: null
                    }
                    headline={el.headline}
                    text={el.text}
                    />
                }),
                 numberSections.map((el, index) => {
                  return <SectionBigNumbers
                    key={index}
                    index={index}
                    outerClass={style.contentWrapperNumbers}
                    headline={el.headline}
                    text={el.text}
                    />
                }),
              ]}
        </div>
        <div className={style.contentMerits}>
          <h6 className={style.contentMeritsHeader}>{meritsHeader}</h6>
          {
            meritsSections.map((el, index) => {
              return <SectionWithHeadline
                key={index}
                index={index + 10}
                outerClass={style.contentMeritsSections}
                headline={el.headline}
                text={el.text}
                />
            })
          }
        </div>
        <div className={style.contentLetters}>
          <SectionCoursive outerClass={style.contentLettersSummary} text={lettersSummary} />
          <div className={style.contentLettersWrapper}>
            {
              letters.map((el, index) => {
                return <img
                  key={index}
                  className={style.contentLettersWrapperImg}
                  src={el}
                  alt={`${'letter'}${index}`}
                  />
              })
            }
          </div>
        </div>
        <div className={style.contentPartners}>
          <TitleH3 text={partnersTitle} />
          <div className={style.contentPartnersWrapper}>
            {
              partners.map((el, index) => {
                return <ImgWrapper
                  key={index}
                  index={index}
                  src={el}
                  alt={`${'partner'}${index}`}
                  />
              })
            }
          </div>
        </div>
        <div className={style.contentBackgrtri}></div>
      </div>
    )
  }
}

export default Content;
