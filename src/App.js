import React, { Component } from 'react'

import Header from './components/header/Header'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
        


      </div>
    )
  }
}

