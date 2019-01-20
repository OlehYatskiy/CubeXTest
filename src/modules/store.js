import reduxThunk from "redux-thunk";
import { compose,
	createStore,
	combineReducers,
	applyMiddleware
} from "redux";
import user from "./user/user.reducer";
import customUser from "./user/customReducer";

const rootReducer = combineReducers({ user, customUser });

const store = createStore(rootReducer, compose(
	applyMiddleware(reduxThunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;
