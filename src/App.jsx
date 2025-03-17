import React, { Component, useState } from 'react'

class Son extends Component {
  render() {
    return <div>子组件
      <button onClick={() => this.props.sendFun('我是子组件中的数据')}>发送数据</button>
    </div>
  }
}
class Parent extends Component {
  sendFun = (sonMsg) => {
    console.log(sonMsg)
  }
  render() {
    return <div>
      父组件
      <Son sendFun={this.sendFun} />
    </div>
  }
}

const App = () => {
}

export default App