import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import routes from './routes'
import 'reset-css'

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

