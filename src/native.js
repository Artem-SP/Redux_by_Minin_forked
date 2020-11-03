import {createStore} from './createStore'
import './styles.css'
import {rootReducer} from './redux/rootReducer'

const counter = document.getElementById( 'counter' )
const addBtn = document.getElementById( 'add' )
const subBtn = document.getElementById( 'sub' )
const asyncBtn = document.getElementById( 'acync' )
const themeBtn = document.getElementById( 'theme' )

const store = createStore(rootReducer, 0)
})

addBtn.addEventListener('click', () => {
  
})

subBtn.addEventListener('click', () => {
 
})

asyncBtn.addEventListener('click', () => {
  setTimeout( () => {

})

themeBtn.addEventListener('click', () => {
//  document.body.classList.toggle ('dark')
})
