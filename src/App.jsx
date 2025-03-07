import { use, useState, useRef } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
// 子传父
function Son({ onSendMes }) {
  const sonData = '子组件的数据'
  return <div>
    这是子组件
    {sonData}
    <button onClick={() => onSendMes(sonData)}>发送</button>
    {/* 内容来自于父组件 */}
  </div>
}
const App = () => {
  const [str,setStr] = useState(null)
  const getMes = (mes) => {
    setStr(mes)
    console.log(mes)
  }
  return (
    <div className="app">
      {/* 子组件的数据 */}
      {str}
      <br />
      <Son onSendMes={getMes}>
      </Son>
    </div>
  )
}

export default App
