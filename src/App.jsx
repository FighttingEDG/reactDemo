import React, { Component } from 'react'

class Counter extends Component {
  // 定义状态变量
  state = { count: 0 }
  // 事件回调
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // ui模板(jsx)
  render(){
    return <button onClick={this.clickHandler}>{this.state.count}</button>
  }
}

const App = () => {
  return (
    <div className="app">
      <Counter />
    </div>
  )
}

export default App