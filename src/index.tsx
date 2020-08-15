import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const content = (
  <App id="demo">
    <div>Demo App</div>
  </App>
);

ReactDOM.render(content, document.querySelector('#root'))
