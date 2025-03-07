import { use, useState, useRef } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
// 子传父
function Son(props) {
  const sonData = '子组件的数据'
  return <div>
    这是子组件
    <button onClick={()=>props.sendMes(sonData)}>发送</button>
    {/* 内容来自于父组件 */}
  </div>
}
const App = () => {
  const getMes = (mes) => {
    console.log(mes)
  }
  return (
    <div className="app">
      <Son sendMes={getMes}>
      </Son>
    </div>
  )
}

export default App
