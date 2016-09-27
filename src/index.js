import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore } from './store'

const store = createStore(todosReducer)

function todosReducer (state= [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_MESSAGE':
        return state.filter( function(element){
            if(element !== action.payload ){
             return element
            }
        })
    default:
      return state;
  }
}

function render() {
  ReactDOM.render(<App store={ store } />, document.getElementById('container'));
}

render();

store.subscribe(render);