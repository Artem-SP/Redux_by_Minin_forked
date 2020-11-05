import { INCREMENT, DECREMENT, CHAGE_THEME } from "./types";

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

export function cangeTheme(newTheme) {
  return {
    type: CHAGE_THEME,
    payload: newTheme
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment());
    }, 1500);
  };
}
