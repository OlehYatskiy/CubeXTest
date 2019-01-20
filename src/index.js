import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
// import firebase from "firebase";

import store from "./modules/store";

import 'semantic-ui-css/semantic.min.css';
import 'normalize.css';

var config = {
  // apiKey: "AIzaSyBdziX5Ym0Qh91fw-1zlbEnZaAgDTJhPME",
  // authDomain: "cubextest-b2d3e.firebaseapp.com",
  // databaseURL: "https://cubextest-b2d3e.firebaseio.com",
	// projectId: "cubextest-b2d3e",
  // storageBucket: "cubextest-b2d3e.appspot.com",
	// messagingSenderId: "151538328461"
};
// firebase.initializeApp(config);
// var database = firebase.database();

ReactDOM.render( <Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));

module.hot.accept();
