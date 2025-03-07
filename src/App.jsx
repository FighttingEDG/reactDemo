import { useEffect, useState } from 'react'
function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器')
    }, 1000)
    // 清除副作用
    return () => {
      console.log('清除副作用')
      clearInterval(timer)
    }
  }, [])
  return <div>这是子组件</div>
}
const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="app">
      {/* 条件渲染，false的时候直接卸载组件 */}
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  )
}
export default App
