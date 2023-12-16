import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { mystore } from './components/Store'
import Count from './components/count'
class App extends Component {
  render() {
    return (
      <Provider store={mystore}>
        <Count/> 
      </Provider>
    )
  }
}

export default App
