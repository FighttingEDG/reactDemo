import { useState } from 'react'
// 绑定事件
function handlerClick() {
  console.log('很快')
}
function handlerClick2(str) {
  console.log(str)
}
function handlerClick3(str, e) {
  console.log(str)
  console.log(e)
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* 不传参 */}
      <button onClick={handlerClick}>按钮</button>
      {/* 传参 */}
      <button onClick={() => handlerClick2('哈哈')}>按钮</button>
      {/* 事件对象 */}
      <button onClick={(e) => handlerClick3('哈哈', e)}>按钮</button>
    </div>
  )
}

export default App
