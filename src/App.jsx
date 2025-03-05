import { useState } from 'react'
function App() {
  // useState
  // useState(1)返回的是一个数组
  const [num, setNum] = useState(1)
  function subtract() {
    setNum(num - 1)
  }
  function add() {
    setNum(num + 1)
  }
  return (
    <div>
      {num}
      <button onClick={subtract}>减</button>
      <button onClick={add}>加</button>
    </div>
  )
}

export default App
