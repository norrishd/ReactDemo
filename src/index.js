import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// Prebuilt by create-react-app. Don't know what it does, but needed to compile
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
