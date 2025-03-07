import { useState, useEffect } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
const URL = 'http://geek.itheima.net/v1_0/channels'
const App = () => {
  const [list, setList] = useState([])
  // 副作用函数
  // 空数组，副作用函数只执行一次
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL)
      const jsonData = await res.json()
      setList(jsonData.data.channels)
    }
    getList();
  }, [])
  return (
    <div className="app">
      <ul>
        {list.map(item => <li key={item.id}>
          {item.name}
        </li>)}
      </ul>
    </div>
  )
}
export default App
