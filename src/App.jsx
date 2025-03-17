import React, { Component, useState } from 'react'

class Son extends Component {
  render() {
    return <div>子组件<br />{this.props.msg}</div>
  }
}
class Parent extends Component {
  state = {
    msg: '父的数据'
  }
  render() {
    return <div>
      父组件，下面是子组件
      <br />
      <Son msg={this.state.msg} />
    </div>
  }
}

const App = () => {
  return (
    <div className="app">
      <Parent />
    </div>
  )
}

export default App