import { createAction } from "redux-act";
import { usersRef } from "../config/firebase";
import { FETCH_USERS, ADDING_USERS, EDIT_USERS, FETCH_USERS_STATUS } from "./types";

// initialize
export const selectUser = createAction("select user");
export const unselectUser = createAction("unselect user");

export const addNewUser = newUser => async dispatch => {
  usersRef.push().set(newUser, (error) => {

    dispatch({
      type: ADDING_USERS,
      payload: 'Sending'
    });
    if (error) {
      console.log(error);
      dispatch({
        type: ADDING_USERS,
        payload: 'Failed'
      });
    } else {
      dispatch({
        type: ADDING_USERS,
        payload: 'Success'
      });
    }
  });
}
export const updateUser = (currentUser, id) => async dispatch => {
  usersRef.child(id).update(currentUser, (error) => {

    dispatch({
      type: EDIT_USERS,
      payload: 'Sending'
    });
    if (error) {
      console.log(error);
      dispatch({
        type: EDIT_USERS,
        payload: 'Failed'
      });
    } else {
      dispatch({
        type: EDIT_USERS,
        payload: 'Success'
      });
    }
  });
}
export const removeUser = removeUserId => async dispatch => {
  usersRef.child(removeUserId).remove();
};
export const fetchUsers = () => async dispatch => {
  dispatch({
    type: FETCH_USERS_STATUS,
    payload: "pending"
  });
  usersRef.on("value", snapshot => {
    dispatch({
      type: FETCH_USERS,
      payload: snapshot.val()
    });
  });
};
