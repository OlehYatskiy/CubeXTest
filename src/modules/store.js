// import createSagaMiddleware from 'redux-saga';
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import user from "./user/user.reducer";

// import { watchUser } from "./user/user.saga";

// const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ user });

/*const store = createStore(rootReducer, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))*/

const store = createStore(rootReducer, compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));
// sagaMiddleware.run(watchUser);


export default store;
