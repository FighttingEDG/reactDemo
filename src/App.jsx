import { useState, useEffect } from 'react'
// 不同依赖项
const App = () => {
  // 1.没有依赖项   初始+状态更新
  // 2.空数组       初始
  useEffect(() => {
    console.log('空数组依赖项执行了')
  },[])
  const [count, setCount] = useState(0)
  // 3.有依赖项      初始+依赖项更新+状态更新
  return (
    <div className="app">
      <div>空数组依赖项{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
export default App
