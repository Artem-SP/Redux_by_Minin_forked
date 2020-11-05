import { createStore, applyMiddleware } from "redux";
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
const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger));

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
});

store.dispatch({ type: "INIT_APPLICATION" });

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(cangeTheme(newTheme));
});
