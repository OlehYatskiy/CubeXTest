import { FETCH_USERS, ADDING_USERS, EDIT_USERS, FETCH_USERS_STATUS } from "./types";
import _ from "lodash";

const customReducer = (state = {
                        users: [],
                        usersSendStatus: "",
                        usersFetchSatus: ""
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
        }),
        fetchUsersStatus: "success"
      }
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
    case FETCH_USERS_STATUS: {
      return {...state,
        fetchUsersStatus: payload
      }
    }
    default:
      return state;
  }
}

export default customReducer;
