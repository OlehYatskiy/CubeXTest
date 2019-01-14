import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import ContactElement from './ContactElement';
import ru from '../../data/ru';

import style from './index.less';
import addressMap from '../../img/background/map.png';
import svg from '../../img/background/contentHead.svg';

class Footer extends Component {

    render() {
      const { phoneSections, emailSections, time, address, dev } = ru.footer;

      const contactsWrapper = classNames(style.footerContacts, style.footerFloated);
      const phonesSectionWrapper = classNames(style.footerContactsPhone, style.footerFloated);
      const emailSectionWrapper = classNames(style.footerContactsEmail, style.footerFloated);
      const timeSectionWrapper = classNames(style.footerContacts, style.footerFloated);

        return (
            <footer className={style.footer}>
              <div className={contactsWrapper}>
                <section className={phonesSectionWrapper}>
                  {
                    phoneSections.map((el, index) => {
                      return <ContactElement
                         outerClass={style.footerContactsMarginedBottom}
                         key={index}
                         index={index}
                         text={el.phone}
                         sub={el.sub}
                         />
                    })
                  }
                </section>
                <section className={emailSectionWrapper}>
                  {
                    emailSections.map((el, index) => {
                      return <ContactElement
                        outerClass={style.footerContactsMarginedBottom}
                        key={index}
                        index={index}
                        text={el.email}
                        sub={el.sub}
                        />
                    })
                  }
                </section>
                <ContactElement outerClass={style.footerContactsAddress} text={address}/>
              </div>
              <section className={timeSectionWrapper}>
                <ContactElement text={time} outerClass={style.footerTime} />
                <img className={style.footerTimeImg} src={addressMap} alt={'map'} />
              </section>
              <section className={style.footerDev}>
                <h3>
                  {dev.info}
                  <span className={style.footerDevStudio}>
                    {dev.studio}
                  </span>
                </h3>
              </section>
              <div
                style={{
                  height: '200px',
                  backgroundImage: 'url(' + svg + ')',
                }}>
              </div>
            </footer>
    )
  }
}

export default Footer;
