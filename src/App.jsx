import { useState } from 'react'
// 组件，一定要首字母大写
function Component1(){
  return <button onClick={()=>{console.log('哈哈')}}>组件按钮</button>
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* 自闭和 */}
      <Component1 />
      {/* 成对标签 */}
      <Component1></Component1>
    </div>
  )
}

export default App
