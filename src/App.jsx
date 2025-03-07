import { use, useState, useRef } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
// 兄弟组件通信
function A({ sendStr }) {
  const AName = 'a兄弟数据'
  return <div>
    A兄弟组件
    <button onClick={() => sendStr(AName)}>A按钮</button>
  </div>
}
function B({AStr}) {
  return <div>
    B兄弟组件
    <br />
    {/* A组件字符串 */}
    {AStr}
    </div>
}
const App = () => {
  const [AStr, setAStr] = useState(null)
  const sendStr = (str) => {
    setAStr(str)
  }
  return (
    <div className="app">
      <A sendStr={sendStr} />
      <B AStr={AStr}/>
    </div>
  )
}

export default App
