import { use, useState, useRef } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
// 父传子
function Son(props){
  console.log(props)
  return <div>
    这是子组件
    <div>{props.appName}</div>
  </div>
}
const App = () => {
  const appName = '父组件数据'
  return (
    <div className="app">
      <Son appName={appName}/>
    </div>
  )
}

export default App
