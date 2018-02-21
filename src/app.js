import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { create } from 'dva-core'
import { HomeScreen } from './screens'
import * as models from './models'

const dva = ({ models, ...options }) => {
  const app = create(options)
  Object.values(models).forEach(app.model)
  app.start()
  return app
}

const { _store: store } = dva({ models })

export class App extends Component {
  render = () => (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

export default App
