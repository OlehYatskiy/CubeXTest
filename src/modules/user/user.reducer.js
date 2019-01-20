import { createReducer } from "redux-act";

import * as actions from "./user.actions";


const initialState = {
	selectUser: null,
};

const reducer = {
	[actions.selectUser]: (state, selectUser) => ({
		...state,
		selectUser
	}),
	[actions.unselectUser]: (state) => ({
		...state,
		selectUser: null
	})
};


export default createReducer(reducer, initialState);
