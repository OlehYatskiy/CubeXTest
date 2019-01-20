import { createAction } from "redux-act";
import { usersRef } from "../config/firebase";
import { FETCH_USERS } from "./types";

// initialize

export const setAllUser = createAction("set all user");
export const selectUser = createAction("select user");
export const unselectUser = createAction("unselect user");
export const addUserProperties = createAction('add user properties');
export const addNewUserStatus = createAction('add new user status');

//My actions
export const getAllUsers = createAction('get all user');

export const addNewUser = newUser => async dispatch => {
  usersRef.push().set(newUser);
}
export const updateUser = (currentUser, id) => async dispatch => {
  usersRef.child(id).update(currentUser);
}
export const removeUser = removeUserId => async dispatch => {
  usersRef.child(removeUserId).remove();
};
export const fetchUsers = () => async dispatch => {
  usersRef.on("value", snapshot => {
    dispatch({
      type: FETCH_USERS,
      payload: snapshot.val()
    });
  });
};
