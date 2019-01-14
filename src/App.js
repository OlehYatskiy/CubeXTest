import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

import PhoneBook from './components/PhoneBook';

import classes from './index.less';

class App extends Component {

    render() {
        return (
            <div >
              <PhoneBook />
            </div>
    )
  }
}

export default App;
