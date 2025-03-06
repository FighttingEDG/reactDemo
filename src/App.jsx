import { use, useState,useRef } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import classNames from 'classnames'

const App = () => {
  const inputRef = useRef(null)
  //  渲染完才可用
const handlerClick = ()=>{
  console.log(inputRef.current)
  console.log(inputRef.current.value)
}
  return (
    <div className="app">
      <input type="text" ref={inputRef} />
      <button onClick={handlerClick}>按钮</button>
    </div>
  )
}

export default App
