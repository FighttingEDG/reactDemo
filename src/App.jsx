import { useState } from 'react'
// 情况一：要在组件顶层使用
const [value, setValue] = useState('')
const App = () => {
  // 情况二：不能在id，for或嵌套在函数中使用
  
  if (Math.random() > 0.5) {
    const [value, setValue] = useState('')
  }
  return (
    <div className="app">
      app组件
    </div>
  )
}
export default App
