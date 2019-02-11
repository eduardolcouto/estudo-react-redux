import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import {Provider} from 'react-redux'
import  logger from 'redux-logger'
import thunk from 'redux-thunk'

import Counter from './component/Counter'
import reducers from './reducers/';
import AnotherCounter from './component/AnotherCounter';
import MyIp from './component/MyIp'

let store = createStore (
                reducers,
                applyMiddleware(thunk, logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <hr />
          <AnotherCounter />
          <hr />
          <MyIp />
        </div>
      </Provider>
    )
  }
}

export default App
