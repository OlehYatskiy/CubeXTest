import React, { Component } from 'react';
import BgSlider from './BgSlider';

import classNames from 'classnames';

import style from './index.less';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

import logoMain from '../../img/logo/13-layers05x.png';

class Header extends Component {

  state = {
		activeLang: 'Ру',
	}

  onLangSwitchClick = (event) => {
    this.setState({
      activeLang: event.target.innerText,
    })
  }

  renderLangItem = (lang) => {
    const classWrapper = classNames(style.headerLangTrigger, {
      [style.selected]: lang == this.state.activeLang
    });
    return(
      <li key={lang} onClick={this.onLangSwitchClick} className={classWrapper}>{lang}</li>
    );
  }

  render() {
    const langs = ['Ру','Ук','En'];

    return (
          <header className={style.header}>
              <div className={style.headerSlider}>
                <BgSlider />
              </div>
              <img className={style.headerLogo} src={logoMain} alt='Limas_logo'/>
              <h2 className={style.headerCompanyName}>Промышленная компания Лимас</h2>
              <h6 className={style.headerCompanyGoal}>Наша цель - заслужить доверие тех, для кого мы работем.</h6>
              <button className={style.headerButton}>ПРОДУКЦИЯ</button>
              <ul className={style.headerLang}>
                {
                  langs.map((lang) => {
                    return this.renderLangItem(lang);
                  })
                }
              </ul>
          </header>
      )
  }
}

export default Header;
