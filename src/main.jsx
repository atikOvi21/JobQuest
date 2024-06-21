import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//strictmode is a wrapper that checks for potential problems in the app
//it does not render any visible UI
//a wrapper is a component that renders its children
//render is a method that renders a React element into the DOM in the supplied container and returns a reference to the component 