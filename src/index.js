import React from 'react'
import ReactDOM from 'react-dom'

// Element we want to append app to
const rootDiv = document.querySelector('#root')

// takes some HTML (JSX), and puts it somewhere
reactDOM.render(<h1>Boom! Blog!</h1>, rootDiv)