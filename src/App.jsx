import { useState } from 'react'
const flag = true
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {!flag && '是否显示'}
      <div>
        {flag ? '已登陆' : '未登录'}
      </div>
    </div>
  )
}

export default App
