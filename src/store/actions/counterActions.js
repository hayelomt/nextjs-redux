import { INCREMENT_COUNT, DECREMENT_COUNT, DYNAMIC } from "./types"

export const incrementCount = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNT
  })
}

export const decrementCount = () => dispatch => {
  dispatch({
    type: DECREMENT_COUNT
  })
}

export const addDynamic = (amount) => dispatch => {
  dispatch({
    type: DYNAMIC,
    payload: amount
  })
}