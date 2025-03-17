import React, { useState, memo, useCallback } from 'react'
const Input = memo(function Input({ onChange }) {
  console.log('子组件更新了')
  return (
    <div>
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  )
})
const App = () => {

  // 子组件不会更新
  const changeHandler = useCallback((value) =>
    console.log(value)
    , [])
  // 子组件会更新
  // const changeHandler = () => console.log(2)
  // 触发父组件重新渲染的函数
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <Input onChange={changeHandler} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App