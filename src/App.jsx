import { useState } from 'react'
// 绑定事件
function handlerClick() {
  console.log('很快')
}
function handlerClick2(str) {
  console.log(str)
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    {/* 不传参 */}
      <button onClick={handlerClick}>按钮</button>
    {/* 传参 */}
      <button onClick={()=>handlerClick2('哈哈')}>按钮</button>
    </div>
  )
}

export default App
