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
    {props.jsx}
  </div>
}
const App = () => {
  const appName = '父组件数据'
  return (
    <div className="app">
      {/* 可传递最复杂的jsx */}
      <Son appName={appName} jsx={<span>这是个span标签</span>}/>
    </div>
  )
}

export default App
