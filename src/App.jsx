import React, { useState, useRef } from 'react'
import CustomInput from './component/son.jsx'
const App = () => {
  // 供接收的ref
  const inputRef = useRef(null)
  // 父组件的state
  const [value, setValue] = useState('')
  function handleClick (){
    inputRef.current.focus();
  }
  // 父组件的方法
  return (
    <div className="app">
      <input type="text" ref={inputRef} placeholder='请输入内容' />
      <button onClick={() => handleClick()}>聚焦</button>
    </div>
  )
}

export default App