import { useState } from 'react'
function useToggle() {
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)
  // 所谓封装hook，就是把用到的变量，方法返回出去
  return { value, toggle }
}
const App = () => {
  // 有返回，可以解构
  const { value, toggle } = useToggle()

  return (
    <div className="app">
      {value && <div>app</div>}
      <button onClick={toggle}>切换</button>
    </div>
  )
}
export default App
