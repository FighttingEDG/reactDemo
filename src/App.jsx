import { useState, createContext, useContext } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
// app传数据给B
// App组件套A，A套B组件
const mesCtx = createContext();
function A() {
  return <div>
    这是A组件
    {/* B组件 */}
    <B />
  </div>
}
function B() {
  // 使用对应的上下文
  const ctxMes = useContext(mesCtx)
  return <div>
    这是B组件
    <br />
    {ctxMes}
  </div>
}
const App = () => {
  const mes = '顶层组件数据'
  return (
    <div className="app">
      <mesCtx.Provider value={mes}>
        <A />
      </mesCtx.Provider>
    </div>
  )
}
export default App
