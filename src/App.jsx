import { useState } from 'react'
const message = "消息"
function getName() {
  return 'xiaobai';
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      this is app
      {/* 引号传递 */}
      <div>
        {message}
      </div>
      <div>
        {'字符串传递'}
      </div>
      {/* 函数和方法调用 */}
      <div>
        {getName()}
      </div>
      {/* js对象 */}
      <div>
        {new Date().getDate()}
      </div>
      {/* 识别表达式的语法 */}
      <div style={{ color: 'red' }}>
        带颜色文字
      </div>
    </div>
  )
}

export default App
