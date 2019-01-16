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
	[actions.myAddNewUser]: (state, user) => ({
		...state,
		users: [...state.users, user]
	}),
	[actions.getAllUsers]: (state) => ({
		...state,
		users: [
			{
				id:'121',
				firstName: 'Helen',
				lastName: 'Palmer',
				phone: '80689063846',
				email: 'helen@mail.ru',
				company: 'AllSafe',
				avatarUrl: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg'
			},
			{
				id:'567',
				firstName: 'Piter',
				lastName: 'Palmer',
				phone: '80689064446',
				email: 'piter@mail.ru',
				company: 'AllSafe',
				avatarUrl: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg'
			},
			{
				id:'290',
				firstName: 'Eliot',
				lastName: 'Shtruz',
				phone: '806890634446',
				email: 'shtruz@mail.ru',
				company: 'BuyMore',
				avatarUrl: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
			},
		]
	})
};


export default createReducer(reducer, initialState);
