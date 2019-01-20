import { FETCH_USERS } from "./types";
import _ from "lodash";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return _.map(action.payload, (value, key) => {
        return {
          id: key,
          ...value
        }
      });
    default:
      return state;
  }
};
