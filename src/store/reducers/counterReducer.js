import { INCREMENT_COUNT, DECREMENT_COUNT, DYNAMIC } from "../actions/types";

const initialState = {
  counter: 0
}

export default function counterReducer(state=initialState, action) {
  switch(action.type) {
    case INCREMENT_COUNT:
      return {
        counter: state.counter + 1
      }
    case DECREMENT_COUNT:
      return {
        counter: state.counter - 1
      }
    case DYNAMIC:
      return {
        count: state.counter + action.payload
      }
    default:
      return state;
  }
}
