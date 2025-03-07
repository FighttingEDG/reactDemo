import { useState, useEffect } from 'react'
// 不同依赖项
const App = () => {
  // 1.没有依赖项   初始+状态更新
  useEffect(() => {
    console.log('没有依依赖项执行了')
  })
  const [count, setCount] = useState(0)
  // 2.空数组       初始
  // 3.有依赖项      初始+依赖项更新+状态更新
  return (
    <div className="app">
      <div>没有依赖项{count}</div>
      {/* 状态更新就会触发 */}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
export default App
