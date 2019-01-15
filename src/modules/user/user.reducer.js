import { createReducer } from "redux-act";

import * as actions from "./user.actions";


const initialState = {
	users:[],
	usersGetStatus: "",
	selectUser: null,
	firstName: "",
	lastName: "",
	avatarUrl: "",
};

const reducer = {
	[actions.getAllUserSaga]: (state) => ({
		...state,
		usersGetStatus: "pending"
	}),
	[actions.setAllUser]: (state, usersData) => ({
		...state,
		usersGetStatus: "success",
		users: usersData
	}),
	[actions.selectUser]: (state, selectUser) => ({
		...state,
		selectUser
	}),
	[actions.unselectUser]: (state) => ({
		...state,
		selectUser: null
	}),
	[actions.addUserProperties]: (state, target) => ({
		...state,
		[target.name]: target.value
	}),
	[actions.addNewUser]: (state) => ({
		...state,
		usersSendStatus: "sending"
	}),
	[actions.addNewUserStatus]: (state) => ({
		...state,
		usersSendStatus: "success"
	}),
	[actions.getAllUsers]: (state) => ({
		...state,
		users: [
			{
				firstName: 'Helen',
				lastName: 'Palmer',
				phone: '80689063846',
				email: 'helen@mail.ru',
				company: 'AllSafe',
				photo: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg'
			},
			{
				firstName: 'Piter',
				lastName: 'Palmer',
				phone: '80689064446',
				email: 'piter@mail.ru',
				company: 'AllSafe',
				photo: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg'
			},
			{
				firstName: 'Eliot',
				lastName: 'Shtruz',
				phone: '80689063846',
				email: 'shtruz@mail.ru',
				company: 'BuyMore',
				photo: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
			},
		]
	})
};


export default createReducer(reducer, initialState);
