import { FETCH_USERS, ADDING_USERS, EDIT_USERS } from "./types";
import _ from "lodash";

const customReducer = (state = {
                        users: [],
                        usersSendStatus: ""
                      }, action) => {

  const { payload, type } = action;
    switch (type) {
    case FETCH_USERS: {
      return { ...state,
        users: _.map(payload, (value, key) => {
        return {
          id: key,
          ...value
        }
      })}
    }
    case ADDING_USERS: {
      return {...state,
        usersSendStatus: payload
      }
    }
    case EDIT_USERS: {
      return {...state,
        usersSendStatus: payload
      }
    }
    default:
      return state;
  }
}

export default customReducer;
