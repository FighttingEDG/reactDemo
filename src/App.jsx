import React, { Component, useState } from 'react'

class Counter extends Component {
  // 定义状态变量
  state = { count: 0 }
  componentDidMount() {
    console.log('组件挂载完成')
    this.timer = setInterval(() => {
      console.log('定时器')
    }, 1000)
  }
  componentWillUnmount() {
    console.log('组件即将卸载')
    // 清除定时器
    clearInterval(this.timer)
  }
  // 事件回调
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // ui模板(jsx)
  render() {
    return <button onClick={this.clickHandler}>{this.state.count}</button>
  }
}

const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="app">
      {show && <Counter />}
      <button onClick={() => setShow(false)}>卸载</button>
    </div>
  )
}

export default App