import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

// Element we want to append app to
const rootDiv = document.querySelector('#root')

// takes some HTML (JSX), and puts it somewhere
ReactDOM.render(<App/>, rootDiv)