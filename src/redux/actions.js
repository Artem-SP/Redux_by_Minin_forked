import {
  INCREMENT,
  DECREMENT,
  CHAGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS
} from "./types";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS
  };
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  };
}

export function cangeTheme(newTheme) {
  return {
    type: CHAGE_THEME,
    payload: newTheme
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch(increment());
      dispatch(enableButtons());
    }, 1500);
  };
}
