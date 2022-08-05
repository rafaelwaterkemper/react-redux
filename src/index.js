import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/stylesheet.css'
import { BrowserRouter } from "react-router-dom"

import { createStore, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { Provider } from "react-redux"
import rootReducer from './redux/reducer'
import App from './components/App'

//Take a look on it based on documentation
// const composedEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>)