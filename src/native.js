import {createStore} from './createStore'
import './styles.css'

const counter = document.getElementById( 'counter' )
const addBtn = document.getElementById( 'add' )
const subBtn = document.getElementById( 'sub' )
const asyncBtn = document.getElementById( 'acync' )
const themeBtn = document.getElementById( 'theme' )

const store = createStore()

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
