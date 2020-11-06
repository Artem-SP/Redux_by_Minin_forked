import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "./styles.css";
import { rootReducer } from "./redux/rootReducer";
import {
  increment,
  decrement,
  asyncIncrement,
  cangeTheme
} from "./redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("acync");
const themeBtn = document.getElementById("theme");

function logger(state) {
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
}
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk, logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(cangeTheme(newTheme));
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
  [addBtn, subBtn, themeBtn, asyncBtn].forEach((btn) => {
    btn.disabled = state.theme.disabled;
  });
});

store.dispatch({ type: "INIT_APPLICATION" });
