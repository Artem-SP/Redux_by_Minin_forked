import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import './styles.css'
import {rootReducer} from './redux/rootReducer'


const counter = document.getElementById( 'counter' )
const addBtn = document.getElementById( 'add' )
const subBtn = document.getElementById( 'sub' )
const asyncBtn = document.getElementById( 'acync' )
const themeBtn = document.getElementById( 'theme' )


function logger(state) {
  return function(next){
    return function(action)  {
      return next(action)
    }
}

const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger))



addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  setTimeout( () => {

})

store.subscribe( () => {
  const state = store.getState()
  counter.textContent = state.counter
})

store.dispatch({type: 'INIT_APPLICATION'})


themeBtn.addEventListener('click', () => {
//  document.body.classList.toggle ('dark')
})
